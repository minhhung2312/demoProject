import { Link, Route, Routes } from 'react-router-dom';

import '../assets/css/Header.css'
function Header() {
    let isNavbarFixed = false; 
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.nav');
  const currentScrollY = window.scrollY;
  if (currentScrollY > 400) {
    if (!isNavbarFixed) {
      
      navbar.classList.add('fixed');
      setTimeout(() => navbar.classList.add('visible'), 100); 
      isNavbarFixed = true;
    }
  } else {
    if (isNavbarFixed) {
      
      navbar.classList.remove('visible');
      setTimeout(() => navbar.classList.remove('fixed'), 300); 
      isNavbarFixed = false;
    }
  }
});

    return ( 
        <div>
            <div className='line'>MIỄN PHÍ VẬN CHUYỂN CHO ĐƠN HÀNG TỪ 1.500.000Đ</div>
            <nav className="nav">
                <div className="nav__logo">
                    <Link to='/Home'><img src="/icon/logo.png" alt="" /></Link>
                </div>
                <ul className="nav__Product">
                    <li><Link to='/Branch'>BRANCH
                        
                    </Link></li>
                    <li><Link to='/Vali'>VALI
                        <ul className="sub_Product">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </Link></li>
                    <li><Link to='/Balo'>BALO
                        <ul className="sub_Product">
                            <li><Link>1</Link></li>
                            <li><Link>2</Link></li>
                            <li>3</li>
                        </ul>
                    </Link></li>
                    <li><Link to='/Handbag'>HANDBAG
                        <ul className="sub_Product">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </Link></li>
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
            <div className="discount">Nhập mã <span className='discount-code'>HOL10</span> giảm 10% tất cả sản phẩm</div>
       
            <Routes>
             
            </Routes>
        </div>
     );
}

export default Header;