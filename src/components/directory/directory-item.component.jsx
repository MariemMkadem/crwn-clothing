import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss';
import categories from '../../mock/categories';

const Directory = () => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
  
