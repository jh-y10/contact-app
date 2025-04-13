import React from "react";
import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import usePhoneStore from "../stores/usePhoneStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhoneStore();

  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    addContact(name, phoneNumber);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone-number"
        label="Phone Number"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={handleAddContact}>
        Add
      </Button>
    </Box>
  );
};

export default ContactForm;
