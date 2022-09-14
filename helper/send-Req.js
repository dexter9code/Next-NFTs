const sendReq = async function (url, requestType, doc) {
  console.log(requestType);
  try {
    const res = await fetch(url, {
      method: requestType,
      headers: {
        "Content-Type": "application/json",
      },
      body: doc ? JSON.stringify(doc) : null,
    });

    if (!res.ok) {
      throw new Error(`Error while making ${requestType} Request`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export default sendReq;
