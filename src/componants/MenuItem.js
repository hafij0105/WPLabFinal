import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function MenuItem({ image, name, price }) {
  const [open, setOpen] = useState(false);

  const handleOrderClick = () => {
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <div className="menuItem">
      <div
        className="menuItemImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1>{name}</h1>
      <p>{price}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOrderClick}
        style={{ marginTop: '10px' }}
      >
        Order Now
      </Button>

      
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '20px',
            backgroundColor: '#f8f9fa',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
          }}
        >
          🎉 Thank You!
        </DialogTitle>
        <DialogContent
          sx={{
            fontSize: '16px',
            color: '#555',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          Thank you for ordering <strong>{name}</strong>!
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            paddingBottom: '20px',
          }}
        >
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondary"
            sx={{
              padding: '10px 20px',
              borderRadius: '30px',
              backgroundColor: '#ff6f61',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#ff3e3e',
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MenuItem;
