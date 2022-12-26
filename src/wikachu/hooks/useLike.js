import { useState, useEffect } from 'react'


export const useLike = (type = 'Pokemon') => {

    const [like, setLike] = useState(false)

    const onChangeLike = (e) => {


        if (like) e.target.src = '/icons/unliked.png';
        else e.target.src = '/icons/liked.png'

        if (!like) {
            e.target.classList.add('animate__animated', 'animate__bounce')


            setTimeout(() => {
                e.target.classList.remove('animate__animated', 'animate__bounce')
            }, 1000)
        }

        setLike(!like)
    }

    useEffect(() => {
        console.log('like', like)

    }, [like])


    return {
        like,
        onChangeLike
    }
}
