import Dropdown from 'react-bootstrap/Dropdown';

function ProductMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Products
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Motherboards</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Procesadores</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ver todo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProductMenu;