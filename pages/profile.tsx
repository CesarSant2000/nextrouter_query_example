import {useRouter} from "next/router";

export default function ProfilePage() {
    const router = useRouter();
    const {name, lastname} = router.query;
    const props = {
        name: name,
        lastname: lastname
    }

    return (
        <>
            <h1>Profile</h1>
            <p>Nombre: {props.name}</p>
            <p>Apellido: {props.lastname}</p>
        </>
    )
}