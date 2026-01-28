Feature: API Status
  Scenario: Check System Status
    Given the API is running
    When I send a GET request to "/"
    Then I should receive a 200 status code
    And the response should contain "Welcome"
