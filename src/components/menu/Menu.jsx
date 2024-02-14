import styles from './menu.module.css';
import style from '../menuPosts/menuPosts.module.css';
import stylesCategory from '../menuCategories/menuCategories.module.css';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const items = [
  {
    img: '/p1.jpeg',
    category: 'travel',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'John Doe',
    date: '12.01.2024',
    clas: style.travel,
  },
  {
    img: '/p1.jpeg',
    category: 'culture',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'John Doe',
    date: '12.01.2024',
    clas: style.culture,
  },
  {
    img: '/p1.jpeg',
    category: 'food',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'John Doe',
    date: '12.01.2024',
    clas: style.food,
  },
  {
    img: '/p1.jpeg',
    category: 'fashion',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'John Doe',
    date: '12.01.2024',
    clas: style.fashion,
  },
];

const categories = [
  {
    categoryLabel: 'style',
    style: stylesCategory.style,
  },
  {
    categoryLabel: 'fashion',
    style: stylesCategory.fashion,
  },
  {
    categoryLabel: 'food',
    style: stylesCategory.food,
  },
  {
    categoryLabel: 'travel',
    style: stylesCategory.travel,
  },
  {
    categoryLabel: 'culture',
    style: stylesCategory.culture,
  },
  {
    categoryLabel: 'coding',
    style: stylesCategory.coding,
  },
];

export default function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>What's Hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        {items.map((item) => (
          <MenuPosts category={item.category} title={item.title} author={item.author} date={item.date} clas={item.clas} />
        ))}
      </div>
      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        {categories.map((category) => (
          <MenuCategories stylesCategory={category.style} category={category.categoryLabel} />
        ))}
      </div>
      <h2 className={styles.subTitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        {items.map((item) => (
          <MenuPosts img={item.img} category={item.category} title={item.title} author={item.author} date={item.date} clas={item.clas} />
        ))}
      </div>
    </div>
  );
}
