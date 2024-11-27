// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";



function Login_inner() {
  const [selectedCategory1, setSelectedCategory1] = useState(null);
  const [selectedCategory2, setSelectedCategory2] = useState(null);
  const [selectedCategory3, setSelectedCategory3] = useState(null); // State for third selector

  const categories1 = [
    { id: 1, label: "0-4" },
    { id: 2, label: "5-8" },
    { id: 3, label: "9-14" },
  ];

  const categories2 = [
    { id: 1, label: "Mystery" },
    { id: 2, label: "Action Adventure" },
    { id: 3, label: "Western" },
    { id: 4, label: "Sci-Fi" },
    { id: 5, label: "Fantasy" },
    { id: 6, label: "Comedy" },
  ];

  const categories3 = [
    { id: 1, label: "Happy" },
    { id: 2, label: "Sad" },
    { id: 3, label: "Hopeful" },
    { id: 4, label: "Bleak" },
    { id: 5, label: "Triumphant" },
    { id: 6, label: "Unexpected" },
    { id: 7, label: "Peaceful" },
    { id: 8, label: "Funny" },
  ];

  const handleSelect1 = (category) => setSelectedCategory1(category);
  const handleSelect2 = (category) => setSelectedCategory2(category);
  const handleSelect3 = (category) => setSelectedCategory3(category);

  const [characterDescription, setCharacterDescription] = useState("");

  const handleInputChange = (event) => {
    setCharacterDescription(event.target.value);
  };
  const [settingDescription, setSettingDescription] = useState("");

  return (
    <>
      <section className="login-inner-section">
        <div className="hero-login-inner">
          <div className="container-login-inner">
            <h1>Story Generator</h1>

            <div className="container">
              <div className="row">
                {/* First Selector */}
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="category-buttons-1" className="field-label">
                      Select Age Range
                    </label>
                    <div id="category-buttons-1" className="category-container">
                      {categories1.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleSelect1(category.label)}
                          className={`category-button ${
                            selectedCategory1 === category.label
                              ? "selected"
                              : ""
                          }`}
                          aria-label={category.label}
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Selector */}
                <div className="col-md-8">
                  <div className="form-group">
                    <label htmlFor="category-buttons-2" className="field-label">
                      Select Genre
                    </label>
                    <div id="category-buttons-2" className="category-container">
                      {categories2.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleSelect2(category.label)}
                          className={`category-button ${
                            selectedCategory2 === category.label
                              ? "selected"
                              : ""
                          }`}
                          aria-label={category.label}
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Box for Character Description */}
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label
                      htmlFor="character-description"
                      className="field-label"
                    >
                      Describe the main character:
                    </label>
                  </div>
                  <div className="col-md-6">
                    <div className="character-counter">
                      {characterDescription.length} / 500 characters
                    </div>
                  </div>
                </div>
                <textarea
                  id="character-description"
                  className="input-box"
                  placeholder="Enter character details here..."
                  value={characterDescription}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {/* Third Selector */}
              <div className="form-group">
                <label htmlFor="category-buttons-3" className="field-label">
                  Select Ending
                </label>
                <div id="category-buttons-3" className="category-container">
                  {categories3.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleSelect3(category.label)}
                      className={`category-button ${
                        selectedCategory3 === category.label ? "selected" : ""
                      }`}
                      aria-label={category.label}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Input Box for Character Description */}
              {/* Second Message Box */}
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label
                      htmlFor="setting-description"
                      className="field-label"
                    >
                      Describe the setting:
                    </label>
                  </div>
                  <div className="col-md-6">
                    <div className="character-counter">
                      {settingDescription.length} / 500 characters
                    </div>
                  </div>
                </div>
                <textarea
                  id="setting-description"
                  className="input-box"
                  placeholder="Enter Ending details here..."
                  value={settingDescription}
                  onChange={(e) => setSettingDescription(e.target.value)}
                ></textarea>
              </div>

              {/* Button to Generate Story */}
              <div className="form-group">
                <div className="row">
                  <div className="col-md-12">
                    <button type="submit" className="btn-1">
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="#BC6C25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7734 3.85938L15 3L15.8203 0.8125C15.8594 0.617188 16.0547 0.5 16.25 0.5C16.4062 0.5 16.6016 0.617188 16.6406 0.8125L17.5 3L19.6875 3.85938C19.8828 3.89844 20 4.09375 20 4.25C20 4.44531 19.8828 4.64062 19.6875 4.67969L17.5 5.5L16.6406 7.72656C16.6016 7.88281 16.4062 8 16.25 8C16.0547 8 15.8594 7.88281 15.8203 7.72656L15 5.5L12.7734 4.67969C12.6172 4.64062 12.5 4.44531 12.5 4.25C12.5 4.09375 12.6172 3.89844 12.7734 3.85938ZM8.00781 3.39062L10.0391 7.84375L14.4922 9.875C14.7266 9.99219 14.8828 10.2266 14.8828 10.4609C14.8828 10.6953 14.7266 10.9297 14.4922 11.0078L10.0391 13.0781L8.00781 17.5312C7.89062 17.7656 7.65625 17.9219 7.42188 17.9219C7.1875 17.9219 6.95312 17.7656 6.875 17.5312L4.80469 13.0781L0.351562 11.0469C0.117188 10.9297 0 10.6953 0 10.4609C0 10.2266 0.117188 9.99219 0.351562 9.875L4.80469 7.84375L6.875 3.39062C6.95312 3.15625 7.1875 3 7.42188 3C7.65625 3 7.89062 3.15625 8.00781 3.39062ZM15 15.5L15.8203 13.3125C15.8594 13.1172 16.0547 13 16.25 13C16.4062 13 16.6016 13.1172 16.6406 13.3125L17.5 15.5L19.6875 16.3594C19.8828 16.3984 20 16.5938 20 16.75C20 16.9453 19.8828 17.1406 19.6875 17.1797L17.5 18L16.6406 20.2266C16.6016 20.3828 16.4062 20.5 16.25 20.5C16.0547 20.5 15.8594 20.3828 15.8203 20.2266L15 18L12.7734 17.1797C12.6172 17.1406 12.5 16.9453 12.5 16.75C12.5 16.5938 12.6172 16.3984 12.7734 16.3594L15 15.5Z"
                          fill="#BC6C25"
                        />
                        <path
                          d="M12.7734 3.85938L15 3L15.8203 0.8125C15.8594 0.617188 16.0547 0.5 16.25 0.5C16.4062 0.5 16.6016 0.617188 16.6406 0.8125L17.5 3L19.6875 3.85938C19.8828 3.89844 20 4.09375 20 4.25C20 4.44531 19.8828 4.64062 19.6875 4.67969L17.5 5.5L16.6406 7.72656C16.6016 7.88281 16.4062 8 16.25 8C16.0547 8 15.8594 7.88281 15.8203 7.72656L15 5.5L12.7734 4.67969C12.6172 4.64062 12.5 4.44531 12.5 4.25C12.5 4.09375 12.6172 3.89844 12.7734 3.85938ZM8.00781 3.39062L10.0391 7.84375L14.4922 9.875C14.7266 9.99219 14.8828 10.2266 14.8828 10.4609C14.8828 10.6953 14.7266 10.9297 14.4922 11.0078L10.0391 13.0781L8.00781 17.5312C7.89062 17.7656 7.65625 17.9219 7.42188 17.9219C7.1875 17.9219 6.95312 17.7656 6.875 17.5312L4.80469 13.0781L0.351562 11.0469C0.117188 10.9297 0 10.6953 0 10.4609C0 10.2266 0.117188 9.99219 0.351562 9.875L4.80469 7.84375L6.875 3.39062C6.95312 3.15625 7.1875 3 7.42188 3C7.65625 3 7.89062 3.15625 8.00781 3.39062ZM15 15.5L15.8203 13.3125C15.8594 13.1172 16.0547 13 16.25 13C16.4062 13 16.6016 13.1172 16.6406 13.3125L17.5 15.5L19.6875 16.3594C19.8828 16.3984 20 16.5938 20 16.75C20 16.9453 19.8828 17.1406 19.6875 17.1797L17.5 18L16.6406 20.2266C16.6016 20.3828 16.4062 20.5 16.25 20.5C16.0547 20.5 15.8594 20.3828 15.8203 20.2266L15 18L12.7734 17.1797C12.6172 17.1406 12.5 16.9453 12.5 16.75C12.5 16.5938 12.6172 16.3984 12.7734 16.3594L15 15.5Z"
                          fill="white"
                        />
                      </svg>
                      Generate Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login_inner;
