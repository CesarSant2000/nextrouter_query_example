import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Router from 'next/router'

export default function Home() {

    function handleSubmitRoute() {
        const field_name = document.getElementById('name_field') as HTMLInputElement;
        const field_lastname = document.getElementById('lastname_field') as HTMLInputElement;
        const name = field_name.value;
        const lastname = field_lastname.value;
        if (name === '' || lastname === '') {
            alert('No puede haber campos vacíos');
            return;
        }
        Router.push({
            pathname: '/profile',
            query: {
                name: name,
                lastname: lastname
            }
        }).then().catch(
            (error) => {
                console.log(error);
            }
        )
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <input type={'text'} placeholder={'Nombre'} id={'name_field'}/>
                    <input type={'text'} placeholder={'Apellido'} id={'lastname_field'}/>
                    <button onClick={handleSubmitRoute}>Enviar</button>
                </div>
            </main>
        </>
    )
}