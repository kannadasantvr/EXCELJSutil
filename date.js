const printCurrentDateTime = () => {
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // Formats date and time based on locale
    console.log(`Current Date and Time: ${formattedDateTime}`);
  };
  
  printCurrentDateTime();  