import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';

export default function Home(props) {
    console.log(props);
    return (
        <Layout>
            <h1 className={styles.main}>Xin chao</h1>
        </Layout>
    );
}

export const getServerSideProps = async () => {
    return {
        props: {
            msg: 'Hello',
        },
    };
};
