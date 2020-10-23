cmake_minimum_required(VERSION 3.5)

project(Newtry1 LANGUAGES CXX)

set(CMAKE_INCLUDE_CURRENT_DIR ON)

set(CMAKE_AUTOUIC ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(PkgConfig REQUIRED)

pkg_check_modules(OpenGL REQUIRED)
pkg_check_modules(GLEW REQUIRED glew)
pkg_check_modules(GLFW REQUIRED glfw3)




add_executable(Newtry1
    ./Sources/main.cpp
    ./Sources/shader.cpp
    ./Sources/camera.cpp
    ./Sources/glad.c)

include_directories(./Headers)
include_directories(/usr/local/include)
include_directories(/usr/local/include/glm)
include_directories(/usr/local/include/glm/gtc)


target_link_libraries(Newtry1  PRIVATE ${GLFW_LIBRARIES} ${GLEW_LIBRARIES})

