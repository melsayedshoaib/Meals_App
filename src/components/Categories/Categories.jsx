/* eslint-disable react-hooks/exhaustive-deps */

import { Col, Container, Row } from 'react-bootstrap';
import React, { Fragment, useContext, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import { MealsContext } from '../../context/Meals'

export default function Categories() {
  const { mealsCategories, categories, loading } = useContext(MealsContext);
  useEffect(() => {
    mealsCategories();
  }, [mealsCategories])
  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Categories - Meals</title>
      </Helmet>
      <Container className='mt-5 pt-5 w-75 mx-auto'>
          <Row>
            {loading ? <div className='vh-100 d-flex align-items-center justify-content-center'>
              <div className='loader'></div>
            </div> : <>
            {categories.map((category) => {
              return <Col className='cardStyle' md={3} key={ category.idCategory} >
                <img src={category.strCategoryThumb} className="w-100 rounded" alt="category" />
                <h3>{category.strCategory}</h3>
              </Col>
            })}
            </>}            
          </Row>
        </Container>
    </Fragment>
  )
}
