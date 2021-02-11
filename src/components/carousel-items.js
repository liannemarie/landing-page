import PropTypes from 'prop-types';
import styles from './carousel-items.module.css';

export default function CarouselItems({ entries }) {
  const carouselItems = entries
    // .filter(e => e.type == 'Downloadable')
    // .sort((a, b) => {
    //   return a.isFeaturedIndex - b.isFeaturedIndex;
    // });

  return (
    <div className="carousel-inner">

    {carouselItems.map(({ name, position, url, img, quote }) => (
    <div className={` ${styles.item} ${styles.active}`}  key={name}>
        <div className={styles.img_box}><img src={img} alt={`"Image for" ${name}`}/></div>
        <p className={styles.testimonial}>{quote}</p>
        <p className={styles.overview}><b>{name}</b>,{position}</p>
    </div>

    ))}
    </div>
  );
}

CarouselItems.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired
    })
  ).isRequired
};

