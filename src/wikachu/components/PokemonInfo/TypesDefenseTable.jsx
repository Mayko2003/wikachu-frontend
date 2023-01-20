import { TypeTag } from '../Pokemon'
import { pokemonTypes } from '../../data'
import { getTypesEffectiveness, toFractionFormat } from '../../helpers'

export const TypesDefenseTable = ({ types }) => {

    const onGetTypesEffectiveness = (type) => {
        let eff = getTypesEffectiveness(types, type.name)

        return (
            <button className='btn text-light me-1 mt-1 btn-sm disabled' style={{ width: '6em', backgroundColor: getColorEffectiveness(eff) }}>
                <span>{toFractionFormat(eff)}</span>
            </button>
        )
    }

    const getColorEffectiveness = (eff) => {
        if (eff === 4) return '#73d216'
        if (eff === 2) return '#4e9a06'
        if (eff === 0.5) return '#ef2929'
        if (eff === 0.25) return '#cc0000'
        return '#737373'
    }


    return (
        <div className="row mx-3">
            {
                Object.values(pokemonTypes).map(type => (
                    <div className='col-sm-2 col-4 text-center mb-2' key={type.name}>
                        <TypeTag type={type} />
                        {
                            onGetTypesEffectiveness(type)
                        }
                    </div>
                ))
            }

        </div>
    )
}
