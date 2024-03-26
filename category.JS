const arr = [];

const addData = () => {
  let alldata = JSON.parse(localStorage.getItem("catinfo"));
  let len = alldata != null ? alldata.length : 0;
  const name = document.catfrm.catname.value;
  const catdata = {
    id: len + 1,
    name: name,
  };

  arr.push(catdata);
  localStorage.setItem("catinfo", JSON.stringify(arr));
  document.catfrm.catname.value = "";
  dispcat();
};

const dispcat = () => {
  let tr = "";
  let alldata = JSON.parse(localStorage.getItem("catinfo"));
  if (alldata != null) {
    alldata.map((i) => {
      tr += `<tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td><a herf="#" class="btn btn-danger" onclick="deldata(${i.id})">Delete</a></td>

                </tr>`;
    });
    document.getElementById("allCatData").innerHTML = tr;
  }
};

const deldata = (id) => {
  let alldata = JSON.parse(localStorage.getItem("catinfo"));
  alldata.splice(id - 1, 1);
  j = 1;
  alldata.map((i) => {
    i.id = j++;
  })
  localStorage.setItem("catinfo", JSON.stringify(alldata));
  dispcat();
};

dispcat();
