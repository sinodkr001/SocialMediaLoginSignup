import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { getUser } from '../api';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = imgRef.current;
    const x = (clientX / offsetWidth) * 100;
    const y = (clientY / offsetHeight) * 100;

    imgRef.current.style.transform = `translate(-${x}%, -${y}%)`;
  };


  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser(userId);
      setUser(userData);
    };
    fetchUser();
  }, [userId]);

  if (!user) return <div className="flex items-center justify-center h-screen"><div>Loading...</div></div>;

  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden " onMouseMove={handleMouseMove}>
      <div className="relative">
        <img className="w-full h-48 object-cover " src={user.coverPhoto} alt="Cover" ref={imgRef} />
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
          <img
            className="w-24 h-24 object-cover rounded-full border-2 border-white"
            src={user.profilePhoto}
            alt="Profile"
          />
        </div>
      </div>
      <div className="p-4 mt-12">
        <h1 className="text-center text-2xl font-semibold text-gray-800">{user.name}</h1>
        <p className="text-center text-gray-600">{user.email}</p>
        <p className="text-center text-gray-600">{user.phone}</p>
      </div>
    </div>
  );
};

export default UserProfile;


