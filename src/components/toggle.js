/* Functional component based on hooks that toggles image when button clicked */ 
const ToggleDivImage = () => {

    /* Setup component state that tracks visibility of the image. Initially, we'll set
    the image to visible (toggled true) */
    const [toggled, setToggled] = React.useState(true);
  
    /* Define a function that toggles the visibility of the image */
    const toggleImage = () => setToggled(!toggled);
  
    return (
      <div>
        {/*Render toggle button, and bind toggleImage to click handler */}
        <button onClick={toggleImage}>Toggle Image</button>
        
        {/* Render image if toggled is truthy */}
        {toggled && <img src={require('./images/iman3.jpg').default} alt="Cat" />}
      </div>
    );
  };

  export default ToggleDivImage