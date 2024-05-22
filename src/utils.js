export const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(date).toLocaleString('en-US', options);
  };
  