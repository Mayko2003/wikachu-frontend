import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../auth/components";
import { useGetSearchResults } from "../hooks";
import { PokemonList } from "../components/Pokemon";

export const SearchPage = () => {

    const location = useLocation()

    const navigate = useNavigate()

    const { q = '' } = queryString.parse(location.search)

    const { register, handleSubmit, formState: { errors }, getValues } = useForm({
        defaultValues: {
            q: q
        }
    })

    const onSubmit = () => {
        const searchText = getValues('q')
        if (searchText === q || searchText.trim().length <= 1) return;
        console.log('seaching')
        navigate(`/search?q=${searchText}`)
    }

    //results
    const { results, isLoading } = useGetSearchResults(q)
    return (
        <>
            <h1 className="text-center mt-5 mb-3">Find anything</h1>

            <div className='col-6 mx-auto mt-3'>
                <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-100 me-2">
                        <input className="form-control " type="search" placeholder="Search" name="q" id="q"
                            {...register("q", { required: 'Search is required' })}
                        />
                        {
                            errors.q && <ErrorMessage errors={errors} name="q" />
                        }
                    </div>
                    <div>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </form>
            </div>
            <div>
                <h3>Pokemons</h3>
                {
                    !isLoading && <PokemonList list={results.pokemons} />
                }
            </div>
        </>
    )
}
