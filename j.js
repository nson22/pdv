

const url = 'https://script.google.com/macros/s/AKfycbyqPmorwLcgrBWHma8vDgDVHHdXAXREbBRDsAX4VBSkpk9ocjdHZU6cKY-R1aI3LJuiQg/exec'

async function get() {
    const res = await axios.get(url);
    console.log(res);
  }

  async function post() {
    const obj = { key: "value" };
    const res = await axios.post(url, obj);
    console.log(res);
  }