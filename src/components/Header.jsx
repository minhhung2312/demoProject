import { Link, Route, Routes } from 'react-router-dom';
import '../assets/css/Header.css'
function Header() {
    return ( 
        <div>
            <div className='line'>MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TỪ 1.500.000Đ</div>
            <nav className="nav">
                <div className="nav__logo">
                    <Link to='/Home'><img src="/icon/logo.png" alt="" /></Link>
                </div>
                <ul className="nav__Product">
                    <li><Link to='/Branch'>BRANCH</Link></li>
                    <li><Link to='/Vali'>VALI</Link></li>
                    <li><Link to='/Balo'>BALO</Link></li>
                    <li><Link to='/Handbag'>HANDBAG</Link></li>
                </ul>
                <ul className="nav__Link">
                    <li><Link to='/Contact'>CONTACT</Link></li>
                    <li><Link to='About'>ABOUT US</Link></li>
                    <li><Link to='Loggin'>LOGIN</Link></li>
                    <li><Link to='Signup'>SING UP</Link></li>
                </ul>
                <ul>
                    <li><Link to='/Account'><img src="/icon/user.png" alt="" /></Link></li>
                    <li><Link><img src="/icon/search.png" alt="" /></Link></li>
                    <li><Link to='/Cart'><img src="/icon/cart.png" alt="" /></Link></li>
                </ul>
            </nav>
            <div className="discount">Nhập mã <span style={{color:'red', textDecoration: 'underline'}}>HOL10</span> giảm 10% tất cả sản phẩm</div>
            <Routes>
             
            </Routes>
        </div>
     );
}

export default Header;