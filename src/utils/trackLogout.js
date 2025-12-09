import axios from "axios";

export const trackLogout = async (userId) => {
  try {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/activity/logout`, {
      user_id: userId,
    });
    console.log(`Logout time recorded for user: ${userId}`);
  } catch (error) {
    console.error("Error recording logout time:", error);
  }
};
