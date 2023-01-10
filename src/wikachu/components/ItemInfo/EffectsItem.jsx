export const EffectsItem = ({ effect, short_effect, text }) => {
    return (
        <ul>
            {
                effect!=null && short_effect!=null ?
                    <li>{short_effect} <br />  {effect} </li>
                :
                    <li>{text}</li>
            }
        </ul>
    )
}
