const { apikey } = require("./../config");
const axios = require("axios");

let savebooks = [];
let userBookshelf ='';

const read = (req, res, next) => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${
        req.query.search
      }&fields=items(id%2CvolumeInfo(authors%2Ccategories%2CcontentVersion%2Cdescription%2Cdimensions%2CimageLinks%2CindustryIdentifiers%2CinfoLink%2Clanguage%2CmainCategory%2CpageCount%2CpanelizationSummary%2CpreviewLink%2CprintType%2CprintedPageCount%2CpublishedDate%2Cpublisher%2CseriesInfo%2Csubtitle%2Ctitle))&key=${apikey}`
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => res.status(500).json(err));
};

const create = (req, res, next) => {
  let { item } = req.body;
  savebooks.push(item);
};

const getSavedBooks = (req, res, next) => {
  res.json(savebooks);
};

const updateBookshelf = (req, res, next)=>{
  const {bookshelf} = req.body;
    userBookshelf = bookshelf;
    res.status(200).send(userBookshelf);
   }

const deleteBook = (req, res, next) => {
  savebooks.splice(parseInt(req.params.index), 1)
  res.status(200).json(savebooks);
};

module.exports = {
  read,
  create,
  getSavedBooks,
  updateBookshelf,
  deleteBook
};
