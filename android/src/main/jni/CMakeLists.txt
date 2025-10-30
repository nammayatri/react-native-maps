# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

if(DEFINED REACT_ANDROID_DIR)
  include(${REACT_ANDROID_DIR}/cmake-utils/ReactNative-application.cmake)
else()
  message(WARNING "REACT_ANDROID_DIR not defined. Skipping RN macros include.")
endif()

file(GLOB react_codegen_SRCS CONFIGURE_DEPENDS
  *.cpp
  react/renderer/components/RNMapsSpecs/*.cpp
)

add_library(
  react_codegen_RNMapsSpecs
  OBJECT
  ${react_codegen_SRCS}
)

target_include_directories(react_codegen_RNMapsSpecs PUBLIC . react/renderer/components/RNMapsSpecs)

target_link_libraries(
  react_codegen_RNMapsSpecs
  fbjni
  jsi
  # We need to link different libraries based on whether we are building rncore or not, that's necessary
  # because we want to break a circular dependency between react_codegen_rncore and reactnative
  reactnative
)

if(COMMAND target_compile_reactnative_options)
  target_compile_reactnative_options(react_codegen_RNMapsSpecs PRIVATE)
else()
  message(WARNING "target_compile_reactnative_options not found — skipping RN compile options.")
endif()
