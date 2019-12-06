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

