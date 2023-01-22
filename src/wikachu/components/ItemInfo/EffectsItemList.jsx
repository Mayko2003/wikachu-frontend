import { EffectsItem } from "./";

export const EffectsItemList = ({ effects, type }) => {
    return (
        <div>
            {
                type === 'default' ?
                    effects?.map(({ effect, short_effect }) =>
                        <EffectsItem key={effect} effect={effect} short_effect={short_effect} text={null} />
                    )
                    :
                    effects?.map(({ text, language }) =>
                        language.name === 'en' &&
                        <EffectsItem key={text} effect={null} short_effect={null} text={text} />
                    )
            }
        </div>
    )
}
