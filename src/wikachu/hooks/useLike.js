import { useState, useEffect, useReducer, useContext } from 'react'
import { likeReducer } from '../context/likeReducer'
import { checkFavourite, createFavourite, deleteFavourite } from '../../api/backend/favourite/'
import { AuthContext } from '../../auth/context';
import { types } from '../types/types';

const init = async (user, pokemon) => {
    //console.log(user,pokemon)
    const {liked} = await checkFavourite(user._id, pokemon._id, JSON.parse(localStorage.getItem('token')));
    return liked;
}

export const useLike = (pokemon) => {

    const { user } = useContext(AuthContext)


    const [like, dispatch] = useReducer(likeReducer, false)

    let likeIcon = like ? '/icons/liked.png' : '/icons/unliked.png'

    const onChangeLike = async(e) => {


        if (like) e.target.src = likeIcon = '/icons/unliked.png';
        else e.target.src = likeIcon = '/icons/liked.png'

        if (!like) {
            e.target.classList.add('animate__animated', 'animate__bounce')


            setTimeout(() => {
                e.target.classList.remove('animate__animated', 'animate__bounce')
            }, 1000)
        }

        if (like) await deleteFavourite(user._id, pokemon._id, JSON.parse(localStorage.getItem('token')))
        else await createFavourite(user._id, pokemon._id, JSON.parse(localStorage.getItem('token')))

        dispatch({
            type: like ? types.delete : types.create
        })

    }

    const manageFavourite = async () => {
        if (like) await deleteFavourite(user._id, pokemon._id, JSON.parse(localStorage.getItem('token')))
        else await createFavourite(user._id, pokemon._id, JSON.parse(localStorage.getItem('token')))
    }


    useEffect(() => {
        
        init(user, pokemon).then((liked) => {
            dispatch({
                type: liked ? types.create : types.delete
            })
        })
    }, [])


    return {
        like,
        likeIcon,
        onChangeLike
    }
}
