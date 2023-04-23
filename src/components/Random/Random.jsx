/* eslint-disable react-hooks/exhaustive-deps */

import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { Fragment, useContext, useEffect } from 'react'

import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'
import { MealsContext } from '../../context/Meals'

export default function Random() {
  const { random, mealsRandom, loading } = useContext(MealsContext);
  useEffect(() => {
    mealsRandom();
  }, [mealsRandom]);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>Randome - Meals</title>
      </Helmet>
      <Container className='mt-5 pt-5 w-75 mx-auto'>
          <Row>
            {loading ? <div className='vh-100 d-flex align-items-center justify-content-center'>
              <div className='loader'></div>
            </div> : <>
            {random.map((meal) => {
              return <div key={ meal.idMeal}>
                <Col className='cardStyle' md={3} >
                <img src={meal.strMealThumb} className="w-100 rounded" alt="meal" />
                <h3>{meal.strMeal}</h3>
              </Col>
              <Col md={9}>
                  <Button onClick={mealsRandom} variant='primary' className="my-3">Get Random Meal</Button>
                  <div><Button variant="danger"><Link to={meal.strYoutube} target="_blank" className="text-white">Watch YT Video</Link></Button></div> 
              </Col>
              </div>
            })}
            </>}            
          </Row>
        </Container>
    </Fragment>
  )
}
