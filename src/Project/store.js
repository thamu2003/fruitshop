   // Name validation
   if (!userdetails.name == "") {
    if (userdetails.name.length >= 4) {
      setnameError("");

      // Address validation
      if (!userdetails.address == "") {
        if (userdetails.address.length >= 5) {
          setaddressError("");

          // Mobile validation
          if (!userdetails.mobileno == "") {
            if (userdetails.mobileno == 10) {
              setmobileError("");

              // Email validation
              // const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
              const emailPattern =
                /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;
              if (!userdetails.email == "") {
                if (userdetails.email == emailPattern) {
                  setemailError("");
                } else {
                  setnameError("name is empty");
                  console.log('namenerror');
                }
              } else {
                setnameError("name length is greater than 4");
                  console.log('4 error');

              }
            }
          else{
           setaddressError('address is empty')
                  console.log('add emp error');

          }
            }
          }
          else{
            setaddressError('address must greater than 4 letter')
                  console.log('add  4 error');

        }
      }
      else{
       setmobileError('mobile no is empty')
                  console.log('m e error');

      }
    }
  }else{
     setmobileError('Mobile no must 10 numbers')
                  console.log('m le error');
  }
