import Image from 'next/image';
import DesignContainer from '../Shared/DesignContainer/DesignContainer';
import styles from './Collection.module.scss';
import kids from '../../../../public/collections/kids_collection.png'
import teen from '../../../../public/collections/teenager_collection.png'
import men from '../../../../public/collections/man_collection.png'
import women from '../../../../public/collections/women_collection3.png'
import old from '../../../../public/collections/old_collection2.png'

const Collection = () => {
    const year = new Date().getFullYear();
    const kid_teen = [
      {
        image: kids,
        tag: "Kids",
      },
      {
        image: teen,
        tag: "Teenagers",
      }
    ];
    const other_collection = [
        {
            image: men,
            tag: 'Men',
            details: `Trending Collection - ${year}`,
        },
        {
            image: women,
            tag: 'Women',
            details: `Style Collection - ${year}`,
        },
        {
            image: old,
            tag: 'Adults',
            details: `Treding Collection - ${year}`,
        },
    ];
    return (
      <div className={styles.collection_section}>
        <DesignContainer>
          <div className={styles.collage_design}>
            {/* Men & women collection */}
            <div className={styles.kid_teen_segment}>
              {kid_teen.map((each, index) => (
                <div key={index} className={styles.collction_info_container}>
                  <Image
                    src={each.image}
                    alt=""
                    className={styles.image_setup}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.tag}>{each.tag}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Other collection */}
            {other_collection.map((each, index) => (
              <div key={index} className={styles.image_container}>
                <Image src={each.image} alt="" className={styles.image_setup} />
                <div className={styles.overlay}>
                  <div className={styles.tag}>{each.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </DesignContainer>
      </div>
    );
};

export default Collection;