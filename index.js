(async () => {
    const rawResponse = await fetch('urlhere', {
      method: 'POST',
    //   mode: 'no-cors',
      body: "asd=asd&asd=assd",
      headers: {
        // 'Accept': 'application/x',
        'Content-Type': 'application/x-www-form-urlencoded'
      },

    });
    const content = await rawResponse.json();
  
    console.log(content);
  }
)();
  