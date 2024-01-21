import React, { useState, useEffect, useContext } from "react";
import data from "./data";
import { auth } from "./firebase";
import { getAllItems } from "./utils/utils";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const cartKey = "user_cart";
  const bookingKey = "user_bookings";
  const [hotels, setHotels] = useState(data);
  const [cart, setCart] = useState(getAllItems(cartKey));
  const [bookings, setBookings] = useState(getAllItems(bookingKey));
  const [user, setUser] = useState(null); // Provide a default value
  const [loading, setLoading] = useState(true);

  async function login(email, password) {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle error (e.g., show an error message to the user)
    }
  }

  async function register(email, password) {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Registration failed:", error.message);
      // Handle error (e.g., show an error message to the user)
    }
  }

  async function logout() {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Logout failed:", error.message);
      // Handle error (e.g., show an error message to the user)
    }
  }

  const updateCart = () => {
    const answer = getAllItems(cartKey);
    setCart(answer);
  };

  const updateBookings = () => {
    const answer = getAllItems(bookingKey);
    setBookings(answer);
  };

  const resetHotels = () => {
    // Reset hotels to initial data or fetch new data from a server
    setHotels(data);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const search = (searchData) => {
    const { searchTerm, rating, location } = searchData;
    const filterData = (field, value) => {
      let filteredData = data;
      if (location === "all" && rating === "all") return filteredData;
      if (location !== "all")
        filteredData = filteredData.filter(
          (hotel) => hotel.location === location
        );
      if (rating !== "all")
        filteredData = filteredData.filter((hotel) => hotel.rating >= rating);

      return filteredData;
    };

    const filteredData = filterData();

    const searchResults = filteredData.filter(
      (hotel) =>
        hotel.name.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) >
        -1
    );
    setHotels(searchResults);
  };

  const value = {
    search,
    login,
    hotels,
    cartKey,
    bookingKey,
    user,
    updateCart,
    updateBookings,
    cart,
    bookings,
    logout,
    resetHotels,
  };

  return (
    <AppContext.Provider value={value}>
      {!loading && children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
