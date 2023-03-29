import { Route, Routes, NavLink } from 'react-router-dom';
import AddProductForm from '../../modules/AddProductForm/AddProductForm';
import AddTagForm from '../../modules/AddTagForm/AddTagForm';
import './AdminPage.scss'

const AdminPage = () => {
  return (
    <main className="adminPage">
      <div className="container">
          <nav className='navigation'>
            <NavLink 
                to='/bruden/admin/product' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                Product
            </NavLink>
            <NavLink 
                to='/bruden/admin/tag' 
                className={({ isActive }) => isActive ? "nav_link-active nav_link" : "nav_link"}
            >
                Tag
            </NavLink>
          </nav>

          <Routes>
            <Route path='/product' element={<AddProductForm />}/>
            <Route path='/tag' element={<AddTagForm />}/>
          </Routes>
      </div>
    </main> 
  );
};

export default AdminPage;
