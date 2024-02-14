import Image from 'next/image'
import { GALLERY } from '../../constant/data'
import styles from './Gallery.module.css'

const Gallery = () => {
    return (
        <section className={styles.Container}>
            {GALLERY.map((gallery) => <div key={gallery.id} />)}
        </section>
    )
}

export default Gallery