import { useState, useEffect } from 'react'


export const useLike = (type = 'Pokemon') => {

    const [like, setLike] = useState(false)

    let likeIcon = like ? '/icons/liked.png' : '/icons/unliked.png'

    const onChangeLike = (e) => {


        if (like) e.target.src = likeIcon = '/icons/unliked.png';
        else e.target.src = likeIcon = '/icons/liked.png'

        if (!like) {
            e.target.classList.add('animate__animated', 'animate__bounce')


            setTimeout(() => {
                e.target.classList.remove('animate__animated', 'animate__bounce')
            }, 1000)
        }

        setLike(!like)
    }

    useEffect(() => {

    }, [like])


    return {
        like,
        likeIcon,
        onChangeLike
    }
}
