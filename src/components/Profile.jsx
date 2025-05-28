import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user's data
  const fetchUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setUser(userDoc.data());
      } else {
        toast.error("User data not found!");
      }
    } catch (error) {
      toast.error("Error fetching user data: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Get current authenticated user and fetch their data
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        fetchUserData(currentUser.uid);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Error logging out: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Profile</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div className="w-full px-4 py-3 border border-gray-800 text-center">
          <p className="text-lg font-semibold">{user.displayName || "User"}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      ) : (
        <p>Error loading user data.</p>
      )}

      <button
        onClick={handleLogout}
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
