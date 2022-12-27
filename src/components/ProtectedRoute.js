const ProtectedRoute = ({children}) => {
  const auth = localStorage.getItem('auth');
  if(auth){
    return children;
  } else{
    window.location.href = '/';
  };
}

export default ProtectedRoute;