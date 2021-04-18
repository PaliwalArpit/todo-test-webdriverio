@directory-service
Feature: Make todo api call
  In order to create todos
  I want to make sure CRUD operations through REST API works fine on todo application

  Scenario Outline: create a todo
    Given A contact
    I send GET request to /todos
    Then I get response code 201

    Scenario Outline: Update todo
    Given A contact
    I send PUT request to /todos/id
    Then I should get response code 200

    Scenario Outline: Delete a todo
    Given A contact
    I send Delete request to /todos/id
    Then I should get 204 response code

    