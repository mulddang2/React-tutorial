import PropTypes from 'prop-types';

function List(props) {
  const category = props.category;
  const itemList = props.items;

  // NOTE: 알파벳 순
  //fruits.sort((a, b) => a.name.localeCompare(b.name))
  // NOTE: 알파벳 "역순"
  //fruits.sort((a, b) => b.name.localeCompare(a.name))
  // NOTE: 칼로리 순
  //fruits.sort((a,b) => a.calories - b.calories)
  // NOTE: 칼로리 역순
  //fruits.sort((a,b) => b.calories - a.calories)

  // NOTE: 조건(칼로리 100 안넘는 것)을 걸어서 조건에 해당되는 것만 살리기
  //const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);

  // NOTE: 조건(칼로리 100 안넘는 것)을 걸어서 조건에 해당되는 것만 살리기
  //const highCalFruit = fruits.filter((fruit) => fruit.calories >= 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}:&nbsp;<b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className='list-category'>{category}</h3>
      <ol className='list-items'>{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  // NOTE: 배열안에 id, name, calories 객체 타입은 어떻게 해??
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: 'Category',
  items: [],
};

export default List;
