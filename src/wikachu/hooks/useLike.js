import { useState, useEffect, useReducer, useContext } from 'react'
import { likeReducer } from '../context/likeReducer'
import { checkFavourite, createFavourite, deleteFavourite, manageLike } from '../../api/backend/favourite/'
import { AuthContext } from '../../auth/context';
import { types } from '../types/types';
import { useNavigate } from 'react-router-dom';

const init = async (user, obj, token) => {
    const { liked } = await checkFavourite(user._id, obj, token);
    return liked;
}

export const useLike = (obj, type = 'Pokemon') => {

    const { logged, getUser, getToken } = useContext(AuthContext)

    const navigate = useNavigate()


    const [like, dispatch] = useReducer(likeReducer, false)

    let likeIcon = like ? '/icons/liked.png' : '/icons/unliked.png'

    const onChangeLike = async (e) => {
        if (!logged) {
            navigate('/login')
            return;
        }



        if (like) likeIcon = '/icons/unliked.png';
        else likeIcon = '/icons/liked.png'

        if (!like) {
            e.target.classList.add('animate__animated', 'animate__bounce')
            

            setTimeout(() => {
                e.target.classList.remove('animate__animated', 'animate__bounce')
                
            }, 1000)
        }

        const user = await getUser()

        if (like) {
            await deleteFavourite(user._id, obj, getToken())
            await manageLike({ ...obj, likes: obj.likes - 1 }, type, getToken())
        }
        else {
            await createFavourite(user._id, obj, type, getToken())
            await manageLike({ ...obj, likes: obj.likes + 1 }, type, getToken())
        }

        dispatch({
            type: like ? types.delete : types.create
        })

    }


    useEffect(() => {
        if (logged) {
            getUser().then((user) => {
                init(user, obj, getToken()).then((liked) => {
                    dispatch({
                        type: liked ? types.create : types.delete
                    })
                })
            })
        }

    }, [])


    return {
        like,
        likeIcon,
        onChangeLike
    }
}
