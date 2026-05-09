import { useState } from "react";
import { COURSES } from "../constants/appConstants";

export function useProfileViewModel({ updateUser }) {
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState(["ADS", "Tecnologia"]);

  const openProfileModal = () => setProfileModalVisible(true);
  const closeProfileModal = () => setProfileModalVisible(false);

  const toggleCourse = (course) => {
    setSelectedCourses((current) =>
      current.includes(course)
        ? current.filter((item) => item !== course)
        : [...current, course]
    );
  };

  const saveProfile = (nextUser) => {
    updateUser(nextUser);
    closeProfileModal();
  };

  return {
    courses: COURSES,
    selectedCourses,
    setSelectedCourses,
    toggleCourse,
    profileModalVisible,
    openProfileModal,
    closeProfileModal,
    saveProfile,
  };
}

