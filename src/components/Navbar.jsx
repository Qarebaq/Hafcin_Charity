function Navbar() {
  return (
    <nav className="nav" dir="rtl" style={{ padding: '1rem' }}>
  <div className="left" class="left">

            <img style={{width: '22%' , marginTop: '25px'}} src="/assests/logo.png" alt="لوگو" className="logo" />

  </div>

<div class="center">
  <a href="#">وام ها</a>
  <a href="#">گزارش ها</a>
  <a href="#">درباره ما</a>
  <a href="#">ارتباط با ما</a>

</div>

<div class="right">ورود/عضویت</div>
    </nav>
  );
}

export default Navbar;
