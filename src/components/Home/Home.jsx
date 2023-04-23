import { Col, Container, Row } from 'react-bootstrap';
import React, { Fragment, useCallback, useContext, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet';
import { MealsContext } from '../../context/Meals';

export default function Home() {
  let {mealsData, meals, loading} = useContext(MealsContext)
  const [item, setItem] = useState("");
  const mealsFetched = useCallback(() => {
    mealsData(item);
  }, [item, mealsData])
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Meals</title>
      </Helmet>
      <div>
      <div className="w-75 mx-auto pt-5 mt-5">
      <Form.Control className='mb-2' type="text" placeholder="Search for a favorite meal" onChange={(e) => setItem(e.target.value)}/>
      <Button onClick={mealsFetched} variant="success" className='text-white mb-3' type="submit">
        Search
        </Button>
        <Container>
          <Row>
            {loading ? <div className='vh-100 d-flex align-items-center justify-content-center'>
              <div className='loader'></div>
            </div> : <>
            {meals? meals.map((meal) => {
              return <Col className='cardStyle' md={3} key={ meal.idMeal} >
                <img src={meal.strMealThumb} className="w-100 rounded" alt="meal" />
                <h3>{meal.strMeal}</h3>
              </Col>
            }): <div className="text-danger">No Meals Found</div>}
            </>}            
          </Row>
        </Container>
      </div>
    </div>
    </Fragment>
  )
}
