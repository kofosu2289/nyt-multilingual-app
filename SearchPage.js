import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './SearchPage.css'
import * as yup from 'yup';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Trans } from "react-i18next";
import Card from "react-bootstrap/Card";
import { search } from "./requests";

const schema = yup.object({
  keyword: yup.string().required("Keyword is required"),
});

const SearchPage = () => {
  const { t } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = async e => {
    const response = await search({ q: e.keyword });
    setArticles(response.data.response.docs || []);
  };

  return (
    <div className="SearchPage">
      <h1 className="center">{t("Search")}</h1>
      <Formik validationSchema={schema} onSubmit={handleSubmit}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isInvalid,
          errors,
        }) => (
            <Form noValidate onSubmit={handleSubmit} className="form">
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="keyword">
                  <Form.Label>{t("Keyword")}</Form.Label>
                  <Form.Control
                    type="text"
                    name="keyword"
                    placeholder={t("Keyword")}
                    value={values.keyword || ""}
                    onChange={handleChange}
                    isInvalid={touched.keyword && errors.keyword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.keyword}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button type="submit" style={{ marginRight: "10px" }}>
                {t("Search")}
              </Button>
            </Form>
          )}
      </Formik>
      <h3 className="form">
        <Trans i18nKey="numResults" count={articles.length}>
          There are <strong>{{ count }}</strong> results.
        </Trans>
      </h3>
      {articles.map((a, i) => (
        <Card key={i}>
          <Card.Body>
            <Card.Title>{a.headline.main}</Card.Title>
            <Card.Text>{a.abstract}</Card.Text>
            <Button
              variant="primary"
              onClick={() => (window.location.href = a.web_url)}
            >
              {t("Go")}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default SearchPage;