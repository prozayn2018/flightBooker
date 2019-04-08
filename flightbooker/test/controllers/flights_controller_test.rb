require 'test_helper'

class FlightsControllerTest < ActionDispatch::IntegrationTest
  test "should get flight" do
    get flights_flight_url
    assert_response :success
  end

  test "should get maps" do
    get flights_maps_url
    assert_response :success
  end

  test "should get login" do
    get flights_login_url
    assert_response :success
  end

  test "should get signup" do
    get flights_signup_url
    assert_response :success
  end

  test "should get searchFlights" do
    get flights_searchFlights_url
    assert_response :success
  end

  test "should get pickFlight" do
    get flights_pickFlight_url
    assert_response :success
  end

  test "should get passengerInfo" do
    get flights_passengerInfo_url
    assert_response :success
  end

  test "should get itinerary" do
    get flights_itinerary_url
    assert_response :success
  end

  test "should get about" do
    get flights_about_url
    assert_response :success
  end

end
