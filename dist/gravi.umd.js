(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.gravi = {})));
}(this, (function (exports) { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var picogl = createCommonjsModule(function (module, exports) {
  /*
  PicoGL.js v0.8.9
  
  The MIT License (MIT)
  
  Copyright (c) 2017 Tarek Sherif
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function () {
    return (
      /******/
      function (modules) {
        // webpackBootstrap

        /******/
        // The module cache

        /******/
        var installedModules = {};
        /******/

        /******/
        // The require function

        /******/

        function __webpack_require__(moduleId) {
          /******/

          /******/
          // Check if module is in cache

          /******/
          if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
          }
          /******/
          // Create a new module (and put it into the cache)

          /******/


          var module = installedModules[moduleId] = {
            /******/
            i: moduleId,

            /******/
            l: false,

            /******/
            exports: {}
            /******/

          };
          /******/

          /******/
          // Execute the module function

          /******/

          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/

          /******/
          // Flag the module as loaded

          /******/

          module.l = true;
          /******/

          /******/
          // Return the exports of the module

          /******/

          return module.exports;
          /******/
        }
        /******/

        /******/

        /******/
        // expose the modules object (__webpack_modules__)

        /******/


        __webpack_require__.m = modules;
        /******/

        /******/
        // expose the module cache

        /******/

        __webpack_require__.c = installedModules;
        /******/

        /******/
        // define getter function for harmony exports

        /******/

        __webpack_require__.d = function (exports, name, getter) {
          /******/
          if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
              /******/
              configurable: false,

              /******/
              enumerable: true,

              /******/
              get: getter
              /******/

            });
            /******/
          }
          /******/

        };
        /******/

        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/


        __webpack_require__.n = function (module) {
          /******/
          var getter = module && module.__esModule ?
          /******/
          function getDefault() {
            return module['default'];
          } :
          /******/
          function getModuleExports() {
            return module;
          };
          /******/

          __webpack_require__.d(getter, 'a', getter);
          /******/


          return getter;
          /******/
        };
        /******/

        /******/
        // Object.prototype.hasOwnProperty.call

        /******/


        __webpack_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/

        /******/
        // __webpack_public_path__

        /******/


        __webpack_require__.p = "";
        /******/

        /******/
        // Load entry module and return exports

        /******/

        return __webpack_require__(__webpack_require__.s = 4);
        /******/
      }(
      /************************************************************************/

      /******/
      [
      /* 0 */

      /***/
      function (module, exports, __webpack_require__) {
        let canvas = document.createElement("canvas");
        let gl = canvas.getContext("webgl2"); // https://www.khronos.org/registry/webgl/specs/1.0/
        // https://www.khronos.org/registry/webgl/specs/latest/2.0/#1.1

        const CONSTANTS = {
          DEPTH_BUFFER_BIT: 0x00000100,
          STENCIL_BUFFER_BIT: 0x00000400,
          COLOR_BUFFER_BIT: 0x00004000,
          POINTS: 0x0000,
          LINES: 0x0001,
          LINE_LOOP: 0x0002,
          LINE_STRIP: 0x0003,
          TRIANGLES: 0x0004,
          TRIANGLE_STRIP: 0x0005,
          TRIANGLE_FAN: 0x0006,
          ZERO: 0,
          ONE: 1,
          SRC_COLOR: 0x0300,
          ONE_MINUS_SRC_COLOR: 0x0301,
          SRC_ALPHA: 0x0302,
          ONE_MINUS_SRC_ALPHA: 0x0303,
          DST_ALPHA: 0x0304,
          ONE_MINUS_DST_ALPHA: 0x0305,
          DST_COLOR: 0x0306,
          ONE_MINUS_DST_COLOR: 0x0307,
          SRC_ALPHA_SATURATE: 0x0308,
          FUNC_ADD: 0x8006,
          BLEND_EQUATION: 0x8009,
          BLEND_EQUATION_RGB: 0x8009,
          BLEND_EQUATION_ALPHA: 0x883D,
          FUNC_SUBTRACT: 0x800A,
          FUNC_REVERSE_SUBTRACT: 0x800B,
          BLEND_DST_RGB: 0x80C8,
          BLEND_SRC_RGB: 0x80C9,
          BLEND_DST_ALPHA: 0x80CA,
          BLEND_SRC_ALPHA: 0x80CB,
          CONSTANT_COLOR: 0x8001,
          ONE_MINUS_CONSTANT_COLOR: 0x8002,
          CONSTANT_ALPHA: 0x8003,
          ONE_MINUS_CONSTANT_ALPHA: 0x8004,
          BLEND_COLOR: 0x8005,
          ARRAY_BUFFER: 0x8892,
          ELEMENT_ARRAY_BUFFER: 0x8893,
          ARRAY_BUFFER_BINDING: 0x8894,
          ELEMENT_ARRAY_BUFFER_BINDING: 0x8895,
          STREAM_DRAW: 0x88E0,
          STATIC_DRAW: 0x88E4,
          DYNAMIC_DRAW: 0x88E8,
          BUFFER_SIZE: 0x8764,
          BUFFER_USAGE: 0x8765,
          CURRENT_VERTEX_ATTRIB: 0x8626,
          FRONT: 0x0404,
          BACK: 0x0405,
          FRONT_AND_BACK: 0x0408,
          CULL_FACE: 0x0B44,
          BLEND: 0x0BE2,
          DITHER: 0x0BD0,
          STENCIL_TEST: 0x0B90,
          DEPTH_TEST: 0x0B71,
          SCISSOR_TEST: 0x0C11,
          POLYGON_OFFSET_FILL: 0x8037,
          SAMPLE_ALPHA_TO_COVERAGE: 0x809E,
          SAMPLE_COVERAGE: 0x80A0,
          NO_ERROR: 0,
          INVALID_ENUM: 0x0500,
          INVALID_VALUE: 0x0501,
          INVALID_OPERATION: 0x0502,
          OUT_OF_MEMORY: 0x0505,
          CW: 0x0900,
          CCW: 0x0901,
          LINE_WIDTH: 0x0B21,
          ALIASED_POINT_SIZE_RANGE: 0x846D,
          ALIASED_LINE_WIDTH_RANGE: 0x846E,
          CULL_FACE_MODE: 0x0B45,
          FRONT_FACE: 0x0B46,
          DEPTH_RANGE: 0x0B70,
          DEPTH_WRITEMASK: 0x0B72,
          DEPTH_CLEAR_VALUE: 0x0B73,
          DEPTH_FUNC: 0x0B74,
          STENCIL_CLEAR_VALUE: 0x0B91,
          STENCIL_FUNC: 0x0B92,
          STENCIL_FAIL: 0x0B94,
          STENCIL_PASS_DEPTH_FAIL: 0x0B95,
          STENCIL_PASS_DEPTH_PASS: 0x0B96,
          STENCIL_REF: 0x0B97,
          STENCIL_VALUE_MASK: 0x0B93,
          STENCIL_WRITEMASK: 0x0B98,
          STENCIL_BACK_FUNC: 0x8800,
          STENCIL_BACK_FAIL: 0x8801,
          STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802,
          STENCIL_BACK_PASS_DEPTH_PASS: 0x8803,
          STENCIL_BACK_REF: 0x8CA3,
          STENCIL_BACK_VALUE_MASK: 0x8CA4,
          STENCIL_BACK_WRITEMASK: 0x8CA5,
          VIEWPORT: 0x0BA2,
          SCISSOR_BOX: 0x0C10,
          COLOR_CLEAR_VALUE: 0x0C22,
          COLOR_WRITEMASK: 0x0C23,
          UNPACK_ALIGNMENT: 0x0CF5,
          PACK_ALIGNMENT: 0x0D05,
          MAX_TEXTURE_SIZE: 0x0D33,
          MAX_VIEWPORT_DIMS: 0x0D3A,
          SUBPIXEL_BITS: 0x0D50,
          RED_BITS: 0x0D52,
          GREEN_BITS: 0x0D53,
          BLUE_BITS: 0x0D54,
          ALPHA_BITS: 0x0D55,
          DEPTH_BITS: 0x0D56,
          STENCIL_BITS: 0x0D57,
          POLYGON_OFFSET_UNITS: 0x2A00,
          POLYGON_OFFSET_FACTOR: 0x8038,
          TEXTURE_BINDING_2D: 0x8069,
          SAMPLE_BUFFERS: 0x80A8,
          SAMPLES: 0x80A9,
          SAMPLE_COVERAGE_VALUE: 0x80AA,
          SAMPLE_COVERAGE_INVERT: 0x80AB,
          COMPRESSED_TEXTURE_FORMATS: 0x86A3,
          DONT_CARE: 0x1100,
          FASTEST: 0x1101,
          NICEST: 0x1102,
          GENERATE_MIPMAP_HINT: 0x8192,
          BYTE: 0x1400,
          UNSIGNED_BYTE: 0x1401,
          SHORT: 0x1402,
          UNSIGNED_SHORT: 0x1403,
          INT: 0x1404,
          UNSIGNED_INT: 0x1405,
          FLOAT: 0x1406,
          DEPTH_COMPONENT: 0x1902,
          ALPHA: 0x1906,
          RGB: 0x1907,
          RGBA: 0x1908,
          LUMINANCE: 0x1909,
          LUMINANCE_ALPHA: 0x190A,
          UNSIGNED_SHORT_4_4_4_4: 0x8033,
          UNSIGNED_SHORT_5_5_5_1: 0x8034,
          UNSIGNED_SHORT_5_6_5: 0x8363,
          FRAGMENT_SHADER: 0x8B30,
          VERTEX_SHADER: 0x8B31,
          MAX_VERTEX_ATTRIBS: 0x8869,
          MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB,
          MAX_VARYING_VECTORS: 0x8DFC,
          MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D,
          MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C,
          MAX_TEXTURE_IMAGE_UNITS: 0x8872,
          MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD,
          SHADER_TYPE: 0x8B4F,
          DELETE_STATUS: 0x8B80,
          LINK_STATUS: 0x8B82,
          VALIDATE_STATUS: 0x8B83,
          ATTACHED_SHADERS: 0x8B85,
          ACTIVE_UNIFORMS: 0x8B86,
          ACTIVE_ATTRIBUTES: 0x8B89,
          SHADING_LANGUAGE_VERSION: 0x8B8C,
          CURRENT_PROGRAM: 0x8B8D,
          NEVER: 0x0200,
          LESS: 0x0201,
          EQUAL: 0x0202,
          LEQUAL: 0x0203,
          GREATER: 0x0204,
          NOTEQUAL: 0x0205,
          GEQUAL: 0x0206,
          ALWAYS: 0x0207,
          KEEP: 0x1E00,
          REPLACE: 0x1E01,
          INCR: 0x1E02,
          DECR: 0x1E03,
          INVERT: 0x150A,
          INCR_WRAP: 0x8507,
          DECR_WRAP: 0x8508,
          VENDOR: 0x1F00,
          RENDERER: 0x1F01,
          VERSION: 0x1F02,
          NEAREST: 0x2600,
          LINEAR: 0x2601,
          NEAREST_MIPMAP_NEAREST: 0x2700,
          LINEAR_MIPMAP_NEAREST: 0x2701,
          NEAREST_MIPMAP_LINEAR: 0x2702,
          LINEAR_MIPMAP_LINEAR: 0x2703,
          TEXTURE_MAG_FILTER: 0x2800,
          TEXTURE_MIN_FILTER: 0x2801,
          TEXTURE_WRAP_S: 0x2802,
          TEXTURE_WRAP_T: 0x2803,
          TEXTURE_2D: 0x0DE1,
          TEXTURE: 0x1702,
          TEXTURE_CUBE_MAP: 0x8513,
          TEXTURE_BINDING_CUBE_MAP: 0x8514,
          TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515,
          TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516,
          TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517,
          TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518,
          TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519,
          TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A,
          MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C,
          TEXTURE0: 0x84C0,
          TEXTURE1: 0x84C1,
          TEXTURE2: 0x84C2,
          TEXTURE3: 0x84C3,
          TEXTURE4: 0x84C4,
          TEXTURE5: 0x84C5,
          TEXTURE6: 0x84C6,
          TEXTURE7: 0x84C7,
          TEXTURE8: 0x84C8,
          TEXTURE9: 0x84C9,
          TEXTURE10: 0x84CA,
          TEXTURE11: 0x84CB,
          TEXTURE12: 0x84CC,
          TEXTURE13: 0x84CD,
          TEXTURE14: 0x84CE,
          TEXTURE15: 0x84CF,
          TEXTURE16: 0x84D0,
          TEXTURE17: 0x84D1,
          TEXTURE18: 0x84D2,
          TEXTURE19: 0x84D3,
          TEXTURE20: 0x84D4,
          TEXTURE21: 0x84D5,
          TEXTURE22: 0x84D6,
          TEXTURE23: 0x84D7,
          TEXTURE24: 0x84D8,
          TEXTURE25: 0x84D9,
          TEXTURE26: 0x84DA,
          TEXTURE27: 0x84DB,
          TEXTURE28: 0x84DC,
          TEXTURE29: 0x84DD,
          TEXTURE30: 0x84DE,
          TEXTURE31: 0x84DF,
          ACTIVE_TEXTURE: 0x84E0,
          REPEAT: 0x2901,
          CLAMP_TO_EDGE: 0x812F,
          MIRRORED_REPEAT: 0x8370,
          FLOAT_VEC2: 0x8B50,
          FLOAT_VEC3: 0x8B51,
          FLOAT_VEC4: 0x8B52,
          INT_VEC2: 0x8B53,
          INT_VEC3: 0x8B54,
          INT_VEC4: 0x8B55,
          BOOL: 0x8B56,
          BOOL_VEC2: 0x8B57,
          BOOL_VEC3: 0x8B58,
          BOOL_VEC4: 0x8B59,
          FLOAT_MAT2: 0x8B5A,
          FLOAT_MAT3: 0x8B5B,
          FLOAT_MAT4: 0x8B5C,
          SAMPLER_2D: 0x8B5E,
          SAMPLER_CUBE: 0x8B60,
          VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622,
          VERTEX_ATTRIB_ARRAY_SIZE: 0x8623,
          VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624,
          VERTEX_ATTRIB_ARRAY_TYPE: 0x8625,
          VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A,
          VERTEX_ATTRIB_ARRAY_POINTER: 0x8645,
          VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F,
          IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A,
          IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B,
          COMPILE_STATUS: 0x8B81,
          LOW_FLOAT: 0x8DF0,
          MEDIUM_FLOAT: 0x8DF1,
          HIGH_FLOAT: 0x8DF2,
          LOW_INT: 0x8DF3,
          MEDIUM_INT: 0x8DF4,
          HIGH_INT: 0x8DF5,
          FRAMEBUFFER: 0x8D40,
          RENDERBUFFER: 0x8D41,
          RGBA4: 0x8056,
          RGB5_A1: 0x8057,
          RGB565: 0x8D62,
          DEPTH_COMPONENT16: 0x81A5,
          STENCIL_INDEX: 0x1901,
          STENCIL_INDEX8: 0x8D48,
          DEPTH_STENCIL: 0x84F9,
          RENDERBUFFER_WIDTH: 0x8D42,
          RENDERBUFFER_HEIGHT: 0x8D43,
          RENDERBUFFER_INTERNAL_FORMAT: 0x8D44,
          RENDERBUFFER_RED_SIZE: 0x8D50,
          RENDERBUFFER_GREEN_SIZE: 0x8D51,
          RENDERBUFFER_BLUE_SIZE: 0x8D52,
          RENDERBUFFER_ALPHA_SIZE: 0x8D53,
          RENDERBUFFER_DEPTH_SIZE: 0x8D54,
          RENDERBUFFER_STENCIL_SIZE: 0x8D55,
          FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0,
          FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1,
          FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2,
          FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3,
          COLOR_ATTACHMENT0: 0x8CE0,
          DEPTH_ATTACHMENT: 0x8D00,
          STENCIL_ATTACHMENT: 0x8D20,
          DEPTH_STENCIL_ATTACHMENT: 0x821A,
          NONE: 0,
          FRAMEBUFFER_COMPLETE: 0x8CD5,
          FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6,
          FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7,
          FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9,
          FRAMEBUFFER_UNSUPPORTED: 0x8CDD,
          FRAMEBUFFER_BINDING: 0x8CA6,
          RENDERBUFFER_BINDING: 0x8CA7,
          MAX_RENDERBUFFER_SIZE: 0x84E8,
          INVALID_FRAMEBUFFER_OPERATION: 0x0506,
          UNPACK_FLIP_Y_WEBGL: 0x9240,
          UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241,
          CONTEXT_LOST_WEBGL: 0x9242,
          UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243,
          BROWSER_DEFAULT_WEBGL: 0x9244,
          READ_BUFFER: 0x0C02,
          UNPACK_ROW_LENGTH: 0x0CF2,
          UNPACK_SKIP_ROWS: 0x0CF3,
          UNPACK_SKIP_PIXELS: 0x0CF4,
          PACK_ROW_LENGTH: 0x0D02,
          PACK_SKIP_ROWS: 0x0D03,
          PACK_SKIP_PIXELS: 0x0D04,
          COLOR: 0x1800,
          DEPTH: 0x1801,
          STENCIL: 0x1802,
          RED: 0x1903,
          RGB8: 0x8051,
          RGBA8: 0x8058,
          RGB10_A2: 0x8059,
          TEXTURE_BINDING_3D: 0x806A,
          UNPACK_SKIP_IMAGES: 0x806D,
          UNPACK_IMAGE_HEIGHT: 0x806E,
          TEXTURE_3D: 0x806F,
          TEXTURE_WRAP_R: 0x8072,
          MAX_3D_TEXTURE_SIZE: 0x8073,
          UNSIGNED_INT_2_10_10_10_REV: 0x8368,
          MAX_ELEMENTS_VERTICES: 0x80E8,
          MAX_ELEMENTS_INDICES: 0x80E9,
          TEXTURE_MIN_LOD: 0x813A,
          TEXTURE_MAX_LOD: 0x813B,
          TEXTURE_BASE_LEVEL: 0x813C,
          TEXTURE_MAX_LEVEL: 0x813D,
          MIN: 0x8007,
          MAX: 0x8008,
          DEPTH_COMPONENT24: 0x81A6,
          MAX_TEXTURE_LOD_BIAS: 0x84FD,
          TEXTURE_COMPARE_MODE: 0x884C,
          TEXTURE_COMPARE_FUNC: 0x884D,
          CURRENT_QUERY: 0x8865,
          QUERY_RESULT: 0x8866,
          QUERY_RESULT_AVAILABLE: 0x8867,
          STREAM_READ: 0x88E1,
          STREAM_COPY: 0x88E2,
          STATIC_READ: 0x88E5,
          STATIC_COPY: 0x88E6,
          DYNAMIC_READ: 0x88E9,
          DYNAMIC_COPY: 0x88EA,
          MAX_DRAW_BUFFERS: 0x8824,
          DRAW_BUFFER0: 0x8825,
          DRAW_BUFFER1: 0x8826,
          DRAW_BUFFER2: 0x8827,
          DRAW_BUFFER3: 0x8828,
          DRAW_BUFFER4: 0x8829,
          DRAW_BUFFER5: 0x882A,
          DRAW_BUFFER6: 0x882B,
          DRAW_BUFFER7: 0x882C,
          DRAW_BUFFER8: 0x882D,
          DRAW_BUFFER9: 0x882E,
          DRAW_BUFFER10: 0x882F,
          DRAW_BUFFER11: 0x8830,
          DRAW_BUFFER12: 0x8831,
          DRAW_BUFFER13: 0x8832,
          DRAW_BUFFER14: 0x8833,
          DRAW_BUFFER15: 0x8834,
          MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49,
          MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A,
          SAMPLER_3D: 0x8B5F,
          SAMPLER_2D_SHADOW: 0x8B62,
          FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B,
          PIXEL_PACK_BUFFER: 0x88EB,
          PIXEL_UNPACK_BUFFER: 0x88EC,
          PIXEL_PACK_BUFFER_BINDING: 0x88ED,
          PIXEL_UNPACK_BUFFER_BINDING: 0x88EF,
          FLOAT_MAT2x3: 0x8B65,
          FLOAT_MAT2x4: 0x8B66,
          FLOAT_MAT3x2: 0x8B67,
          FLOAT_MAT3x4: 0x8B68,
          FLOAT_MAT4x2: 0x8B69,
          FLOAT_MAT4x3: 0x8B6A,
          SRGB: 0x8C40,
          SRGB8: 0x8C41,
          SRGB8_ALPHA8: 0x8C43,
          COMPARE_REF_TO_TEXTURE: 0x884E,
          RGBA32F: 0x8814,
          RGB32F: 0x8815,
          RGBA16F: 0x881A,
          RGB16F: 0x881B,
          VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD,
          MAX_ARRAY_TEXTURE_LAYERS: 0x88FF,
          MIN_PROGRAM_TEXEL_OFFSET: 0x8904,
          MAX_PROGRAM_TEXEL_OFFSET: 0x8905,
          MAX_VARYING_COMPONENTS: 0x8B4B,
          TEXTURE_2D_ARRAY: 0x8C1A,
          TEXTURE_BINDING_2D_ARRAY: 0x8C1D,
          R11F_G11F_B10F: 0x8C3A,
          UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B,
          RGB9_E5: 0x8C3D,
          UNSIGNED_INT_5_9_9_9_REV: 0x8C3E,
          TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F,
          MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80,
          TRANSFORM_FEEDBACK_VARYINGS: 0x8C83,
          TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84,
          TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85,
          TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88,
          RASTERIZER_DISCARD: 0x8C89,
          MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A,
          MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B,
          INTERLEAVED_ATTRIBS: 0x8C8C,
          SEPARATE_ATTRIBS: 0x8C8D,
          TRANSFORM_FEEDBACK_BUFFER: 0x8C8E,
          TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F,
          RGBA32UI: 0x8D70,
          RGB32UI: 0x8D71,
          RGBA16UI: 0x8D76,
          RGB16UI: 0x8D77,
          RGBA8UI: 0x8D7C,
          RGB8UI: 0x8D7D,
          RGBA32I: 0x8D82,
          RGB32I: 0x8D83,
          RGBA16I: 0x8D88,
          RGB16I: 0x8D89,
          RGBA8I: 0x8D8E,
          RGB8I: 0x8D8F,
          RED_INTEGER: 0x8D94,
          RGB_INTEGER: 0x8D98,
          RGBA_INTEGER: 0x8D99,
          SAMPLER_2D_ARRAY: 0x8DC1,
          SAMPLER_2D_ARRAY_SHADOW: 0x8DC4,
          SAMPLER_CUBE_SHADOW: 0x8DC5,
          UNSIGNED_INT_VEC2: 0x8DC6,
          UNSIGNED_INT_VEC3: 0x8DC7,
          UNSIGNED_INT_VEC4: 0x8DC8,
          INT_SAMPLER_2D: 0x8DCA,
          INT_SAMPLER_3D: 0x8DCB,
          INT_SAMPLER_CUBE: 0x8DCC,
          INT_SAMPLER_2D_ARRAY: 0x8DCF,
          UNSIGNED_INT_SAMPLER_2D: 0x8DD2,
          UNSIGNED_INT_SAMPLER_3D: 0x8DD3,
          UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4,
          UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7,
          DEPTH_COMPONENT32F: 0x8CAC,
          DEPTH32F_STENCIL8: 0x8CAD,
          FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD,
          FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210,
          FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211,
          FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212,
          FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213,
          FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214,
          FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215,
          FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216,
          FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217,
          FRAMEBUFFER_DEFAULT: 0x8218,
          UNSIGNED_INT_24_8: 0x84FA,
          DEPTH24_STENCIL8: 0x88F0,
          UNSIGNED_NORMALIZED: 0x8C17,
          DRAW_FRAMEBUFFER_BINDING: 0x8CA6,
          READ_FRAMEBUFFER: 0x8CA8,
          DRAW_FRAMEBUFFER: 0x8CA9,
          READ_FRAMEBUFFER_BINDING: 0x8CAA,
          RENDERBUFFER_SAMPLES: 0x8CAB,
          FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4,
          MAX_COLOR_ATTACHMENTS: 0x8CDF,
          COLOR_ATTACHMENT1: 0x8CE1,
          COLOR_ATTACHMENT2: 0x8CE2,
          COLOR_ATTACHMENT3: 0x8CE3,
          COLOR_ATTACHMENT4: 0x8CE4,
          COLOR_ATTACHMENT5: 0x8CE5,
          COLOR_ATTACHMENT6: 0x8CE6,
          COLOR_ATTACHMENT7: 0x8CE7,
          COLOR_ATTACHMENT8: 0x8CE8,
          COLOR_ATTACHMENT9: 0x8CE9,
          COLOR_ATTACHMENT10: 0x8CEA,
          COLOR_ATTACHMENT11: 0x8CEB,
          COLOR_ATTACHMENT12: 0x8CEC,
          COLOR_ATTACHMENT13: 0x8CED,
          COLOR_ATTACHMENT14: 0x8CEE,
          COLOR_ATTACHMENT15: 0x8CEF,
          FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56,
          MAX_SAMPLES: 0x8D57,
          HALF_FLOAT: 0x140B,
          RG: 0x8227,
          RG_INTEGER: 0x8228,
          R8: 0x8229,
          RG8: 0x822B,
          R16F: 0x822D,
          R32F: 0x822E,
          RG16F: 0x822F,
          RG32F: 0x8230,
          R8I: 0x8231,
          R8UI: 0x8232,
          R16I: 0x8233,
          R16UI: 0x8234,
          R32I: 0x8235,
          R32UI: 0x8236,
          RG8I: 0x8237,
          RG8UI: 0x8238,
          RG16I: 0x8239,
          RG16UI: 0x823A,
          RG32I: 0x823B,
          RG32UI: 0x823C,
          VERTEX_ARRAY_BINDING: 0x85B5,
          R8_SNORM: 0x8F94,
          RG8_SNORM: 0x8F95,
          RGB8_SNORM: 0x8F96,
          RGBA8_SNORM: 0x8F97,
          SIGNED_NORMALIZED: 0x8F9C,
          COPY_READ_BUFFER: 0x8F36,
          COPY_WRITE_BUFFER: 0x8F37,
          COPY_READ_BUFFER_BINDING: 0x8F36,
          COPY_WRITE_BUFFER_BINDING: 0x8F37,
          UNIFORM_BUFFER: 0x8A11,
          UNIFORM_BUFFER_BINDING: 0x8A28,
          UNIFORM_BUFFER_START: 0x8A29,
          UNIFORM_BUFFER_SIZE: 0x8A2A,
          MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B,
          MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D,
          MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E,
          MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F,
          MAX_UNIFORM_BLOCK_SIZE: 0x8A30,
          MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31,
          MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33,
          UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34,
          ACTIVE_UNIFORM_BLOCKS: 0x8A36,
          UNIFORM_TYPE: 0x8A37,
          UNIFORM_SIZE: 0x8A38,
          UNIFORM_BLOCK_INDEX: 0x8A3A,
          UNIFORM_OFFSET: 0x8A3B,
          UNIFORM_ARRAY_STRIDE: 0x8A3C,
          UNIFORM_MATRIX_STRIDE: 0x8A3D,
          UNIFORM_IS_ROW_MAJOR: 0x8A3E,
          UNIFORM_BLOCK_BINDING: 0x8A3F,
          UNIFORM_BLOCK_DATA_SIZE: 0x8A40,
          UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42,
          UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43,
          UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44,
          UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46,
          INVALID_INDEX: 0xFFFFFFFF,
          MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122,
          MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125,
          MAX_SERVER_WAIT_TIMEOUT: 0x9111,
          OBJECT_TYPE: 0x9112,
          SYNC_CONDITION: 0x9113,
          SYNC_STATUS: 0x9114,
          SYNC_FLAGS: 0x9115,
          SYNC_FENCE: 0x9116,
          SYNC_GPU_COMMANDS_COMPLETE: 0x9117,
          UNSIGNALED: 0x9118,
          SIGNALED: 0x9119,
          ALREADY_SIGNALED: 0x911A,
          TIMEOUT_EXPIRED: 0x911B,
          CONDITION_SATISFIED: 0x911C,
          WAIT_FAILED: 0x911D,
          SYNC_FLUSH_COMMANDS_BIT: 0x00000001,
          VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE,
          ANY_SAMPLES_PASSED: 0x8C2F,
          ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A,
          SAMPLER_BINDING: 0x8919,
          RGB10_A2UI: 0x906F,
          INT_2_10_10_10_REV: 0x8D9F,
          TRANSFORM_FEEDBACK: 0x8E22,
          TRANSFORM_FEEDBACK_PAUSED: 0x8E23,
          TRANSFORM_FEEDBACK_ACTIVE: 0x8E24,
          TRANSFORM_FEEDBACK_BINDING: 0x8E25,
          TEXTURE_IMMUTABLE_FORMAT: 0x912F,
          MAX_ELEMENT_INDEX: 0x8D6B,
          TEXTURE_IMMUTABLE_LEVELS: 0x82DF,
          TIMEOUT_IGNORED: -1,
          MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247,
          // https://www.khronos.org/registry/webgl/extensions/EXT_disjoint_timer_query_webgl2/
          QUERY_COUNTER_BITS_EXT: 0x8864,
          TIME_ELAPSED_EXT: 0x88BF,
          TIMESTAMP_EXT: 0x8E28,
          GPU_DISJOINT_EXT: 0x8FBB,
          // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
          COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83F0,
          COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83F1,
          COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83F2,
          COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83F3,
          // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
          COMPRESSED_SRGB_S3TC_DXT1_EXT: 0x8C4C,
          COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 0x8C4D,
          COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 0x8C4E,
          COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 0x8C4F,
          // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
          COMPRESSED_R11_EAC: 0x9270,
          COMPRESSED_SIGNED_R11_EAC: 0x9271,
          COMPRESSED_RG11_EAC: 0x9272,
          COMPRESSED_SIGNED_RG11_EAC: 0x9273,
          COMPRESSED_RGB8_ETC2: 0x9274,
          COMPRESSED_SRGB8_ETC2: 0x9275,
          COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9276,
          COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9277,
          COMPRESSED_RGBA8_ETC2_EAC: 0x9278,
          COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9279,
          // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
          COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8C00,
          COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8C01,
          COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8C02,
          COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8C03,
          // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
          COMPRESSED_RGBA_ASTC_4x4_KHR: 0x93B0,
          COMPRESSED_RGBA_ASTC_5x4_KHR: 0x93B1,
          COMPRESSED_RGBA_ASTC_5x5_KHR: 0x93B2,
          COMPRESSED_RGBA_ASTC_6x5_KHR: 0x93B3,
          COMPRESSED_RGBA_ASTC_6x6_KHR: 0x93B4,
          COMPRESSED_RGBA_ASTC_8x5_KHR: 0x93B5,
          COMPRESSED_RGBA_ASTC_8x6_KHR: 0x93B6,
          COMPRESSED_RGBA_ASTC_8x8_KHR: 0x93B7,
          COMPRESSED_RGBA_ASTC_10x5_KHR: 0x93B8,
          COMPRESSED_RGBA_ASTC_10x6_KHR: 0x93B9,
          COMPRESSED_RGBA_ASTC_10x8_KHR: 0x93BA,
          COMPRESSED_RGBA_ASTC_10x10_KHR: 0x93BB,
          COMPRESSED_RGBA_ASTC_12x10_KHR: 0x93BC,
          COMPRESSED_RGBA_ASTC_12x12_KHR: 0x93BD,
          COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 0x93D0,
          COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 0x93D1,
          COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 0x93D2,
          COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 0x93D3,
          COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 0x93D4,
          COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 0x93D5,
          COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 0x93D6,
          COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 0x93D7,
          COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 0x93D8,
          COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 0x93D9,
          COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 0x93DA,
          COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 0x93DB,
          COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 0x93DC,
          COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 0x93DD,
          TYPE_SIZE: {
            [gl.BYTE]: 1,
            [gl.UNSIGNED_BYTE]: 1,
            [gl.SHORT]: 2,
            [gl.UNSIGNED_SHORT]: 2,
            [gl.INT]: 4,
            [gl.UNSIGNED_INT]: 4,
            [gl.FLOAT]: 4
          },
          WEBGL_INFO: {
            MAX_TEXTURE_UNITS: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            MAX_UNIFORM_BUFFERS: gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS)
          },
          DUMMY_OBJECT: {}
        };
        module.exports = CONSTANTS;
        /***/
      },
      /* 1 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);

        const TEXTURE_FORMAT_DEFAULTS = {
          [CONSTANTS.UNSIGNED_BYTE]: {
            [CONSTANTS.RED]: CONSTANTS.R8,
            [CONSTANTS.RG]: CONSTANTS.RG8,
            [CONSTANTS.RGB]: CONSTANTS.RGB8,
            [CONSTANTS.RGBA]: CONSTANTS.RGBA8
          },
          [CONSTANTS.UNSIGNED_SHORT]: {
            [CONSTANTS.DEPTH_COMPONENT]: CONSTANTS.DEPTH_COMPONENT16
          },
          [CONSTANTS.FLOAT]: {
            [CONSTANTS.RED]: CONSTANTS.R16F,
            [CONSTANTS.RG]: CONSTANTS.RG16F,
            [CONSTANTS.RGB]: CONSTANTS.RGB16F,
            [CONSTANTS.RGBA]: CONSTANTS.RGBA16F,
            [CONSTANTS.DEPTH_COMPONENT]: CONSTANTS.DEPTH_COMPONENT32F
          },
          COMPRESSED_TYPES: {}
        };
        module.exports = TEXTURE_FORMAT_DEFAULTS;
        /***/
      },
      /* 2 */

      /***/
      function (module, exports, __webpack_require__) {
        class Shader {
          constructor(gl, type, source) {
            this.gl = gl;
            this.shader = gl.createShader(type);
            gl.shaderSource(this.shader, source);
            gl.compileShader(this.shader);

            if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
              let i, lines;
              console.error(gl.getShaderInfoLog(this.shader));
              lines = source.split("\n");

              for (i = 0; i < lines.length; ++i) {
                console.error(`${i + 1}: ${lines[i]}`);
              }
            }
          }
          /**
              Delete this shader.
               @method
              @return {Shader} The Shader object.
          */


          delete() {
            if (this.shader) {
              this.gl.deleteShader(this.shader);
              this.shader = null;
            }

            return this;
          }

        }

        module.exports = Shader;
        /***/
      },
      /* 3 */

      /***/
      function (module, exports, __webpack_require__) {
        class Query {
          constructor(gl, target) {
            this.gl = gl;
            this.query = gl.createQuery();
            this.target = target;
            this.active = false;
            this.result = null;
          }
          /**
              Begin a query.
               @method
              @return {Query} The Query object.
          */


          begin() {
            if (!this.active) {
              this.gl.beginQuery(this.target, this.query);
              this.result = null;
            }

            return this;
          }
          /**
              End a query.
               @method
              @return {Query} The Query object.
          */


          end() {
            if (!this.active) {
              this.gl.endQuery(this.target);
              this.active = true;
            }

            return this;
          }
          /**
              Check if query result is available.
               @method
              @return {boolean} If results are available.
          */


          ready() {
            if (this.active && this.gl.getQueryParameter(this.query, this.gl.QUERY_RESULT_AVAILABLE)) {
              this.active = false; // Note(Tarek): Casting because FF incorrectly returns booleans.
              // https://bugzilla.mozilla.org/show_bug.cgi?id=1422714 

              this.result = Number(this.gl.getQueryParameter(this.query, this.gl.QUERY_RESULT));
              return true;
            }

            return false;
          }
          /**
              Delete this query.
               @method
              @return {Query} The Query object.
          */


          delete() {
            if (this.query) {
              this.gl.deleteQuery(this.query);
              this.query = null;
            }

            return this;
          }

        }

        module.exports = Query;
        /***/
      },
      /* 4 */

      /***/
      function (module, exports, __webpack_require__) {
        const App = __webpack_require__(5);
        /**
            Global PicoGL module. For convenience, all WebGL enums are stored
            as properties of PicoGL (e.g. PicoGL.FLOAT, PicoGL.ONE_MINUS_SRC_ALPHA).
        
            @namespace PicoGL
        */


        const PicoGL = __webpack_require__(0);

        PicoGL.version = "0.8.9";
        /**
            Create a PicoGL app. The app is the primary entry point to PicoGL. It stores
            the canvas, the WebGL context and all WebGL state.
        
            @function PicoGL.createApp
            @param {DOMElement} canvas The canvas on which to create the WebGL context.
            @param {Object} [contextAttributes] Context attributes to pass when calling getContext().
            @return {App} New App object.
        */

        PicoGL.createApp = function (canvas, contextAttributes) {
          return new App(canvas, contextAttributes);
        };

        module.exports = PicoGL;
        /***/
      },
      /* 5 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);

        const TEXTURE_FORMAT_DEFAULTS = __webpack_require__(1);

        const Cubemap = __webpack_require__(6);

        const DrawCall = __webpack_require__(7);

        const Framebuffer = __webpack_require__(8);

        const Program = __webpack_require__(9);

        const Shader = __webpack_require__(2);

        const Texture = __webpack_require__(11);

        const Timer = __webpack_require__(12);

        const TransformFeedback = __webpack_require__(13);

        const UniformBuffer = __webpack_require__(14);

        const VertexArray = __webpack_require__(15);

        const VertexBuffer = __webpack_require__(16);

        const Query = __webpack_require__(3);
        /**
            Primary entry point to PicoGL. An app will store all parts of the WebGL
            state.
        
            @class
            @prop {DOMElement} canvas The canvas on which this app drawing.
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {number} width The width of the drawing surface.
            @prop {number} height The height of the drawing surface.
            @prop {boolean} floatRenderTargetsEnabled Whether the EXT_color_buffer_float extension is enabled.
            @prop {boolean} linearFloatTexturesEnabled Whether the OES_texture_float_linear extension is enabled.
            @prop {boolean} s3tcTexturesEnabled Whether the WEBGL_compressed_texture_s3tc extension is enabled.
            @prop {boolean} s3tcSRGBTexturesEnabled Whether the WEBGL_compressed_texture_s3tc_srgb extension is enabled.
            @prop {boolean} etcTexturesEnabled Whether the WEBGL_compressed_texture_etc extension is enabled.
            @prop {boolean} astcTexturesEnabled Whether the WEBGL_compressed_texture_astc extension is enabled.
            @prop {boolean} pvrtcTexturesEnabled Whether the WEBGL_compressed_texture_pvrtc extension is enabled.
            @prop {Object} state Tracked GL state.
            @prop {GLEnum} clearBits Current clear mask to use with clear().    
        */


        class App {
          constructor(canvas, contextAttributes) {
            this.canvas = canvas;
            this.gl = canvas.getContext("webgl2", contextAttributes);
            this.width = this.gl.drawingBufferWidth;
            this.height = this.gl.drawingBufferHeight;
            this.viewportX = 0;
            this.viewportY = 0;
            this.viewportWidth = 0;
            this.viewportHeight = 0;
            this.currentDrawCalls = null;
            this.emptyFragmentShader = null;
            this.state = {
              program: null,
              vertexArray: null,
              transformFeedback: null,
              activeTexture: -1,
              textures: new Array(CONSTANTS.WEBGL_INFO.MAX_TEXTURE_UNITS),
              uniformBuffers: new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORM_BUFFERS),
              freeUniformBufferBases: [],
              drawFramebuffer: null,
              readFramebuffer: null
            };
            this.clearBits = this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT;
            this.cpuTime = 0;
            this.gpuTime = 0; // Extensions

            this.floatRenderTargetsEnabled = false;
            this.linearFloatTexturesEnabled = false;
            this.s3tcTexturesEnabled = false;
            this.s3tcSRGBTexturesEnabled = false;
            this.etcTexturesEnabled = false;
            this.astcTexturesEnabled = false;
            this.pvrtcTexturesEnabled = false;
            this.viewport(0, 0, this.width, this.height);
          }
          /**
              Set the color mask to selectively enable or disable particular
              color channels while rendering.
               @method
              @param {boolean} r Red channel.
              @param {boolean} g Green channel.
              @param {boolean} b Blue channel.
              @param {boolean} a Alpha channel.
              @return {App} The App object.
          */


          colorMask(r, g, b, a) {
            this.gl.colorMask(r, g, b, a);
            return this;
          }
          /**
              Set the clear color.
               @method
              @param {number} r Red channel.
              @param {number} g Green channel.
              @param {number} b Blue channel.
              @param {number} a Alpha channel.
              @return {App} The App object.
          */


          clearColor(r, g, b, a) {
            this.gl.clearColor(r, g, b, a);
            return this;
          }
          /**
              Set the clear mask bits to use when calling clear().
              E.g. app.clearMask(PicoGL.COLOR_BUFFER_BIT).
               @method
              @param {GLEnum} mask Bit mask of buffers to clear.
              @return {App} The App object.
          */


          clearMask(mask) {
            this.clearBits = mask;
            return this;
          }
          /**
              Clear the canvas
               @method
              @return {App} The App object.
          */


          clear() {
            this.gl.clear(this.clearBits);
            return this;
          }
          /**
              Bind a draw framebuffer to the WebGL context.
               @method
              @param {Framebuffer} framebuffer The Framebuffer object to bind.
              @see Framebuffer
              @return {App} The App object.
          */


          drawFramebuffer(framebuffer) {
            framebuffer.bindForDraw();
            return this;
          }
          /**
              Bind a read framebuffer to the WebGL context.
               @method
              @param {Framebuffer} framebuffer The Framebuffer object to bind.
              @see Framebuffer
              @return {App} The App object.
          */


          readFramebuffer(framebuffer) {
            framebuffer.bindForRead();
            return this;
          }
          /**
              Switch back to the default framebuffer for drawing (i.e. draw to the screen).
              Note that this method resets the viewport to match the default framebuffer.
               @method
              @return {App} The App object.
          */


          defaultDrawFramebuffer() {
            if (this.state.drawFramebuffer !== null) {
              this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, null);
              this.state.drawFramebuffer = null;
            }

            return this;
          }
          /**
              Switch back to the default framebuffer for reading (i.e. read from the screen).
               @method
              @return {App} The App object.
          */


          defaultReadFramebuffer() {
            if (this.state.readFramebuffer !== null) {
              this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, null);
              this.state.readFramebuffer = null;
            }

            return this;
          }
          /**
              Set the depth range.
               @method
              @param {number} near Minimum depth value.
              @param {number} far Maximum depth value.
              @return {App} The App object.
          */


          depthRange(near, far) {
            this.gl.depthRange(near, far);
            return this;
          }
          /**
              Enable depth testing.
               @method
              @return {App} The App object.
          */


          depthTest() {
            this.gl.enable(this.gl.DEPTH_TEST);
            return this;
          }
          /**
              Disable depth testing.
               @method
              @return {App} The App object.
          */


          noDepthTest() {
            this.gl.disable(this.gl.DEPTH_TEST);
            return this;
          }
          /**
              Enable or disable writing to the depth buffer.
               @method
              @param {Boolean} mask The depth mask.
              @return {App} The App object.
          */


          depthMask(mask) {
            this.gl.depthMask(mask);
            return this;
          }
          /**
              Set the depth test function. E.g. app.depthFunc(PicoGL.LEQUAL).
               @method
              @param {GLEnum} func The depth testing function to use.
              @return {App} The App object.
          */


          depthFunc(func) {
            this.gl.depthFunc(func);
            return this;
          }
          /**
              Enable blending.
               @method
              @return {App} The App object.
          */


          blend() {
            this.gl.enable(this.gl.BLEND);
            return this;
          }
          /**
              Disable blending
               @method
              @return {App} The App object.
          */


          noBlend() {
            this.gl.disable(this.gl.BLEND);
            return this;
          }
          /**
              Set the blend function. E.g. app.blendFunc(PicoGL.ONE, PicoGL.ONE_MINUS_SRC_ALPHA).
               @method
              @param {GLEnum} src The source blending weight.
              @param {GLEnum} dest The destination blending weight.
              @return {App} The App object.
          */


          blendFunc(src, dest) {
            this.gl.blendFunc(src, dest);
            return this;
          }
          /**
              Set the blend function, with separate weighting for color and alpha channels.
              E.g. app.blendFuncSeparate(PicoGL.ONE, PicoGL.ONE_MINUS_SRC_ALPHA, PicoGL.ONE, PicoGL.ONE).
               @method
              @param {GLEnum} csrc The source blending weight for the RGB channels.
              @param {GLEnum} cdest The destination blending weight for the RGB channels.
              @param {GLEnum} asrc The source blending weight for the alpha channel.
              @param {GLEnum} adest The destination blending weight for the alpha channel.
              @return {App} The App object.
          */


          blendFuncSeparate(csrc, cdest, asrc, adest) {
            this.gl.blendFuncSeparate(csrc, cdest, asrc, adest);
            return this;
          }
          /**
              Enable stencil testing.
              NOTE: Only works if { stencil: true } passed as a
              context attribute when creating the App!
               @method
              @return {App} The App object.
          */


          stencilTest() {
            this.gl.enable(this.gl.STENCIL_TEST);
            return this;
          }
          /**
              Disable stencil testing.
               @method
              @return {App} The App object.
          */


          noStencilTest() {
            this.gl.disable(this.gl.STENCIL_TEST);
            return this;
          }
          /**
              Enable scissor testing.
               @method
              @return {App} The App object.
          */


          scissorTest() {
            this.gl.enable(this.gl.SCISSOR_TEST);
            return this;
          }
          /**
              Disable scissor testing.
               @method
              @return {App} The App object.
          */


          noScissorTest() {
            this.gl.disable(this.gl.SCISSOR_TEST);
            return this;
          }
          /**
              Define the scissor box.
               @method
              @return {App} The App object.
          */


          scissor(x, y, width, height) {
            this.gl.scissor(x, y, width, height);
            return this;
          }
          /**
              Set the bitmask to use for tested stencil values.
              E.g. app.stencilMask(0xFF).
              NOTE: Only works if { stencil: true } passed as a
              context attribute when creating the App!
               @method
              @param {number} mask The mask value.
              @return {App} The App object.
           */


          stencilMask(mask) {
            this.gl.stencilMask(mask);
            return this;
          }
          /**
              Set the bitmask to use for tested stencil values for a particular face orientation.
              E.g. app.stencilMaskSeparate(PicoGL.FRONT, 0xFF).
              NOTE: Only works if { stencil: true } passed as a
              context attribute when creating the App!
               @method
              @param {GLEnum} face The face orientation to apply the mask to.
              @param {number} mask The mask value.
              @return {App} The App object.
          */


          stencilMaskSeparate(face, mask) {
            this.gl.stencilMaskSeparate(face, mask);
            return this;
          }
          /**
              Set the stencil function and reference value.
              E.g. app.stencilFunc(PicoGL.EQUAL, 1, 0xFF).
              NOTE: Only works if { stencil: true } passed as a
              context attribute when creating the App!
               @method
              @param {GLEnum} func The testing function.
              @param {number} ref The reference value.
              @param {GLEnum} mask The bitmask to use against tested values before applying
                  the stencil function.
              @return {App} The App object.
          */


          stencilFunc(func, ref, mask) {
            this.gl.stencilFunc(func, ref, mask);
            return this;
          }
          /**
              Set the stencil function and reference value for a particular face orientation.
              E.g. app.stencilFuncSeparate(PicoGL.FRONT, PicoGL.EQUAL, 1, 0xFF).
              NOTE: Only works if { stencil: true } passed as a
              context attribute when creating the App!
               @method
              @param {GLEnum} face The face orientation to apply the function to.
              @param {GLEnum} func The testing function.
              @param {number} ref The reference value.
              @param {GLEnum} mask The bitmask to use against tested values before applying
                  the stencil function.
              @return {App} The App object.
          */


          stencilFuncSeparate(face, func, ref, mask) {
            this.gl.stencilFuncSeparate(face, func, ref, mask);
            return this;
          }
          /**
              Set the operations for updating stencil buffer values.
              E.g. app.stencilOp(PicoGL.KEEP, PicoGL.KEEP, PicoGL.REPLACE).
              NOTE: Only works if { stencil: true } passed as a
              context attribute when creating the App!
               @method
              @param {GLEnum} stencilFail Operation to apply if the stencil test fails.
              @param {GLEnum} depthFail Operation to apply if the depth test fails.
              @param {GLEnum} pass Operation to apply if the both the depth and stencil tests pass.
              @return {App} The App object.
          */


          stencilOp(stencilFail, depthFail, pass) {
            this.gl.stencilOp(stencilFail, depthFail, pass);
            return this;
          }
          /**
              Set the operations for updating stencil buffer values for a particular face orientation.
              E.g. app.stencilOpSeparate(PicoGL.FRONT, PicoGL.KEEP, PicoGL.KEEP, PicoGL.REPLACE).
              NOTE: Only works if { stencil: true } passed as a
              context attribute when creating the App!
               @method
              @param {GLEnum} face The face orientation to apply the operations to.
              @param {GLEnum} stencilFail Operation to apply if the stencil test fails.
              @param {GLEnum} depthFail Operation to apply if the depth test fails.
              @param {GLEnum} pass Operation to apply if the both the depth and stencil tests pass.
              @return {App} The App object.
          */


          stencilOpSeparate(face, stencilFail, depthFail, pass) {
            this.gl.stencilOpSeparate(face, stencilFail, depthFail, pass);
            return this;
          }
          /**
              Enable rasterization step.
               @method
              @return {App} The App object.
          */


          rasterize() {
            this.gl.disable(this.gl.RASTERIZER_DISCARD);
            return this;
          }
          /**
              Disable rasterization step.
               @method
              @return {App} The App object.
          */


          noRasterize() {
            this.gl.enable(this.gl.RASTERIZER_DISCARD);
            return this;
          }
          /**
              Enable backface culling.
               @method
              @return {App} The App object.
          */


          cullBackfaces() {
            this.gl.enable(this.gl.CULL_FACE);
            return this;
          }
          /**
              Disable backface culling.
               @method
              @return {App} The App object.
          */


          drawBackfaces() {
            this.gl.disable(this.gl.CULL_FACE);
            return this;
          }
          /**
              Enable the EXT_color_buffer_float extension. Allows for creating float textures as
              render targets on FrameBuffer objects.
               @method
              @see Framebuffer
              @return {App} The App object.
          */


          floatRenderTargets() {
            this.floatRenderTargetsEnabled = !!this.gl.getExtension("EXT_color_buffer_float");
            return this;
          }
          /**
              Enable the OES_texture_float_linear extension. Allows for linear blending on float textures.
               @method
              @see Framebuffer
              @return {App} The App object.
          */


          linearFloatTextures() {
            this.linearFloatTexturesEnabled = !!this.gl.getExtension("OES_texture_float_linear");
            return this;
          }
          /**
              Enable the WEBGL_compressed_texture_s3tc and WEBGL_compressed_texture_s3tc_srgb extensions, which 
              allow the following enums to be used as texture formats:
               <ul>
                <li>PicoGL.COMPRESSED_RGB_S3TC_DXT1_EXT
                <li>PicoGL.COMPRESSED_RGBA_S3TC_DXT1_EXT
                <li>PicoGL.COMPRESSED_RGBA_S3TC_DXT3_EXT
                <li>PicoGL.COMPRESSED_RGBA_S3TC_DXT5_EXT
                <li>PicoGL.COMPRESSED_SRGB_S3TC_DXT1_EXT
                <li>PicoGL.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT
                <li>PicoGL.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT
                <li>PicoGL.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
              </ul>
               @method
              @return {App} The App object.
          */


          s3tcTextures() {
            let ext = this.gl.getExtension("WEBGL_compressed_texture_s3tc");
            this.s3tcTexturesEnabled = !!ext;

            if (this.s3tcTexturesEnabled) {
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGB_S3TC_DXT1_EXT] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_S3TC_DXT1_EXT] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_S3TC_DXT3_EXT] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_S3TC_DXT5_EXT] = true;
            }

            ext = this.gl.getExtension("WEBGL_compressed_texture_s3tc_srgb");
            this.s3tcSRGBTexturesEnabled = !!ext;

            if (this.s3tcSRGBTexturesEnabled) {
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB_S3TC_DXT1_EXT] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = true;
            }

            return this;
          }
          /**
              Enable the WEBGL_compressed_texture_etc extension, which allows the following enums to
              be used as texture formats:
              
              <ul>
                <li>PicoGL.COMPRESSED_R11_EAC
                <li>PicoGL.COMPRESSED_SIGNED_R11_EAC
                <li>PicoGL.COMPRESSED_RG11_EAC
                <li>PicoGL.COMPRESSED_SIGNED_RG11_EAC
                <li>PicoGL.COMPRESSED_RGB8_ETC2
                <li>PicoGL.COMPRESSED_SRGB8_ETC2
                <li>PicoGL.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2
                <li>PicoGL.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2
                <li>PicoGL.COMPRESSED_RGBA8_ETC2_EAC
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
              </ul>
               Note that while WEBGL_compressed_texture_etc1 is not enabled by this method,
              ETC1 textures can be loaded using COMPRESSED_RGB8_ETC2 as the format.
               @method
              @return {App} The App object.
          */


          etcTextures() {
            let ext = this.gl.getExtension("WEBGL_compressed_texture_etc");
            this.etcTexturesEnabled = !!ext;

            if (this.etcTexturesEnabled) {
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_R11_EAC] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SIGNED_R11_EAC] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RG11_EAC] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SIGNED_RG11_EAC] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGB8_ETC2] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ETC2] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA8_ETC2_EAC] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = true;
            }

            return this;
          }
          /**
              Enable the WEBGL_compressed_texture_astc extension, which allows the following enums to
              be used as texture formats:
              
              <ul>
                <li>PicoGL.COMPRESSED_RGBA_ASTC_4x4_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_5x4_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_5x5_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_6x5_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_6x6_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_8x5_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_8x6_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_8x8_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_10x5_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_10x6_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_10x8_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_10x10_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_12x10_KHR
                <li>PicoGL.COMPRESSED_RGBA_ASTC_12x12_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
                <li>PicoGL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
              </ul>
               @method
              @return {App} The App object.
          */


          astcTextures() {
            let ext = this.gl.getExtension("WEBGL_compressed_texture_astc");
            this.astcTexturesEnabled = !!ext;

            if (this.astcTexturesEnabled) {
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_4x4_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_5x4_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_5x5_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_6x5_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_6x6_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_8x5_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_8x6_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_8x8_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_10x5_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_10x6_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_10x8_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_10x10_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_12x10_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_ASTC_12x12_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR] = true;
            }

            return this;
          }
          /**
              Enable the WEBGL_compressed_texture_pvrtc extension, which allows the following enums to
              be used as texture formats:
               <ul>
                <li>PicoGL.COMPRESSED_RGB_PVRTC_4BPPV1_IMG
                <li>PicoGL.COMPRESSED_RGB_PVRTC_2BPPV1_IMG
                <li>PicoGL.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
                <li>PicoGL.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
              </ul>
               @method
              @return {App} The App object.
          */


          pvrtcTextures() {
            let ext = this.gl.getExtension("WEBGL_compressed_texture_pvrtc");
            this.pvrtcTexturesEnabled = !!ext;

            if (this.pvrtcTexturesEnabled) {
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = true;
              TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = true;
            }

            return this;
          }
          /**
              Read a pixel's color value from the currently-bound framebuffer.
               @method
              @param {number} x The x coordinate of the pixel.
              @param {number} y The y coordinate of the pixel.
              @param {ArrayBufferView} outColor Typed array to store the pixel's color.
              @param {object} [options] Options.
              @param {GLEnum} [options.type=UNSIGNED_BYTE] Type of data stored in the read framebuffer.
              @param {GLEnum} [options.format=RGBA] Read framebuffer data format.
              @return {App} The App object.
          */


          readPixel(x, y, outColor, options = CONSTANTS.DUMMY_OBJECT) {
            let {
              format = CONSTANTS.RGBA,
              type = CONSTANTS.UNSIGNED_BYTE
            } = options;
            this.gl.readPixels(x, y, 1, 1, format, type, outColor);
            return this;
          }
          /**
              Set the viewport.
               @method
              @param {number} x Left bound of the viewport rectangle.
              @param {number} y Lower bound of the viewport rectangle.
              @param {number} width Width of the viewport rectangle.
              @param {number} height Height of the viewport rectangle.
              @return {App} The App object.
          */


          viewport(x, y, width, height) {
            if (this.viewportWidth !== width || this.viewportHeight !== height || this.viewportX !== x || this.viewportY !== y) {
              this.viewportX = x;
              this.viewportY = y;
              this.viewportWidth = width;
              this.viewportHeight = height;
              this.gl.viewport(x, y, this.viewportWidth, this.viewportHeight);
            }

            return this;
          }
          /**
              Set the viewport to the full canvas.
               @method
              @return {App} The App object.
          */


          defaultViewport() {
            this.viewport(0, 0, this.width, this.height);
            return this;
          }
          /**
              Resize the drawing surface.
               @method
              @param {number} width The new canvas width.
              @param {number} height The new canvas height.
              @return {App} The App object.
          */


          resize(width, height) {
            this.canvas.width = width;
            this.canvas.height = height;
            this.width = this.gl.drawingBufferWidth;
            this.height = this.gl.drawingBufferHeight;
            this.viewport(0, 0, this.width, this.height);
            return this;
          }
          /**
              Create a program.
               @method
              @param {Shader|string} vertexShader Vertex shader object or source code.
              @param {Shader|string} fragmentShader Fragment shader object or source code.
              @param {Array} [xformFeedbackVars] Transform feedback varyings.
              @return {Program} New Program object.
          */


          createProgram(vsSource, fsSource, xformFeedbackVars) {
            return new Program(this.gl, this.state, vsSource, fsSource, xformFeedbackVars);
          }
          /**
              Create a shader. Creating a shader separately from a program allows for
              shader reuse.
               @method
              @param {GLEnum} type Shader type.
              @param {string} source Shader source.
              @return {Shader} New Shader object.
          */


          createShader(type, source) {
            return new Shader(this.gl, type, source);
          }
          /**
              Create a vertex array.
               @method
              @return {VertexArray} New VertexArray object.
          */


          createVertexArray() {
            return new VertexArray(this.gl, this.state);
          }
          /**
              Create a transform feedback object.
               @method
              @return {TransformFeedback} New TransformFeedback object.
          */


          createTransformFeedback() {
            return new TransformFeedback(this.gl, this.state);
          }
          /**
              Create a vertex buffer.
               @method
              @param {GLEnum} type The data type stored in the vertex buffer.
              @param {number} itemSize Number of elements per vertex.
              @param {ArrayBufferView} data Buffer data.
              @param {GLEnum} [usage=STATIC_DRAW] Buffer usage.
              @return {VertexBuffer} New VertexBuffer object.
          */


          createVertexBuffer(type, itemSize, data, usage) {
            return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage);
          }
          /**
              Create a per-vertex matrix buffer. Matrix buffers ensure that columns
              are correctly split across attribute locations.
               @method
              @param {GLEnum} type The data type stored in the matrix buffer. Valid types
              are FLOAT_MAT4, FLOAT_MAT4x2, FLOAT_MAT4x3, FLOAT_MAT3, FLOAT_MAT3x2,
              FLOAT_MAT3x4, FLOAT_MAT2, FLOAT_MAT2x3, FLOAT_MAT2x4.
              @param {ArrayBufferView} data Matrix buffer data.
              @param {GLEnum} [usage=STATIC_DRAW] Buffer usage.
              @return {VertexBuffer} New VertexBuffer object.
          */


          createMatrixBuffer(type, data, usage) {
            return new VertexBuffer(this.gl, this.state, type, 0, data, usage);
          }
          /**
              Create an index buffer.
               @method
              @param {GLEnum} type The data type stored in the index buffer.
              @param {number} itemSize Number of elements per primitive.
              @param {ArrayBufferView} data Index buffer data.
              @param {GLEnum} [usage=STATIC_DRAW] Buffer usage.
              @return {VertexBuffer} New VertexBuffer object.
          */


          createIndexBuffer(type, itemSize, data, usage) {
            return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage, true);
          }
          /**
              Create a uniform buffer in std140 layout. NOTE: FLOAT_MAT2, FLOAT_MAT3x2, FLOAT_MAT4x2,
              FLOAT_MAT3, FLOAT_MAT2x3, FLOAT_MAT4x3 are supported, but must be manually padded to
              4-float column alignment by the application!
               @method
              @param {Array} layout Array indicating the order and types of items to
                              be stored in the buffer.
              @param {GLEnum} [usage=DYNAMIC_DRAW] Buffer usage.
              @return {UniformBuffer} New UniformBuffer object.
          */


          createUniformBuffer(layout, usage) {
            return new UniformBuffer(this.gl, this.state, layout, usage);
          }
          /**
              Create a 2D texture. Can be used in several ways depending on the type of texture data:
              <ul>
                  <li><b>app.createTexture2D(ImageElement, options)</b>: Create texture from a DOM image element.
                  <li><b>app.createTexture2D(TypedArray, width, height, options)</b>: Create texture from a typed array.
                  <li><b>app.createTexture2D(width, height, options)</b>: Create empty texture.
              </ul>
               @method
              @param {DOMElement|ArrayBufferView|Array} [image] Image data. An array can be passed to manually set all levels 
                  of the mipmap chain. If a single level is passed and mipmap filtering is being used,
                  generateMipmap() will be called to produce the remaining levels.
              @param {number} [width] Texture width. Required for array or empty data.
              @param {number} [height] Texture height. Required for array or empty data.
              @param {Object} [options] Texture options.
              @param {GLEnum} [options.type] Type of data stored in the texture. Defaults to UNSIGNED_SHORT 
                  if format is DEPTH_COMPONENT, UNSIGNED_BYTE otherwise.
              @param {GLEnum} [options.format=RGBA] Texture data format.
              @param {GLEnum} [options.internalFormat=RGBA] Texture data internal format.
              @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture. 
              @param {GLEnum} [options.minFilter] Minification filter. Defaults to 
                  LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
              @param {GLEnum} [options.magFilter] Magnification filter. Defaults to LINEAR
                  if image data is provided, NEAREST otherwise.
              @param {GLEnum} [options.wrapS=REPEAT] Horizontal wrap mode.
              @param {GLEnum} [options.wrapT=REPEAT] Vertical wrap mode.
              @param {GLEnum} [options.compareMode=NONE] Comparison mode.
              @param {GLEnum} [options.compareFunc=LEQUAL] Comparison function.
              @param {GLEnum} [options.baseLevel] Base mipmap level.
              @param {GLEnum} [options.maxLevel] Maximum mipmap level.
              @param {GLEnum} [options.minLOD] Mimimum level of detail.
              @param {GLEnum} [options.maxLOD] Maximum level of detail.
              @param {boolean} [options.generateMipmaps] Should mipmaps be generated. Defaults to generating mipmaps if
                  a mipmap sampling filter is used and the mipmap levels aren't provided directly.
              @return {Texture} New Texture object.
          */


          createTexture2D(image, width, height, options) {
            if (typeof image === "number") {
              // Create empty texture just give width/height.
              options = height;
              height = width;
              width = image;
              image = null;
            } else if (height === undefined) {
              // Passing in a DOM element. Height/width not required.
              options = width;
              width = image.width;
              height = image.height;
            }

            return new Texture(this.gl, this.state, this.gl.TEXTURE_2D, image, width, height, undefined, false, options);
          }
          /**
              Create a 2D texture array.
               @method
              @param {ArrayBufferView|Array} image Pixel data. An array can be passed to manually set all levels 
                  of the mipmap chain. If a single level is passed and mipmap filtering is being used,
                  generateMipmap() will be called to produce the remaining levels.
              @param {number} width Texture width.
              @param {number} height Texture height.
              @param {number} size Number of images in the array.
              @param {Object} [options] Texture options.
               @param {GLEnum} [options.type] Type of data stored in the texture. Defaults to UNSIGNED_SHORT 
                  if format is DEPTH_COMPONENT, UNSIGNED_BYTE otherwise.
              @param {GLEnum} [options.format=RGBA] Texture data format.
              @param {GLEnum} [options.internalFormat=RGBA] Texture data internal format.
              @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture. 
              @param {GLEnum} [options.minFilter] Minification filter. Defaults to 
                  LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
              @param {GLEnum} [options.magFilter] Magnification filter. Defaults to LINEAR
                  if image data is provided, NEAREST otherwise.
              @param {GLEnum} [options.wrapS=REPEAT] Horizontal wrap mode.
              @param {GLEnum} [options.wrapT=REPEAT] Vertical wrap mode.
              @param {GLEnum} [options.wrapR=REPEAT] Depth wrap mode.
              @param {GLEnum} [options.compareMode=NONE] Comparison mode.
              @param {GLEnum} [options.compareFunc=LEQUAL] Comparison function.
              @param {GLEnum} [options.baseLevel] Base mipmap level.
              @param {GLEnum} [options.maxLevel] Maximum mipmap level.
              @param {GLEnum} [options.minLOD] Mimimum level of detail.
              @param {GLEnum} [options.maxLOD] Maximum level of detail.
              @param {boolean} [options.generateMipmaps] Should mipmaps be generated. Defaults to generating mipmaps if
                  a mipmap sampling filter is use and the mipmap levels aren't provided directly.
              @return {Texture} New Texture object.
          */


          createTextureArray(image, width, height, depth, options) {
            if (typeof image === "number") {
              // Create empty texture just give width/height/depth.
              options = depth;
              depth = height;
              height = width;
              width = image;
              image = null;
            }

            return new Texture(this.gl, this.state, this.gl.TEXTURE_2D_ARRAY, image, width, height, depth, true, options);
          }
          /**
              Create a 3D texture.
               @method
              @param {ArrayBufferView|Array} image Pixel data. An array can be passed to manually set all levels 
                  of the mipmap chain. If a single level is passed and mipmap filtering is being used,
                  generateMipmap() will be called to produce the remaining levels.
              @param {number} width Texture width.
              @param {number} height Texture height.
              @param {number} depth Texture depth.
              @param {Object} [options] Texture options.
              @param {GLEnum} [options.type] Type of data stored in the texture. Defaults to UNSIGNED_SHORT 
                  if format is DEPTH_COMPONENT, UNSIGNED_BYTE otherwise.
              @param {GLEnum} [options.format=RGBA] Texture data format.
              @param {GLEnum} [options.internalFormat=RGBA] Texture data internal format.
              @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture. 
              @param {GLEnum} [options.minFilter] Minification filter. Defaults to 
                  LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
              @param {GLEnum} [options.magFilter] Magnification filter. Defaults to LINEAR
                  if image data is provided, NEAREST otherwise.
              @param {GLEnum} [options.wrapS=REPEAT] Horizontal wrap mode.
              @param {GLEnum} [options.wrapT=REPEAT] Vertical wrap mode.
              @param {GLEnum} [options.wrapR=REPEAT] Depth wrap mode.
              @param {GLEnum} [options.compareMode=NONE] Comparison mode.
              @param {GLEnum} [options.compareFunc=LEQUAL] Comparison function.
              @param {GLEnum} [options.baseLevel] Base mipmap level.
              @param {GLEnum} [options.maxLevel] Maximum mipmap level.
              @param {GLEnum} [options.minLOD] Mimimum level of detail.
              @param {GLEnum} [options.maxLOD] Maximum level of detail.
              @param {boolean} [options.generateMipmaps] Should mipmaps be generated. Defaults to generating mipmaps if
                  a mipmap sampling filter is use and the mipmap levels aren't provided directly.
              @return {Texture} New Texture object.
          */


          createTexture3D(image, width, height, depth, options) {
            if (typeof image === "number") {
              // Create empty texture just give width/height/depth.
              options = depth;
              depth = height;
              height = width;
              width = image;
              image = null;
            }

            return new Texture(this.gl, this.state, this.gl.TEXTURE_3D, image, width, height, depth, true, options);
          }
          /**
              Create a cubemap.
               @method
              @param {Object} options Texture options.
              @param {DOMElement|ArrayBufferView} [options.negX] The image data for the negative X direction.
                      Can be any format that would be accepted by texImage2D.
              @param {DOMElement|ArrayBufferView} [options.posX] The image data for the positive X direction.
                      Can be any format that would be accepted by texImage2D.
              @param {DOMElement|ArrayBufferView} [options.negY] The image data for the negative Y direction.
                      Can be any format that would be accepted by texImage2D.
              @param {DOMElement|ArrayBufferView} [options.posY] The image data for the positive Y direction.
                      Can be any format that would be accepted by texImage2D.
              @param {DOMElement|ArrayBufferView} [options.negZ] The image data for the negative Z direction.
                      Can be any format that would be accepted by texImage2D.
              @param {DOMElement|ArrayBufferView} [options.posZ] The image data for the positive Z direction.
                      Can be any format that would be accepted by texImage2D.
              @param {number} [options.width] Cubemap side width. Defaults to the width of negX if negX is an image.
              @param {number} [options.height] Cubemap side height. Defaults to the height of negX if negX is an image.
              @param {GLEnum} [options.type] Type of data stored in the texture. Defaults to UNSIGNED_SHORT 
                  if format is DEPTH_COMPONENT, UNSIGNED_BYTE otherwise.
              @param {GLEnum} [options.format=RGBA] Texture data format.
              @param {GLEnum} [options.internalFormat=RGBA] Texture data internal format.
              @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture. 
              @param {GLEnum} [options.minFilter] Minification filter. Defaults to 
                  LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
              @param {GLEnum} [options.magFilter] Magnification filter. Defaults to LINEAR
                  if image data is provided, NEAREST otherwise.
              @param {GLEnum} [options.wrapS=REPEAT] Horizontal wrap mode.
              @param {GLEnum} [options.wrapT=REPEAT] Vertical wrap mode.
              @param {GLEnum} [options.compareMode=NONE] Comparison mode.
              @param {GLEnum} [options.compareFunc=LEQUAL] Comparison function.
              @param {GLEnum} [options.baseLevel] Base mipmap level.
              @param {GLEnum} [options.maxLevel] Maximum mipmap level.
              @param {GLEnum} [options.minLOD] Mimimum level of detail.
              @param {GLEnum} [options.maxLOD] Maximum level of detail.
              @param {boolean} [options.generateMipmaps] Should mipmaps be generated. Defaults to generating mipmaps if
                  a mipmap sampling filter is usedd.
              @return {Cubemap} New Cubemap object.
          */


          createCubemap(options) {
            return new Cubemap(this.gl, this.state, options);
          }
          /**
              Create a framebuffer.
               @method
              @return {Framebuffer} New Framebuffer object.
          */


          createFramebuffer() {
            return new Framebuffer(this.gl, this.state);
          }
          /**
              Create a query.
               @method
              @param {GLEnum} target Information to query.
              @return {Query} New Query object.
          */


          createQuery(target) {
            return new Query(this.gl, target);
          }
          /**
              Create a timer.
               @method
              @return {Timer} New Timer object.
          */


          createTimer() {
            return new Timer(this.gl);
          }
          /**
              Create a DrawCall. A DrawCall manages the state associated with
              a WebGL draw call including a program and associated vertex data, textures,
              uniforms and uniform blocks.
               @method
              @param {Program} program The program to use for this DrawCall.
              @param {VertexArray} vertexArray Vertex data to use for drawing.
              @param {GLEnum} [primitive=TRIANGLES] Type of primitive to draw.
              @return {DrawCall} New DrawCall object.
          */


          createDrawCall(program, vertexArray, primitive) {
            return new DrawCall(this.gl, this.state, program, vertexArray, primitive);
          }

        }

        module.exports = App;
        /***/
      },
      /* 6 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);

        const TEXTURE_FORMAT_DEFAULTS = __webpack_require__(1);
        /**
            Cubemap for environment mapping.
        
            @class
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {WebGLTexture} texture Handle to the texture.
            @prop {GLEnum} type Type of data stored in the texture.
            @prop {GLEnum} format Layout of texture data.
            @prop {GLEnum} internalFormat Internal arrangement of the texture data.
            @prop {Number} currentUnit The current texture unit this cubemap is bound to.
            @prop {Object} appState Tracked GL state.
        */


        class Cubemap {
          constructor(gl, appState, options) {
            let {
              negX,
              posX,
              negY,
              posY,
              negZ,
              posZ
            } = options;
            let defaultType = options.format === CONSTANTS.DEPTH_COMPONENT ? CONSTANTS.UNSIGNED_SHORT : CONSTANTS.UNSIGNED_BYTE;
            this.gl = gl;
            this.texture = gl.createTexture();
            this.format = options.format !== undefined ? options.format : gl.RGBA;
            this.type = options.type !== undefined ? options.type : defaultType;
            this.internalFormat = options.internalFormat !== undefined ? options.internalFormat : TEXTURE_FORMAT_DEFAULTS[this.type][this.format];
            this.appState = appState; // -1 indicates unbound

            this.currentUnit = -1;
            let {
              width = negX.width,
              height = negX.height,
              flipY = false,
              minFilter = negX ? gl.LINEAR_MIPMAP_NEAREST : gl.NEAREST,
              magFilter = negX ? gl.LINEAR : gl.NEAREST,
              wrapS = gl.REPEAT,
              wrapT = gl.REPEAT,
              compareMode = gl.NONE,
              compareFunc = gl.LEQUAL,
              generateMipmaps = minFilter === gl.LINEAR_MIPMAP_NEAREST || minFilter === gl.LINEAR_MIPMAP_LINEAR
            } = options;
            this.bind(0);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, magFilter);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, minFilter);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, wrapS);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, wrapT);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_FUNC, compareFunc);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_MODE, compareMode);

            if (options.baseLevel !== undefined) {
              gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_BASE_LEVEL, options.baseLevel);
            }

            if (options.maxLevel !== undefined) {
              gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAX_LEVEL, options.maxLevel);
            }

            if (options.minLOD !== undefined) {
              gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_LOD, options.minLOD);
            }

            if (options.maxLOD !== undefined) {
              gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAX_LOD, options.maxLOD);
            }

            let levels = generateMipmaps ? Math.floor(Math.log2(Math.min(width, height))) + 1 : 1;
            gl.texStorage2D(gl.TEXTURE_CUBE_MAP, levels, this.internalFormat, width, height);

            if (negX) {
              gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, 0, 0, width, height, this.format, this.type, negX);
              gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, 0, 0, width, height, this.format, this.type, posX);
              gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, 0, 0, width, height, this.format, this.type, negY);
              gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, 0, 0, width, height, this.format, this.type, posY);
              gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, 0, 0, width, height, this.format, this.type, negZ);
              gl.texSubImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, 0, 0, width, height, this.format, this.type, posZ);
            }

            if (generateMipmaps) {
              gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
            }
          }
          /**
              Delete this cubemap.
               @method
              @return {Cubemap} The Cubemap object.
          */


          delete() {
            if (this.texture) {
              this.gl.deleteTexture(this.texture);
              this.texture = null;
              this.appState.textures[this.currentUnit] = null;
              this.currentUnit = -1;
            }

            return this;
          }
          /**
              Bind this cubemap to a texture unit.
               @method
              @ignore
              @return {Cubemap} The Cubemap object.
          */


          bind(unit) {
            let currentTexture = this.appState.textures[unit];

            if (currentTexture !== this) {
              if (currentTexture) {
                currentTexture.currentUnit = -1;
              }

              if (this.currentUnit !== -1) {
                this.appState.textures[this.currentUnit] = null;
              }

              this.gl.activeTexture(this.gl.TEXTURE0 + unit);
              this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this.texture);
              this.appState.textures[unit] = this;
              this.currentUnit = unit;
            }

            return this;
          }

        }

        module.exports = Cubemap;
        /***/
      },
      /* 7 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);
        /**
            A DrawCall represents the program and values of associated
            attributes, uniforms and textures for a single draw call.
        
            @class
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {Program} currentProgram The program to use for this draw call.
            @prop {VertexArray} currentVertexArray Vertex array to use for this draw call.
            @prop {TransformFeedback} currentTransformFeedback Transform feedback to use for this draw call.
            @prop {Array} uniformBuffers Ordered list of active uniform buffers.
            @prop {Array} uniformBlockNames Ordered list of uniform block names.
            @prop {Object} uniformBlockBases Map of uniform blocks to uniform buffer bases.
            @prop {Number} uniformBlockCount Number of active uniform blocks for this draw call.
            @prop {Object} uniformIndices Map of uniform names to indices in the uniform arrays.
            @prop {Array} uniformNames Ordered list of uniform names.
            @prop {Array} uniformValue Ordered list of uniform values.
            @prop {number} uniformCount The number of active uniforms for this draw call.
            @prop {Array} textures Array of active textures.
            @prop {number} textureCount The number of active textures for this draw call.
            @prop {GLEnum} primitive The primitive type being drawn.
            @prop {Object} appState Tracked GL state.
            @prop {GLsizei} numElements The number of element to draw.
            @prop {GLsizei} numInstances The number of instances to draw.
        */


        class DrawCall {
          constructor(gl, appState, program, vertexArray, primitive = CONSTANTS.TRIANGLES) {
            this.gl = gl;
            this.currentProgram = program;
            this.currentVertexArray = vertexArray;
            this.currentTransformFeedback = null;
            this.appState = appState;
            this.uniformIndices = {};
            this.uniformNames = new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORMS);
            this.uniformValues = new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORMS);
            this.uniformCount = 0;
            this.uniformBuffers = new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORM_BUFFERS);
            this.uniformBlockNames = new Array(CONSTANTS.WEBGL_INFO.MAX_UNIFORM_BUFFERS);
            this.uniformBlockBases = {};
            this.uniformBlockCount = 0;
            this.samplerIndices = {};
            this.textures = new Array(CONSTANTS.WEBGL_INFO.MAX_TEXTURE_UNITS);
            this.textureCount = 0;
            this.primitive = primitive;
            this.numElements = this.currentVertexArray.numElements;
            this.numInstances = this.currentVertexArray.numInstances;
          }
          /**
              Set the current TransformFeedback object for draw
               @method
              @param {TransformFeedback} transformFeedback Transform Feedback to set.
              @return {DrawCall} The DrawCall object.
          */


          transformFeedback(transformFeedback) {
            this.currentTransformFeedback = transformFeedback;
            return this;
          }
          /**
              Set the value for a uniform. Array uniforms are supported by
              using appending "[0]" to the array name and passing a flat array
              with all required values.
               @method
              @param {string} name Uniform name.
              @param {any} value Uniform value.
              @return {DrawCall} The DrawCall object.
          */


          uniform(name, value) {
            let index = this.uniformIndices[name];

            if (index === undefined) {
              index = this.uniformCount++;
              this.uniformIndices[name] = index;
              this.uniformNames[index] = name;
            }

            this.uniformValues[index] = value;
            return this;
          }
          /**
              Set texture to bind to a sampler uniform.
               @method
              @param {string} name Sampler uniform name.
              @param {Texture|Cubemap} texture Texture or Cubemap to bind.
              @return {DrawCall} The DrawCall object.
          */


          texture(name, texture) {
            let unit = this.currentProgram.samplers[name];
            this.textures[unit] = texture;
            return this;
          }
          /**
              Set uniform buffer to bind to a uniform block.
               @method
              @param {string} name Uniform block name.
              @param {UniformBuffer} buffer Uniform buffer to bind.
              @return {DrawCall} The DrawCall object.
          */


          uniformBlock(name, buffer) {
            let base = this.currentProgram.uniformBlocks[name];
            this.uniformBuffers[base] = buffer;
            return this;
          }
          /**
              Set numElements property to allow number of elements to be drawn
               @method
              @param {GLsizei} [count=0] Number of element to draw, 0 set to all.
              @return {DrawCall} The DrawCall object.
          */


          elementCount(count = 0) {
            if (count > 0) {
              this.numElements = Math.min(count, this.currentVertexArray.numElements);
            } else {
              this.numElements = this.currentVertexArray.numElements;
            }

            return this;
          }
          /**
              Set numInstances property to allow number of instances be drawn
               @method
              @param {GLsizei} [count=0] Number of instance to draw, 0 set to all.
              @return {DrawCall} The DrawCall object.
          */


          instanceCount(count = 0) {
            if (count > 0) {
              this.numInstances = Math.min(count, this.currentVertexArray.numInstances);
            } else {
              this.numInstances = this.currentVertexArray.numInstances;
            }

            return this;
          }
          /**
              Draw based on current state.
               @method
              @return {DrawCall} The DrawCall object.
          */


          draw() {
            let uniformNames = this.uniformNames;
            let uniformValues = this.uniformValues;
            let uniformBuffers = this.uniformBuffers;
            let uniformBlockCount = this.currentProgram.uniformBlockCount;
            let textures = this.textures;
            let textureCount = this.currentProgram.samplerCount;
            this.currentProgram.bind();
            this.currentVertexArray.bind();

            for (let uIndex = 0; uIndex < this.uniformCount; ++uIndex) {
              this.currentProgram.uniform(uniformNames[uIndex], uniformValues[uIndex]);
            }

            for (let base = 0; base < uniformBlockCount; ++base) {
              uniformBuffers[base].bind(base);
            }

            for (let tIndex = 0; tIndex < textureCount; ++tIndex) {
              textures[tIndex].bind(tIndex);
            }

            if (this.currentTransformFeedback) {
              this.currentTransformFeedback.bind();
              this.gl.beginTransformFeedback(this.primitive);
            }

            if (this.currentVertexArray.instanced) {
              if (this.currentVertexArray.indexed) {
                this.gl.drawElementsInstanced(this.primitive, this.numElements, this.currentVertexArray.indexType, 0, this.numInstances);
              } else {
                this.gl.drawArraysInstanced(this.primitive, 0, this.numElements, this.numInstances);
              }
            } else if (this.currentVertexArray.indexed) {
              this.gl.drawElements(this.primitive, this.numElements, this.currentVertexArray.indexType, 0);
            } else {
              this.gl.drawArrays(this.primitive, 0, this.numElements);
            }

            if (this.currentTransformFeedback) {
              this.gl.endTransformFeedback(); // TODO(Tarek): Need to rebind buffers due to bug in ANGLE.
              // Remove this when that's fixed.

              for (let i = 0, len = this.currentTransformFeedback.angleBugBuffers.length; i < len; ++i) {
                this.gl.bindBufferBase(this.gl.TRANSFORM_FEEDBACK_BUFFER, i, null);
              }
            }

            return this;
          }

        }

        module.exports = DrawCall;
        /***/
      },
      /* 8 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);
        /**
            Storage for vertex data.
        
            @class
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {WebGLFramebuffer} framebuffer Handle to the framebuffer.
            @prop {Array} colorTextures Array of color texture targets.
            @prop {number} numColorTargets Number of color texture targets.
            @prop {Texture} depthTexture Depth texture target.
            @prop {Array} colorAttachments Array of color attachment enums.
            @prop {Object} appState Tracked GL state.
        */


        class Framebuffer {
          constructor(gl, appState) {
            this.gl = gl;
            this.framebuffer = gl.createFramebuffer();
            this.appState = appState;
            this.numColorTargets = 0;
            this.colorTextures = [];
            this.colorAttachments = [];
            this.colorTextureTargets = [];
            this.depthTexture = null;
            this.depthTextureTarget = null;
          }
          /**
              Attach a color target to this framebuffer.
               @method
              @param {number} index Color attachment index.
              @param {Texture|Cubemap} texture The texture or cubemap to attach.
              @param {GLEnum} [target] The texture target or layer to attach. If the texture is 3D or a texture array,
                  defaults to 0, otherwise to TEXTURE_2D.
              @return {Framebuffer} The Framebuffer object.
          */


          colorTarget(index, texture, target = texture.is3D ? 0 : CONSTANTS.TEXTURE_2D) {
            this.colorAttachments[index] = CONSTANTS.COLOR_ATTACHMENT0 + index;
            let currentFramebuffer = this.bindAndCaptureState();
            this.colorTextures[index] = texture;
            this.colorTextureTargets[index] = target;

            if (texture.is3D) {
              this.gl.framebufferTextureLayer(this.gl.DRAW_FRAMEBUFFER, this.colorAttachments[index], texture.texture, 0, target);
            } else {
              this.gl.framebufferTexture2D(this.gl.DRAW_FRAMEBUFFER, this.colorAttachments[index], target, texture.texture, 0);
            }

            this.gl.drawBuffers(this.colorAttachments);
            this.numColorTargets++;
            this.restoreState(currentFramebuffer);
            return this;
          }
          /**
              Attach a depth target to this framebuffer.
               @method
              @param {Texture|Cubemap} texture The texture or cubemap to attach.
              @param {GLEnum} [target] The texture target or layer to attach. If the texture is 3D or a texture array,
                  defaults to 0, otherwise to TEXTURE_2D.
              @return {Framebuffer} The Framebuffer object.
          */


          depthTarget(texture, target = texture.is3D ? 0 : CONSTANTS.TEXTURE_2D) {
            let currentFramebuffer = this.bindAndCaptureState();
            this.depthTexture = texture;
            this.depthTextureTarget = target;

            if (texture.is3D) {
              this.gl.framebufferTextureLayer(this.gl.DRAW_FRAMEBUFFER, CONSTANTS.DEPTH_ATTACHMENT, texture.texture, 0, target);
            } else {
              this.gl.framebufferTexture2D(this.gl.DRAW_FRAMEBUFFER, CONSTANTS.DEPTH_ATTACHMENT, target, texture.texture, 0);
            }

            this.restoreState(currentFramebuffer);
            return this;
          }
          /**
              Resize all currently attached textures.
               @method
              @param {number} [width=app.width] New width of the framebuffer.
              @param {number} [height=app.height] New height of the framebuffer.
              @return {Framebuffer} The Framebuffer object.
          */


          resize(width = this.gl.drawingBufferWidth, height = this.gl.drawingBufferHeight, depth) {
            let currentFramebuffer = this.bindAndCaptureState();

            for (let i = 0; i < this.numColorTargets; ++i) {
              var texture = this.colorTextures[i];
              texture.resize(width, height, depth);

              if (texture.is3D) {
                this.gl.framebufferTextureLayer(this.gl.DRAW_FRAMEBUFFER, this.colorAttachments[i], texture.texture, 0, this.colorTextureTargets[i]);
              } else {
                this.gl.framebufferTexture2D(this.gl.DRAW_FRAMEBUFFER, this.colorAttachments[i], this.colorTextureTargets[i], texture.texture, 0);
              }
            }

            if (this.depthTexture) {
              this.depthTexture.resize(width, height, depth);

              if (this.depthTexture.is3D) {
                this.gl.framebufferTextureLayer(this.gl.DRAW_FRAMEBUFFER, CONSTANTS.DEPTH_ATTACHMENT, this.depthTexture.texture, 0, this.depthTextureTarget);
              } else {
                this.gl.framebufferTexture2D(this.gl.DRAW_FRAMEBUFFER, CONSTANTS.DEPTH_ATTACHMENT, this.depthTextureTarget, this.depthTexture.texture, 0);
              }
            }

            this.restoreState(currentFramebuffer);
            return this;
          }
          /**
              Delete this framebuffer.
               @method
              @return {Framebuffer} The Framebuffer object.
          */


          delete() {
            if (this.framebuffer) {
              this.gl.deleteFramebuffer(this.framebuffer);
              this.framebuffer = null;
            }

            return this;
          }
          /**
              Get the current status of this framebuffer.
               @method
              @return {GLEnum} The current status of this framebuffer.
          */


          getStatus() {
            let currentFramebuffer = this.bindAndCaptureState();
            let status = this.gl.checkFramebufferStatus(this.gl.DRAW_FRAMEBUFFER);
            this.restoreState(currentFramebuffer);
            return status;
          }
          /**
              Bind as the draw framebuffer
               @method
              @ignore
              @return {Framebuffer} The Framebuffer object.
          */


          bindForDraw() {
            if (this.appState.drawFramebuffer !== this) {
              this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, this.framebuffer);
              this.appState.drawFramebuffer = this;
            }

            return this;
          }
          /**
              Bind as the read framebuffer
               @method
              @ignore
              @return {Framebuffer} The Framebuffer object.
          */


          bindForRead() {
            if (this.appState.readFramebuffer !== this) {
              this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.framebuffer);
              this.appState.readFramebuffer = this;
            }

            return this;
          }
          /**
              Bind for a framebuffer state update.
              Capture current binding so we can restore it later.
               @method
              @ignore
              @return {Framebuffer} The Framebuffer object.
          */


          bindAndCaptureState() {
            let currentFramebuffer = this.appState.drawFramebuffer;

            if (currentFramebuffer !== this) {
              this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, this.framebuffer);
            }

            return currentFramebuffer;
          }
          /**
              Bind restore previous binding after state update
               @method
              @ignore
              @return {Framebuffer} The Framebuffer object.
          */


          restoreState(framebuffer) {
            if (framebuffer !== this) {
              this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, framebuffer ? framebuffer.framebuffer : null);
            }

            return this;
          }

        }

        module.exports = Framebuffer;
        /***/
      },
      /* 9 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);

        const Shader = __webpack_require__(2);

        const Uniforms = __webpack_require__(10);

        const SingleComponentUniform = Uniforms.SingleComponentUniform;
        const MultiNumericUniform = Uniforms.MultiNumericUniform;
        const MultiBoolUniform = Uniforms.MultiBoolUniform;
        const MatrixUniform = Uniforms.MatrixUniform;
        /**
            WebGL program consisting of compiled and linked vertex and fragment
            shaders.
        
            @class
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {WebGLProgram} program The WebGL program.
            @prop {boolean} transformFeedback Whether this program is set up for transform feedback.
            @prop {Object} uniforms Map of uniform names to handles.
            @prop {Object} appState Tracked GL state.
        */

        class Program {
          constructor(gl, appState, vsSource, fsSource, xformFeebackVars) {
            let i;
            let vShader, fShader;
            let ownVertexShader = false;
            let ownFragmentShader = false;

            if (typeof vsSource === "string") {
              vShader = new Shader(gl, gl.VERTEX_SHADER, vsSource);
              ownVertexShader = true;
            } else {
              vShader = vsSource;
            }

            if (typeof fsSource === "string") {
              fShader = new Shader(gl, gl.FRAGMENT_SHADER, fsSource);
              ownFragmentShader = true;
            } else {
              fShader = fsSource;
            }

            let program = gl.createProgram();
            gl.attachShader(program, vShader.shader);
            gl.attachShader(program, fShader.shader);

            if (xformFeebackVars) {
              gl.transformFeedbackVaryings(program, xformFeebackVars, gl.SEPARATE_ATTRIBS);
            }

            gl.linkProgram(program);

            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
              console.error(gl.getProgramInfoLog(program));
            }

            if (ownVertexShader) {
              vShader.delete();
            }

            if (ownFragmentShader) {
              fShader.delete();
            }

            this.gl = gl;
            this.program = program;
            this.appState = appState;
            this.transformFeedback = !!xformFeebackVars;
            this.uniforms = {};
            this.uniformBlocks = {};
            this.uniformBlockCount = 0;
            this.samplers = {};
            this.samplerCount = 0;
            gl.useProgram(program);
            let numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
            let textureUnit;

            for (i = 0; i < numUniforms; ++i) {
              let uniformInfo = gl.getActiveUniform(program, i);
              let uniformHandle = gl.getUniformLocation(this.program, uniformInfo.name);
              let UniformClass = null;
              let type = uniformInfo.type;
              let numElements = uniformInfo.size;

              switch (type) {
                case CONSTANTS.SAMPLER_2D:
                case CONSTANTS.INT_SAMPLER_2D:
                case CONSTANTS.UNSIGNED_INT_SAMPLER_2D:
                case CONSTANTS.SAMPLER_2D_SHADOW:
                case CONSTANTS.SAMPLER_2D_ARRAY:
                case CONSTANTS.INT_SAMPLER_2D_ARRAY:
                case CONSTANTS.UNSIGNED_INT_SAMPLER_2D_ARRAY:
                case CONSTANTS.SAMPLER_2D_ARRAY_SHADOW:
                case CONSTANTS.SAMPLER_CUBE:
                case CONSTANTS.INT_SAMPLER_CUBE:
                case CONSTANTS.UNSIGNED_INT_SAMPLER_CUBE:
                case CONSTANTS.SAMPLER_CUBE_SHADOW:
                case CONSTANTS.SAMPLER_3D:
                case CONSTANTS.INT_SAMPLER_3D:
                case CONSTANTS.UNSIGNED_INT_SAMPLER_3D:
                  textureUnit = this.samplerCount++;
                  this.samplers[uniformInfo.name] = textureUnit;
                  this.gl.uniform1i(uniformHandle, textureUnit);
                  break;

                case CONSTANTS.INT:
                case CONSTANTS.UNSIGNED_INT:
                case CONSTANTS.FLOAT:
                  UniformClass = numElements > 1 ? MultiNumericUniform : SingleComponentUniform;
                  break;

                case CONSTANTS.BOOL:
                  UniformClass = numElements > 1 ? MultiBoolUniform : SingleComponentUniform;
                  break;

                case CONSTANTS.FLOAT_VEC2:
                case CONSTANTS.INT_VEC2:
                case CONSTANTS.UNSIGNED_INT_VEC2:
                case CONSTANTS.FLOAT_VEC3:
                case CONSTANTS.INT_VEC3:
                case CONSTANTS.UNSIGNED_INT_VEC3:
                case CONSTANTS.FLOAT_VEC4:
                case CONSTANTS.INT_VEC4:
                case CONSTANTS.UNSIGNED_INT_VEC4:
                  UniformClass = MultiNumericUniform;
                  break;

                case CONSTANTS.BOOL_VEC2:
                case CONSTANTS.BOOL_VEC3:
                case CONSTANTS.BOOL_VEC4:
                  UniformClass = MultiBoolUniform;
                  break;

                case CONSTANTS.FLOAT_MAT2:
                case CONSTANTS.FLOAT_MAT3:
                case CONSTANTS.FLOAT_MAT4:
                case CONSTANTS.FLOAT_MAT2x3:
                case CONSTANTS.FLOAT_MAT2x4:
                case CONSTANTS.FLOAT_MAT3x2:
                case CONSTANTS.FLOAT_MAT3x4:
                case CONSTANTS.FLOAT_MAT4x2:
                case CONSTANTS.FLOAT_MAT4x3:
                  UniformClass = MatrixUniform;
                  break;

                default:
                  console.error("Unrecognized type for uniform ", uniformInfo.name);
                  break;
              }

              if (UniformClass) {
                this.uniforms[uniformInfo.name] = new UniformClass(gl, uniformHandle, type, numElements);
              }
            }

            let numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);

            for (i = 0; i < numUniformBlocks; ++i) {
              let blockName = gl.getActiveUniformBlockName(this.program, i);
              let blockIndex = gl.getUniformBlockIndex(this.program, blockName);
              let uniformBlockBase = this.uniformBlockCount++;
              this.gl.uniformBlockBinding(this.program, blockIndex, uniformBlockBase);
              this.uniformBlocks[blockName] = uniformBlockBase;
            }

            gl.useProgram(null);
          }
          /**
              Delete this program.
               @method
              @return {Program} The Program object.
          */


          delete() {
            if (this.program) {
              this.gl.deleteProgram(this.program);
              this.program = null;
            }

            return this;
          }
          /**
              Set the value of a uniform.
               @method
              @ignore
              @return {Program} The Program object.
          */


          uniform(name, value) {
            this.uniforms[name].set(value);
            return this;
          } // 

          /**
              Use this program.
               @method
              @ignore
              @return {Program} The Program object.
          */


          bind() {
            if (this.appState.program !== this) {
              this.gl.useProgram(this.program);
              this.appState.program = this;
            }

            return this;
          }

        }

        module.exports = Program;
        /***/
      },
      /* 10 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0); // Classes to manage uniform value updates, including
        // caching current values.


        const UNIFORM_FUNC_NAME = {};
        UNIFORM_FUNC_NAME[CONSTANTS.BOOL] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.INT] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_2D] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.INT_SAMPLER_2D] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_SAMPLER_2D] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_2D_SHADOW] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_2D_ARRAY] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.INT_SAMPLER_2D_ARRAY] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_SAMPLER_2D_ARRAY] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_2D_ARRAY_SHADOW] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_CUBE] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.INT_SAMPLER_CUBE] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_SAMPLER_CUBE] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_CUBE_SHADOW] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.SAMPLER_3D] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.INT_SAMPLER_3D] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_SAMPLER_3D] = "uniform1i";
        UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT] = "uniform1ui";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT] = "uniform1f";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_VEC2] = "uniform2f";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_VEC3] = "uniform3f";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_VEC4] = "uniform4f";
        UNIFORM_FUNC_NAME[CONSTANTS.INT_VEC2] = "uniform2i";
        UNIFORM_FUNC_NAME[CONSTANTS.INT_VEC3] = "uniform3i";
        UNIFORM_FUNC_NAME[CONSTANTS.INT_VEC4] = "uniform4i";
        UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_VEC2] = "uniform2ui";
        UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_VEC3] = "uniform3ui";
        UNIFORM_FUNC_NAME[CONSTANTS.UNSIGNED_INT_VEC4] = "uniform4ui";
        UNIFORM_FUNC_NAME[CONSTANTS.BOOL_VEC2] = "uniform2i";
        UNIFORM_FUNC_NAME[CONSTANTS.BOOL_VEC3] = "uniform3i";
        UNIFORM_FUNC_NAME[CONSTANTS.BOOL_VEC4] = "uniform4i";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT2] = "uniformMatrix2fv";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT3] = "uniformMatrix3fv";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT4] = "uniformMatrix4fv";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT2x3] = "uniformMatrix2x3fv";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT2x4] = "uniformMatrix2x4fv";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT3x2] = "uniformMatrix3x2fv";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT3x4] = "uniformMatrix3x4fv";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT4x2] = "uniformMatrix4x2fv";
        UNIFORM_FUNC_NAME[CONSTANTS.FLOAT_MAT4x3] = "uniformMatrix4x3fv";
        const UNIFORM_COMPONENT_COUNT = {};
        UNIFORM_COMPONENT_COUNT[CONSTANTS.BOOL] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.INT] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_2D] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_SAMPLER_2D] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_SAMPLER_2D] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_2D_SHADOW] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_2D_ARRAY] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_SAMPLER_2D_ARRAY] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_SAMPLER_2D_ARRAY] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_2D_ARRAY_SHADOW] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_CUBE] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_SAMPLER_CUBE] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_SAMPLER_CUBE] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_CUBE_SHADOW] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.SAMPLER_3D] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_SAMPLER_3D] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_SAMPLER_3D] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT] = 1;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_VEC2] = 2;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_VEC3] = 3;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_VEC4] = 4;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_VEC2] = 2;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_VEC3] = 3;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.INT_VEC4] = 4;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_VEC2] = 2;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_VEC3] = 3;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.UNSIGNED_INT_VEC4] = 4;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.BOOL_VEC2] = 2;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.BOOL_VEC3] = 3;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.BOOL_VEC4] = 4;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT2] = 4;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT3] = 9;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT4] = 16;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT2x3] = 6;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT2x4] = 8;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT3x2] = 6;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT3x4] = 12;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT4x2] = 8;
        UNIFORM_COMPONENT_COUNT[CONSTANTS.FLOAT_MAT4x3] = 12;
        const UNIFORM_CACHE_CLASS = {};
        UNIFORM_CACHE_CLASS[CONSTANTS.INT] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_2D] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.INT_SAMPLER_2D] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_SAMPLER_2D] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_2D_SHADOW] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_2D_ARRAY] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.INT_SAMPLER_2D_ARRAY] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_SAMPLER_2D_ARRAY] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_2D_ARRAY_SHADOW] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_CUBE] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.INT_SAMPLER_CUBE] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_SAMPLER_CUBE] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_CUBE_SHADOW] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.SAMPLER_3D] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.INT_SAMPLER_3D] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_SAMPLER_3D] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT] = Uint32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.FLOAT] = Float32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.FLOAT_VEC2] = Float32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.FLOAT_VEC3] = Float32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.FLOAT_VEC4] = Float32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.INT_VEC2] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.INT_VEC3] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.INT_VEC4] = Int32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_VEC2] = Uint32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_VEC3] = Uint32Array;
        UNIFORM_CACHE_CLASS[CONSTANTS.UNSIGNED_INT_VEC4] = Uint32Array;

        class SingleComponentUniform {
          constructor(gl, handle, type) {
            this.gl = gl;
            this.handle = handle;
            this.glFuncName = UNIFORM_FUNC_NAME[type];
            this.cache = type === CONSTANTS.BOOL ? false : 0;
          }

          set(value) {
            if (this.cache !== value) {
              this.gl[this.glFuncName](this.handle, value);
              this.cache = value;
            }
          }

        }

        class MultiNumericUniform {
          constructor(gl, handle, type, count) {
            this.gl = gl;
            this.handle = handle;
            this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
            this.count = count;
            this.cache = new UNIFORM_CACHE_CLASS[type](UNIFORM_COMPONENT_COUNT[type] * count);
          }

          set(value) {
            for (let i = 0, len = value.length; i < len; ++i) {
              if (this.cache[i] !== value[i]) {
                this.gl[this.glFuncName](this.handle, value);
                this.cache.set(value);
                return;
              }
            }
          }

        }

        class MultiBoolUniform {
          constructor(gl, handle, type, count) {
            this.gl = gl;
            this.handle = handle;
            this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
            this.count = count;
            this.cache = new Array(UNIFORM_COMPONENT_COUNT[type] * count).fill(false);
          }

          set(value) {
            for (let i = 0, len = value.length; i < len; ++i) {
              if (this.cache[i] !== value[i]) {
                this.gl[this.glFuncName](this.handle, value);

                for (let j = i; j < len; j++) {
                  this.cache[j] = value[j];
                }

                return;
              }
            }
          }

        }

        class MatrixUniform {
          constructor(gl, handle, type, count) {
            this.gl = gl;
            this.handle = handle;
            this.glFuncName = UNIFORM_FUNC_NAME[type];
            this.count = count;
            this.cache = new Float32Array(UNIFORM_COMPONENT_COUNT[type] * count);
          }

          set(value) {
            for (let i = 0, len = value.length; i < len; ++i) {
              if (this.cache[i] !== value[i]) {
                this.gl[this.glFuncName](this.handle, false, value);
                this.cache.set(value);
                return;
              }
            }
          }

        }

        module.exports.SingleComponentUniform = SingleComponentUniform;
        module.exports.MultiNumericUniform = MultiNumericUniform;
        module.exports.MultiBoolUniform = MultiBoolUniform;
        module.exports.MatrixUniform = MatrixUniform;
        /***/
      },
      /* 11 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);

        const TEXTURE_FORMAT_DEFAULTS = __webpack_require__(1);

        const DUMMY_ARRAY = new Array(1);
        /**
            General-purpose texture.
        
            @class
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {WebGLTexture} texture Handle to the texture.
            @prop {WebGLSamler} sampler Sampler object.
            @prop {GLEnum} binding Binding point for the texture.
            @prop {GLEnum} type Type of data stored in the texture.
            @prop {GLEnum} format Layout of texture data.
            @prop {GLEnum} internalFormat Internal arrangement of the texture data.
            @prop {number} currentUnit The current texture unit this texture is bound to.
            @prop {boolean} is3D Whether this texture contains 3D data.
            @prop {boolean} flipY Whether the y-axis is being flipped for this texture.
            @prop {boolean} mipmaps Whether this texture is using mipmap filtering 
                (and thus should have a complete mipmap chain).
            @prop {Object} appState Tracked GL state.
        */

        class Texture {
          constructor(gl, appState, binding, image, width = image.width, height = image.height, depth, is3D, options = CONSTANTS.DUMMY_OBJECT) {
            let defaultType = options.format === CONSTANTS.DEPTH_COMPONENT ? CONSTANTS.UNSIGNED_SHORT : CONSTANTS.UNSIGNED_BYTE;
            this.gl = gl;
            this.binding = binding;
            this.texture = null;
            this.width = -1;
            this.height = -1;
            this.depth = -1;
            this.type = options.type !== undefined ? options.type : defaultType;
            this.is3D = is3D;
            this.appState = appState;
            this.format = null;
            this.internalFormat = null;
            this.compressed = !!(TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[options.format] || TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[options.internalFormat]);

            if (this.compressed) {
              // For compressed textures, just need to provide one of format, internalFormat.
              // The other will be the same.
              this.format = options.format !== undefined ? options.format : options.internalFormat;
              this.internalFormat = options.internalFormat !== undefined ? options.internalFormat : options.format;
            } else {
              this.format = options.format !== undefined ? options.format : gl.RGBA;
              this.internalFormat = options.internalFormat !== undefined ? options.internalFormat : TEXTURE_FORMAT_DEFAULTS[this.type][this.format];
            } // -1 indicates unbound


            this.currentUnit = -1; // Sampling parameters

            let {
              minFilter = image ? gl.LINEAR_MIPMAP_NEAREST : gl.NEAREST,
              magFilter = image ? gl.LINEAR : gl.NEAREST,
              wrapS = gl.REPEAT,
              wrapT = gl.REPEAT,
              wrapR = gl.REPEAT,
              compareMode = gl.NONE,
              compareFunc = gl.LEQUAL,
              minLOD = null,
              maxLOD = null,
              baseLevel = null,
              maxLevel = null,
              flipY = false
            } = options;
            this.minFilter = minFilter;
            this.magFilter = magFilter;
            this.wrapS = wrapS;
            this.wrapT = wrapT;
            this.wrapR = wrapR;
            this.compareMode = compareMode;
            this.compareFunc = compareFunc;
            this.minLOD = minLOD;
            this.maxLOD = maxLOD;
            this.baseLevel = baseLevel;
            this.maxLevel = maxLevel;
            this.flipY = flipY;
            this.mipmaps = minFilter === gl.LINEAR_MIPMAP_NEAREST || minFilter === gl.LINEAR_MIPMAP_LINEAR;
            this.resize(width, height, depth);

            if (image) {
              this.data(image);
            }
          }
          /**
              Re-allocate texture storage.
               @method
              @param {number} width Image width.
              @param {number} height Image height.
              @param {number} [depth] Image depth or number of images. Required when passing 3D or texture array data.
              @return {Texture} The Texture object.
          */


          resize(width, height, depth) {
            depth = depth || 0;

            if (width === this.width && height === this.height && depth === this.depth) {
              return this;
            }

            this.gl.deleteTexture(this.texture);

            if (this.currentUnit !== -1) {
              this.appState.textures[this.currentUnit] = null;
            }

            this.texture = this.gl.createTexture();
            this.bind(Math.max(this.currentUnit, 0));
            this.width = width;
            this.height = height;
            this.depth = depth;
            this.gl.texParameteri(this.binding, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
            this.gl.texParameteri(this.binding, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
            this.gl.texParameteri(this.binding, this.gl.TEXTURE_WRAP_S, this.wrapS);
            this.gl.texParameteri(this.binding, this.gl.TEXTURE_WRAP_T, this.wrapT);
            this.gl.texParameteri(this.binding, this.gl.TEXTURE_WRAP_R, this.wrapR);
            this.gl.texParameteri(this.binding, this.gl.TEXTURE_COMPARE_FUNC, this.compareFunc);
            this.gl.texParameteri(this.binding, this.gl.TEXTURE_COMPARE_MODE, this.compareMode);
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);

            if (this.minLOD !== null) {
              this.gl.texParameterf(this.binding, this.gl.TEXTURE_MIN_LOD, this.minLOD);
            }

            if (this.maxLOD !== null) {
              this.gl.texParameterf(this.binding, this.gl.TEXTURE_MAX_LOD, this.maxLOD);
            }

            if (this.baseLevel !== null) {
              this.gl.texParameteri(this.binding, this.gl.TEXTURE_BASE_LEVEL, this.baseLevel);
            }

            if (this.maxLevel !== null) {
              this.gl.texParameteri(this.binding, this.gl.TEXTURE_MAX_LEVEL, this.maxLevel);
            }

            let levels;

            if (this.is3D) {
              if (this.mipmaps) {
                levels = Math.floor(Math.log2(Math.max(Math.max(this.width, this.height), this.depth))) + 1;
              } else {
                levels = 1;
              }

              this.gl.texStorage3D(this.binding, levels, this.internalFormat, this.width, this.height, this.depth);
            } else {
              if (this.mipmaps) {
                levels = Math.floor(Math.log2(Math.max(this.width, this.height))) + 1;
              } else {
                levels = 1;
              }

              this.gl.texStorage2D(this.binding, levels, this.internalFormat, this.width, this.height);
            }

            return this;
          }
          /**
              Set the image data for the texture. An array can be passed to manually set all levels 
              of the mipmap chain. If a single level is passed and mipmap filtering is being used,
              generateMipmap() will be called to produce the remaining levels.
              NOTE: the data must fit the currently-allocated storage!
               @method
              @param {ImageElement|ArrayBufferView|Array} data Image data. If an array is passed, it will be 
                  used to set mip map levels.
              @return {Texture} The Texture object.
          */


          data(data) {
            if (!Array.isArray(data)) {
              DUMMY_ARRAY[0] = data;
              data = DUMMY_ARRAY;
            }

            let numLevels = this.mipmaps ? data.length : 1;
            let width = this.width;
            let height = this.height;
            let depth = this.depth;
            let generateMipmaps = this.mipmaps && data.length === 1;
            let i;
            this.bind(Math.max(this.currentUnit, 0));

            if (this.compressed) {
              if (this.is3D) {
                for (i = 0; i < numLevels; ++i) {
                  this.gl.compressedTexSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, data[i]);
                  width = Math.max(width >> 1, 1);
                  height = Math.max(height >> 1, 1);
                  depth = Math.max(depth >> 1, 1);
                }
              } else {
                for (i = 0; i < numLevels; ++i) {
                  this.gl.compressedTexSubImage2D(this.binding, i, 0, 0, width, height, this.format, data[i]);
                  width = Math.max(width >> 1, 1);
                  height = Math.max(height >> 1, 1);
                }
              }
            } else if (this.is3D) {
              for (i = 0; i < numLevels; ++i) {
                this.gl.texSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, this.type, data[i]);
                width = Math.max(width >> 1, 1);
                height = Math.max(height >> 1, 1);
                depth = Math.max(depth >> 1, 1);
              }
            } else {
              for (i = 0; i < numLevels; ++i) {
                this.gl.texSubImage2D(this.binding, i, 0, 0, width, height, this.format, this.type, data[i]);
                width = Math.max(width >> 1, 1);
                height = Math.max(height >> 1, 1);
              }
            }

            if (generateMipmaps) {
              this.gl.generateMipmap(this.binding);
            }

            return this;
          }
          /**
              Delete this texture.
               @method
              @return {Texture} The Texture object.
          */


          delete() {
            if (this.texture) {
              this.gl.deleteTexture(this.texture);
              this.texture = null;

              if (this.currentUnit !== -1 && this.appState.textures[this.currentUnit] === this) {
                this.appState.textures[this.currentUnit] = null;
                this.currentUnit = -1;
              }
            }

            return this;
          }
          /**
              Bind this texture to a texture unit.
               @method
              @ignore
              @return {Texture} The Texture object.
          */


          bind(unit) {
            let currentTexture = this.appState.textures[unit];

            if (currentTexture !== this) {
              if (currentTexture) {
                currentTexture.currentUnit = -1;
              }

              if (this.currentUnit !== -1) {
                this.appState.textures[this.currentUnit] = null;
              }

              this.gl.activeTexture(this.gl.TEXTURE0 + unit);
              this.gl.bindTexture(this.binding, this.texture);
              this.appState.textures[unit] = this;
              this.currentUnit = unit;
            }

            return this;
          }

        }

        module.exports = Texture;
        /***/
      },
      /* 12 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);

        const Query = __webpack_require__(3);
        /**
            Rendering timer.
        
            @class
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {Object} cpuTimer Timer for CPU. Will be window.performance, if available, or window.Date.
            @prop {boolean} gpuTimer Whether the gpu timing is available (EXT_disjoint_timer_query_webgl2 or
                    EXT_disjoint_timer_query are supported).
            @prop {WebGLQuery} gpuTimerQuery Timer query object for GPU (if gpu timing is supported).
            @prop {boolean} gpuTimerQueryInProgress Whether a gpu timer query is currently in progress.
            @prop {number} cpuStartTime When the last CPU timing started.
            @prop {number} cpuTime Time spent on CPU during last timing. Only valid if ready() returns true.
            @prop {number} gpuTime Time spent on GPU during last timing. Only valid if ready() returns true.
                    Will remain 0 if extension EXT_disjoint_timer_query_webgl2 is unavailable.
        */


        class Timer {
          constructor(gl) {
            this.gl = gl;
            this.cpuTimer = window.performance || window.Date; // Note(Tarek): Firefox for some reason only supports EXT_disjoint_timer_query, so have to try both

            var gpuTimerExtension = this.gl.getExtension("EXT_disjoint_timer_query_webgl2") || this.gl.getExtension("EXT_disjoint_timer_query");

            if (gpuTimerExtension) {
              this.gpuTimer = true;
              this.gpuTimerQuery = new Query(this.gl, CONSTANTS.TIME_ELAPSED_EXT);
            } else {
              this.gpuTimer = false;
              this.gpuTimerQuery = null;
            }

            this.cpuStartTime = 0;
            this.cpuTime = 0;
            this.gpuTime = 0;
          }
          /**
              Start timing.
               @method
              @return {Timer} The Timer object.
          */


          start() {
            if (this.gpuTimer) {
              if (!this.gpuTimerQuery.active) {
                this.gpuTimerQuery.begin();
                this.cpuStartTime = this.cpuTimer.now();
              }
            } else {
              this.cpuStartTime = this.cpuTimer.now();
            }

            return this;
          }
          /**
              Stop timing.
               @method
              @return {Timer} The Timer object.
          */


          end() {
            if (this.gpuTimer) {
              if (!this.gpuTimerQuery.active) {
                this.gpuTimerQuery.end();
                this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
              }
            } else {
              this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
            }

            return this;
          }
          /**
              Check if timing results are available. If
              this method returns true, the cpuTime and
              gpuTime properties will be set to valid
              values.
               @method
              @return {boolean} If results are available.
          */


          ready() {
            if (this.gpuTimer) {
              if (!this.gpuTimerQuery.active) {
                return false;
              }

              var gpuTimerAvailable = this.gpuTimerQuery.ready();
              var gpuTimerDisjoint = this.gl.getParameter(CONSTANTS.GPU_DISJOINT_EXT);

              if (gpuTimerAvailable && !gpuTimerDisjoint) {
                this.gpuTime = this.gpuTimerQuery.result / 1000000;
                return true;
              } else {
                return false;
              }
            } else {
              return !!this.cpuStartTime;
            }
          }
          /**
              Delete this timer.
               @method
              @return {Timer} The Timer object.
          */


          delete() {
            if (this.gpuTimerQuery) {
              this.gpuTimerQuery.delete();
              this.gpuTimerQuery = null;
              this.gpuTimer = false;
            }

            return this;
          }

        }

        module.exports = Timer;
        /***/
      },
      /* 13 */

      /***/
      function (module, exports, __webpack_require__) {
        class TransformFeedback {
          constructor(gl, appState) {
            this.gl = gl;
            this.transformFeedback = gl.createTransformFeedback();
            this.appState = appState; // TODO(Tarek): Need to rebind buffers due to bug in ANGLE.
            // Remove this when that's fixed.

            this.angleBugBuffers = [];
          }
          /**
              Bind a feedback buffer to capture transform output.
               @method
              @param {number} index Index of transform feedback varying to capture.
              @param {VertexBuffer} buffer Buffer to record output into.
              @return {TransformFeedback} The TransformFeedback object.
          */


          feedbackBuffer(index, buffer) {
            this.gl.bindTransformFeedback(this.gl.TRANSFORM_FEEDBACK, this.transformFeedback);
            this.gl.bindBufferBase(this.gl.TRANSFORM_FEEDBACK_BUFFER, index, buffer.buffer);
            this.gl.bindTransformFeedback(this.gl.TRANSFORM_FEEDBACK, null);
            this.gl.bindBufferBase(this.gl.TRANSFORM_FEEDBACK_BUFFER, index, null);
            this.angleBugBuffers[index] = buffer;
            return this;
          }
          /**
              Delete this transform feedback.
               @method
              @return {TransformFeedback} The TransformFeedback object.
          */


          delete() {
            if (this.transformFeedback) {
              this.gl.deleteTransformFeedback(this.transformFeedback);
              this.transformFeedback = null;
            }

            return this;
          }
          /**
              Bind this transform feedback.
               @method
              @ignore
              @return {TransformFeedback} The TransformFeedback object.
          */


          bind() {
            if (this.appState.transformFeedback !== this) {
              this.gl.bindTransformFeedback(this.gl.TRANSFORM_FEEDBACK, this.transformFeedback);

              for (let i = 0, len = this.angleBugBuffers.length; i < len; ++i) {
                this.gl.bindBufferBase(this.gl.TRANSFORM_FEEDBACK_BUFFER, i, this.angleBugBuffers[i].buffer);
              }

              this.appState.transformFeedback = this;
            }

            return this;
          }

        }

        module.exports = TransformFeedback;
        /***/
      },
      /* 14 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);
        /**
            Storage for uniform data. Data is stored in std140 layout.
        
            @class
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {WebGLBuffer} buffer Allocated buffer storage.
            @prop {Float32Array} data Buffer data.
            @prop {Object} dataViews Map of base data types to matching ArrayBufferViews of the buffer data.
            @prop {Array} offsets Offsets into the array for each item in the buffer.
            @prop {Array} sizes Size of the item at the given offset.
            @prop {Array} types The base type of the item at the given offset (FLOAT, INT or UNSIGNED_INT).
            @prop {number} size The size of the buffer (in 4-byte items).
            @prop {GLEnum} usage Usage pattern of the buffer.
        */


        class UniformBuffer {
          constructor(gl, appState, layout, usage = gl.DYNAMIC_DRAW) {
            this.gl = gl;
            this.buffer = gl.createBuffer();
            this.dataViews = {};
            this.offsets = new Array(layout.length);
            this.sizes = new Array(layout.length);
            this.types = new Array(layout.length);
            this.size = 0;
            this.usage = usage;
            this.appState = appState; // -1 indicates unbound

            this.currentBase = -1;

            for (let i = 0, len = layout.length; i < len; ++i) {
              let type = layout[i];

              switch (type) {
                case CONSTANTS.FLOAT:
                case CONSTANTS.INT:
                case CONSTANTS.UNSIGNED_INT:
                case CONSTANTS.BOOL:
                  this.offsets[i] = this.size;
                  this.sizes[i] = 1;

                  if (type === CONSTANTS.INT) {
                    this.types[i] = CONSTANTS.INT;
                  } else if (this.type === CONSTANTS.UNSIGNED_INT) {
                    this.types[i] = CONSTANTS.UNSIGNED_INT;
                  } else {
                    this.types[i] = CONSTANTS.FLOAT;
                  }

                  this.size++;
                  break;

                case CONSTANTS.FLOAT_VEC2:
                case CONSTANTS.INT_VEC2:
                case CONSTANTS.UNSIGNED_INT_VEC2:
                case CONSTANTS.BOOL_VEC2:
                  this.size += this.size % 2;
                  this.offsets[i] = this.size;
                  this.sizes[i] = 2;

                  if (type === CONSTANTS.INT_VEC2) {
                    this.types[i] = CONSTANTS.INT;
                  } else if (this.type === CONSTANTS.UNSIGNED_INT_VEC2) {
                    this.types[i] = CONSTANTS.UNSIGNED_INT;
                  } else {
                    this.types[i] = CONSTANTS.FLOAT;
                  }

                  this.size += 2;
                  break;

                case CONSTANTS.FLOAT_VEC3:
                case CONSTANTS.INT_VEC3:
                case CONSTANTS.UNSIGNED_INT_VEC3:
                case CONSTANTS.BOOL_VEC3:
                case CONSTANTS.FLOAT_VEC4:
                case CONSTANTS.INT_VEC4:
                case CONSTANTS.UNSIGNED_INT_VEC4:
                case CONSTANTS.BOOL_VEC4:
                  this.size += (4 - this.size % 4) % 4;
                  this.offsets[i] = this.size;
                  this.sizes[i] = 4;

                  if (type === CONSTANTS.INT_VEC4 || type === CONSTANTS.INT_VEC3) {
                    this.types[i] = CONSTANTS.INT;
                  } else if (this.type === CONSTANTS.UNSIGNED_INT_VEC4 || this.type === CONSTANTS.UNSIGNED_INT_VEC3) {
                    this.types[i] = CONSTANTS.UNSIGNED_INT;
                  } else {
                    this.types[i] = CONSTANTS.FLOAT;
                  }

                  this.size += 4;
                  break;

                case CONSTANTS.FLOAT_MAT2:
                case CONSTANTS.FLOAT_MAT2x3:
                case CONSTANTS.FLOAT_MAT2x4:
                  this.size += (4 - this.size % 4) % 4;
                  this.offsets[i] = this.size;
                  this.sizes[i] = 8;
                  this.types[i] = CONSTANTS.FLOAT;
                  this.size += 8;
                  break;

                case CONSTANTS.FLOAT_MAT3:
                case CONSTANTS.FLOAT_MAT3x2:
                case CONSTANTS.FLOAT_MAT3x4:
                  this.size += (4 - this.size % 4) % 4;
                  this.offsets[i] = this.size;
                  this.sizes[i] = 12;
                  this.types[i] = CONSTANTS.FLOAT;
                  this.size += 12;
                  break;

                case CONSTANTS.FLOAT_MAT4:
                case CONSTANTS.FLOAT_MAT4x2:
                case CONSTANTS.FLOAT_MAT4x3:
                  this.size += (4 - this.size % 4) % 4;
                  this.offsets[i] = this.size;
                  this.sizes[i] = 16;
                  this.types[i] = CONSTANTS.FLOAT;
                  this.size += 16;
                  break;

                default:
                  console.error("Unsupported type for uniform buffer.");
              }
            }

            this.size += (4 - this.size % 4) % 4;
            this.data = new Float32Array(this.size);
            this.dataViews[CONSTANTS.FLOAT] = this.data;
            this.dataViews[CONSTANTS.INT] = new Int32Array(this.data.buffer);
            this.dataViews[CONSTANTS.UNSIGNED_INT] = new Uint32Array(this.data.buffer);
            this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, this.buffer);
            this.gl.bufferData(this.gl.UNIFORM_BUFFER, this.size * 4, this.usage);
            this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, null);
          }
          /**
              Update data for a given item in the buffer. NOTE: Data is not
              sent the the GPU until the update() method is called!
               @method
              @param {number} index Index in the layout of item to set.
              @param {ArrayBufferView} value Value to store at the layout location.
              @return {UniformBuffer} The UniformBuffer object.
          */


          set(index, value) {
            let view = this.dataViews[this.types[index]];

            if (this.sizes[index] === 1) {
              view[this.offsets[index]] = value;
            } else {
              view.set(value, this.offsets[index]);
            }

            return this;
          }
          /**
              Send stored buffer data to the GPU.
               @method
              @param {number} [index] Index in the layout of item to send to the GPU. If ommited, entire buffer is sent.
              @return {UniformBuffer} The UniformBuffer object.
          */


          update(index) {
            let data;
            let offset;

            if (index === undefined) {
              data = this.data;
              offset = 0;
            } else {
              let begin = this.offsets[index];
              let end = begin + this.sizes[index];
              data = this.data.subarray(begin, end);
              offset = begin * 4;
            }

            this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, this.buffer);
            this.gl.bufferSubData(this.gl.UNIFORM_BUFFER, offset, data);
            this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, null);
            return this;
          }
          /**
              Delete this uniform buffer.
               @method
              @return {UniformBuffer} The UniformBuffer object.
          */


          delete() {
            if (this.buffer) {
              this.gl.deleteBuffer(this.buffer);
              this.buffer = null;

              if (this.currentBase !== -1 && this.appState.uniformBuffers[this.currentBase] === this) {
                this.appState.uniformBuffers[this.currentBase] = null;
              }
            }

            return this;
          }
          /**
              Bind this uniform buffer to the given base.
               @method
              @ignore
              @return {UniformBuffer} The UniformBuffer object.
          */


          bind(base) {
            let currentBuffer = this.appState.uniformBuffers[base];

            if (currentBuffer !== this) {
              if (currentBuffer) {
                currentBuffer.currentBase = -1;
              }

              if (this.currentBase !== -1) {
                this.appState.uniformBuffers[this.currentBase] = null;
              }

              this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, base, this.buffer);
              this.appState.uniformBuffers[base] = this;
              this.currentBase = base;
            }

            return this;
          }

        }

        module.exports = UniformBuffer;
        /***/
      },
      /* 15 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);
        /**
            Organizes vertex buffer and attribute state.
        
            @class
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {WebGLVertexArrayObject} vertexArray Vertex array object.
            @prop {number} numElements Number of elements in the vertex array.
            @prop {boolean} indexed Whether this vertex array is set up for indexed drawing.
            @prop {GLenum} indexType Data type of the indices.
            @prop {boolean} instanced Whether this vertex array is set up for instanced drawing.
            @prop {number} numInstances Number of instances to draw with this vertex array.
            @prop {Object} appState Tracked GL state.
        */


        class VertexArray {
          constructor(gl, appState) {
            this.gl = gl;
            this.vertexArray = gl.createVertexArray();
            this.appState = appState;
            this.numElements = 0;
            this.indexType = null;
            this.instancedBuffers = 0;
            this.indexed = false;
            this.numInstances = 0;
          }
          /**
              Bind an per-vertex attribute buffer to this vertex array.
               @method
              @param {number} attributeIndex The attribute location to bind to.
              @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
              @return {VertexArray} The VertexArray object.
          */


          vertexAttributeBuffer(attributeIndex, vertexBuffer) {
            this.attributeBuffer(attributeIndex, vertexBuffer, false, false, false);
            return this;
          }
          /**
              Bind an per-instance attribute buffer to this vertex array.
               @method
              @param {number} attributeIndex The attribute location to bind to.
              @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
              @return {VertexArray} The VertexArray object.
          */


          instanceAttributeBuffer(attributeIndex, vertexBuffer) {
            this.attributeBuffer(attributeIndex, vertexBuffer, true, false, false);
            return this;
          }
          /**
              Bind an per-vertex integer attribute buffer to this vertex array.
              Note that this refers to the attribute in the shader being an integer,
              not the data stored in the vertex buffer.
               @method
              @param {number} attributeIndex The attribute location to bind to.
              @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
              @return {VertexArray} The VertexArray object.
          */


          vertexIntegerAttributeBuffer(attributeIndex, vertexBuffer) {
            this.attributeBuffer(attributeIndex, vertexBuffer, false, true, false);
            return this;
          }
          /**
              Bind an per-instance integer attribute buffer to this vertex array.
              Note that this refers to the attribute in the shader being an integer,
              not the data stored in the vertex buffer.
               @method
              @param {number} attributeIndex The attribute location to bind to.
              @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
              @return {VertexArray} The VertexArray object.
          */


          instanceIntegerAttributeBuffer(attributeIndex, vertexBuffer) {
            this.attributeBuffer(attributeIndex, vertexBuffer, true, true, false);
            return this;
          }
          /**
              Bind an per-vertex normalized attribute buffer to this vertex array.
              Integer data in the vertex buffer will be normalized to [-1.0, 1.0] if
              signed, [0.0, 1.0] if unsigned.
               @method
              @param {number} attributeIndex The attribute location to bind to.
              @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
              @return {VertexArray} The VertexArray object.
          */


          vertexNormalizedAttributeBuffer(attributeIndex, vertexBuffer) {
            this.attributeBuffer(attributeIndex, vertexBuffer, false, false, true);
            return this;
          }
          /**
              Bind an per-instance normalized attribute buffer to this vertex array.
              Integer data in the vertex buffer will be normalized to [-1.0, 1.0] if
              signed, [0.0, 1.0] if unsigned.
              
              @method
              @param {number} attributeIndex The attribute location to bind to.
              @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
              @return {VertexArray} The VertexArray object.
          */


          instanceNormalizedAttributeBuffer(attributeIndex, vertexBuffer) {
            this.attributeBuffer(attributeIndex, vertexBuffer, true, false, true);
            return this;
          }
          /**
              Bind an index buffer to this vertex array.
               @method
              @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
              @return {VertexArray} The VertexArray object.
          */


          indexBuffer(vertexBuffer) {
            this.gl.bindVertexArray(this.vertexArray);
            this.gl.bindBuffer(vertexBuffer.binding, vertexBuffer.buffer);
            this.numElements = vertexBuffer.numItems * 3;
            this.indexType = vertexBuffer.type;
            this.indexed = true;
            this.gl.bindVertexArray(null);
            this.gl.bindBuffer(vertexBuffer.binding, null);
            return this;
          }
          /**
              Delete this vertex array.
               @method
              @return {VertexArray} The VertexArray object.
          */


          delete() {
            if (this.vertexArray) {
              this.gl.deleteVertexArray(this.vertexArray);
              this.vertexArray = null;
            }

            this.gl.bindVertexArray(null);
            return this;
          }
          /**
              Bind this vertex array.
               @method
              @ignore
              @return {VertexArray} The VertexArray object.
          */


          bind() {
            if (this.appState.vertexArray !== this) {
              this.gl.bindVertexArray(this.vertexArray);
              this.appState.vertexArray = this;
            }

            return this;
          }
          /**
              Attach an attribute buffer
               @method
              @ignore
              @return {VertexArray} The VertexArray object.
          */


          attributeBuffer(attributeIndex, vertexBuffer, instanced, integer, normalized) {
            this.gl.bindVertexArray(this.vertexArray);
            this.gl.bindBuffer(vertexBuffer.binding, vertexBuffer.buffer);
            let numColumns = vertexBuffer.numColumns;

            for (let i = 0; i < numColumns; ++i) {
              if (integer) {
                this.gl.vertexAttribIPointer(attributeIndex + i, vertexBuffer.itemSize, vertexBuffer.type, numColumns * vertexBuffer.itemSize * CONSTANTS.TYPE_SIZE[vertexBuffer.type], i * vertexBuffer.itemSize * CONSTANTS.TYPE_SIZE[vertexBuffer.type]);
              } else {
                this.gl.vertexAttribPointer(attributeIndex + i, vertexBuffer.itemSize, vertexBuffer.type, normalized, numColumns * vertexBuffer.itemSize * CONSTANTS.TYPE_SIZE[vertexBuffer.type], i * vertexBuffer.itemSize * CONSTANTS.TYPE_SIZE[vertexBuffer.type]);
              }

              if (instanced) {
                this.gl.vertexAttribDivisor(attributeIndex + i, 1);
              }

              this.gl.enableVertexAttribArray(attributeIndex + i);
            }

            this.instanced = this.instanced || instanced;

            if (instanced) {
              this.numInstances = vertexBuffer.numItems;
            } else {
              this.numElements = this.numElements || vertexBuffer.numItems;
            }

            this.gl.bindVertexArray(null);
            this.gl.bindBuffer(vertexBuffer.binding, null);
            return this;
          }

        }

        module.exports = VertexArray;
        /***/
      },
      /* 16 */

      /***/
      function (module, exports, __webpack_require__) {
        const CONSTANTS = __webpack_require__(0);
        /**
            Storage for vertex data.
        
            @class
            @prop {WebGLRenderingContext} gl The WebGL context.
            @prop {WebGLBuffer} buffer Allocated buffer storage.
            @prop {GLEnum} type The type of data stored in the buffer.
            @prop {number} itemSize Number of array elements per vertex.
            @prop {number} numItems Number of vertices represented.
            @prop {GLEnum} usage The usage pattern of the buffer.
            @prop {boolean} indexArray Whether this is an index array.
            @prop {GLEnum} binding GL binding point (ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER).
            @prop {Object} appState Tracked GL state.
        */


        class VertexBuffer {
          constructor(gl, appState, type, itemSize, data, usage = gl.STATIC_DRAW, indexArray) {
            let numColumns;

            switch (type) {
              case CONSTANTS.FLOAT_MAT4:
              case CONSTANTS.FLOAT_MAT4x2:
              case CONSTANTS.FLOAT_MAT4x3:
                numColumns = 4;
                break;

              case CONSTANTS.FLOAT_MAT3:
              case CONSTANTS.FLOAT_MAT3x2:
              case CONSTANTS.FLOAT_MAT3x4:
                numColumns = 3;
                break;

              case CONSTANTS.FLOAT_MAT2:
              case CONSTANTS.FLOAT_MAT2x3:
              case CONSTANTS.FLOAT_MAT2x4:
                numColumns = 2;
                break;

              default:
                numColumns = 1;
            }

            switch (type) {
              case CONSTANTS.FLOAT_MAT4:
              case CONSTANTS.FLOAT_MAT3x4:
              case CONSTANTS.FLOAT_MAT2x4:
                itemSize = 4;
                type = CONSTANTS.FLOAT;
                break;

              case CONSTANTS.FLOAT_MAT3:
              case CONSTANTS.FLOAT_MAT4x3:
              case CONSTANTS.FLOAT_MAT2x3:
                itemSize = 3;
                type = CONSTANTS.FLOAT;
                break;

              case CONSTANTS.FLOAT_MAT2:
              case CONSTANTS.FLOAT_MAT3x2:
              case CONSTANTS.FLOAT_MAT4x2:
                itemSize = 2;
                type = CONSTANTS.FLOAT;
                break;
            }

            let dataLength;

            if (typeof data === "number") {
              dataLength = data;
              data *= CONSTANTS.TYPE_SIZE[type];
            } else {
              dataLength = data.length;
            }

            this.gl = gl;
            this.buffer = gl.createBuffer();
            this.appState = appState;
            this.type = type;
            this.itemSize = itemSize;
            this.numItems = dataLength / (itemSize * numColumns);
            this.numColumns = numColumns;
            this.usage = usage;
            this.indexArray = !!indexArray;
            this.binding = this.indexArray ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
            gl.bindBuffer(this.binding, this.buffer);
            gl.bufferData(this.binding, data, this.usage);
            gl.bindBuffer(this.binding, null);
          }
          /**
              Update data in this buffer. NOTE: the data must fit
              the originally-allocated buffer!
               @method
              @param {VertexBufferView} data Data to store in the buffer.
              @return {VertexBuffer} The VertexBuffer object.
          */


          data(data) {
            // Don't want to update vertex array bindings
            let currentVertexArray = this.appState.vertexArray;

            if (currentVertexArray) {
              this.gl.bindVertexArray(null);
            }

            this.gl.bindBuffer(this.binding, this.buffer);
            this.gl.bufferSubData(this.binding, 0, data);
            this.gl.bindBuffer(this.binding, null);

            if (currentVertexArray) {
              this.gl.bindVertexArray(currentVertexArray.vertexArray);
            }

            return this;
          }
          /**
              Delete this array buffer.
               @method
              @return {VertexBuffer} The VertexBuffer object.
          */


          delete() {
            if (this.buffer) {
              this.gl.deleteBuffer(this.buffer);
              this.buffer = null;
            }

            return this;
          }

        }

        module.exports = VertexBuffer;
        /***/
      }])
    );
  });
});
var PicoGL = unwrapExports(picogl);

var log4 = function log4(x) {
  return .5 * Math.log2(x);
};
var isPowerOf2 = function isPowerOf2(x) {
  return (x & x - 1) === 0;
};
var nearestPowerOfTwo = function nearestPowerOfTwo(x) {
  return Math.pow(2, Math.max(Math.ceil(Math.log2(x)), 1));
};
var nearestPowerOfFour = function nearestPowerOfFour(x) {
  return Math.pow(4, Math.max(Math.ceil(log4(x)), 1));
};
var FLOAT_FORMATS_BY_ITEM_SIZE = {
  1: [PicoGL.RED, PicoGL.R32F],
  2: [PicoGL.RG, PicoGL.RG32F],
  3: [PicoGL.RGB, PicoGL.RGB32F],
  4: [PicoGL.RGBA, PicoGL.RGBA32F]
};
var isFloatTexture = function isFloatTexture(tex, itemSize) {
  return tex.type === PicoGL.FLOAT && tex.format === FLOAT_FORMATS_BY_ITEM_SIZE[itemSize][0] && tex.internalFormat === FLOAT_FORMATS_BY_ITEM_SIZE[itemSize][1];
};
var isFloatBuffer = function isFloatBuffer(buf, itemSize) {
  return buf.type === PicoGL.FLOAT && buf.itemSize == itemSize;
};
var isUnsignedBuffer = function isUnsignedBuffer(buf, itemSize) {
  return buf.type === PicoGL.UNSIGNED_INT && buf.itemSize == itemSize;
};
function createFloatTexture(app, width, height, itemSize) {
  var _FLOAT_FORMATS_BY_ITE = FLOAT_FORMATS_BY_ITEM_SIZE[itemSize],
      format = _FLOAT_FORMATS_BY_ITE[0],
      internalFormat = _FLOAT_FORMATS_BY_ITE[1];
  return app.createTexture2D(width, height, {
    type: PicoGL.FLOAT,
    format: format,
    internalFormat: internalFormat
  });
}
function readFromTexture(app, texture) {
  var fb = app.createFramebuffer().colorTarget(0, texture);
  app.readFramebuffer(fb);
  var result = new Float32Array(4 * texture.width * texture.height);
  app.gl.readPixels(0, 0, texture.width, texture.height, PicoGL.RGBA, PicoGL.FLOAT, result);
  app.defaultReadFramebuffer();
  return Array.from(result);
}
function invariant(expr) {
  if (!expr) {
    var error = new Error();
    error.name = 'AssertionError';
    throw error;
  }
}
var pick = function pick(obj, props) {
  return props.reduce(function (result, prop) {
    if (prop in obj) {
      result[prop] = obj[prop];
    }

    return result;
  }, {});
};

var introVert = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 a;\nlayout(location = 1) in vec2 b;\nlayout(location = 2) in vec2 c;\nlayout(location = 3) in vec2 d;\n\nuniform int N;\n\nout vec4 result;\n\nvec4 minmax(vec2 a, vec2 b, vec2 c, vec2 d) {\n    vec2 mn = min(min(a, b), min(c, d));\n    vec2 mx = max(max(a, b), max(c, d));\n\n    return vec4(mn, mx);\n}\n\nconst float INF = 1./0.;\nconst vec2 MIN = vec2(-INF, -INF);\nconst vec2 MAX = vec2( INF,  INF);\n\nvoid main() {\n    // `extra` specifies how much attributes are missing.\n    //\n    // Example:\n    //  N = 9\n    //\n    // vID   a b c d\n    // ---   -------\n    //  0 <- 0 1 2 3    // extra = 0\n    //  1 <- 4 5 6 7    // extra = 0\n    //  2 <- 8 * * *    // extra = 3\n    //  3 <- * * * *    // extra = 4\n    int extra = clamp(4 * (1 + gl_VertexID) - N, 0, 4);\n\n    if (extra == 4) {\n        result = vec4(MAX, MIN);\n    } else {\n        result = minmax(\n            a,\n            // TODO: what about avoiding the branch?\n            extra <= 2 ? b : a,\n            extra <= 1 ? c : a,\n            extra == 0 ? d : a\n        );\n    }\n\n    gl_Position = vec4(0., 0., 0., 1.);\n}\n"; // eslint-disable-line

var reduceVert = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec4 a;\nlayout(location = 1) in vec4 b;\nlayout(location = 2) in vec4 c;\nlayout(location = 3) in vec4 d;\n\nout vec4 result;\n\nvoid main() {\n    vec2 mn = min(min(a.xy, b.xy), min(c.xy, d.xy));\n    vec2 mx = max(max(a.zw, b.zw), max(c.zw, d.zw));\n\n    result = vec4(mn, mx);\n\n    gl_Position = vec4(0., 0., 0., 1.);\n}\n"; // eslint-disable-line

var storeFrag = "#version 300 es\n\n// TODO: what about highp precision?\nprecision mediump float;\n#define GLSLIFY 1\n\nin vec4 result;\nout vec4 outResult;\n\nvoid main() {\n    outResult = result;\n}\n"; // eslint-disable-line

function createVao(app, data, pattern) {
  if (pattern === void 0) {
    pattern = data.itemSize;
  }

  invariant(isFloatBuffer(data, 2) || isFloatBuffer(data, 3) || isFloatBuffer(data, 4));
  var gl = app.gl;
  var vao = app.createVertexArray();
  gl.bindVertexArray(vao.vertexArray);
  gl.bindBuffer(data.binding, data.buffer);
  var stepSize = data.itemSize * PicoGL.TYPE_SIZE[PicoGL.FLOAT];

  for (var i = 0; i < 4; ++i) {
    gl.vertexAttribPointer(i, pattern, PicoGL.FLOAT, false, 4 * stepSize, i * stepSize);
    gl.enableVertexAttribArray(i);
  }

  vao.instanced = false;
  gl.bindVertexArray(null);
  gl.bindBuffer(data.binding, null);
  return vao;
}

var Kit =
/*#__PURE__*/
function () {
  Kit.readable = function readable(app, program, buffer, pattern) {
    var vao = createVao(app, buffer, pattern);
    var call = app.createDrawCall(program, vao, PicoGL.POINTS);
    return new Kit(buffer, vao, call, null);
  };

  Kit.duplex = function duplex(app, program, size, pattern) {
    var buf = app.createVertexBuffer(PicoGL.FLOAT, 4, 4 * Math.max(size, 1));
    var vao = createVao(app, buf, pattern);
    var call = app.createDrawCall(program, vao, PicoGL.POINTS);
    var tf = app.createTransformFeedback().feedbackBuffer(0, buf);
    return new Kit(buf, vao, call, tf);
  };

  function Kit(buf, vao, call, tf) {
    this.buf = buf;
    this.vao = vao;
    this.call = call;
    this.tf = tf;
  }

  var _proto = Kit.prototype;

  _proto.draw = function draw(size, tf) {
    this.call.numElements = size;

    if (tf) {
      this.call.transformFeedback(tf);
    }

    this.call.draw();
  };

  return Kit;
}();

function findBounds (app) {
  invariant(app.floatRenderTargetsEnabled);
  var mark = Symbol();
  var introProg = app.createProgram(introVert, storeFrag, ['result']);
  var reduceProg = app.createProgram(reduceVert, storeFrag, ['result']);
  var N = -1;
  var tempA = null;
  var tempB = null;
  var stepCount = -1; // 1-4: data --(intro)-> result
  // 5-16: data --(intro)-> tempA --(reduce)-> result
  // 17-64: data --(intro)-> tempA --(reduce)-> tempB --(reduce)-> result
  // ...: data --(intro)-> tempA --(reduce)-> tempB --(reduce)-> tempA ...

  return function (data, result) {
    var activeKit = data[mark];
    invariant(N === -1 || N === data.numItems);

    if (!activeKit) {
      activeKit = data[mark] = Kit.readable(app, introProg, data, 2);
      N = data.numItems;
      stepCount = Math.max(Math.ceil(log4(N)), 1);
      tempA = Kit.duplex(app, reduceProg, Math.pow(4, stepCount - 1));
      tempB = Kit.duplex(app, reduceProg, Math.pow(4, stepCount - 2));
    }

    var resultFb = result[mark];

    if (!resultFb) {
      invariant(isFloatTexture(result, 4));
      resultFb = result[mark] = app.createFramebuffer().colorTarget(0, result);
    }

    activeKit.call.uniform('N', N);
    app.noRasterize();

    for (var size = Math.pow(4, stepCount - 1); size > 1; size /= 4) {
      var nextKit = activeKit === tempA ? tempB : tempA;
      activeKit.draw(size, nextKit.tf);
      activeKit = nextKit;
    }

    app.rasterize().drawFramebuffer(resultFb).viewport(0, 0, 1, 1);
    activeKit.draw(1);
    return stepCount;
  };
}

var assembleVert = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 position;\nlayout(location = 1) in float mass;\n\nuniform sampler2D bounds;\nuniform vec2 border;\n\nflat out vec3 result;\n\nvoid main() {\n    vec4 minmax = texelFetch(bounds, ivec2(0, 0), 0);\n\n    result = vec3(position * mass, mass);\n\n    // (x_min, y_min) --> (-1, -1)\n    // (x_max, y_max) --> ( 1,  1)\n    vec2 halfSize = .5 * (minmax.zw - minmax.xy);\n\n    vec2 cell = (position - minmax.xy - halfSize) / halfSize;\n\n    gl_Position = vec4(clamp(cell, -border, border), 0., 1.);\n}\n"; // eslint-disable-line

var storeFrag$1 = "#version 300 es\n\n// TODO: what about highp precision?\nprecision mediump float;\n#define GLSLIFY 1\n\nflat in vec3 result;\nout vec4 outResult;\n\nvoid main() {\n    outResult = vec4(result, 1.);\n}\n"; // eslint-disable-line

function buildGrid (app) {
  invariant(app.floatRenderTargetsEnabled);
  var mark = Symbol();
  var prog = app.createProgram(assembleVert, storeFrag$1);
  return function (positions, masses, bounds, result) {
    var call = positions[mark];

    if (!call) {
      invariant(isFloatBuffer(positions, 2));
      invariant(isFloatBuffer(masses, 1));
      invariant(positions.numItems === masses.numItems);
      var vao = app.createVertexArray().vertexAttributeBuffer(0, positions).vertexAttributeBuffer(1, masses);
      call = positions[mark] = app.createDrawCall(prog, vao, PicoGL.POINTS);
    }

    var fb = result[mark];

    if (!fb) {
      invariant(isFloatTexture(result, 4));
      fb = result[mark] = app.createFramebuffer().colorTarget(0, result);
    }

    invariant(isFloatTexture(bounds, 4));
    invariant(bounds.width === 1 && bounds.height === 1);
    call // TODO: can we avoid borders?
    .uniform('border', [1 - 1 / result.width, 1 - 1 / result.height]).texture('bounds', bounds);
    app.drawFramebuffer(fb).viewport(0, 0, result.width, result.height).clearMask(PicoGL.COLOR_BUFFER_BIT).clearColor(0, 0, 0, 0).clear().blendFunc(PicoGL.ONE, PicoGL.ONE).blend();
    call.draw();
    app.noBlend();
  };
}

var quadVert = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 position;\n\nvoid main() {\n    gl_Position = vec4(position, 0., 1.);\n}\n"; // eslint-disable-line

var reduceFrag = "#version 300 es\n\n// TODO: what about highp precision?\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D level;\n\nout vec4 result;\n\nvoid main() {\n    ivec2 coord = 2 * ivec2(gl_FragCoord.xy);\n\n    result = texelFetch(level, coord, 0)\n           + texelFetch(level, coord + ivec2(1, 0), 0)\n           + texelFetch(level, coord + ivec2(0, 1), 0)\n           + texelFetch(level, coord + ivec2(1, 1), 0);\n}\n"; // eslint-disable-line

var QUAD = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
function buildPyramid (app) {
  invariant(app.floatRenderTargetsEnabled);
  var gl = app.gl;
  var mark = Symbol();
  var prog = app.createProgram(quadVert, reduceFrag);
  var buf = app.createVertexBuffer(PicoGL.FLOAT, 2, QUAD);
  var vao = app.createVertexArray().vertexAttributeBuffer(0, buf);
  var call = app.createDrawCall(prog, vao, PicoGL.TRIANGLE_STRIP);
  return function (grid, result) {
    invariant(grid.width === grid.height);
    invariant(grid.width >= 8);
    invariant(isPowerOf2(grid.width));
    invariant(grid.width === result.width + 2);
    invariant(grid.height === 2 * result.height);
    invariant(isFloatTexture(grid, 4));
    invariant(isFloatTexture(result, 4));
    var interim = grid[mark];

    if (!interim) {
      var _texA = createFloatTexture(app, grid.width / 2, grid.height / 2, 4);

      var _texB = createFloatTexture(app, grid.width / 4, grid.height / 4, 4);

      var _fbA = app.createFramebuffer().colorTarget(0, _texA);

      var _fbB = app.createFramebuffer().colorTarget(0, _texB);

      interim = grid[mark] = {
        texA: _texA,
        texB: _texB,
        fbA: _fbA,
        fbB: _fbB
      };
    }

    var _interim = interim,
        texA = _interim.texA,
        texB = _interim.texB,
        fbA = _interim.fbA,
        fbB = _interim.fbB; // grid --> texA --> texB --> texA --> ..

    var activeFb = fbA;
    var activeTex = grid;

    for (var size = grid.width / 2, offset = 0; size > 1; offset += size, size /= 2) {
      app.readFramebuffer(activeFb).drawFramebuffer(activeFb).viewport(0, 0, size, size);
      call.texture('level', activeTex).draw(); // TODO: how much does copying cost?

      gl.bindTexture(gl.TEXTURE_2D, result.texture);
      gl.copyTexSubImage2D(gl.TEXTURE_2D, 0, offset, 0, 0, 0, size, size);
      activeFb = activeFb === fbA ? fbB : fbA;
      activeTex = activeTex === texA ? texB : texA;
    }
  };
}

var simulateVert = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 position;\nlayout(location = 1) in vec2 velocity;\nlayout(location = 2) in float mass;\nlayout(location = 3) in uvec2 edgesLoc;\n\nconst uint MAX_PYRAMID_LEVELS = 12u; // up to 8192x8192 grid\n\nuniform sampler2D bounds;\nuniform sampler2D pyramid;\nuniform sampler2D grid;\nuniform sampler2D positions;\nuniform sampler2D edges;\n\nuniform Constants {\n    float nodeCount;\n    float deltaT;\n    float kSpring;\n    float kLength;\n    float kRepulse;\n    float kTheta2;\n    float kDrag;\n    float kGravity;\n};\n\nflat out vec2 resultPosition;\nflat out vec2 resultVelocity;\n\nconst float M_2PI = 6.283185307179586;\nconst float M_EPS = 0.00001;\nconst vec2 ZERO = vec2(0., 0.);\n\nvec2 getUniqDirection() {\n    float angle = float(gl_VertexID) / nodeCount * M_2PI;\n\n    return vec2(cos(angle), sin(angle));\n}\n\nvec2 calcSpringForce(int idx, float weight) {\n    int row = textureSize(positions, 0).x;\n    ivec2 coord = ivec2(idx % row, idx / row);\n\n    vec2 anotherPosition = texelFetch(positions, coord, 0).xy;\n\n    vec2 delta = anotherPosition - position;\n    float dist2 = dot(delta, delta);\n\n    // TODO: use M_EPS²?\n    if (dist2 < M_EPS) {\n        delta = 0.01 * getUniqDirection();\n        dist2 = 0.0001;\n    }\n\n    float diff = 1. - kLength * inversesqrt(dist2);\n\n    // TODO: we need it?\n    diff = max(diff, 0.);\n\n    return weight * delta * diff;\n}\n\nvec2 calcSpringForce() {\n    uint row = uint(textureSize(edges, 0).x);\n\n    vec2 force = ZERO;\n\n    // TODO: what about blending in an another step?\n    for (uint idx = edgesLoc.x; idx < edgesLoc.y; ++idx) {\n        ivec2 coord = ivec2(idx % row, idx / row);\n        vec4 edge = texelFetch(edges, coord, 0);\n\n        force += calcSpringForce(int(edge.y), edge.z);\n    }\n\n    return kSpring * force;\n}\n\nvec2 calcRepulseForce(ivec2 coords) {\n    vec3 cell = texelFetch(grid, coords, 0).xyz;\n    float cellMass = cell.z;\n\n    if (cellMass < M_EPS) {\n        return ZERO;\n    }\n\n    vec2 cellCenter = cell.xy / cellMass;\n\n    vec2 delta = position - cellCenter;\n    float dist = length(delta);\n\n    if (dist < M_EPS) {\n        if (cellMass == mass) {\n            return ZERO;\n        }\n\n        delta = 0.01 * getUniqDirection();\n        dist = 0.01;\n    }\n\n    return cell.z * delta / (dist * dist * dist);\n}\n\nvec2 calcRepulseForce() {\n    const uint MAX_STACK_SIZE = 3u * MAX_PYRAMID_LEVELS + 1u;\n\n    struct Node {\n        ivec2 coords;\n        uint lvlSize;\n        uint lvlOffset;\n        float area;\n    };\n\n    Node stack[MAX_STACK_SIZE];\n\n    uint lastLvlOffset = uint(textureSize(pyramid, 0).x) - 2u;\n\n    vec4 minmax = texelFetch(bounds, ivec2(0, 0), 0);\n    vec2 lastLvlShape = minmax.zw - minmax.xy;\n    float lastLvlArea = .25 * (lastLvlShape.x * lastLvlShape.y);\n\n    stack[0] = Node(ivec2(0, 1), 2u, lastLvlOffset, lastLvlArea);\n    stack[1] = Node(ivec2(1, 1), 2u, lastLvlOffset, lastLvlArea);\n    stack[2] = Node(ivec2(1, 0), 2u, lastLvlOffset, lastLvlArea);\n    stack[3] = Node(ivec2(0, 0), 2u, lastLvlOffset, lastLvlArea);\n\n    uint sp = 4u;\n\n    vec2 force = ZERO;\n\n    while (sp > 0u) {\n        Node node = stack[--sp];\n\n        vec4 region = texelFetch(pyramid, ivec2(node.lvlOffset, 0u) + node.coords, 0);\n        float regionMass = region.z;\n\n        if (regionMass < M_EPS) {\n            continue;\n        }\n\n        vec2 regionCenter = region.xy / regionMass;\n\n        vec2 delta = position - regionCenter;\n        float dist2 = dot(delta, delta);\n\n        if (node.area < kTheta2 * dist2) {\n            force += regionMass * delta / pow(dist2, 1.5);\n        } else if (node.lvlOffset == 0u) {\n            ivec2 base = 2 * node.coords;\n\n            force += calcRepulseForce(base + ivec2(0, 1))\n                   + calcRepulseForce(base + ivec2(1, 1))\n                   + calcRepulseForce(base + ivec2(1, 0))\n                   + calcRepulseForce(base);\n        } else {\n            ivec2 base = 2 * node.coords;\n            uint lvlSize = 2u * node.lvlSize;\n            uint lvlOffset = node.lvlOffset - lvlSize;\n            float area = .25 * node.area;\n\n            stack[sp++] = Node(base + ivec2(0, 1), lvlSize, lvlOffset, area);\n            stack[sp++] = Node(base + ivec2(1, 1), lvlSize, lvlOffset, area);\n            stack[sp++] = Node(base + ivec2(1, 0), lvlSize, lvlOffset, area);\n            stack[sp++] = Node(base, lvlSize, lvlOffset, area);\n        }\n    }\n\n    return kRepulse * mass * force;\n}\n\nvec2 calcDragForce() {\n    return -kDrag * velocity;\n}\n\nvec2 calcGravityForce() {\n    float dist = length(position);\n\n    if (dist < M_EPS) {\n        return ZERO;\n    }\n\n    return -kGravity * mass * position / dist;\n}\n\nvoid main() {\n    vec2 force = calcSpringForce() + calcRepulseForce() + calcDragForce() + calcGravityForce();\n\n    vec2 deltaV = force / mass * deltaT;\n\n    resultVelocity = velocity + deltaV;\n\n    float dist2 = dot(resultVelocity, resultVelocity);\n\n    // TODO: should we restrict velocity here?\n    if (dist2 > 1.) {\n        resultVelocity *= inversesqrt(dist2);\n    }\n\n    // TODO: investigate integration methods.\n    resultPosition = position + resultVelocity * deltaT;\n\n    ivec2 shape = textureSize(positions, 0);\n    vec2 cell = vec2(gl_VertexID % shape.x, gl_VertexID / shape.x);\n    vec2 coords = 2. * (cell + .5) / vec2(shape) - 1.;\n\n    gl_Position = vec4(coords, 0., 1.);\n}\n"; // eslint-disable-line

var storeFrag$2 = "#version 300 es\n\n// TODO: highp vs mediump precision.\nprecision highp float;\n#define GLSLIFY 1\n\nflat in vec2 resultPosition;\nout vec2 result;\n\nvoid main() {\n    result = resultPosition;\n}\n"; // eslint-disable-line

var FLOAT = PicoGL.FLOAT;
var CONSTANTS_LAYOUT = [FLOAT, FLOAT, FLOAT, FLOAT, FLOAT, FLOAT, FLOAT, FLOAT];

function saveConstants(consts, ub) {
  ub.set(0, consts.nodeCount);
  ub.set(1, consts.deltaT);
  ub.set(2, consts.springCoef);
  ub.set(3, consts.springLength);
  ub.set(4, consts.repulseCoef);
  ub.set(5, consts.theta * consts.theta);
  ub.set(6, consts.dragCoef);
  ub.set(7, consts.gravityCoef);
  ub.update();
}

function simulate (app) {
  invariant(app.floatRenderTargetsEnabled);
  var mark = Symbol();
  var constantsUB = app.createUniformBuffer(CONSTANTS_LAYOUT);
  var prog = app.createProgram(simulateVert, storeFrag$2, ['resultPosition', 'resultVelocity']);
  var prevConstants = null;
  return function (positions, velocities, masses, edgesLocs, bounds, pyramid, grid, allPositions, edges, constants, resultPositions, resultVelocities, resultAllPositions) {
    invariant(isFloatTexture(pyramid, 4));
    invariant(isFloatTexture(grid, 4));
    invariant(isFloatTexture(allPositions, 2));
    invariant(isFloatTexture(edges, 3));
    invariant(allPositions.width === resultAllPositions.width);
    invariant(pyramid.width === 2 * pyramid.height - 2);
    invariant(pyramid.height >= 2);
    invariant(grid.width == grid.height);
    invariant(2 * pyramid.height === grid.height);
    invariant(isFloatTexture(bounds, 4));
    invariant(bounds.width === 1 && bounds.height === 1);

    if (constants !== prevConstants) {
      saveConstants(constants, constantsUB);
      prevConstants = constants;
    }

    var call = positions[mark];

    if (!call) {
      invariant(isFloatBuffer(positions, 2));
      invariant(isFloatBuffer(velocities, 2));
      invariant(isFloatBuffer(resultPositions, 2));
      invariant(isFloatBuffer(resultVelocities, 2));
      invariant(isFloatBuffer(masses, 1));
      invariant(isUnsignedBuffer(edgesLocs, 2));
      invariant(positions.numItems === velocities.numItems);
      invariant(positions.numItems === resultPositions.numItems);
      invariant(positions.numItems === resultVelocities.numItems);
      invariant(positions.numItems === edgesLocs.numItems);
      invariant(positions.numItems === masses.numItems);
      var vao = app.createVertexArray().vertexAttributeBuffer(0, positions).vertexAttributeBuffer(1, velocities).vertexAttributeBuffer(2, masses).vertexIntegerAttributeBuffer(3, edgesLocs);
      var tf = app.createTransformFeedback().feedbackBuffer(0, resultPositions).feedbackBuffer(1, resultVelocities);
      call = app.createDrawCall(prog, vao, PicoGL.POINTS).transformFeedback(tf);
      positions[mark] = velocities[mark] = call;
    }

    invariant(positions[mark] === velocities[mark]);
    var fb = resultAllPositions[mark];

    if (!fb) {
      invariant(isFloatTexture(resultAllPositions, 2));
      fb = resultAllPositions[mark] = app.createFramebuffer().colorTarget(0, resultAllPositions);
    }

    app.drawFramebuffer(fb).viewport(0, 0, resultAllPositions.width, resultAllPositions.height);
    call.uniformBlock('Constants', constantsUB).texture('pyramid', pyramid).texture('grid', grid).texture('positions', allPositions).texture('edges', edges).texture('bounds', bounds).draw();
  };
}

var locateVert = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 position;\n\nuniform vec2 cursor;\n\n// TODO: move to the constants.\nconst float SIZE = 10.;\n\nflat out int id;\n\nvoid main() {\n    id = gl_VertexID;\n    gl_Position = vec4((position - cursor) / SIZE, 0., 1.);\n}\n"; // eslint-disable-line

var storeFrag$3 = "#version 300 es\n\nprecision highp float;\n#define GLSLIFY 1\n\nflat in int id;\n\n// TODO: is it possible to read from RED texture and use here float?\nout vec4 result;\n\nvoid main() {\n    result = vec4(id);\n}\n"; // eslint-disable-line

function detectCursor (app) {
  var mark = Symbol();
  var prog = app.createProgram(locateVert, storeFrag$3);
  var result = createFloatTexture(app, 1, 1, 4).data(new Float32Array(4));
  var fb = app.createFramebuffer().colorTarget(0, result);
  return function (positions, cursor) {
    var call = positions[mark];

    if (!call) {
      invariant(isFloatBuffer(positions, 2));
      var vao = app.createVertexArray().vertexAttributeBuffer(0, positions);
      call = positions[mark] = app.createDrawCall(prog, vao, PicoGL.POINTS);
    }

    app.drawFramebuffer(fb).viewport(0, 0, 1, 1).clearMask(PicoGL.COLOR_BUFFER_BIT).clearColor(-1, -1, -1, -1).clear();
    call.uniform('cursor', cursor).draw();
    return readFromTexture(app, result)[0] | 0;
  };
}

var assembleVert$1 = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 position;\nlayout(location = 1) in float mass;\n\nuniform vec4 viewport;\n\nflat out float nodeMass;\nflat out int nodeIdx;\n\nvoid main() {\n    nodeMass = mass;\n    nodeIdx = gl_VertexID;\n\n    vec2 halfSize = .5 * viewport.zw;\n    vec2 cell = (position - viewport.xy - halfSize) / halfSize;\n\n    gl_Position = vec4(cell, 0., 1.);\n}\n"; // eslint-disable-line

var selectFrag = "#version 300 es\n\nprecision highp float;\n#define GLSLIFY 1\n\nflat in float nodeMass;\nflat in int nodeIdx;\n\nout float result;\n\nvoid main() {\n    // TODO: also use mass.\n    result = float(nodeIdx);\n}\n"; // eslint-disable-line

function selectNodes (app) {
  invariant(app.floatRenderTargetsEnabled);
  var mark = Symbol();
  var prog = app.createProgram(assembleVert$1, selectFrag);
  return function (positions, masses, viewport, result) {
    var call = positions[mark];

    if (!call) {
      invariant(isFloatBuffer(positions, 2));
      invariant(isFloatBuffer(masses, 1));
      invariant(positions.numItems === masses.numItems);
      var vao = app.createVertexArray().vertexAttributeBuffer(0, positions).vertexAttributeBuffer(1, masses);
      call = positions[mark] = app.createDrawCall(prog, vao, PicoGL.POINTS);
    }

    var fb = result[mark];

    if (!fb) {
      invariant(isFloatTexture(result, 1));
      fb = result[mark] = app.createFramebuffer().colorTarget(0, result);
    }

    invariant(viewport.length === 4);
    call.uniform('viewport', viewport);
    app.drawFramebuffer(fb).viewport(0, 0, result.width, result.height).clearMask(PicoGL.COLOR_BUFFER_BIT).clearColor(-1, -1, -1, -1).clear().blendFunc(PicoGL.ONE, PicoGL.ONE).blend();
    app.gl.blendEquation(app.gl.MAX);
    call.draw();
    app.gl.blendEquation(app.gl.FUNC_ADD);
    app.noBlend();
  };
}

var locateVert$1 = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 corner;\n\nuniform vec2 invShape;\nuniform sampler2D positions;\n\nconst float SIZE = 5.;\n\nvoid main() {\n    int idx = gl_VertexID / 6;\n    int row = textureSize(positions, 0).x;\n    ivec2 coord = ivec2(idx % row, idx / row);\n\n    vec2 center = texelFetch(positions, coord, 0).xy;\n\n    vec2 position = (center + corner * SIZE) * invShape * 2.;\n\n    gl_Position = vec4(position, 0., 1.);\n}\n"; // eslint-disable-line

var colorFrag = "#version 300 es\n\nprecision lowp float;\n#define GLSLIFY 1\n\nout vec4 color;\n\nvoid main() {\n    color = vec4(0., 0., 0.8, 1.);\n}\n"; // eslint-disable-line

function drawNodes (app) {
  var mark = Symbol();
  var prog = app.createProgram(locateVert$1, colorFrag);
  return function (corners, positions, nodeCount) {
    var call = corners[mark];

    if (!call) {
      invariant(isFloatBuffer(corners, 2));
      var vao = app.createVertexArray().vertexAttributeBuffer(0, corners);
      call = corners[mark] = app.createDrawCall(prog, vao, PicoGL.TRIANGLES);
    }

    invariant(isFloatTexture(positions, 2));
    app.defaultDrawFramebuffer().viewport(0, 0, app.width, app.height);
    call.numElements = 6 * nodeCount;
    call.uniform('invShape', [1 / app.width, 1 / app.height]).texture('positions', positions).draw();
  };
}

var locateVert$2 = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in uint endpoint;\n\nuniform vec2 invShape;\nuniform sampler2D positions;\n\nvoid main() {\n    uint row = uint(textureSize(positions, 0).x);\n    ivec2 coord = ivec2(endpoint % row, endpoint / row);\n\n    vec2 position = texelFetch(positions, coord, 0).xy * invShape * 2.;\n\n    gl_Position = vec4(position, 0., 1.);\n}\n"; // eslint-disable-line

var colorFrag$1 = "#version 300 es\n\nprecision lowp float;\n#define GLSLIFY 1\n\nout vec4 color;\n\nvoid main() {\n    color = vec4(0., 0., 0., 1.);\n}\n"; // eslint-disable-line

function drawEdges (app) {
  var mark = Symbol();
  var prog = app.createProgram(locateVert$2, colorFrag$1);
  return function (endpoints, positions) {
    var call = endpoints[mark];

    if (!call) {
      invariant(isUnsignedBuffer(endpoints, 1));
      var vao = app.createVertexArray().vertexIntegerAttributeBuffer(0, endpoints);
      call = endpoints[mark] = app.createDrawCall(prog, vao, PicoGL.LINES);
    }

    invariant(isFloatTexture(positions, 2));
    app.defaultDrawFramebuffer().viewport(0, 0, app.width, app.height);
    call.uniform('invShape', [1 / app.width, 1 / app.height]).texture('positions', positions).draw();
  };
}

var locateVert$3 = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 corner;\n\nuniform vec2 invShape;\nuniform sampler2D grid;\nuniform sampler2D positions;\n\nconst vec2 SIZE = vec2(45., 13.);\n\nvoid main() {\n    int cellIdx = gl_VertexID / 6;\n    int gridRow = textureSize(grid, 0).x;\n    ivec2 gridCoord = ivec2(cellIdx % gridRow, cellIdx / gridRow);\n\n    int nodeIdx = int(texelFetch(grid, gridCoord, 0).x);\n\n    if (nodeIdx == -1) {\n        gl_Position = vec4(4., 4., 4., 1.);\n        return;\n    }\n\n    int posRow = textureSize(positions, 0).x;\n    ivec2 posCoord = ivec2(nodeIdx % posRow, nodeIdx / posRow);\n\n    vec2 center = texelFetch(positions, posCoord, 0).xy;\n    vec2 position = (center - vec2(0., 30.) + corner * SIZE) * invShape * 2.;\n\n    gl_Position = vec4(position, 0., 1.);\n}\n"; // eslint-disable-line

var colorFrag$2 = "#version 300 es\n\nprecision lowp float;\n#define GLSLIFY 1\n\nout vec4 color;\n\nvoid main() {\n    color = vec4(0., 0., 0.0, 1.);\n}\n"; // eslint-disable-line

function drawLabels (app) {
  var mark = Symbol();
  var prog = app.createProgram(locateVert$3, colorFrag$2);
  return function (corners, grid, positions) {
    var call = corners[mark];

    if (!call) {
      invariant(isFloatBuffer(corners, 2));
      var vao = app.createVertexArray().vertexAttributeBuffer(0, corners);
      call = corners[mark] = app.createDrawCall(prog, vao, PicoGL.TRIANGLES);
    }

    invariant(isFloatTexture(grid, 1));
    invariant(isFloatTexture(positions, 2));
    app.defaultDrawFramebuffer().viewport(0, 0, app.width, app.height);
    call.numElements = 6 * grid.width * grid.height;
    call.uniform('invShape', [1 / app.width, 1 / app.height]).texture('grid', grid).texture('positions', positions).draw();
  };
}

var TARGET_FRAME_DURATION = 1000 / 30; // [ms]

var Graph =
/*#__PURE__*/
function () {
  function Graph(canvas) {
    var _this = this;

    var app = this._app = PicoGL.createApp(canvas);
    app.floatRenderTargets();
    /* VivaGraph:
     *  deltaT: 0.02,
     *  springCoef: 0.0002,
     *  springLength: 30,
     *  repulseCoef: 1.2,
     *  theta: 0.8,
     *  dragCoef: 0.02,
     *  gravityCoef: 1,
     */

    this._constants = {
      nodeCount: 0,
      deltaT: 0.02,
      springCoef: 0.0002,
      springLength: 30,
      repulseCoef: 1.2,
      theta: 0.8,
      dragCoef: 0.02,
      gravityCoef: 1
    };
    this._nodes = [];
    this._edgeCount = 0;
    this._nodeNameToId = new Map();
    this._running = false;
    this._shouldUpdate = false;
    this._shouldDraw = true;
    this._shouldDrawLabels = false;
    this._stepsPerSchedule = 1;
    this._viewport = [-app.width / 2, -app.height / 2, app.width, app.height];
    this._steps = {
      findBounds: findBounds(app),
      buildGrid: buildGrid(app),
      buildPyramid: buildPyramid(app),
      simulate: simulate(app),
      detectCursor: detectCursor(app),
      selectNodes: selectNodes(app),
      drawNodes: drawNodes(app),
      drawEdges: drawEdges(app),
      drawLabels: drawLabels(app)
    };
    this._buffers = {
      positionsA: null,
      positionsB: null,
      velocitiesA: null,
      velocitiesB: null,
      masses: null,
      edgesLocs: null,
      edgepoints: null
    };
    this._textures = {
      bounds: null,
      grid: null,
      pyramid: null,
      positionsA: null,
      positionsB: null,
      edges: null
    };
    canvas.addEventListener('click', function (ev) {
      return _this._onClick(ev);
    }, false);
  }

  var _proto = Graph.prototype;

  _proto.configure = function configure(config) {
    this._constants = Object.assign({}, this._constants, pick(config, ['deltaT', 'springCoef', 'springLength', 'repulseCoef', 'theta', 'dragCoef', 'gravityCoef']));

    if (config.shouldDraw != null) {
      this._shouldDraw = config.shouldDraw;
    }

    if (config.shouldDrawLabels != null) {
      this._shouldDrawLabels = config.shouldDrawLabels;
    }

    this._shouldUpdate = true;
    return this;
  };

  _proto.addNodes = function addNodes(nodes) {
    var nextId = this._nodes.length;

    for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var _ref2 = _ref,
          name = _ref2.name,
          x = _ref2.x,
          y = _ref2.y,
          weight = _ref2.weight;

      this._nodes.push({
        name: name != null ? name : null,
        x: x != null ? x : 0,
        y: y != null ? y : 0,
        weight: weight != null ? weight : 1,
        edges: []
      });

      if (name != null) {
        this._nodeNameToId.set(name, nextId++);
      }
    }

    this._shouldUpdate = true;
    return this;
  };

  _proto.addEdges = function addEdges(edges) {
    for (var _iterator2 = edges, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref3 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref3 = _i2.value;
      }

      var _ref4 = _ref3,
          source = _ref4.source,
          target = _ref4.target,
          weight = _ref4.weight;
      var sourceId = typeof source === 'number' ? source : this._nodeNameToId.get(source);
      var targetId = typeof target === 'number' ? target : this._nodeNameToId.get(target);

      this._nodes[sourceId].edges.push({
        target: targetId,
        weight: weight != null ? weight : 1
      });

      ++this._edgeCount;
    }

    this._shouldUpdate = true;
    return this;
  };

  _proto.run = function run() {
    if (!this._running) {
      this._running = true;

      this._schedule();
    }

    return this;
  };

  _proto.step = function step() {
    if (this._shouldUpdate) {
      this._update();

      this._shouldUpdate = false;
    }

    this._turn();

    return this;
  };

  _proto.halt = function halt() {
    this._running = false;
    return this;
  };

  _proto._schedule = function _schedule() {
    var _this2 = this;

    if (!this._running) {
      return;
    }

    var start = Date.now();
    window.requestAnimationFrame(function (_) {
      for (var i = 0; i < _this2._stepsPerSchedule; ++i) {
        _this2.step();
      }

      _this2._schedule();

      var spent = Date.now() - start;

      if (spent <= TARGET_FRAME_DURATION - 5) {
        ++_this2._stepsPerSchedule;
      } else if (spent >= TARGET_FRAME_DURATION + 5) {
        _this2._stepsPerSchedule = Math.max(_this2._stepsPerSchedule - 1, 1);
      }
    });
  };

  _proto._onClick = function _onClick(event) {
    var canvas = this._app.gl.canvas;
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = rect.height - (event.clientY - rect.top);
    var buf = this._buffers;
    var steps = this._steps;
    var idx = steps.detectCursor(buf.positionsA, [x, y]);

    if (idx === -1) {
      return;
    }

    console.log('CLICK', idx, this._nodes[idx].name);
  };

  _proto._update = function _update() {
    var app = this._app;
    var buf = this._buffers;
    var tex = this._textures;
    var nodeCount = this._nodes.length;
    var edgeCount = this._edgeCount; // TODO: select cell number by canvas and font sizes.

    var vpGridShape = [10, 3]; // TODO: improve the heuristic.

    var gridSize = Math.max(nearestPowerOfTwo(Math.sqrt(3 * nodeCount)), 8);
    var positionsVboLen = 2 * nearestPowerOfFour(nodeCount);
    var posTexSize = Math.ceil(Math.sqrt(nodeCount));
    var edgTexSize = Math.ceil(Math.sqrt(edgeCount));
    var positions = new Float32Array(2 * posTexSize * posTexSize);
    var masses = new Float32Array(nodeCount);
    var edgesLocs = new Uint32Array(2 * nodeCount);
    var edges = new Float32Array(3 * edgTexSize * edgTexSize);
    var endpoints = new Uint32Array(2 * edgeCount);
    var corners = new Float32Array(12 * Math.max(nodeCount, vpGridShape[0] * vpGridShape[1]));
    var cornerTmpl = [-1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, -1];
    var edgesLocsLen = 0;
    var endpointsLen = 0;
    var edgesLen = 0;

    for (var i = 0; i < nodeCount; ++i) {
      var node = this._nodes[i];
      positions[2 * i] = node.x;
      positions[2 * i + 1] = node.y;
      masses[i] = node.weight;
      edgesLocs[2 * i] = edgesLocsLen;

      for (var _iterator3 = node.edges, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref5 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref5 = _i3.value;
        }

        var edge = _ref5;
        edges[edgesLen++] = i;
        edges[edgesLen++] = edge.target;
        edges[edgesLen++] = edge.weight;
        endpoints[endpointsLen++] = i;
        endpoints[endpointsLen++] = edge.target;
        ++edgesLocsLen;
      }

      edgesLocs[2 * i + 1] = edgesLocsLen;
    }

    for (var _i4 = 0; _i4 < corners.length; _i4 += 12) {
      corners.set(cornerTmpl, _i4);
    } // Update the constants.


    this._constants = Object.assign({}, this._constants, {
      nodeCount: nodeCount
    }); // Create the buffers.

    buf.positionsA = app.createVertexBuffer(PicoGL.FLOAT, 2, positionsVboLen).data(positions.subarray(0, 2 * nodeCount));
    buf.positionsB = app.createVertexBuffer(PicoGL.FLOAT, 2, positionsVboLen); // TODO: how to avoid this hack?

    buf.positionsA.numItems = nodeCount;
    buf.positionsB.numItems = nodeCount;
    buf.velocitiesA = app.createVertexBuffer(PicoGL.FLOAT, 2, 2 * nodeCount);
    buf.velocitiesB = app.createVertexBuffer(PicoGL.FLOAT, 2, 2 * nodeCount);
    buf.masses = app.createVertexBuffer(PicoGL.FLOAT, 1, masses);
    buf.edgesLocs = app.createVertexBuffer(PicoGL.UNSIGNED_INT, 2, edgesLocs);
    buf.endpoints = app.createVertexBuffer(PicoGL.UNSIGNED_INT, 1, endpoints);
    buf.corners = app.createVertexBuffer(PicoGL.FLOAT, 2, corners); // Create the textures.

    tex.bounds = createFloatTexture(app, 1, 1, 4);
    tex.grid = createFloatTexture(app, gridSize, gridSize, 4);
    tex.pyramid = createFloatTexture(app, gridSize - 2, gridSize / 2, 4);
    tex.positionsA = createFloatTexture(app, posTexSize, posTexSize, 2).data(positions);
    tex.positionsB = createFloatTexture(app, posTexSize, posTexSize, 2);
    tex.edges = createFloatTexture(app, edgTexSize, edgTexSize, 3).data(edges);
    tex.viewportGrid = createFloatTexture(app, vpGridShape[0], vpGridShape[1], 1);
  };

  _proto._clear = function _clear() {
    this._app.defaultDrawFramebuffer().viewport(0, 0, this._app.width, this._app.height).clearColor(0, 0, 0, 0).clear();
  };

  _proto._turn = function _turn() {
    var buf = this._buffers;
    var tex = this._textures;
    var steps = this._steps;
    steps.findBounds(buf.positionsA, tex.bounds);
    steps.buildGrid(buf.positionsA, buf.masses, tex.bounds, tex.grid);
    steps.buildPyramid(tex.grid, tex.pyramid);
    steps.simulate(buf.positionsA, buf.velocitiesA, buf.masses, buf.edgesLocs, tex.bounds, tex.pyramid, tex.grid, tex.positionsA, tex.edges, this._constants, buf.positionsB, buf.velocitiesB, tex.positionsB);

    this._clear();

    if (this._shouldDraw) {
      steps.drawEdges(buf.endpoints, tex.positionsA);
      steps.drawNodes(buf.corners, tex.positionsA, this._constants.nodeCount);

      if (this._shouldDrawLabels) {
        steps.selectNodes(buf.positionsA, buf.masses, this._viewport, tex.viewportGrid);
        steps.drawLabels(buf.corners, tex.viewportGrid, tex.positionsA);
      }
    }

    var _ref6 = [buf.positionsB, buf.positionsA];
    buf.positionsA = _ref6[0];
    buf.positionsB = _ref6[1];
    var _ref7 = [buf.velocitiesB, buf.velocitiesA];
    buf.velocitiesA = _ref7[0];
    buf.velocitiesB = _ref7[1];
    var _ref8 = [tex.positionsB, tex.positionsA];
    tex.positionsA = _ref8[0];
    tex.positionsB = _ref8[1];
  };

  return Graph;
}();

exports.Graph = Graph;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdmkudW1kLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvcGljb2dsL2J1aWxkL3BpY29nbC5qcyIsIi4uL3NyYy91dGlscy5qcyIsIi4uL3NyYy9maW5kQm91bmRzL2luZGV4LmpzIiwiLi4vc3JjL2J1aWxkR3JpZC9pbmRleC5qcyIsIi4uL3NyYy9idWlsZFB5cmFtaWQvaW5kZXguanMiLCIuLi9zcmMvc2ltdWxhdGUvaW5kZXguanMiLCIuLi9zcmMvZGV0ZWN0Q3Vyc29yL2luZGV4LmpzIiwiLi4vc3JjL3NlbGVjdE5vZGVzL2luZGV4LmpzIiwiLi4vc3JjL2RyYXdOb2Rlcy9pbmRleC5qcyIsIi4uL3NyYy9kcmF3RWRnZXMvaW5kZXguanMiLCIuLi9zcmMvZHJhd0xhYmVscy9pbmRleC5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuUGljb0dMLmpzIHYwLjguOVxuXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG50aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG50aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG51c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxudGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbkZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG5JTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBpY29HTFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQaWNvR0xcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUYXJlayBTaGVyaWZcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5sZXQgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKTtcblxuLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvc3BlY3MvMS4wL1xuLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvc3BlY3MvbGF0ZXN0LzIuMC8jMS4xXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgREVQVEhfQlVGRkVSX0JJVDogMHgwMDAwMDEwMCxcbiAgICBTVEVOQ0lMX0JVRkZFUl9CSVQ6IDB4MDAwMDA0MDAsXG4gICAgQ09MT1JfQlVGRkVSX0JJVDogMHgwMDAwNDAwMCxcbiAgICBQT0lOVFM6IDB4MDAwMCxcbiAgICBMSU5FUzogMHgwMDAxLFxuICAgIExJTkVfTE9PUDogMHgwMDAyLFxuICAgIExJTkVfU1RSSVA6IDB4MDAwMyxcbiAgICBUUklBTkdMRVM6IDB4MDAwNCxcbiAgICBUUklBTkdMRV9TVFJJUDogMHgwMDA1LFxuICAgIFRSSUFOR0xFX0ZBTjogMHgwMDA2LFxuICAgIFpFUk86IDAsXG4gICAgT05FOiAxLFxuICAgIFNSQ19DT0xPUjogMHgwMzAwLFxuICAgIE9ORV9NSU5VU19TUkNfQ09MT1I6IDB4MDMwMSxcbiAgICBTUkNfQUxQSEE6IDB4MDMwMixcbiAgICBPTkVfTUlOVVNfU1JDX0FMUEhBOiAweDAzMDMsXG4gICAgRFNUX0FMUEhBOiAweDAzMDQsXG4gICAgT05FX01JTlVTX0RTVF9BTFBIQTogMHgwMzA1LFxuICAgIERTVF9DT0xPUjogMHgwMzA2LFxuICAgIE9ORV9NSU5VU19EU1RfQ09MT1I6IDB4MDMwNyxcbiAgICBTUkNfQUxQSEFfU0FUVVJBVEU6IDB4MDMwOCxcbiAgICBGVU5DX0FERDogMHg4MDA2LFxuICAgIEJMRU5EX0VRVUFUSU9OOiAweDgwMDksXG4gICAgQkxFTkRfRVFVQVRJT05fUkdCOiAweDgwMDksXG4gICAgQkxFTkRfRVFVQVRJT05fQUxQSEE6IDB4ODgzRCxcbiAgICBGVU5DX1NVQlRSQUNUOiAweDgwMEEsXG4gICAgRlVOQ19SRVZFUlNFX1NVQlRSQUNUOiAweDgwMEIsXG4gICAgQkxFTkRfRFNUX1JHQjogMHg4MEM4LFxuICAgIEJMRU5EX1NSQ19SR0I6IDB4ODBDOSxcbiAgICBCTEVORF9EU1RfQUxQSEE6IDB4ODBDQSxcbiAgICBCTEVORF9TUkNfQUxQSEE6IDB4ODBDQixcbiAgICBDT05TVEFOVF9DT0xPUjogMHg4MDAxLFxuICAgIE9ORV9NSU5VU19DT05TVEFOVF9DT0xPUjogMHg4MDAyLFxuICAgIENPTlNUQU5UX0FMUEhBOiAweDgwMDMsXG4gICAgT05FX01JTlVTX0NPTlNUQU5UX0FMUEhBOiAweDgwMDQsXG4gICAgQkxFTkRfQ09MT1I6IDB4ODAwNSxcbiAgICBBUlJBWV9CVUZGRVI6IDB4ODg5MixcbiAgICBFTEVNRU5UX0FSUkFZX0JVRkZFUjogMHg4ODkzLFxuICAgIEFSUkFZX0JVRkZFUl9CSU5ESU5HOiAweDg4OTQsXG4gICAgRUxFTUVOVF9BUlJBWV9CVUZGRVJfQklORElORzogMHg4ODk1LFxuICAgIFNUUkVBTV9EUkFXOiAweDg4RTAsXG4gICAgU1RBVElDX0RSQVc6IDB4ODhFNCxcbiAgICBEWU5BTUlDX0RSQVc6IDB4ODhFOCxcbiAgICBCVUZGRVJfU0laRTogMHg4NzY0LFxuICAgIEJVRkZFUl9VU0FHRTogMHg4NzY1LFxuICAgIENVUlJFTlRfVkVSVEVYX0FUVFJJQjogMHg4NjI2LFxuICAgIEZST05UOiAweDA0MDQsXG4gICAgQkFDSzogMHgwNDA1LFxuICAgIEZST05UX0FORF9CQUNLOiAweDA0MDgsXG4gICAgQ1VMTF9GQUNFOiAweDBCNDQsXG4gICAgQkxFTkQ6IDB4MEJFMixcbiAgICBESVRIRVI6IDB4MEJEMCxcbiAgICBTVEVOQ0lMX1RFU1Q6IDB4MEI5MCxcbiAgICBERVBUSF9URVNUOiAweDBCNzEsXG4gICAgU0NJU1NPUl9URVNUOiAweDBDMTEsXG4gICAgUE9MWUdPTl9PRkZTRVRfRklMTDogMHg4MDM3LFxuICAgIFNBTVBMRV9BTFBIQV9UT19DT1ZFUkFHRTogMHg4MDlFLFxuICAgIFNBTVBMRV9DT1ZFUkFHRTogMHg4MEEwLFxuICAgIE5PX0VSUk9SOiAwLFxuICAgIElOVkFMSURfRU5VTTogMHgwNTAwLFxuICAgIElOVkFMSURfVkFMVUU6IDB4MDUwMSxcbiAgICBJTlZBTElEX09QRVJBVElPTjogMHgwNTAyLFxuICAgIE9VVF9PRl9NRU1PUlk6IDB4MDUwNSxcbiAgICBDVzogMHgwOTAwLFxuICAgIENDVzogMHgwOTAxLFxuICAgIExJTkVfV0lEVEg6IDB4MEIyMSxcbiAgICBBTElBU0VEX1BPSU5UX1NJWkVfUkFOR0U6IDB4ODQ2RCxcbiAgICBBTElBU0VEX0xJTkVfV0lEVEhfUkFOR0U6IDB4ODQ2RSxcbiAgICBDVUxMX0ZBQ0VfTU9ERTogMHgwQjQ1LFxuICAgIEZST05UX0ZBQ0U6IDB4MEI0NixcbiAgICBERVBUSF9SQU5HRTogMHgwQjcwLFxuICAgIERFUFRIX1dSSVRFTUFTSzogMHgwQjcyLFxuICAgIERFUFRIX0NMRUFSX1ZBTFVFOiAweDBCNzMsXG4gICAgREVQVEhfRlVOQzogMHgwQjc0LFxuICAgIFNURU5DSUxfQ0xFQVJfVkFMVUU6IDB4MEI5MSxcbiAgICBTVEVOQ0lMX0ZVTkM6IDB4MEI5MixcbiAgICBTVEVOQ0lMX0ZBSUw6IDB4MEI5NCxcbiAgICBTVEVOQ0lMX1BBU1NfREVQVEhfRkFJTDogMHgwQjk1LFxuICAgIFNURU5DSUxfUEFTU19ERVBUSF9QQVNTOiAweDBCOTYsXG4gICAgU1RFTkNJTF9SRUY6IDB4MEI5NyxcbiAgICBTVEVOQ0lMX1ZBTFVFX01BU0s6IDB4MEI5MyxcbiAgICBTVEVOQ0lMX1dSSVRFTUFTSzogMHgwQjk4LFxuICAgIFNURU5DSUxfQkFDS19GVU5DOiAweDg4MDAsXG4gICAgU1RFTkNJTF9CQUNLX0ZBSUw6IDB4ODgwMSxcbiAgICBTVEVOQ0lMX0JBQ0tfUEFTU19ERVBUSF9GQUlMOiAweDg4MDIsXG4gICAgU1RFTkNJTF9CQUNLX1BBU1NfREVQVEhfUEFTUzogMHg4ODAzLFxuICAgIFNURU5DSUxfQkFDS19SRUY6IDB4OENBMyxcbiAgICBTVEVOQ0lMX0JBQ0tfVkFMVUVfTUFTSzogMHg4Q0E0LFxuICAgIFNURU5DSUxfQkFDS19XUklURU1BU0s6IDB4OENBNSxcbiAgICBWSUVXUE9SVDogMHgwQkEyLFxuICAgIFNDSVNTT1JfQk9YOiAweDBDMTAsXG4gICAgQ09MT1JfQ0xFQVJfVkFMVUU6IDB4MEMyMixcbiAgICBDT0xPUl9XUklURU1BU0s6IDB4MEMyMyxcbiAgICBVTlBBQ0tfQUxJR05NRU5UOiAweDBDRjUsXG4gICAgUEFDS19BTElHTk1FTlQ6IDB4MEQwNSxcbiAgICBNQVhfVEVYVFVSRV9TSVpFOiAweDBEMzMsXG4gICAgTUFYX1ZJRVdQT1JUX0RJTVM6IDB4MEQzQSxcbiAgICBTVUJQSVhFTF9CSVRTOiAweDBENTAsXG4gICAgUkVEX0JJVFM6IDB4MEQ1MixcbiAgICBHUkVFTl9CSVRTOiAweDBENTMsXG4gICAgQkxVRV9CSVRTOiAweDBENTQsXG4gICAgQUxQSEFfQklUUzogMHgwRDU1LFxuICAgIERFUFRIX0JJVFM6IDB4MEQ1NixcbiAgICBTVEVOQ0lMX0JJVFM6IDB4MEQ1NyxcbiAgICBQT0xZR09OX09GRlNFVF9VTklUUzogMHgyQTAwLFxuICAgIFBPTFlHT05fT0ZGU0VUX0ZBQ1RPUjogMHg4MDM4LFxuICAgIFRFWFRVUkVfQklORElOR18yRDogMHg4MDY5LFxuICAgIFNBTVBMRV9CVUZGRVJTOiAweDgwQTgsXG4gICAgU0FNUExFUzogMHg4MEE5LFxuICAgIFNBTVBMRV9DT1ZFUkFHRV9WQUxVRTogMHg4MEFBLFxuICAgIFNBTVBMRV9DT1ZFUkFHRV9JTlZFUlQ6IDB4ODBBQixcbiAgICBDT01QUkVTU0VEX1RFWFRVUkVfRk9STUFUUzogMHg4NkEzLFxuICAgIERPTlRfQ0FSRTogMHgxMTAwLFxuICAgIEZBU1RFU1Q6IDB4MTEwMSxcbiAgICBOSUNFU1Q6IDB4MTEwMixcbiAgICBHRU5FUkFURV9NSVBNQVBfSElOVDogMHg4MTkyLFxuICAgIEJZVEU6IDB4MTQwMCxcbiAgICBVTlNJR05FRF9CWVRFOiAweDE0MDEsXG4gICAgU0hPUlQ6IDB4MTQwMixcbiAgICBVTlNJR05FRF9TSE9SVDogMHgxNDAzLFxuICAgIElOVDogMHgxNDA0LFxuICAgIFVOU0lHTkVEX0lOVDogMHgxNDA1LFxuICAgIEZMT0FUOiAweDE0MDYsXG4gICAgREVQVEhfQ09NUE9ORU5UOiAweDE5MDIsXG4gICAgQUxQSEE6IDB4MTkwNixcbiAgICBSR0I6IDB4MTkwNyxcbiAgICBSR0JBOiAweDE5MDgsXG4gICAgTFVNSU5BTkNFOiAweDE5MDksXG4gICAgTFVNSU5BTkNFX0FMUEhBOiAweDE5MEEsXG4gICAgVU5TSUdORURfU0hPUlRfNF80XzRfNDogMHg4MDMzLFxuICAgIFVOU0lHTkVEX1NIT1JUXzVfNV81XzE6IDB4ODAzNCxcbiAgICBVTlNJR05FRF9TSE9SVF81XzZfNTogMHg4MzYzLFxuICAgIEZSQUdNRU5UX1NIQURFUjogMHg4QjMwLFxuICAgIFZFUlRFWF9TSEFERVI6IDB4OEIzMSxcbiAgICBNQVhfVkVSVEVYX0FUVFJJQlM6IDB4ODg2OSxcbiAgICBNQVhfVkVSVEVYX1VOSUZPUk1fVkVDVE9SUzogMHg4REZCLFxuICAgIE1BWF9WQVJZSU5HX1ZFQ1RPUlM6IDB4OERGQyxcbiAgICBNQVhfQ09NQklORURfVEVYVFVSRV9JTUFHRV9VTklUUzogMHg4QjRELFxuICAgIE1BWF9WRVJURVhfVEVYVFVSRV9JTUFHRV9VTklUUzogMHg4QjRDLFxuICAgIE1BWF9URVhUVVJFX0lNQUdFX1VOSVRTOiAweDg4NzIsXG4gICAgTUFYX0ZSQUdNRU5UX1VOSUZPUk1fVkVDVE9SUzogMHg4REZELFxuICAgIFNIQURFUl9UWVBFOiAweDhCNEYsXG4gICAgREVMRVRFX1NUQVRVUzogMHg4QjgwLFxuICAgIExJTktfU1RBVFVTOiAweDhCODIsXG4gICAgVkFMSURBVEVfU1RBVFVTOiAweDhCODMsXG4gICAgQVRUQUNIRURfU0hBREVSUzogMHg4Qjg1LFxuICAgIEFDVElWRV9VTklGT1JNUzogMHg4Qjg2LFxuICAgIEFDVElWRV9BVFRSSUJVVEVTOiAweDhCODksXG4gICAgU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OOiAweDhCOEMsXG4gICAgQ1VSUkVOVF9QUk9HUkFNOiAweDhCOEQsXG4gICAgTkVWRVI6IDB4MDIwMCxcbiAgICBMRVNTOiAweDAyMDEsXG4gICAgRVFVQUw6IDB4MDIwMixcbiAgICBMRVFVQUw6IDB4MDIwMyxcbiAgICBHUkVBVEVSOiAweDAyMDQsXG4gICAgTk9URVFVQUw6IDB4MDIwNSxcbiAgICBHRVFVQUw6IDB4MDIwNixcbiAgICBBTFdBWVM6IDB4MDIwNyxcbiAgICBLRUVQOiAweDFFMDAsXG4gICAgUkVQTEFDRTogMHgxRTAxLFxuICAgIElOQ1I6IDB4MUUwMixcbiAgICBERUNSOiAweDFFMDMsXG4gICAgSU5WRVJUOiAweDE1MEEsXG4gICAgSU5DUl9XUkFQOiAweDg1MDcsXG4gICAgREVDUl9XUkFQOiAweDg1MDgsXG4gICAgVkVORE9SOiAweDFGMDAsXG4gICAgUkVOREVSRVI6IDB4MUYwMSxcbiAgICBWRVJTSU9OOiAweDFGMDIsXG4gICAgTkVBUkVTVDogMHgyNjAwLFxuICAgIExJTkVBUjogMHgyNjAxLFxuICAgIE5FQVJFU1RfTUlQTUFQX05FQVJFU1Q6IDB4MjcwMCxcbiAgICBMSU5FQVJfTUlQTUFQX05FQVJFU1Q6IDB4MjcwMSxcbiAgICBORUFSRVNUX01JUE1BUF9MSU5FQVI6IDB4MjcwMixcbiAgICBMSU5FQVJfTUlQTUFQX0xJTkVBUjogMHgyNzAzLFxuICAgIFRFWFRVUkVfTUFHX0ZJTFRFUjogMHgyODAwLFxuICAgIFRFWFRVUkVfTUlOX0ZJTFRFUjogMHgyODAxLFxuICAgIFRFWFRVUkVfV1JBUF9TOiAweDI4MDIsXG4gICAgVEVYVFVSRV9XUkFQX1Q6IDB4MjgwMyxcbiAgICBURVhUVVJFXzJEOiAweDBERTEsXG4gICAgVEVYVFVSRTogMHgxNzAyLFxuICAgIFRFWFRVUkVfQ1VCRV9NQVA6IDB4ODUxMyxcbiAgICBURVhUVVJFX0JJTkRJTkdfQ1VCRV9NQVA6IDB4ODUxNCxcbiAgICBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1g6IDB4ODUxNSxcbiAgICBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1g6IDB4ODUxNixcbiAgICBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1k6IDB4ODUxNyxcbiAgICBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1k6IDB4ODUxOCxcbiAgICBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1o6IDB4ODUxOSxcbiAgICBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1o6IDB4ODUxQSxcbiAgICBNQVhfQ1VCRV9NQVBfVEVYVFVSRV9TSVpFOiAweDg1MUMsXG4gICAgVEVYVFVSRTA6IDB4ODRDMCxcbiAgICBURVhUVVJFMTogMHg4NEMxLFxuICAgIFRFWFRVUkUyOiAweDg0QzIsXG4gICAgVEVYVFVSRTM6IDB4ODRDMyxcbiAgICBURVhUVVJFNDogMHg4NEM0LFxuICAgIFRFWFRVUkU1OiAweDg0QzUsXG4gICAgVEVYVFVSRTY6IDB4ODRDNixcbiAgICBURVhUVVJFNzogMHg4NEM3LFxuICAgIFRFWFRVUkU4OiAweDg0QzgsXG4gICAgVEVYVFVSRTk6IDB4ODRDOSxcbiAgICBURVhUVVJFMTA6IDB4ODRDQSxcbiAgICBURVhUVVJFMTE6IDB4ODRDQixcbiAgICBURVhUVVJFMTI6IDB4ODRDQyxcbiAgICBURVhUVVJFMTM6IDB4ODRDRCxcbiAgICBURVhUVVJFMTQ6IDB4ODRDRSxcbiAgICBURVhUVVJFMTU6IDB4ODRDRixcbiAgICBURVhUVVJFMTY6IDB4ODREMCxcbiAgICBURVhUVVJFMTc6IDB4ODREMSxcbiAgICBURVhUVVJFMTg6IDB4ODREMixcbiAgICBURVhUVVJFMTk6IDB4ODREMyxcbiAgICBURVhUVVJFMjA6IDB4ODRENCxcbiAgICBURVhUVVJFMjE6IDB4ODRENSxcbiAgICBURVhUVVJFMjI6IDB4ODRENixcbiAgICBURVhUVVJFMjM6IDB4ODRENyxcbiAgICBURVhUVVJFMjQ6IDB4ODREOCxcbiAgICBURVhUVVJFMjU6IDB4ODREOSxcbiAgICBURVhUVVJFMjY6IDB4ODREQSxcbiAgICBURVhUVVJFMjc6IDB4ODREQixcbiAgICBURVhUVVJFMjg6IDB4ODREQyxcbiAgICBURVhUVVJFMjk6IDB4ODRERCxcbiAgICBURVhUVVJFMzA6IDB4ODRERSxcbiAgICBURVhUVVJFMzE6IDB4ODRERixcbiAgICBBQ1RJVkVfVEVYVFVSRTogMHg4NEUwLFxuICAgIFJFUEVBVDogMHgyOTAxLFxuICAgIENMQU1QX1RPX0VER0U6IDB4ODEyRixcbiAgICBNSVJST1JFRF9SRVBFQVQ6IDB4ODM3MCxcbiAgICBGTE9BVF9WRUMyOiAweDhCNTAsXG4gICAgRkxPQVRfVkVDMzogMHg4QjUxLFxuICAgIEZMT0FUX1ZFQzQ6IDB4OEI1MixcbiAgICBJTlRfVkVDMjogMHg4QjUzLFxuICAgIElOVF9WRUMzOiAweDhCNTQsXG4gICAgSU5UX1ZFQzQ6IDB4OEI1NSxcbiAgICBCT09MOiAweDhCNTYsXG4gICAgQk9PTF9WRUMyOiAweDhCNTcsXG4gICAgQk9PTF9WRUMzOiAweDhCNTgsXG4gICAgQk9PTF9WRUM0OiAweDhCNTksXG4gICAgRkxPQVRfTUFUMjogMHg4QjVBLFxuICAgIEZMT0FUX01BVDM6IDB4OEI1QixcbiAgICBGTE9BVF9NQVQ0OiAweDhCNUMsXG4gICAgU0FNUExFUl8yRDogMHg4QjVFLFxuICAgIFNBTVBMRVJfQ1VCRTogMHg4QjYwLFxuICAgIFZFUlRFWF9BVFRSSUJfQVJSQVlfRU5BQkxFRDogMHg4NjIyLFxuICAgIFZFUlRFWF9BVFRSSUJfQVJSQVlfU0laRTogMHg4NjIzLFxuICAgIFZFUlRFWF9BVFRSSUJfQVJSQVlfU1RSSURFOiAweDg2MjQsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9UWVBFOiAweDg2MjUsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9OT1JNQUxJWkVEOiAweDg4NkEsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9QT0lOVEVSOiAweDg2NDUsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9CVUZGRVJfQklORElORzogMHg4ODlGLFxuICAgIElNUExFTUVOVEFUSU9OX0NPTE9SX1JFQURfVFlQRTogMHg4QjlBLFxuICAgIElNUExFTUVOVEFUSU9OX0NPTE9SX1JFQURfRk9STUFUOiAweDhCOUIsXG4gICAgQ09NUElMRV9TVEFUVVM6IDB4OEI4MSxcbiAgICBMT1dfRkxPQVQ6IDB4OERGMCxcbiAgICBNRURJVU1fRkxPQVQ6IDB4OERGMSxcbiAgICBISUdIX0ZMT0FUOiAweDhERjIsXG4gICAgTE9XX0lOVDogMHg4REYzLFxuICAgIE1FRElVTV9JTlQ6IDB4OERGNCxcbiAgICBISUdIX0lOVDogMHg4REY1LFxuICAgIEZSQU1FQlVGRkVSOiAweDhENDAsXG4gICAgUkVOREVSQlVGRkVSOiAweDhENDEsXG4gICAgUkdCQTQ6IDB4ODA1NixcbiAgICBSR0I1X0ExOiAweDgwNTcsXG4gICAgUkdCNTY1OiAweDhENjIsXG4gICAgREVQVEhfQ09NUE9ORU5UMTY6IDB4ODFBNSxcbiAgICBTVEVOQ0lMX0lOREVYOiAweDE5MDEsXG4gICAgU1RFTkNJTF9JTkRFWDg6IDB4OEQ0OCxcbiAgICBERVBUSF9TVEVOQ0lMOiAweDg0RjksXG4gICAgUkVOREVSQlVGRkVSX1dJRFRIOiAweDhENDIsXG4gICAgUkVOREVSQlVGRkVSX0hFSUdIVDogMHg4RDQzLFxuICAgIFJFTkRFUkJVRkZFUl9JTlRFUk5BTF9GT1JNQVQ6IDB4OEQ0NCxcbiAgICBSRU5ERVJCVUZGRVJfUkVEX1NJWkU6IDB4OEQ1MCxcbiAgICBSRU5ERVJCVUZGRVJfR1JFRU5fU0laRTogMHg4RDUxLFxuICAgIFJFTkRFUkJVRkZFUl9CTFVFX1NJWkU6IDB4OEQ1MixcbiAgICBSRU5ERVJCVUZGRVJfQUxQSEFfU0laRTogMHg4RDUzLFxuICAgIFJFTkRFUkJVRkZFUl9ERVBUSF9TSVpFOiAweDhENTQsXG4gICAgUkVOREVSQlVGRkVSX1NURU5DSUxfU0laRTogMHg4RDU1LFxuICAgIEZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfT0JKRUNUX1RZUEU6IDB4OENEMCxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX09CSkVDVF9OQU1FOiAweDhDRDEsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9URVhUVVJFX0xFVkVMOiAweDhDRDIsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9URVhUVVJFX0NVQkVfTUFQX0ZBQ0U6IDB4OENEMyxcbiAgICBDT0xPUl9BVFRBQ0hNRU5UMDogMHg4Q0UwLFxuICAgIERFUFRIX0FUVEFDSE1FTlQ6IDB4OEQwMCxcbiAgICBTVEVOQ0lMX0FUVEFDSE1FTlQ6IDB4OEQyMCxcbiAgICBERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQ6IDB4ODIxQSxcbiAgICBOT05FOiAwLFxuICAgIEZSQU1FQlVGRkVSX0NPTVBMRVRFOiAweDhDRDUsXG4gICAgRlJBTUVCVUZGRVJfSU5DT01QTEVURV9BVFRBQ0hNRU5UOiAweDhDRDYsXG4gICAgRlJBTUVCVUZGRVJfSU5DT01QTEVURV9NSVNTSU5HX0FUVEFDSE1FTlQ6IDB4OENENyxcbiAgICBGUkFNRUJVRkZFUl9JTkNPTVBMRVRFX0RJTUVOU0lPTlM6IDB4OENEOSxcbiAgICBGUkFNRUJVRkZFUl9VTlNVUFBPUlRFRDogMHg4Q0RELFxuICAgIEZSQU1FQlVGRkVSX0JJTkRJTkc6IDB4OENBNixcbiAgICBSRU5ERVJCVUZGRVJfQklORElORzogMHg4Q0E3LFxuICAgIE1BWF9SRU5ERVJCVUZGRVJfU0laRTogMHg4NEU4LFxuICAgIElOVkFMSURfRlJBTUVCVUZGRVJfT1BFUkFUSU9OOiAweDA1MDYsXG4gICAgVU5QQUNLX0ZMSVBfWV9XRUJHTDogMHg5MjQwLFxuICAgIFVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTDogMHg5MjQxLFxuICAgIENPTlRFWFRfTE9TVF9XRUJHTDogMHg5MjQyLFxuICAgIFVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0w6IDB4OTI0MyxcbiAgICBCUk9XU0VSX0RFRkFVTFRfV0VCR0w6IDB4OTI0NCxcbiAgICBSRUFEX0JVRkZFUjogMHgwQzAyLFxuICAgIFVOUEFDS19ST1dfTEVOR1RIOiAweDBDRjIsXG4gICAgVU5QQUNLX1NLSVBfUk9XUzogMHgwQ0YzLFxuICAgIFVOUEFDS19TS0lQX1BJWEVMUzogMHgwQ0Y0LFxuICAgIFBBQ0tfUk9XX0xFTkdUSDogMHgwRDAyLFxuICAgIFBBQ0tfU0tJUF9ST1dTOiAweDBEMDMsXG4gICAgUEFDS19TS0lQX1BJWEVMUzogMHgwRDA0LFxuICAgIENPTE9SOiAweDE4MDAsXG4gICAgREVQVEg6IDB4MTgwMSxcbiAgICBTVEVOQ0lMOiAweDE4MDIsXG4gICAgUkVEOiAweDE5MDMsXG4gICAgUkdCODogMHg4MDUxLFxuICAgIFJHQkE4OiAweDgwNTgsXG4gICAgUkdCMTBfQTI6IDB4ODA1OSxcbiAgICBURVhUVVJFX0JJTkRJTkdfM0Q6IDB4ODA2QSxcbiAgICBVTlBBQ0tfU0tJUF9JTUFHRVM6IDB4ODA2RCxcbiAgICBVTlBBQ0tfSU1BR0VfSEVJR0hUOiAweDgwNkUsXG4gICAgVEVYVFVSRV8zRDogMHg4MDZGLFxuICAgIFRFWFRVUkVfV1JBUF9SOiAweDgwNzIsXG4gICAgTUFYXzNEX1RFWFRVUkVfU0laRTogMHg4MDczLFxuICAgIFVOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFVjogMHg4MzY4LFxuICAgIE1BWF9FTEVNRU5UU19WRVJUSUNFUzogMHg4MEU4LFxuICAgIE1BWF9FTEVNRU5UU19JTkRJQ0VTOiAweDgwRTksXG4gICAgVEVYVFVSRV9NSU5fTE9EOiAweDgxM0EsXG4gICAgVEVYVFVSRV9NQVhfTE9EOiAweDgxM0IsXG4gICAgVEVYVFVSRV9CQVNFX0xFVkVMOiAweDgxM0MsXG4gICAgVEVYVFVSRV9NQVhfTEVWRUw6IDB4ODEzRCxcbiAgICBNSU46IDB4ODAwNyxcbiAgICBNQVg6IDB4ODAwOCxcbiAgICBERVBUSF9DT01QT05FTlQyNDogMHg4MUE2LFxuICAgIE1BWF9URVhUVVJFX0xPRF9CSUFTOiAweDg0RkQsXG4gICAgVEVYVFVSRV9DT01QQVJFX01PREU6IDB4ODg0QyxcbiAgICBURVhUVVJFX0NPTVBBUkVfRlVOQzogMHg4ODRELFxuICAgIENVUlJFTlRfUVVFUlk6IDB4ODg2NSxcbiAgICBRVUVSWV9SRVNVTFQ6IDB4ODg2NixcbiAgICBRVUVSWV9SRVNVTFRfQVZBSUxBQkxFOiAweDg4NjcsXG4gICAgU1RSRUFNX1JFQUQ6IDB4ODhFMSxcbiAgICBTVFJFQU1fQ09QWTogMHg4OEUyLFxuICAgIFNUQVRJQ19SRUFEOiAweDg4RTUsXG4gICAgU1RBVElDX0NPUFk6IDB4ODhFNixcbiAgICBEWU5BTUlDX1JFQUQ6IDB4ODhFOSxcbiAgICBEWU5BTUlDX0NPUFk6IDB4ODhFQSxcbiAgICBNQVhfRFJBV19CVUZGRVJTOiAweDg4MjQsXG4gICAgRFJBV19CVUZGRVIwOiAweDg4MjUsXG4gICAgRFJBV19CVUZGRVIxOiAweDg4MjYsXG4gICAgRFJBV19CVUZGRVIyOiAweDg4MjcsXG4gICAgRFJBV19CVUZGRVIzOiAweDg4MjgsXG4gICAgRFJBV19CVUZGRVI0OiAweDg4MjksXG4gICAgRFJBV19CVUZGRVI1OiAweDg4MkEsXG4gICAgRFJBV19CVUZGRVI2OiAweDg4MkIsXG4gICAgRFJBV19CVUZGRVI3OiAweDg4MkMsXG4gICAgRFJBV19CVUZGRVI4OiAweDg4MkQsXG4gICAgRFJBV19CVUZGRVI5OiAweDg4MkUsXG4gICAgRFJBV19CVUZGRVIxMDogMHg4ODJGLFxuICAgIERSQVdfQlVGRkVSMTE6IDB4ODgzMCxcbiAgICBEUkFXX0JVRkZFUjEyOiAweDg4MzEsXG4gICAgRFJBV19CVUZGRVIxMzogMHg4ODMyLFxuICAgIERSQVdfQlVGRkVSMTQ6IDB4ODgzMyxcbiAgICBEUkFXX0JVRkZFUjE1OiAweDg4MzQsXG4gICAgTUFYX0ZSQUdNRU5UX1VOSUZPUk1fQ09NUE9ORU5UUzogMHg4QjQ5LFxuICAgIE1BWF9WRVJURVhfVU5JRk9STV9DT01QT05FTlRTOiAweDhCNEEsXG4gICAgU0FNUExFUl8zRDogMHg4QjVGLFxuICAgIFNBTVBMRVJfMkRfU0hBRE9XOiAweDhCNjIsXG4gICAgRlJBR01FTlRfU0hBREVSX0RFUklWQVRJVkVfSElOVDogMHg4QjhCLFxuICAgIFBJWEVMX1BBQ0tfQlVGRkVSOiAweDg4RUIsXG4gICAgUElYRUxfVU5QQUNLX0JVRkZFUjogMHg4OEVDLFxuICAgIFBJWEVMX1BBQ0tfQlVGRkVSX0JJTkRJTkc6IDB4ODhFRCxcbiAgICBQSVhFTF9VTlBBQ0tfQlVGRkVSX0JJTkRJTkc6IDB4ODhFRixcbiAgICBGTE9BVF9NQVQyeDM6IDB4OEI2NSxcbiAgICBGTE9BVF9NQVQyeDQ6IDB4OEI2NixcbiAgICBGTE9BVF9NQVQzeDI6IDB4OEI2NyxcbiAgICBGTE9BVF9NQVQzeDQ6IDB4OEI2OCxcbiAgICBGTE9BVF9NQVQ0eDI6IDB4OEI2OSxcbiAgICBGTE9BVF9NQVQ0eDM6IDB4OEI2QSxcbiAgICBTUkdCOiAweDhDNDAsXG4gICAgU1JHQjg6IDB4OEM0MSxcbiAgICBTUkdCOF9BTFBIQTg6IDB4OEM0MyxcbiAgICBDT01QQVJFX1JFRl9UT19URVhUVVJFOiAweDg4NEUsXG4gICAgUkdCQTMyRjogMHg4ODE0LFxuICAgIFJHQjMyRjogMHg4ODE1LFxuICAgIFJHQkExNkY6IDB4ODgxQSxcbiAgICBSR0IxNkY6IDB4ODgxQixcbiAgICBWRVJURVhfQVRUUklCX0FSUkFZX0lOVEVHRVI6IDB4ODhGRCxcbiAgICBNQVhfQVJSQVlfVEVYVFVSRV9MQVlFUlM6IDB4ODhGRixcbiAgICBNSU5fUFJPR1JBTV9URVhFTF9PRkZTRVQ6IDB4ODkwNCxcbiAgICBNQVhfUFJPR1JBTV9URVhFTF9PRkZTRVQ6IDB4ODkwNSxcbiAgICBNQVhfVkFSWUlOR19DT01QT05FTlRTOiAweDhCNEIsXG4gICAgVEVYVFVSRV8yRF9BUlJBWTogMHg4QzFBLFxuICAgIFRFWFRVUkVfQklORElOR18yRF9BUlJBWTogMHg4QzFELFxuICAgIFIxMUZfRzExRl9CMTBGOiAweDhDM0EsXG4gICAgVU5TSUdORURfSU5UXzEwRl8xMUZfMTFGX1JFVjogMHg4QzNCLFxuICAgIFJHQjlfRTU6IDB4OEMzRCxcbiAgICBVTlNJR05FRF9JTlRfNV85XzlfOV9SRVY6IDB4OEMzRSxcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSX01PREU6IDB4OEM3RixcbiAgICBNQVhfVFJBTlNGT1JNX0ZFRURCQUNLX1NFUEFSQVRFX0NPTVBPTkVOVFM6IDB4OEM4MCxcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0tfVkFSWUlOR1M6IDB4OEM4MyxcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSX1NUQVJUOiAweDhDODQsXG4gICAgVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUl9TSVpFOiAweDhDODUsXG4gICAgVFJBTlNGT1JNX0ZFRURCQUNLX1BSSU1JVElWRVNfV1JJVFRFTjogMHg4Qzg4LFxuICAgIFJBU1RFUklaRVJfRElTQ0FSRDogMHg4Qzg5LFxuICAgIE1BWF9UUkFOU0ZPUk1fRkVFREJBQ0tfSU5URVJMRUFWRURfQ09NUE9ORU5UUzogMHg4QzhBLFxuICAgIE1BWF9UUkFOU0ZPUk1fRkVFREJBQ0tfU0VQQVJBVEVfQVRUUklCUzogMHg4QzhCLFxuICAgIElOVEVSTEVBVkVEX0FUVFJJQlM6IDB4OEM4QyxcbiAgICBTRVBBUkFURV9BVFRSSUJTOiAweDhDOEQsXG4gICAgVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUjogMHg4QzhFLFxuICAgIFRSQU5TRk9STV9GRUVEQkFDS19CVUZGRVJfQklORElORzogMHg4QzhGLFxuICAgIFJHQkEzMlVJOiAweDhENzAsXG4gICAgUkdCMzJVSTogMHg4RDcxLFxuICAgIFJHQkExNlVJOiAweDhENzYsXG4gICAgUkdCMTZVSTogMHg4RDc3LFxuICAgIFJHQkE4VUk6IDB4OEQ3QyxcbiAgICBSR0I4VUk6IDB4OEQ3RCxcbiAgICBSR0JBMzJJOiAweDhEODIsXG4gICAgUkdCMzJJOiAweDhEODMsXG4gICAgUkdCQTE2STogMHg4RDg4LFxuICAgIFJHQjE2STogMHg4RDg5LFxuICAgIFJHQkE4STogMHg4RDhFLFxuICAgIFJHQjhJOiAweDhEOEYsXG4gICAgUkVEX0lOVEVHRVI6IDB4OEQ5NCxcbiAgICBSR0JfSU5URUdFUjogMHg4RDk4LFxuICAgIFJHQkFfSU5URUdFUjogMHg4RDk5LFxuICAgIFNBTVBMRVJfMkRfQVJSQVk6IDB4OERDMSxcbiAgICBTQU1QTEVSXzJEX0FSUkFZX1NIQURPVzogMHg4REM0LFxuICAgIFNBTVBMRVJfQ1VCRV9TSEFET1c6IDB4OERDNSxcbiAgICBVTlNJR05FRF9JTlRfVkVDMjogMHg4REM2LFxuICAgIFVOU0lHTkVEX0lOVF9WRUMzOiAweDhEQzcsXG4gICAgVU5TSUdORURfSU5UX1ZFQzQ6IDB4OERDOCxcbiAgICBJTlRfU0FNUExFUl8yRDogMHg4RENBLFxuICAgIElOVF9TQU1QTEVSXzNEOiAweDhEQ0IsXG4gICAgSU5UX1NBTVBMRVJfQ1VCRTogMHg4RENDLFxuICAgIElOVF9TQU1QTEVSXzJEX0FSUkFZOiAweDhEQ0YsXG4gICAgVU5TSUdORURfSU5UX1NBTVBMRVJfMkQ6IDB4OEREMixcbiAgICBVTlNJR05FRF9JTlRfU0FNUExFUl8zRDogMHg4REQzLFxuICAgIFVOU0lHTkVEX0lOVF9TQU1QTEVSX0NVQkU6IDB4OERENCxcbiAgICBVTlNJR05FRF9JTlRfU0FNUExFUl8yRF9BUlJBWTogMHg4REQ3LFxuICAgIERFUFRIX0NPTVBPTkVOVDMyRjogMHg4Q0FDLFxuICAgIERFUFRIMzJGX1NURU5DSUw4OiAweDhDQUQsXG4gICAgRkxPQVRfMzJfVU5TSUdORURfSU5UXzI0XzhfUkVWOiAweDhEQUQsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9DT0xPUl9FTkNPRElORzogMHg4MjEwLFxuICAgIEZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfQ09NUE9ORU5UX1RZUEU6IDB4ODIxMSxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1JFRF9TSVpFOiAweDgyMTIsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9HUkVFTl9TSVpFOiAweDgyMTMsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9CTFVFX1NJWkU6IDB4ODIxNCxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX0FMUEhBX1NJWkU6IDB4ODIxNSxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX0RFUFRIX1NJWkU6IDB4ODIxNixcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1NURU5DSUxfU0laRTogMHg4MjE3LFxuICAgIEZSQU1FQlVGRkVSX0RFRkFVTFQ6IDB4ODIxOCxcbiAgICBVTlNJR05FRF9JTlRfMjRfODogMHg4NEZBLFxuICAgIERFUFRIMjRfU1RFTkNJTDg6IDB4ODhGMCxcbiAgICBVTlNJR05FRF9OT1JNQUxJWkVEOiAweDhDMTcsXG4gICAgRFJBV19GUkFNRUJVRkZFUl9CSU5ESU5HOiAweDhDQTYsXG4gICAgUkVBRF9GUkFNRUJVRkZFUjogMHg4Q0E4LFxuICAgIERSQVdfRlJBTUVCVUZGRVI6IDB4OENBOSxcbiAgICBSRUFEX0ZSQU1FQlVGRkVSX0JJTkRJTkc6IDB4OENBQSxcbiAgICBSRU5ERVJCVUZGRVJfU0FNUExFUzogMHg4Q0FCLFxuICAgIEZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfVEVYVFVSRV9MQVlFUjogMHg4Q0Q0LFxuICAgIE1BWF9DT0xPUl9BVFRBQ0hNRU5UUzogMHg4Q0RGLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxOiAweDhDRTEsXG4gICAgQ09MT1JfQVRUQUNITUVOVDI6IDB4OENFMixcbiAgICBDT0xPUl9BVFRBQ0hNRU5UMzogMHg4Q0UzLFxuICAgIENPTE9SX0FUVEFDSE1FTlQ0OiAweDhDRTQsXG4gICAgQ09MT1JfQVRUQUNITUVOVDU6IDB4OENFNSxcbiAgICBDT0xPUl9BVFRBQ0hNRU5UNjogMHg4Q0U2LFxuICAgIENPTE9SX0FUVEFDSE1FTlQ3OiAweDhDRTcsXG4gICAgQ09MT1JfQVRUQUNITUVOVDg6IDB4OENFOCxcbiAgICBDT0xPUl9BVFRBQ0hNRU5UOTogMHg4Q0U5LFxuICAgIENPTE9SX0FUVEFDSE1FTlQxMDogMHg4Q0VBLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxMTogMHg4Q0VCLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxMjogMHg4Q0VDLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxMzogMHg4Q0VELFxuICAgIENPTE9SX0FUVEFDSE1FTlQxNDogMHg4Q0VFLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxNTogMHg4Q0VGLFxuICAgIEZSQU1FQlVGRkVSX0lOQ09NUExFVEVfTVVMVElTQU1QTEU6IDB4OEQ1NixcbiAgICBNQVhfU0FNUExFUzogMHg4RDU3LFxuICAgIEhBTEZfRkxPQVQ6IDB4MTQwQixcbiAgICBSRzogMHg4MjI3LFxuICAgIFJHX0lOVEVHRVI6IDB4ODIyOCxcbiAgICBSODogMHg4MjI5LFxuICAgIFJHODogMHg4MjJCLFxuICAgIFIxNkY6IDB4ODIyRCxcbiAgICBSMzJGOiAweDgyMkUsXG4gICAgUkcxNkY6IDB4ODIyRixcbiAgICBSRzMyRjogMHg4MjMwLFxuICAgIFI4STogMHg4MjMxLFxuICAgIFI4VUk6IDB4ODIzMixcbiAgICBSMTZJOiAweDgyMzMsXG4gICAgUjE2VUk6IDB4ODIzNCxcbiAgICBSMzJJOiAweDgyMzUsXG4gICAgUjMyVUk6IDB4ODIzNixcbiAgICBSRzhJOiAweDgyMzcsXG4gICAgUkc4VUk6IDB4ODIzOCxcbiAgICBSRzE2STogMHg4MjM5LFxuICAgIFJHMTZVSTogMHg4MjNBLFxuICAgIFJHMzJJOiAweDgyM0IsXG4gICAgUkczMlVJOiAweDgyM0MsXG4gICAgVkVSVEVYX0FSUkFZX0JJTkRJTkc6IDB4ODVCNSxcbiAgICBSOF9TTk9STTogMHg4Rjk0LFxuICAgIFJHOF9TTk9STTogMHg4Rjk1LFxuICAgIFJHQjhfU05PUk06IDB4OEY5NixcbiAgICBSR0JBOF9TTk9STTogMHg4Rjk3LFxuICAgIFNJR05FRF9OT1JNQUxJWkVEOiAweDhGOUMsXG4gICAgQ09QWV9SRUFEX0JVRkZFUjogMHg4RjM2LFxuICAgIENPUFlfV1JJVEVfQlVGRkVSOiAweDhGMzcsXG4gICAgQ09QWV9SRUFEX0JVRkZFUl9CSU5ESU5HOiAweDhGMzYsXG4gICAgQ09QWV9XUklURV9CVUZGRVJfQklORElORzogMHg4RjM3LFxuICAgIFVOSUZPUk1fQlVGRkVSOiAweDhBMTEsXG4gICAgVU5JRk9STV9CVUZGRVJfQklORElORzogMHg4QTI4LFxuICAgIFVOSUZPUk1fQlVGRkVSX1NUQVJUOiAweDhBMjksXG4gICAgVU5JRk9STV9CVUZGRVJfU0laRTogMHg4QTJBLFxuICAgIE1BWF9WRVJURVhfVU5JRk9STV9CTE9DS1M6IDB4OEEyQixcbiAgICBNQVhfRlJBR01FTlRfVU5JRk9STV9CTE9DS1M6IDB4OEEyRCxcbiAgICBNQVhfQ09NQklORURfVU5JRk9STV9CTE9DS1M6IDB4OEEyRSxcbiAgICBNQVhfVU5JRk9STV9CVUZGRVJfQklORElOR1M6IDB4OEEyRixcbiAgICBNQVhfVU5JRk9STV9CTE9DS19TSVpFOiAweDhBMzAsXG4gICAgTUFYX0NPTUJJTkVEX1ZFUlRFWF9VTklGT1JNX0NPTVBPTkVOVFM6IDB4OEEzMSxcbiAgICBNQVhfQ09NQklORURfRlJBR01FTlRfVU5JRk9STV9DT01QT05FTlRTOiAweDhBMzMsXG4gICAgVU5JRk9STV9CVUZGRVJfT0ZGU0VUX0FMSUdOTUVOVDogMHg4QTM0LFxuICAgIEFDVElWRV9VTklGT1JNX0JMT0NLUzogMHg4QTM2LFxuICAgIFVOSUZPUk1fVFlQRTogMHg4QTM3LFxuICAgIFVOSUZPUk1fU0laRTogMHg4QTM4LFxuICAgIFVOSUZPUk1fQkxPQ0tfSU5ERVg6IDB4OEEzQSxcbiAgICBVTklGT1JNX09GRlNFVDogMHg4QTNCLFxuICAgIFVOSUZPUk1fQVJSQVlfU1RSSURFOiAweDhBM0MsXG4gICAgVU5JRk9STV9NQVRSSVhfU1RSSURFOiAweDhBM0QsXG4gICAgVU5JRk9STV9JU19ST1dfTUFKT1I6IDB4OEEzRSxcbiAgICBVTklGT1JNX0JMT0NLX0JJTkRJTkc6IDB4OEEzRixcbiAgICBVTklGT1JNX0JMT0NLX0RBVEFfU0laRTogMHg4QTQwLFxuICAgIFVOSUZPUk1fQkxPQ0tfQUNUSVZFX1VOSUZPUk1TOiAweDhBNDIsXG4gICAgVU5JRk9STV9CTE9DS19BQ1RJVkVfVU5JRk9STV9JTkRJQ0VTOiAweDhBNDMsXG4gICAgVU5JRk9STV9CTE9DS19SRUZFUkVOQ0VEX0JZX1ZFUlRFWF9TSEFERVI6IDB4OEE0NCxcbiAgICBVTklGT1JNX0JMT0NLX1JFRkVSRU5DRURfQllfRlJBR01FTlRfU0hBREVSOiAweDhBNDYsXG4gICAgSU5WQUxJRF9JTkRFWDogMHhGRkZGRkZGRixcbiAgICBNQVhfVkVSVEVYX09VVFBVVF9DT01QT05FTlRTOiAweDkxMjIsXG4gICAgTUFYX0ZSQUdNRU5UX0lOUFVUX0NPTVBPTkVOVFM6IDB4OTEyNSxcbiAgICBNQVhfU0VSVkVSX1dBSVRfVElNRU9VVDogMHg5MTExLFxuICAgIE9CSkVDVF9UWVBFOiAweDkxMTIsXG4gICAgU1lOQ19DT05ESVRJT046IDB4OTExMyxcbiAgICBTWU5DX1NUQVRVUzogMHg5MTE0LFxuICAgIFNZTkNfRkxBR1M6IDB4OTExNSxcbiAgICBTWU5DX0ZFTkNFOiAweDkxMTYsXG4gICAgU1lOQ19HUFVfQ09NTUFORFNfQ09NUExFVEU6IDB4OTExNyxcbiAgICBVTlNJR05BTEVEOiAweDkxMTgsXG4gICAgU0lHTkFMRUQ6IDB4OTExOSxcbiAgICBBTFJFQURZX1NJR05BTEVEOiAweDkxMUEsXG4gICAgVElNRU9VVF9FWFBJUkVEOiAweDkxMUIsXG4gICAgQ09ORElUSU9OX1NBVElTRklFRDogMHg5MTFDLFxuICAgIFdBSVRfRkFJTEVEOiAweDkxMUQsXG4gICAgU1lOQ19GTFVTSF9DT01NQU5EU19CSVQ6IDB4MDAwMDAwMDEsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9ESVZJU09SOiAweDg4RkUsXG4gICAgQU5ZX1NBTVBMRVNfUEFTU0VEOiAweDhDMkYsXG4gICAgQU5ZX1NBTVBMRVNfUEFTU0VEX0NPTlNFUlZBVElWRTogMHg4RDZBLFxuICAgIFNBTVBMRVJfQklORElORzogMHg4OTE5LFxuICAgIFJHQjEwX0EyVUk6IDB4OTA2RixcbiAgICBJTlRfMl8xMF8xMF8xMF9SRVY6IDB4OEQ5RixcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0s6IDB4OEUyMixcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0tfUEFVU0VEOiAweDhFMjMsXG4gICAgVFJBTlNGT1JNX0ZFRURCQUNLX0FDVElWRTogMHg4RTI0LFxuICAgIFRSQU5TRk9STV9GRUVEQkFDS19CSU5ESU5HOiAweDhFMjUsXG4gICAgVEVYVFVSRV9JTU1VVEFCTEVfRk9STUFUOiAweDkxMkYsXG4gICAgTUFYX0VMRU1FTlRfSU5ERVg6IDB4OEQ2QixcbiAgICBURVhUVVJFX0lNTVVUQUJMRV9MRVZFTFM6IDB4ODJERixcbiAgICBUSU1FT1VUX0lHTk9SRUQ6IC0xLFxuICAgIE1BWF9DTElFTlRfV0FJVF9USU1FT1VUX1dFQkdMOiAweDkyNDcsXG5cbiAgICAvLyBodHRwczovL3d3dy5raHJvbm9zLm9yZy9yZWdpc3RyeS93ZWJnbC9leHRlbnNpb25zL0VYVF9kaXNqb2ludF90aW1lcl9xdWVyeV93ZWJnbDIvXG4gICAgUVVFUllfQ09VTlRFUl9CSVRTX0VYVDogMHg4ODY0LFxuICAgIFRJTUVfRUxBUFNFRF9FWFQ6IDB4ODhCRixcbiAgICBUSU1FU1RBTVBfRVhUOiAweDhFMjgsXG4gICAgR1BVX0RJU0pPSU5UX0VYVDogMHg4RkJCLFxuXG4gICAgLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvZXh0ZW5zaW9ucy9XRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0Yy9cbiAgICBDT01QUkVTU0VEX1JHQl9TM1RDX0RYVDFfRVhUOiAweDgzRjAsXG4gICAgQ09NUFJFU1NFRF9SR0JBX1MzVENfRFhUMV9FWFQ6IDB4ODNGMSxcbiAgICBDT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQzX0VYVDogMHg4M0YyLFxuICAgIENPTVBSRVNTRURfUkdCQV9TM1RDX0RYVDVfRVhUOiAweDgzRjMsXG5cbiAgICAvLyBodHRwczovL3d3dy5raHJvbm9zLm9yZy9yZWdpc3RyeS93ZWJnbC9leHRlbnNpb25zL1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjX3NyZ2IvXG4gICAgQ09NUFJFU1NFRF9TUkdCX1MzVENfRFhUMV9FWFQ6IDB4OEM0QyxcbiAgICBDT01QUkVTU0VEX1NSR0JfQUxQSEFfUzNUQ19EWFQxX0VYVDogMHg4QzRELFxuICAgIENPTVBSRVNTRURfU1JHQl9BTFBIQV9TM1RDX0RYVDNfRVhUOiAweDhDNEUsXG4gICAgQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUNV9FWFQ6IDB4OEM0RixcblxuICAgIC8vIGh0dHBzOi8vd3d3Lmtocm9ub3Mub3JnL3JlZ2lzdHJ5L3dlYmdsL2V4dGVuc2lvbnMvV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0Yy9cbiAgICBDT01QUkVTU0VEX1IxMV9FQUM6IDB4OTI3MCxcbiAgICBDT01QUkVTU0VEX1NJR05FRF9SMTFfRUFDOiAweDkyNzEsXG4gICAgQ09NUFJFU1NFRF9SRzExX0VBQzogMHg5MjcyLFxuICAgIENPTVBSRVNTRURfU0lHTkVEX1JHMTFfRUFDOiAweDkyNzMsXG4gICAgQ09NUFJFU1NFRF9SR0I4X0VUQzI6IDB4OTI3NCxcbiAgICBDT01QUkVTU0VEX1NSR0I4X0VUQzI6IDB4OTI3NSxcbiAgICBDT01QUkVTU0VEX1JHQjhfUFVOQ0hUSFJPVUdIX0FMUEhBMV9FVEMyOiAweDkyNzYsXG4gICAgQ09NUFJFU1NFRF9TUkdCOF9QVU5DSFRIUk9VR0hfQUxQSEExX0VUQzI6IDB4OTI3NyxcbiAgICBDT01QUkVTU0VEX1JHQkE4X0VUQzJfRUFDOiAweDkyNzgsXG4gICAgQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfRVRDMl9FQUM6IDB4OTI3OSxcblxuICAgIC8vIGh0dHBzOi8vd3d3Lmtocm9ub3Mub3JnL3JlZ2lzdHJ5L3dlYmdsL2V4dGVuc2lvbnMvV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3B2cnRjL1xuICAgIENPTVBSRVNTRURfUkdCX1BWUlRDXzRCUFBWMV9JTUc6IDB4OEMwMCxcbiAgICBDT01QUkVTU0VEX1JHQl9QVlJUQ18yQlBQVjFfSU1HOiAweDhDMDEsXG4gICAgQ09NUFJFU1NFRF9SR0JBX1BWUlRDXzRCUFBWMV9JTUc6IDB4OEMwMixcbiAgICBDT01QUkVTU0VEX1JHQkFfUFZSVENfMkJQUFYxX0lNRzogMHg4QzAzLFxuXG4gICAgLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvZXh0ZW5zaW9ucy9XRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfYXN0Yy9cbiAgICBDT01QUkVTU0VEX1JHQkFfQVNUQ180eDRfS0hSOiAweDkzQjAsXG4gICAgQ09NUFJFU1NFRF9SR0JBX0FTVENfNXg0X0tIUjogMHg5M0IxLFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzV4NV9LSFI6IDB4OTNCMixcbiAgICBDT01QUkVTU0VEX1JHQkFfQVNUQ182eDVfS0hSOiAweDkzQjMsXG4gICAgQ09NUFJFU1NFRF9SR0JBX0FTVENfNng2X0tIUjogMHg5M0I0LFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzh4NV9LSFI6IDB4OTNCNSxcbiAgICBDT01QUkVTU0VEX1JHQkFfQVNUQ184eDZfS0hSOiAweDkzQjYsXG4gICAgQ09NUFJFU1NFRF9SR0JBX0FTVENfOHg4X0tIUjogMHg5M0I3LFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzEweDVfS0hSOiAweDkzQjgsXG4gICAgQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4Nl9LSFI6IDB4OTNCOSxcbiAgICBDT01QUkVTU0VEX1JHQkFfQVNUQ18xMHg4X0tIUjogMHg5M0JBLFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzEweDEwX0tIUjogMHg5M0JCLFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzEyeDEwX0tIUjogMHg5M0JDLFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzEyeDEyX0tIUjogMHg5M0JELFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNHg0X0tIUjogMHg5M0QwLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNXg0X0tIUjogMHg5M0QxLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNXg1X0tIUjogMHg5M0QyLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNng1X0tIUjogMHg5M0QzLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNng2X0tIUjogMHg5M0Q0LFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg1X0tIUjogMHg5M0Q1LFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg2X0tIUjogMHg5M0Q2LFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg4X0tIUjogMHg5M0Q3LFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTB4NV9LSFI6IDB4OTNEOCxcbiAgICBDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEweDZfS0hSOiAweDkzRDksXG4gICAgQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg4X0tIUjogMHg5M0RBLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTB4MTBfS0hSOiAweDkzREIsXG4gICAgQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMngxMF9LSFI6IDB4OTNEQyxcbiAgICBDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEyeDEyX0tIUjogMHg5M0RELFxuXG4gICAgVFlQRV9TSVpFOiB7XG4gICAgICAgIFtnbC5CWVRFXTogMSxcbiAgICAgICAgW2dsLlVOU0lHTkVEX0JZVEVdOiAxLFxuICAgICAgICBbZ2wuU0hPUlRdOiAyLFxuICAgICAgICBbZ2wuVU5TSUdORURfU0hPUlRdOiAyLFxuICAgICAgICBbZ2wuSU5UXTogNCxcbiAgICAgICAgW2dsLlVOU0lHTkVEX0lOVF06IDQsXG4gICAgICAgIFtnbC5GTE9BVF06IDRcbiAgICB9LFxuXG4gICAgV0VCR0xfSU5GTzoge1xuICAgICAgICBNQVhfVEVYVFVSRV9VTklUUzogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcbiAgICAgICAgTUFYX1VOSUZPUk1fQlVGRkVSUzogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9VTklGT1JNX0JVRkZFUl9CSU5ESU5HUylcbiAgICB9LFxuXG4gICAgRFVNTVlfT0JKRUNUOiB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDT05TVEFOVFM7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5jb25zdCBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUyA9IHtcbiAgICBbQ09OU1RBTlRTLlVOU0lHTkVEX0JZVEVdOiB7XG4gICAgICAgIFtDT05TVEFOVFMuUkVEXTogQ09OU1RBTlRTLlI4LFxuICAgICAgICBbQ09OU1RBTlRTLlJHXTogQ09OU1RBTlRTLlJHOCxcbiAgICAgICAgW0NPTlNUQU5UUy5SR0JdOiBDT05TVEFOVFMuUkdCOCxcbiAgICAgICAgW0NPTlNUQU5UUy5SR0JBXTogQ09OU1RBTlRTLlJHQkE4XG4gICAgfSxcblxuICAgIFtDT05TVEFOVFMuVU5TSUdORURfU0hPUlRdOiB7XG4gICAgICAgIFtDT05TVEFOVFMuREVQVEhfQ09NUE9ORU5UXTogQ09OU1RBTlRTLkRFUFRIX0NPTVBPTkVOVDE2XG4gICAgfSxcblxuICAgIFtDT05TVEFOVFMuRkxPQVRdOiB7XG4gICAgICAgIFtDT05TVEFOVFMuUkVEXTogQ09OU1RBTlRTLlIxNkYsXG4gICAgICAgIFtDT05TVEFOVFMuUkddOiBDT05TVEFOVFMuUkcxNkYsXG4gICAgICAgIFtDT05TVEFOVFMuUkdCXTogQ09OU1RBTlRTLlJHQjE2RixcbiAgICAgICAgW0NPTlNUQU5UUy5SR0JBXTogQ09OU1RBTlRTLlJHQkExNkYsXG4gICAgICAgIFtDT05TVEFOVFMuREVQVEhfQ09NUE9ORU5UXTogQ09OU1RBTlRTLkRFUFRIX0NPTVBPTkVOVDMyRlxuICAgIH0sXG5cbiAgICBDT01QUkVTU0VEX1RZUEVTOiB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUztcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG4vKipcbiAgICBXZWJHTCBzaGFkZXIuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7V2ViR0xTaGFkZXJ9IHNoYWRlciBUaGUgc2hhZGVyLlxuKi9cbmNsYXNzIFNoYWRlciB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZ2wsIHR5cGUsIHNvdXJjZSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgICAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy5zaGFkZXIsIHNvdXJjZSk7XG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy5zaGFkZXIpO1xuXG4gICAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMuc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgICAgIGxldCBpLCBsaW5lcztcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMuc2hhZGVyKSk7XG4gICAgICAgICAgICBsaW5lcyA9IHNvdXJjZS5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7aSArIDF9OiAke2xpbmVzW2ldfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERlbGV0ZSB0aGlzIHNoYWRlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1NoYWRlcn0gVGhlIFNoYWRlciBvYmplY3QuXG4gICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNoYWRlcikge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIodGhpcy5zaGFkZXIpO1xuICAgICAgICAgICAgdGhpcy5zaGFkZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZGVyO1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGFyZWsgU2hlcmlmXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbi8qKlxuICAgIEdlbmVyaWMgcXVlcnkgb2JqZWN0LlxuXG4gICAgQGNsYXNzXG4gICAgQHByb3Age1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHQuXG4gICAgQHByb3Age1dlYkdMUXVlcnl9IHF1ZXJ5IFF1ZXJ5IG9iamVjdC5cbiAgICBAcHJvcCB7R0xFbnVtfSB0YXJnZXQgVGhlIHR5cGUgb2YgaW5mb3JtYXRpb24gYmVpbmcgcXVlcmllZC5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gYWN0aXZlIFdoZXRoZXIgb3Igbm90IGEgcXVlcnkgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgIEBwcm9wIHtBbnl9IHJlc3VsdCBUaGUgcmVzdWx0IG9mIHRoZSBxdWVyeSAob25seSBhdmFpbGFibGUgYWZ0ZXIgYSBjYWxsIHRvIHJlYWR5KCkgcmV0dXJucyB0cnVlKS4gXG4qL1xuY2xhc3MgUXVlcnkge1xuXG4gICAgY29uc3RydWN0b3IoZ2wsIHRhcmdldCkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMucXVlcnkgPSBnbC5jcmVhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCZWdpbiBhIHF1ZXJ5LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7UXVlcnl9IFRoZSBRdWVyeSBvYmplY3QuXG4gICAgKi9cbiAgICBiZWdpbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5nbC5iZWdpblF1ZXJ5KHRoaXMudGFyZ2V0LCB0aGlzLnF1ZXJ5KTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmQgYSBxdWVyeS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1F1ZXJ5fSBUaGUgUXVlcnkgb2JqZWN0LlxuICAgICovXG4gICAgZW5kKCkge1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmVuZFF1ZXJ5KHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDaGVjayBpZiBxdWVyeSByZXN1bHQgaXMgYXZhaWxhYmxlLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7Ym9vbGVhbn0gSWYgcmVzdWx0cyBhcmUgYXZhaWxhYmxlLlxuICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiB0aGlzLmdsLmdldFF1ZXJ5UGFyYW1ldGVyKHRoaXMucXVlcnksIHRoaXMuZ2wuUVVFUllfUkVTVUxUX0FWQUlMQUJMRSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBOb3RlKFRhcmVrKTogQ2FzdGluZyBiZWNhdXNlIEZGIGluY29ycmVjdGx5IHJldHVybnMgYm9vbGVhbnMuXG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDIyNzE0IFxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBOdW1iZXIodGhpcy5nbC5nZXRRdWVyeVBhcmFtZXRlcih0aGlzLnF1ZXJ5LCB0aGlzLmdsLlFVRVJZX1JFU1VMVCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERlbGV0ZSB0aGlzIHF1ZXJ5LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7UXVlcnl9IFRoZSBRdWVyeSBvYmplY3QuXG4gICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBBcHAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG4vKipcbiAgICBHbG9iYWwgUGljb0dMIG1vZHVsZS4gRm9yIGNvbnZlbmllbmNlLCBhbGwgV2ViR0wgZW51bXMgYXJlIHN0b3JlZFxuICAgIGFzIHByb3BlcnRpZXMgb2YgUGljb0dMIChlLmcuIFBpY29HTC5GTE9BVCwgUGljb0dMLk9ORV9NSU5VU19TUkNfQUxQSEEpLlxuXG4gICAgQG5hbWVzcGFjZSBQaWNvR0xcbiovXG5jb25zdCBQaWNvR0wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuUGljb0dMLnZlcnNpb24gPSBcIjAuOC45XCI7XG5cbi8qKlxuICAgIENyZWF0ZSBhIFBpY29HTCBhcHAuIFRoZSBhcHAgaXMgdGhlIHByaW1hcnkgZW50cnkgcG9pbnQgdG8gUGljb0dMLiBJdCBzdG9yZXNcbiAgICB0aGUgY2FudmFzLCB0aGUgV2ViR0wgY29udGV4dCBhbmQgYWxsIFdlYkdMIHN0YXRlLlxuXG4gICAgQGZ1bmN0aW9uIFBpY29HTC5jcmVhdGVBcHBcbiAgICBAcGFyYW0ge0RPTUVsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIG9uIHdoaWNoIHRvIGNyZWF0ZSB0aGUgV2ViR0wgY29udGV4dC5cbiAgICBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRBdHRyaWJ1dGVzXSBDb250ZXh0IGF0dHJpYnV0ZXMgdG8gcGFzcyB3aGVuIGNhbGxpbmcgZ2V0Q29udGV4dCgpLlxuICAgIEByZXR1cm4ge0FwcH0gTmV3IEFwcCBvYmplY3QuXG4qL1xuUGljb0dMLmNyZWF0ZUFwcCA9IGZ1bmN0aW9uKGNhbnZhcywgY29udGV4dEF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gbmV3IEFwcChjYW52YXMsIGNvbnRleHRBdHRyaWJ1dGVzKTtcbn07XG4gICAgXG5tb2R1bGUuZXhwb3J0cyA9IFBpY29HTDtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5jb25zdCBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5jb25zdCBDdWJlbWFwICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5jb25zdCBEcmF3Q2FsbCAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5jb25zdCBGcmFtZWJ1ZmZlciAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5jb25zdCBQcm9ncmFtICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5jb25zdCBTaGFkZXIgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5jb25zdCBUZXh0dXJlICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuY29uc3QgVGltZXIgICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbmNvbnN0IFRyYW5zZm9ybUZlZWRiYWNrICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5jb25zdCBVbmlmb3JtQnVmZmVyICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuY29uc3QgVmVydGV4QXJyYXkgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbmNvbnN0IFZlcnRleEJ1ZmZlciAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5jb25zdCBRdWVyeSAgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbi8qKlxuICAgIFByaW1hcnkgZW50cnkgcG9pbnQgdG8gUGljb0dMLiBBbiBhcHAgd2lsbCBzdG9yZSBhbGwgcGFydHMgb2YgdGhlIFdlYkdMXG4gICAgc3RhdGUuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7RE9NRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgb24gd2hpY2ggdGhpcyBhcHAgZHJhd2luZy5cbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIGRyYXdpbmcgc3VyZmFjZS5cbiAgICBAcHJvcCB7bnVtYmVyfSBoZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgZHJhd2luZyBzdXJmYWNlLlxuICAgIEBwcm9wIHtib29sZWFufSBmbG9hdFJlbmRlclRhcmdldHNFbmFibGVkIFdoZXRoZXIgdGhlIEVYVF9jb2xvcl9idWZmZXJfZmxvYXQgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXG4gICAgQHByb3Age2Jvb2xlYW59IGxpbmVhckZsb2F0VGV4dHVyZXNFbmFibGVkIFdoZXRoZXIgdGhlIE9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhciBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gczN0Y1RleHR1cmVzRW5hYmxlZCBXaGV0aGVyIHRoZSBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YyBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gczN0Y1NSR0JUZXh0dXJlc0VuYWJsZWQgV2hldGhlciB0aGUgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYiBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gZXRjVGV4dHVyZXNFbmFibGVkIFdoZXRoZXIgdGhlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9ldGMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXG4gICAgQHByb3Age2Jvb2xlYW59IGFzdGNUZXh0dXJlc0VuYWJsZWQgV2hldGhlciB0aGUgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2FzdGMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXG4gICAgQHByb3Age2Jvb2xlYW59IHB2cnRjVGV4dHVyZXNFbmFibGVkIFdoZXRoZXIgdGhlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YyBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICBAcHJvcCB7T2JqZWN0fSBzdGF0ZSBUcmFja2VkIEdMIHN0YXRlLlxuICAgIEBwcm9wIHtHTEVudW19IGNsZWFyQml0cyBDdXJyZW50IGNsZWFyIG1hc2sgdG8gdXNlIHdpdGggY2xlYXIoKS4gICAgXG4qL1xuY2xhc3MgQXBwIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbnRleHRBdHRyaWJ1dGVzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIiwgY29udGV4dEF0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5nbC5kcmF3aW5nQnVmZmVyV2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5nbC5kcmF3aW5nQnVmZmVySGVpZ2h0O1xuICAgICAgICB0aGlzLnZpZXdwb3J0WCA9IDA7XG4gICAgICAgIHRoaXMudmlld3BvcnRZID0gMDtcbiAgICAgICAgdGhpcy52aWV3cG9ydFdpZHRoID0gMDtcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudERyYXdDYWxscyA9IG51bGw7XG4gICAgICAgIHRoaXMuZW1wdHlGcmFnbWVudFNoYWRlciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHByb2dyYW06IG51bGwsXG4gICAgICAgICAgICB2ZXJ0ZXhBcnJheTogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zZm9ybUZlZWRiYWNrOiBudWxsLFxuICAgICAgICAgICAgYWN0aXZlVGV4dHVyZTogLTEsXG4gICAgICAgICAgICB0ZXh0dXJlczogbmV3IEFycmF5KENPTlNUQU5UUy5XRUJHTF9JTkZPLk1BWF9URVhUVVJFX1VOSVRTKSxcbiAgICAgICAgICAgIHVuaWZvcm1CdWZmZXJzOiBuZXcgQXJyYXkoQ09OU1RBTlRTLldFQkdMX0lORk8uTUFYX1VOSUZPUk1fQlVGRkVSUyksXG4gICAgICAgICAgICBmcmVlVW5pZm9ybUJ1ZmZlckJhc2VzOiBbXSxcbiAgICAgICAgICAgIGRyYXdGcmFtZWJ1ZmZlcjogbnVsbCxcbiAgICAgICAgICAgIHJlYWRGcmFtZWJ1ZmZlcjogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2xlYXJCaXRzID0gdGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUIHwgdGhpcy5nbC5ERVBUSF9CVUZGRVJfQklUfCB0aGlzLmdsLlNURU5DSUxfQlVGRkVSX0JJVDtcblxuICAgICAgICB0aGlzLmNwdVRpbWUgPSAwO1xuICAgICAgICB0aGlzLmdwdVRpbWUgPSAwO1xuXG4gICAgICAgIC8vIEV4dGVuc2lvbnNcbiAgICAgICAgdGhpcy5mbG9hdFJlbmRlclRhcmdldHNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGluZWFyRmxvYXRUZXh0dXJlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zM3RjVGV4dHVyZXNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuczN0Y1NSR0JUZXh0dXJlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ldGNUZXh0dXJlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hc3RjVGV4dHVyZXNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHZydGNUZXh0dXJlc0VuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBjb2xvciBtYXNrIHRvIHNlbGVjdGl2ZWx5IGVuYWJsZSBvciBkaXNhYmxlIHBhcnRpY3VsYXJcbiAgICAgICAgY29sb3IgY2hhbm5lbHMgd2hpbGUgcmVuZGVyaW5nLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtib29sZWFufSByIFJlZCBjaGFubmVsLlxuICAgICAgICBAcGFyYW0ge2Jvb2xlYW59IGcgR3JlZW4gY2hhbm5lbC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBiIEJsdWUgY2hhbm5lbC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBhIEFscGhhIGNoYW5uZWwuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBjb2xvck1hc2sociwgZywgYiwgYSkge1xuICAgICAgICB0aGlzLmdsLmNvbG9yTWFzayhyLCBnLCBiLCBhKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBjbGVhciBjb2xvci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSByIFJlZCBjaGFubmVsLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gZyBHcmVlbiBjaGFubmVsLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gYiBCbHVlIGNoYW5uZWwuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBhIEFscGhhIGNoYW5uZWwuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBjbGVhckNvbG9yKHIsIGcsIGIsIGEpIHtcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIGNsZWFyIG1hc2sgYml0cyB0byB1c2Ugd2hlbiBjYWxsaW5nIGNsZWFyKCkuXG4gICAgICAgIEUuZy4gYXBwLmNsZWFyTWFzayhQaWNvR0wuQ09MT1JfQlVGRkVSX0JJVCkuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gbWFzayBCaXQgbWFzayBvZiBidWZmZXJzIHRvIGNsZWFyLlxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgY2xlYXJNYXNrKG1hc2spIHtcbiAgICAgICAgdGhpcy5jbGVhckJpdHMgPSBtYXNrO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDbGVhciB0aGUgY2FudmFzXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5jbGVhckJpdHMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGEgZHJhdyBmcmFtZWJ1ZmZlciB0byB0aGUgV2ViR0wgY29udGV4dC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7RnJhbWVidWZmZXJ9IGZyYW1lYnVmZmVyIFRoZSBGcmFtZWJ1ZmZlciBvYmplY3QgdG8gYmluZC5cbiAgICAgICAgQHNlZSBGcmFtZWJ1ZmZlclxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgZHJhd0ZyYW1lYnVmZmVyKGZyYW1lYnVmZmVyKSB7XG4gICAgICAgIGZyYW1lYnVmZmVyLmJpbmRGb3JEcmF3KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgYSByZWFkIGZyYW1lYnVmZmVyIHRvIHRoZSBXZWJHTCBjb250ZXh0LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtGcmFtZWJ1ZmZlcn0gZnJhbWVidWZmZXIgVGhlIEZyYW1lYnVmZmVyIG9iamVjdCB0byBiaW5kLlxuICAgICAgICBAc2VlIEZyYW1lYnVmZmVyXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICByZWFkRnJhbWVidWZmZXIoZnJhbWVidWZmZXIpIHtcbiAgICAgICAgZnJhbWVidWZmZXIuYmluZEZvclJlYWQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU3dpdGNoIGJhY2sgdG8gdGhlIGRlZmF1bHQgZnJhbWVidWZmZXIgZm9yIGRyYXdpbmcgKGkuZS4gZHJhdyB0byB0aGUgc2NyZWVuKS5cbiAgICAgICAgTm90ZSB0aGF0IHRoaXMgbWV0aG9kIHJlc2V0cyB0aGUgdmlld3BvcnQgdG8gbWF0Y2ggdGhlIGRlZmF1bHQgZnJhbWVidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgZGVmYXVsdERyYXdGcmFtZWJ1ZmZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZHJhd0ZyYW1lYnVmZmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkRSQVdfRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcmF3RnJhbWVidWZmZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFN3aXRjaCBiYWNrIHRvIHRoZSBkZWZhdWx0IGZyYW1lYnVmZmVyIGZvciByZWFkaW5nIChpLmUuIHJlYWQgZnJvbSB0aGUgc2NyZWVuKS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBkZWZhdWx0UmVhZEZyYW1lYnVmZmVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWFkRnJhbWVidWZmZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuUkVBRF9GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJlYWRGcmFtZWJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBkZXB0aCByYW5nZS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE1pbmltdW0gZGVwdGggdmFsdWUuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBmYXIgTWF4aW11bSBkZXB0aCB2YWx1ZS5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGRlcHRoUmFuZ2UobmVhciwgZmFyKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVwdGhSYW5nZShuZWFyLCBmYXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgZGVwdGggdGVzdGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBkZXB0aFRlc3QoKSB7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERpc2FibGUgZGVwdGggdGVzdGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBub0RlcHRoVGVzdCgpIHtcbiAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEVuYWJsZSBvciBkaXNhYmxlIHdyaXRpbmcgdG8gdGhlIGRlcHRoIGJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7Qm9vbGVhbn0gbWFzayBUaGUgZGVwdGggbWFzay5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGRlcHRoTWFzayhtYXNrKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVwdGhNYXNrKG1hc2spO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIGRlcHRoIHRlc3QgZnVuY3Rpb24uIEUuZy4gYXBwLmRlcHRoRnVuYyhQaWNvR0wuTEVRVUFMKS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBmdW5jIFRoZSBkZXB0aCB0ZXN0aW5nIGZ1bmN0aW9uIHRvIHVzZS5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGRlcHRoRnVuYyhmdW5jKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVwdGhGdW5jKGZ1bmMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgYmxlbmRpbmcuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgYmxlbmQoKSB7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEaXNhYmxlIGJsZW5kaW5nXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgbm9CbGVuZCgpIHtcbiAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuQkxFTkQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIGJsZW5kIGZ1bmN0aW9uLiBFLmcuIGFwcC5ibGVuZEZ1bmMoUGljb0dMLk9ORSwgUGljb0dMLk9ORV9NSU5VU19TUkNfQUxQSEEpLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IHNyYyBUaGUgc291cmNlIGJsZW5kaW5nIHdlaWdodC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IGRlc3QgVGhlIGRlc3RpbmF0aW9uIGJsZW5kaW5nIHdlaWdodC5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGJsZW5kRnVuYyhzcmMsIGRlc3QpIHtcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmMoc3JjLCBkZXN0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBibGVuZCBmdW5jdGlvbiwgd2l0aCBzZXBhcmF0ZSB3ZWlnaHRpbmcgZm9yIGNvbG9yIGFuZCBhbHBoYSBjaGFubmVscy5cbiAgICAgICAgRS5nLiBhcHAuYmxlbmRGdW5jU2VwYXJhdGUoUGljb0dMLk9ORSwgUGljb0dMLk9ORV9NSU5VU19TUkNfQUxQSEEsIFBpY29HTC5PTkUsIFBpY29HTC5PTkUpLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IGNzcmMgVGhlIHNvdXJjZSBibGVuZGluZyB3ZWlnaHQgZm9yIHRoZSBSR0IgY2hhbm5lbHMuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBjZGVzdCBUaGUgZGVzdGluYXRpb24gYmxlbmRpbmcgd2VpZ2h0IGZvciB0aGUgUkdCIGNoYW5uZWxzLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gYXNyYyBUaGUgc291cmNlIGJsZW5kaW5nIHdlaWdodCBmb3IgdGhlIGFscGhhIGNoYW5uZWwuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBhZGVzdCBUaGUgZGVzdGluYXRpb24gYmxlbmRpbmcgd2VpZ2h0IGZvciB0aGUgYWxwaGEgY2hhbm5lbC5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGJsZW5kRnVuY1NlcGFyYXRlKGNzcmMsIGNkZXN0LCBhc3JjLCBhZGVzdCkge1xuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuY1NlcGFyYXRlKGNzcmMsIGNkZXN0LCBhc3JjLCBhZGVzdCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEVuYWJsZSBzdGVuY2lsIHRlc3RpbmcuXG4gICAgICAgIE5PVEU6IE9ubHkgd29ya3MgaWYgeyBzdGVuY2lsOiB0cnVlIH0gcGFzc2VkIGFzIGFcbiAgICAgICAgY29udGV4dCBhdHRyaWJ1dGUgd2hlbiBjcmVhdGluZyB0aGUgQXBwIVxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHN0ZW5jaWxUZXN0KCkge1xuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLlNURU5DSUxfVEVTVCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERpc2FibGUgc3RlbmNpbCB0ZXN0aW5nLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIG5vU3RlbmNpbFRlc3QoKSB7XG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZSh0aGlzLmdsLlNURU5DSUxfVEVTVCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgICAgRW5hYmxlIHNjaXNzb3IgdGVzdGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBzY2lzc29yVGVzdCgpIHtcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5TQ0lTU09SX1RFU1QpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEaXNhYmxlIHNjaXNzb3IgdGVzdGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBub1NjaXNzb3JUZXN0KCkge1xuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5TQ0lTU09SX1RFU1QpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEZWZpbmUgdGhlIHNjaXNzb3IgYm94LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHNjaXNzb3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmdsLnNjaXNzb3IoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCB0aGUgYml0bWFzayB0byB1c2UgZm9yIHRlc3RlZCBzdGVuY2lsIHZhbHVlcy5cbiAgICAgICAgRS5nLiBhcHAuc3RlbmNpbE1hc2soMHhGRikuXG4gICAgICAgIE5PVEU6IE9ubHkgd29ya3MgaWYgeyBzdGVuY2lsOiB0cnVlIH0gcGFzc2VkIGFzIGFcbiAgICAgICAgY29udGV4dCBhdHRyaWJ1dGUgd2hlbiBjcmVhdGluZyB0aGUgQXBwIVxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IG1hc2sgVGhlIG1hc2sgdmFsdWUuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG5cbiAgICAqL1xuICAgIHN0ZW5jaWxNYXNrKG1hc2spIHtcbiAgICAgICAgdGhpcy5nbC5zdGVuY2lsTWFzayhtYXNrKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBiaXRtYXNrIHRvIHVzZSBmb3IgdGVzdGVkIHN0ZW5jaWwgdmFsdWVzIGZvciBhIHBhcnRpY3VsYXIgZmFjZSBvcmllbnRhdGlvbi5cbiAgICAgICAgRS5nLiBhcHAuc3RlbmNpbE1hc2tTZXBhcmF0ZShQaWNvR0wuRlJPTlQsIDB4RkYpLlxuICAgICAgICBOT1RFOiBPbmx5IHdvcmtzIGlmIHsgc3RlbmNpbDogdHJ1ZSB9IHBhc3NlZCBhcyBhXG4gICAgICAgIGNvbnRleHQgYXR0cmlidXRlIHdoZW4gY3JlYXRpbmcgdGhlIEFwcCFcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBmYWNlIFRoZSBmYWNlIG9yaWVudGF0aW9uIHRvIGFwcGx5IHRoZSBtYXNrIHRvLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gbWFzayBUaGUgbWFzayB2YWx1ZS5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHN0ZW5jaWxNYXNrU2VwYXJhdGUoZmFjZSwgbWFzaykge1xuICAgICAgICB0aGlzLmdsLnN0ZW5jaWxNYXNrU2VwYXJhdGUoZmFjZSwgbWFzayk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCB0aGUgc3RlbmNpbCBmdW5jdGlvbiBhbmQgcmVmZXJlbmNlIHZhbHVlLlxuICAgICAgICBFLmcuIGFwcC5zdGVuY2lsRnVuYyhQaWNvR0wuRVFVQUwsIDEsIDB4RkYpLlxuICAgICAgICBOT1RFOiBPbmx5IHdvcmtzIGlmIHsgc3RlbmNpbDogdHJ1ZSB9IHBhc3NlZCBhcyBhXG4gICAgICAgIGNvbnRleHQgYXR0cmlidXRlIHdoZW4gY3JlYXRpbmcgdGhlIEFwcCFcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBmdW5jIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gcmVmIFRoZSByZWZlcmVuY2UgdmFsdWUuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBtYXNrIFRoZSBiaXRtYXNrIHRvIHVzZSBhZ2FpbnN0IHRlc3RlZCB2YWx1ZXMgYmVmb3JlIGFwcGx5aW5nXG4gICAgICAgICAgICB0aGUgc3RlbmNpbCBmdW5jdGlvbi5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHN0ZW5jaWxGdW5jKGZ1bmMsIHJlZiwgbWFzaykge1xuICAgICAgICB0aGlzLmdsLnN0ZW5jaWxGdW5jKGZ1bmMsIHJlZiwgbWFzayk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCB0aGUgc3RlbmNpbCBmdW5jdGlvbiBhbmQgcmVmZXJlbmNlIHZhbHVlIGZvciBhIHBhcnRpY3VsYXIgZmFjZSBvcmllbnRhdGlvbi5cbiAgICAgICAgRS5nLiBhcHAuc3RlbmNpbEZ1bmNTZXBhcmF0ZShQaWNvR0wuRlJPTlQsIFBpY29HTC5FUVVBTCwgMSwgMHhGRikuXG4gICAgICAgIE5PVEU6IE9ubHkgd29ya3MgaWYgeyBzdGVuY2lsOiB0cnVlIH0gcGFzc2VkIGFzIGFcbiAgICAgICAgY29udGV4dCBhdHRyaWJ1dGUgd2hlbiBjcmVhdGluZyB0aGUgQXBwIVxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IGZhY2UgVGhlIGZhY2Ugb3JpZW50YXRpb24gdG8gYXBwbHkgdGhlIGZ1bmN0aW9uIHRvLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gZnVuYyBUaGUgdGVzdGluZyBmdW5jdGlvbi5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHJlZiBUaGUgcmVmZXJlbmNlIHZhbHVlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gbWFzayBUaGUgYml0bWFzayB0byB1c2UgYWdhaW5zdCB0ZXN0ZWQgdmFsdWVzIGJlZm9yZSBhcHBseWluZ1xuICAgICAgICAgICAgdGhlIHN0ZW5jaWwgZnVuY3Rpb24uXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBzdGVuY2lsRnVuY1NlcGFyYXRlKGZhY2UsIGZ1bmMsIHJlZiwgbWFzaykge1xuICAgICAgICB0aGlzLmdsLnN0ZW5jaWxGdW5jU2VwYXJhdGUoZmFjZSwgZnVuYywgcmVmLCBtYXNrKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBvcGVyYXRpb25zIGZvciB1cGRhdGluZyBzdGVuY2lsIGJ1ZmZlciB2YWx1ZXMuXG4gICAgICAgIEUuZy4gYXBwLnN0ZW5jaWxPcChQaWNvR0wuS0VFUCwgUGljb0dMLktFRVAsIFBpY29HTC5SRVBMQUNFKS5cbiAgICAgICAgTk9URTogT25seSB3b3JrcyBpZiB7IHN0ZW5jaWw6IHRydWUgfSBwYXNzZWQgYXMgYVxuICAgICAgICBjb250ZXh0IGF0dHJpYnV0ZSB3aGVuIGNyZWF0aW5nIHRoZSBBcHAhXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gc3RlbmNpbEZhaWwgT3BlcmF0aW9uIHRvIGFwcGx5IGlmIHRoZSBzdGVuY2lsIHRlc3QgZmFpbHMuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBkZXB0aEZhaWwgT3BlcmF0aW9uIHRvIGFwcGx5IGlmIHRoZSBkZXB0aCB0ZXN0IGZhaWxzLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gcGFzcyBPcGVyYXRpb24gdG8gYXBwbHkgaWYgdGhlIGJvdGggdGhlIGRlcHRoIGFuZCBzdGVuY2lsIHRlc3RzIHBhc3MuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBzdGVuY2lsT3Aoc3RlbmNpbEZhaWwsIGRlcHRoRmFpbCwgcGFzcykge1xuICAgICAgICB0aGlzLmdsLnN0ZW5jaWxPcChzdGVuY2lsRmFpbCwgZGVwdGhGYWlsLCBwYXNzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBvcGVyYXRpb25zIGZvciB1cGRhdGluZyBzdGVuY2lsIGJ1ZmZlciB2YWx1ZXMgZm9yIGEgcGFydGljdWxhciBmYWNlIG9yaWVudGF0aW9uLlxuICAgICAgICBFLmcuIGFwcC5zdGVuY2lsT3BTZXBhcmF0ZShQaWNvR0wuRlJPTlQsIFBpY29HTC5LRUVQLCBQaWNvR0wuS0VFUCwgUGljb0dMLlJFUExBQ0UpLlxuICAgICAgICBOT1RFOiBPbmx5IHdvcmtzIGlmIHsgc3RlbmNpbDogdHJ1ZSB9IHBhc3NlZCBhcyBhXG4gICAgICAgIGNvbnRleHQgYXR0cmlidXRlIHdoZW4gY3JlYXRpbmcgdGhlIEFwcCFcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBmYWNlIFRoZSBmYWNlIG9yaWVudGF0aW9uIHRvIGFwcGx5IHRoZSBvcGVyYXRpb25zIHRvLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gc3RlbmNpbEZhaWwgT3BlcmF0aW9uIHRvIGFwcGx5IGlmIHRoZSBzdGVuY2lsIHRlc3QgZmFpbHMuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBkZXB0aEZhaWwgT3BlcmF0aW9uIHRvIGFwcGx5IGlmIHRoZSBkZXB0aCB0ZXN0IGZhaWxzLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gcGFzcyBPcGVyYXRpb24gdG8gYXBwbHkgaWYgdGhlIGJvdGggdGhlIGRlcHRoIGFuZCBzdGVuY2lsIHRlc3RzIHBhc3MuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBzdGVuY2lsT3BTZXBhcmF0ZShmYWNlLCBzdGVuY2lsRmFpbCwgZGVwdGhGYWlsLCBwYXNzKSB7XG4gICAgICAgIHRoaXMuZ2wuc3RlbmNpbE9wU2VwYXJhdGUoZmFjZSwgc3RlbmNpbEZhaWwsIGRlcHRoRmFpbCwgcGFzcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEVuYWJsZSByYXN0ZXJpemF0aW9uIHN0ZXAuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgcmFzdGVyaXplKCkge1xuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5SQVNURVJJWkVSX0RJU0NBUkQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEaXNhYmxlIHJhc3Rlcml6YXRpb24gc3RlcC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBub1Jhc3Rlcml6ZSgpIHtcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5SQVNURVJJWkVSX0RJU0NBUkQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgYmFja2ZhY2UgY3VsbGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBjdWxsQmFja2ZhY2VzKCkge1xuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERpc2FibGUgYmFja2ZhY2UgY3VsbGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBkcmF3QmFja2ZhY2VzKCkge1xuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5DVUxMX0ZBQ0UpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgdGhlIEVYVF9jb2xvcl9idWZmZXJfZmxvYXQgZXh0ZW5zaW9uLiBBbGxvd3MgZm9yIGNyZWF0aW5nIGZsb2F0IHRleHR1cmVzIGFzXG4gICAgICAgIHJlbmRlciB0YXJnZXRzIG9uIEZyYW1lQnVmZmVyIG9iamVjdHMuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAc2VlIEZyYW1lYnVmZmVyXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBmbG9hdFJlbmRlclRhcmdldHMoKSB7XG4gICAgICAgIHRoaXMuZmxvYXRSZW5kZXJUYXJnZXRzRW5hYmxlZCA9ICEhdGhpcy5nbC5nZXRFeHRlbnNpb24oXCJFWFRfY29sb3JfYnVmZmVyX2Zsb2F0XCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgdGhlIE9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhciBleHRlbnNpb24uIEFsbG93cyBmb3IgbGluZWFyIGJsZW5kaW5nIG9uIGZsb2F0IHRleHR1cmVzLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHNlZSBGcmFtZWJ1ZmZlclxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgbGluZWFyRmxvYXRUZXh0dXJlcygpIHtcbiAgICAgICAgdGhpcy5saW5lYXJGbG9hdFRleHR1cmVzRW5hYmxlZCA9ICEhdGhpcy5nbC5nZXRFeHRlbnNpb24oXCJPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXJcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgICAgRW5hYmxlIHRoZSBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YyBhbmQgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYiBleHRlbnNpb25zLCB3aGljaCBcbiAgICAgICAgYWxsb3cgdGhlIGZvbGxvd2luZyBlbnVtcyB0byBiZSB1c2VkIGFzIHRleHR1cmUgZm9ybWF0czpcblxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQl9TM1RDX0RYVDFfRVhUXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQxX0VYVFxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9SR0JBX1MzVENfRFhUM19FWFRcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCQV9TM1RDX0RYVDVfRVhUXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0JfUzNUQ19EWFQxX0VYVFxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUMV9FWFRcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQl9BTFBIQV9TM1RDX0RYVDNfRVhUXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0JfQUxQSEFfUzNUQ19EWFQ1X0VYVFxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHMzdGNUZXh0dXJlcygpIHtcbiAgICAgICAgbGV0IGV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNcIik7XG4gICAgICAgIHRoaXMuczN0Y1RleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuczN0Y1RleHR1cmVzRW5hYmxlZCkge1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JfUzNUQ19EWFQxX0VYVF0gID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9TM1RDX0RYVDFfRVhUXSA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQzX0VYVF0gPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX1MzVENfRFhUNV9FWFRdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYlwiKTtcbiAgICAgICAgdGhpcy5zM3RjU1JHQlRleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuczN0Y1NSR0JUZXh0dXJlc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQl9TM1RDX0RYVDFfRVhUXSAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0JfQUxQSEFfUzNUQ19EWFQxX0VYVF0gPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUM19FWFRdID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQl9BTFBIQV9TM1RDX0RYVDVfRVhUXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRW5hYmxlIHRoZSBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjIGV4dGVuc2lvbiwgd2hpY2ggYWxsb3dzIHRoZSBmb2xsb3dpbmcgZW51bXMgdG9cbiAgICAgICAgYmUgdXNlZCBhcyB0ZXh0dXJlIGZvcm1hdHM6XG4gICAgICAgIFxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1IxMV9FQUNcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU0lHTkVEX1IxMV9FQUNcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkcxMV9FQUNcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU0lHTkVEX1JHMTFfRUFDXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQjhfRVRDMlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9FVEMyXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQjhfUFVOQ0hUSFJPVUdIX0FMUEhBMV9FVEMyXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X1BVTkNIVEhST1VHSF9BTFBIQTFfRVRDMlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9SR0JBOF9FVEMyX0VBQ1xuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfRVRDMl9FQUNcbiAgICAgICAgPC91bD5cblxuICAgICAgICBOb3RlIHRoYXQgd2hpbGUgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0YzEgaXMgbm90IGVuYWJsZWQgYnkgdGhpcyBtZXRob2QsXG4gICAgICAgIEVUQzEgdGV4dHVyZXMgY2FuIGJlIGxvYWRlZCB1c2luZyBDT01QUkVTU0VEX1JHQjhfRVRDMiBhcyB0aGUgZm9ybWF0LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGV0Y1RleHR1cmVzKCkge1xuICAgICAgICBsZXQgZXh0ID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oXCJXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjXCIpO1xuICAgICAgICB0aGlzLmV0Y1RleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuXG4gICAgICAgIGlmICh0aGlzLmV0Y1RleHR1cmVzRW5hYmxlZCkge1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SMTFfRUFDXSAgICAgICAgICAgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU0lHTkVEX1IxMV9FQUNdICAgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHMTFfRUFDXSAgICAgICAgICAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TSUdORURfUkcxMV9FQUNdICAgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCOF9FVEMyXSAgICAgICAgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0VUQzJdICAgICAgICAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0I4X1BVTkNIVEhST1VHSF9BTFBIQTFfRVRDMl0gID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfUFVOQ0hUSFJPVUdIX0FMUEhBMV9FVEMyXSA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkE4X0VUQzJfRUFDXSAgICAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfRVRDMl9FQUNdICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgdGhlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9hc3RjIGV4dGVuc2lvbiwgd2hpY2ggYWxsb3dzIHRoZSBmb2xsb3dpbmcgZW51bXMgdG9cbiAgICAgICAgYmUgdXNlZCBhcyB0ZXh0dXJlIGZvcm1hdHM6XG4gICAgICAgIFxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ180eDRfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ181eDRfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ181eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ182eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ182eDZfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ184eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ184eDZfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ184eDhfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ18xMHg1X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4Nl9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCQV9BU1RDXzEweDhfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ18xMHgxMF9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCQV9BU1RDXzEyeDEwX0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9SR0JBX0FTVENfMTJ4MTJfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzR4NF9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNXg0X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ181eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzZ4NV9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNng2X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ184eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzh4Nl9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg4X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg1X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg2X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg4X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHgxMF9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTJ4MTBfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEyeDEyX0tIUlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGFzdGNUZXh0dXJlcygpIHtcbiAgICAgICAgbGV0IGV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2FzdGNcIik7XG4gICAgICAgIHRoaXMuYXN0Y1RleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuXG4gICAgICAgIGlmICh0aGlzLmFzdGNUZXh0dXJlc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzR4NF9LSFJdICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ181eDRfS0hSXSAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX0FTVENfNXg1X0tIUl0gICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzZ4NV9LSFJdICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ182eDZfS0hSXSAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX0FTVENfOHg1X0tIUl0gICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzh4Nl9LSFJdICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ184eDhfS0hSXSAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4NV9LSFJdICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzEweDZfS0hSXSAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ18xMHg4X0tIUl0gICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4MTBfS0hSXSAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzEyeDEwX0tIUl0gICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ18xMngxMl9LSFJdICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ180eDRfS0hSXSAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNXg0X0tIUl0gICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzV4NV9LSFJdICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ182eDVfS0hSXSAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNng2X0tIUl0gICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzh4NV9LSFJdICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ184eDZfS0hSXSAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg4X0tIUl0gICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEweDVfS0hSXSAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg2X0tIUl0gID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTB4OF9LSFJdICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEweDEwX0tIUl0gPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMngxMF9LSFJdID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTJ4MTJfS0hSXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgdGhlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YyBleHRlbnNpb24sIHdoaWNoIGFsbG93cyB0aGUgZm9sbG93aW5nIGVudW1zIHRvXG4gICAgICAgIGJlIHVzZWQgYXMgdGV4dHVyZSBmb3JtYXRzOlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCX1BWUlRDXzRCUFBWMV9JTUdcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCX1BWUlRDXzJCUFBWMV9JTUdcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCQV9QVlJUQ180QlBQVjFfSU1HXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfUFZSVENfMkJQUFYxX0lNR1xuICAgICAgICA8L3VsPlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHB2cnRjVGV4dHVyZXMoKSB7XG4gICAgICAgIGxldCBleHQgPSB0aGlzLmdsLmdldEV4dGVuc2lvbihcIldFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0Y1wiKTtcbiAgICAgICAgdGhpcy5wdnJ0Y1RleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucHZydGNUZXh0dXJlc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCX1BWUlRDXzRCUFBWMV9JTUddID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCX1BWUlRDXzJCUFBWMV9JTUddID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9QVlJUQ180QlBQVjFfSU1HXSA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfUFZSVENfMkJQUFYxX0lNR10gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFJlYWQgYSBwaXhlbCdzIGNvbG9yIHZhbHVlIGZyb20gdGhlIGN1cnJlbnRseS1ib3VuZCBmcmFtZWJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBpeGVsLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBwaXhlbC5cbiAgICAgICAgQHBhcmFtIHtBcnJheUJ1ZmZlclZpZXd9IG91dENvbG9yIFR5cGVkIGFycmF5IHRvIHN0b3JlIHRoZSBwaXhlbCdzIGNvbG9yLlxuICAgICAgICBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy50eXBlPVVOU0lHTkVEX0JZVEVdIFR5cGUgb2YgZGF0YSBzdG9yZWQgaW4gdGhlIHJlYWQgZnJhbWVidWZmZXIuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5mb3JtYXQ9UkdCQV0gUmVhZCBmcmFtZWJ1ZmZlciBkYXRhIGZvcm1hdC5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHJlYWRQaXhlbCh4LCB5LCBvdXRDb2xvciwgb3B0aW9ucyA9IENPTlNUQU5UUy5EVU1NWV9PQkpFQ1QpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGZvcm1hdCA9IENPTlNUQU5UUy5SR0JBLFxuICAgICAgICAgICAgdHlwZSA9IENPTlNUQU5UUy5VTlNJR05FRF9CWVRFICAgIFxuICAgICAgICB9ID0gb3B0aW9ucztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2wucmVhZFBpeGVscyh4LCB5LCAxLCAxLCBmb3JtYXQsIHR5cGUsIG91dENvbG9yKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSB2aWV3cG9ydC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSB4IExlZnQgYm91bmQgb2YgdGhlIHZpZXdwb3J0IHJlY3RhbmdsZS5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHkgTG93ZXIgYm91bmQgb2YgdGhlIHZpZXdwb3J0IHJlY3RhbmdsZS5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFdpZHRoIG9mIHRoZSB2aWV3cG9ydCByZWN0YW5nbGUuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCByZWN0YW5nbGUuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICB2aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld3BvcnRXaWR0aCAhPT0gd2lkdGggfHwgdGhpcy52aWV3cG9ydEhlaWdodCAhPT0gaGVpZ2h0IHx8XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cG9ydFggIT09IHggfHwgdGhpcy52aWV3cG9ydFkgIT09IHkpIHtcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRYID0geDtcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRZID0geTtcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuZ2wudmlld3BvcnQoeCwgeSwgdGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLnZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIHZpZXdwb3J0IHRvIHRoZSBmdWxsIGNhbnZhcy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBkZWZhdWx0Vmlld3BvcnQoKSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBSZXNpemUgdGhlIGRyYXdpbmcgc3VyZmFjZS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgbmV3IGNhbnZhcyB3aWR0aC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUaGUgbmV3IGNhbnZhcyBoZWlnaHQuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZ2wuZHJhd2luZ0J1ZmZlcldpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZ2wuZHJhd2luZ0J1ZmZlckhlaWdodDtcbiAgICAgICAgdGhpcy52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgICBDcmVhdGUgYSBwcm9ncmFtLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtTaGFkZXJ8c3RyaW5nfSB2ZXJ0ZXhTaGFkZXIgVmVydGV4IHNoYWRlciBvYmplY3Qgb3Igc291cmNlIGNvZGUuXG4gICAgICAgIEBwYXJhbSB7U2hhZGVyfHN0cmluZ30gZnJhZ21lbnRTaGFkZXIgRnJhZ21lbnQgc2hhZGVyIG9iamVjdCBvciBzb3VyY2UgY29kZS5cbiAgICAgICAgQHBhcmFtIHtBcnJheX0gW3hmb3JtRmVlZGJhY2tWYXJzXSBUcmFuc2Zvcm0gZmVlZGJhY2sgdmFyeWluZ3MuXG4gICAgICAgIEByZXR1cm4ge1Byb2dyYW19IE5ldyBQcm9ncmFtIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVByb2dyYW0odnNTb3VyY2UsIGZzU291cmNlLCB4Zm9ybUZlZWRiYWNrVmFycykge1xuICAgICAgICByZXR1cm4gbmV3IFByb2dyYW0odGhpcy5nbCwgdGhpcy5zdGF0ZSwgdnNTb3VyY2UsIGZzU291cmNlLCB4Zm9ybUZlZWRiYWNrVmFycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIHNoYWRlci4gQ3JlYXRpbmcgYSBzaGFkZXIgc2VwYXJhdGVseSBmcm9tIGEgcHJvZ3JhbSBhbGxvd3MgZm9yXG4gICAgICAgIHNoYWRlciByZXVzZS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSB0eXBlIFNoYWRlciB0eXBlLlxuICAgICAgICBAcGFyYW0ge3N0cmluZ30gc291cmNlIFNoYWRlciBzb3VyY2UuXG4gICAgICAgIEByZXR1cm4ge1NoYWRlcn0gTmV3IFNoYWRlciBvYmplY3QuXG4gICAgKi9cbiAgICBjcmVhdGVTaGFkZXIodHlwZSwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2hhZGVyKHRoaXMuZ2wsIHR5cGUsIHNvdXJjZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIHZlcnRleCBhcnJheS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEFycmF5fSBOZXcgVmVydGV4QXJyYXkgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlVmVydGV4QXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVydGV4QXJyYXkodGhpcy5nbCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIHRyYW5zZm9ybSBmZWVkYmFjayBvYmplY3QuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtUcmFuc2Zvcm1GZWVkYmFja30gTmV3IFRyYW5zZm9ybUZlZWRiYWNrIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRyYW5zZm9ybUZlZWRiYWNrKHRoaXMuZ2wsIHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDcmVhdGUgYSB2ZXJ0ZXggYnVmZmVyLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IHR5cGUgVGhlIGRhdGEgdHlwZSBzdG9yZWQgaW4gdGhlIHZlcnRleCBidWZmZXIuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBpdGVtU2l6ZSBOdW1iZXIgb2YgZWxlbWVudHMgcGVyIHZlcnRleC5cbiAgICAgICAgQHBhcmFtIHtBcnJheUJ1ZmZlclZpZXd9IGRhdGEgQnVmZmVyIGRhdGEuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbdXNhZ2U9U1RBVElDX0RSQVddIEJ1ZmZlciB1c2FnZS5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QnVmZmVyfSBOZXcgVmVydGV4QnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVZlcnRleEJ1ZmZlcih0eXBlLCBpdGVtU2l6ZSwgZGF0YSwgdXNhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZXJ0ZXhCdWZmZXIodGhpcy5nbCwgdGhpcy5zdGF0ZSwgdHlwZSwgaXRlbVNpemUsIGRhdGEsIHVzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgcGVyLXZlcnRleCBtYXRyaXggYnVmZmVyLiBNYXRyaXggYnVmZmVycyBlbnN1cmUgdGhhdCBjb2x1bW5zXG4gICAgICAgIGFyZSBjb3JyZWN0bHkgc3BsaXQgYWNyb3NzIGF0dHJpYnV0ZSBsb2NhdGlvbnMuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gdHlwZSBUaGUgZGF0YSB0eXBlIHN0b3JlZCBpbiB0aGUgbWF0cml4IGJ1ZmZlci4gVmFsaWQgdHlwZXNcbiAgICAgICAgYXJlIEZMT0FUX01BVDQsIEZMT0FUX01BVDR4MiwgRkxPQVRfTUFUNHgzLCBGTE9BVF9NQVQzLCBGTE9BVF9NQVQzeDIsXG4gICAgICAgIEZMT0FUX01BVDN4NCwgRkxPQVRfTUFUMiwgRkxPQVRfTUFUMngzLCBGTE9BVF9NQVQyeDQuXG4gICAgICAgIEBwYXJhbSB7QXJyYXlCdWZmZXJWaWV3fSBkYXRhIE1hdHJpeCBidWZmZXIgZGF0YS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFt1c2FnZT1TVEFUSUNfRFJBV10gQnVmZmVyIHVzYWdlLlxuICAgICAgICBAcmV0dXJuIHtWZXJ0ZXhCdWZmZXJ9IE5ldyBWZXJ0ZXhCdWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlTWF0cml4QnVmZmVyKHR5cGUsIGRhdGEsIHVzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVydGV4QnVmZmVyKHRoaXMuZ2wsIHRoaXMuc3RhdGUsIHR5cGUsIDAsIGRhdGEsIHVzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGFuIGluZGV4IGJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSB0eXBlIFRoZSBkYXRhIHR5cGUgc3RvcmVkIGluIHRoZSBpbmRleCBidWZmZXIuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBpdGVtU2l6ZSBOdW1iZXIgb2YgZWxlbWVudHMgcGVyIHByaW1pdGl2ZS5cbiAgICAgICAgQHBhcmFtIHtBcnJheUJ1ZmZlclZpZXd9IGRhdGEgSW5kZXggYnVmZmVyIGRhdGEuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbdXNhZ2U9U1RBVElDX0RSQVddIEJ1ZmZlciB1c2FnZS5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QnVmZmVyfSBOZXcgVmVydGV4QnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZUluZGV4QnVmZmVyKHR5cGUsIGl0ZW1TaXplLCBkYXRhLCB1c2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlcnRleEJ1ZmZlcih0aGlzLmdsLCB0aGlzLnN0YXRlLCB0eXBlLCBpdGVtU2l6ZSwgZGF0YSwgdXNhZ2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDcmVhdGUgYSB1bmlmb3JtIGJ1ZmZlciBpbiBzdGQxNDAgbGF5b3V0LiBOT1RFOiBGTE9BVF9NQVQyLCBGTE9BVF9NQVQzeDIsIEZMT0FUX01BVDR4MixcbiAgICAgICAgRkxPQVRfTUFUMywgRkxPQVRfTUFUMngzLCBGTE9BVF9NQVQ0eDMgYXJlIHN1cHBvcnRlZCwgYnV0IG11c3QgYmUgbWFudWFsbHkgcGFkZGVkIHRvXG4gICAgICAgIDQtZmxvYXQgY29sdW1uIGFsaWdubWVudCBieSB0aGUgYXBwbGljYXRpb24hXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0FycmF5fSBsYXlvdXQgQXJyYXkgaW5kaWNhdGluZyB0aGUgb3JkZXIgYW5kIHR5cGVzIG9mIGl0ZW1zIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICBiZSBzdG9yZWQgaW4gdGhlIGJ1ZmZlci5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFt1c2FnZT1EWU5BTUlDX0RSQVddIEJ1ZmZlciB1c2FnZS5cbiAgICAgICAgQHJldHVybiB7VW5pZm9ybUJ1ZmZlcn0gTmV3IFVuaWZvcm1CdWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlVW5pZm9ybUJ1ZmZlcihsYXlvdXQsIHVzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5pZm9ybUJ1ZmZlcih0aGlzLmdsLCB0aGlzLnN0YXRlLCBsYXlvdXQsIHVzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgMkQgdGV4dHVyZS4gQ2FuIGJlIHVzZWQgaW4gc2V2ZXJhbCB3YXlzIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB0ZXh0dXJlIGRhdGE6XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48Yj5hcHAuY3JlYXRlVGV4dHVyZTJEKEltYWdlRWxlbWVudCwgb3B0aW9ucyk8L2I+OiBDcmVhdGUgdGV4dHVyZSBmcm9tIGEgRE9NIGltYWdlIGVsZW1lbnQuXG4gICAgICAgICAgICA8bGk+PGI+YXBwLmNyZWF0ZVRleHR1cmUyRChUeXBlZEFycmF5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTwvYj46IENyZWF0ZSB0ZXh0dXJlIGZyb20gYSB0eXBlZCBhcnJheS5cbiAgICAgICAgICAgIDxsaT48Yj5hcHAuY3JlYXRlVGV4dHVyZTJEKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpPC9iPjogQ3JlYXRlIGVtcHR5IHRleHR1cmUuXG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0RPTUVsZW1lbnR8QXJyYXlCdWZmZXJWaWV3fEFycmF5fSBbaW1hZ2VdIEltYWdlIGRhdGEuIEFuIGFycmF5IGNhbiBiZSBwYXNzZWQgdG8gbWFudWFsbHkgc2V0IGFsbCBsZXZlbHMgXG4gICAgICAgICAgICBvZiB0aGUgbWlwbWFwIGNoYWluLiBJZiBhIHNpbmdsZSBsZXZlbCBpcyBwYXNzZWQgYW5kIG1pcG1hcCBmaWx0ZXJpbmcgaXMgYmVpbmcgdXNlZCxcbiAgICAgICAgICAgIGdlbmVyYXRlTWlwbWFwKCkgd2lsbCBiZSBjYWxsZWQgdG8gcHJvZHVjZSB0aGUgcmVtYWluaW5nIGxldmVscy5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gVGV4dHVyZSB3aWR0aC4gUmVxdWlyZWQgZm9yIGFycmF5IG9yIGVtcHR5IGRhdGEuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0XSBUZXh0dXJlIGhlaWdodC4gUmVxdWlyZWQgZm9yIGFycmF5IG9yIGVtcHR5IGRhdGEuXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGV4dHVyZSBvcHRpb25zLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMudHlwZV0gVHlwZSBvZiBkYXRhIHN0b3JlZCBpbiB0aGUgdGV4dHVyZS4gRGVmYXVsdHMgdG8gVU5TSUdORURfU0hPUlQgXG4gICAgICAgICAgICBpZiBmb3JtYXQgaXMgREVQVEhfQ09NUE9ORU5ULCBVTlNJR05FRF9CWVRFIG90aGVyd2lzZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmZvcm1hdD1SR0JBXSBUZXh0dXJlIGRhdGEgZm9ybWF0LlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuaW50ZXJuYWxGb3JtYXQ9UkdCQV0gVGV4dHVyZSBkYXRhIGludGVybmFsIGZvcm1hdC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mbGlwWT1mYWxzZV0gV2hldGhlciB0aGUgeS1heGlzIHNob3VsZCBiZSBmbGlwcGVkIHdoZW4gdW5wYWNraW5nIHRoZSB0ZXh0dXJlLiBcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkZpbHRlcl0gTWluaWZpY2F0aW9uIGZpbHRlci4gRGVmYXVsdHMgdG8gXG4gICAgICAgICAgICBMSU5FQVJfTUlQTUFQX05FQVJFU1QgaWYgaW1hZ2UgZGF0YSBpcyBwcm92aWRlZCwgTkVBUkVTVCBvdGhlcndpc2UuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYWdGaWx0ZXJdIE1hZ25pZmljYXRpb24gZmlsdGVyLiBEZWZhdWx0cyB0byBMSU5FQVJcbiAgICAgICAgICAgIGlmIGltYWdlIGRhdGEgaXMgcHJvdmlkZWQsIE5FQVJFU1Qgb3RoZXJ3aXNlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMud3JhcFM9UkVQRUFUXSBIb3Jpem9udGFsIHdyYXAgbW9kZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBUPVJFUEVBVF0gVmVydGljYWwgd3JhcCBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZU1vZGU9Tk9ORV0gQ29tcGFyaXNvbiBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZUZ1bmM9TEVRVUFMXSBDb21wYXJpc29uIGZ1bmN0aW9uLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuYmFzZUxldmVsXSBCYXNlIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1heExldmVsXSBNYXhpbXVtIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkxPRF0gTWltaW11bSBsZXZlbCBvZiBkZXRhaWwuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYXhMT0RdIE1heGltdW0gbGV2ZWwgb2YgZGV0YWlsLlxuICAgICAgICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmdlbmVyYXRlTWlwbWFwc10gU2hvdWxkIG1pcG1hcHMgYmUgZ2VuZXJhdGVkLiBEZWZhdWx0cyB0byBnZW5lcmF0aW5nIG1pcG1hcHMgaWZcbiAgICAgICAgICAgIGEgbWlwbWFwIHNhbXBsaW5nIGZpbHRlciBpcyB1c2VkIGFuZCB0aGUgbWlwbWFwIGxldmVscyBhcmVuJ3QgcHJvdmlkZWQgZGlyZWN0bHkuXG4gICAgICAgIEByZXR1cm4ge1RleHR1cmV9IE5ldyBUZXh0dXJlIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVRleHR1cmUyRChpbWFnZSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGltYWdlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgZW1wdHkgdGV4dHVyZSBqdXN0IGdpdmUgd2lkdGgvaGVpZ2h0LlxuICAgICAgICAgICAgb3B0aW9ucyA9IGhlaWdodDtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoO1xuICAgICAgICAgICAgd2lkdGggPSBpbWFnZTtcbiAgICAgICAgICAgIGltYWdlID0gbnVsbDsgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFBhc3NpbmcgaW4gYSBET00gZWxlbWVudC4gSGVpZ2h0L3dpZHRoIG5vdCByZXF1aXJlZC5cbiAgICAgICAgICAgIG9wdGlvbnMgPSB3aWR0aDtcbiAgICAgICAgICAgIHdpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFRleHR1cmUodGhpcy5nbCwgdGhpcy5zdGF0ZSwgdGhpcy5nbC5URVhUVVJFXzJELCBpbWFnZSwgd2lkdGgsIGhlaWdodCwgdW5kZWZpbmVkLCBmYWxzZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIDJEIHRleHR1cmUgYXJyYXkuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0FycmF5QnVmZmVyVmlld3xBcnJheX0gaW1hZ2UgUGl4ZWwgZGF0YS4gQW4gYXJyYXkgY2FuIGJlIHBhc3NlZCB0byBtYW51YWxseSBzZXQgYWxsIGxldmVscyBcbiAgICAgICAgICAgIG9mIHRoZSBtaXBtYXAgY2hhaW4uIElmIGEgc2luZ2xlIGxldmVsIGlzIHBhc3NlZCBhbmQgbWlwbWFwIGZpbHRlcmluZyBpcyBiZWluZyB1c2VkLFxuICAgICAgICAgICAgZ2VuZXJhdGVNaXBtYXAoKSB3aWxsIGJlIGNhbGxlZCB0byBwcm9kdWNlIHRoZSByZW1haW5pbmcgbGV2ZWxzLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gd2lkdGggVGV4dHVyZSB3aWR0aC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUZXh0dXJlIGhlaWdodC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHNpemUgTnVtYmVyIG9mIGltYWdlcyBpbiB0aGUgYXJyYXkuXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGV4dHVyZSBvcHRpb25zLlxuICAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLnR5cGVdIFR5cGUgb2YgZGF0YSBzdG9yZWQgaW4gdGhlIHRleHR1cmUuIERlZmF1bHRzIHRvIFVOU0lHTkVEX1NIT1JUIFxuICAgICAgICAgICAgaWYgZm9ybWF0IGlzIERFUFRIX0NPTVBPTkVOVCwgVU5TSUdORURfQllURSBvdGhlcndpc2UuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5mb3JtYXQ9UkdCQV0gVGV4dHVyZSBkYXRhIGZvcm1hdC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmludGVybmFsRm9ybWF0PVJHQkFdIFRleHR1cmUgZGF0YSBpbnRlcm5hbCBmb3JtYXQuXG4gICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZmxpcFk9ZmFsc2VdIFdoZXRoZXIgdGhlIHktYXhpcyBzaG91bGQgYmUgZmxpcHBlZCB3aGVuIHVucGFja2luZyB0aGUgdGV4dHVyZS4gXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5taW5GaWx0ZXJdIE1pbmlmaWNhdGlvbiBmaWx0ZXIuIERlZmF1bHRzIHRvIFxuICAgICAgICAgICAgTElORUFSX01JUE1BUF9ORUFSRVNUIGlmIGltYWdlIGRhdGEgaXMgcHJvdmlkZWQsIE5FQVJFU1Qgb3RoZXJ3aXNlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMubWFnRmlsdGVyXSBNYWduaWZpY2F0aW9uIGZpbHRlci4gRGVmYXVsdHMgdG8gTElORUFSXG4gICAgICAgICAgICBpZiBpbWFnZSBkYXRhIGlzIHByb3ZpZGVkLCBORUFSRVNUIG90aGVyd2lzZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBTPVJFUEVBVF0gSG9yaXpvbnRhbCB3cmFwIG1vZGUuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy53cmFwVD1SRVBFQVRdIFZlcnRpY2FsIHdyYXAgbW9kZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBSPVJFUEVBVF0gRGVwdGggd3JhcCBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZU1vZGU9Tk9ORV0gQ29tcGFyaXNvbiBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZUZ1bmM9TEVRVUFMXSBDb21wYXJpc29uIGZ1bmN0aW9uLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuYmFzZUxldmVsXSBCYXNlIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1heExldmVsXSBNYXhpbXVtIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkxPRF0gTWltaW11bSBsZXZlbCBvZiBkZXRhaWwuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYXhMT0RdIE1heGltdW0gbGV2ZWwgb2YgZGV0YWlsLlxuICAgICAgICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmdlbmVyYXRlTWlwbWFwc10gU2hvdWxkIG1pcG1hcHMgYmUgZ2VuZXJhdGVkLiBEZWZhdWx0cyB0byBnZW5lcmF0aW5nIG1pcG1hcHMgaWZcbiAgICAgICAgICAgIGEgbWlwbWFwIHNhbXBsaW5nIGZpbHRlciBpcyB1c2UgYW5kIHRoZSBtaXBtYXAgbGV2ZWxzIGFyZW4ndCBwcm92aWRlZCBkaXJlY3RseS5cbiAgICAgICAgQHJldHVybiB7VGV4dHVyZX0gTmV3IFRleHR1cmUgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlVGV4dHVyZUFycmF5KGltYWdlLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGltYWdlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgZW1wdHkgdGV4dHVyZSBqdXN0IGdpdmUgd2lkdGgvaGVpZ2h0L2RlcHRoLlxuICAgICAgICAgICAgb3B0aW9ucyA9IGRlcHRoO1xuICAgICAgICAgICAgZGVwdGggPSBoZWlnaHQ7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aDtcbiAgICAgICAgICAgIHdpZHRoID0gaW1hZ2U7XG4gICAgICAgICAgICBpbWFnZSA9IG51bGw7ICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVGV4dHVyZSh0aGlzLmdsLCB0aGlzLnN0YXRlLCB0aGlzLmdsLlRFWFRVUkVfMkRfQVJSQVksIGltYWdlLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIDNEIHRleHR1cmUuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0FycmF5QnVmZmVyVmlld3xBcnJheX0gaW1hZ2UgUGl4ZWwgZGF0YS4gQW4gYXJyYXkgY2FuIGJlIHBhc3NlZCB0byBtYW51YWxseSBzZXQgYWxsIGxldmVscyBcbiAgICAgICAgICAgIG9mIHRoZSBtaXBtYXAgY2hhaW4uIElmIGEgc2luZ2xlIGxldmVsIGlzIHBhc3NlZCBhbmQgbWlwbWFwIGZpbHRlcmluZyBpcyBiZWluZyB1c2VkLFxuICAgICAgICAgICAgZ2VuZXJhdGVNaXBtYXAoKSB3aWxsIGJlIGNhbGxlZCB0byBwcm9kdWNlIHRoZSByZW1haW5pbmcgbGV2ZWxzLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gd2lkdGggVGV4dHVyZSB3aWR0aC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUZXh0dXJlIGhlaWdodC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRleHR1cmUgZGVwdGguXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGV4dHVyZSBvcHRpb25zLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMudHlwZV0gVHlwZSBvZiBkYXRhIHN0b3JlZCBpbiB0aGUgdGV4dHVyZS4gRGVmYXVsdHMgdG8gVU5TSUdORURfU0hPUlQgXG4gICAgICAgICAgICBpZiBmb3JtYXQgaXMgREVQVEhfQ09NUE9ORU5ULCBVTlNJR05FRF9CWVRFIG90aGVyd2lzZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmZvcm1hdD1SR0JBXSBUZXh0dXJlIGRhdGEgZm9ybWF0LlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuaW50ZXJuYWxGb3JtYXQ9UkdCQV0gVGV4dHVyZSBkYXRhIGludGVybmFsIGZvcm1hdC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mbGlwWT1mYWxzZV0gV2hldGhlciB0aGUgeS1heGlzIHNob3VsZCBiZSBmbGlwcGVkIHdoZW4gdW5wYWNraW5nIHRoZSB0ZXh0dXJlLiBcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkZpbHRlcl0gTWluaWZpY2F0aW9uIGZpbHRlci4gRGVmYXVsdHMgdG8gXG4gICAgICAgICAgICBMSU5FQVJfTUlQTUFQX05FQVJFU1QgaWYgaW1hZ2UgZGF0YSBpcyBwcm92aWRlZCwgTkVBUkVTVCBvdGhlcndpc2UuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYWdGaWx0ZXJdIE1hZ25pZmljYXRpb24gZmlsdGVyLiBEZWZhdWx0cyB0byBMSU5FQVJcbiAgICAgICAgICAgIGlmIGltYWdlIGRhdGEgaXMgcHJvdmlkZWQsIE5FQVJFU1Qgb3RoZXJ3aXNlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMud3JhcFM9UkVQRUFUXSBIb3Jpem9udGFsIHdyYXAgbW9kZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBUPVJFUEVBVF0gVmVydGljYWwgd3JhcCBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMud3JhcFI9UkVQRUFUXSBEZXB0aCB3cmFwIG1vZGUuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5jb21wYXJlTW9kZT1OT05FXSBDb21wYXJpc29uIG1vZGUuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5jb21wYXJlRnVuYz1MRVFVQUxdIENvbXBhcmlzb24gZnVuY3Rpb24uXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5iYXNlTGV2ZWxdIEJhc2UgbWlwbWFwIGxldmVsLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMubWF4TGV2ZWxdIE1heGltdW0gbWlwbWFwIGxldmVsLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMubWluTE9EXSBNaW1pbXVtIGxldmVsIG9mIGRldGFpbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1heExPRF0gTWF4aW11bSBsZXZlbCBvZiBkZXRhaWwuXG4gICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZ2VuZXJhdGVNaXBtYXBzXSBTaG91bGQgbWlwbWFwcyBiZSBnZW5lcmF0ZWQuIERlZmF1bHRzIHRvIGdlbmVyYXRpbmcgbWlwbWFwcyBpZlxuICAgICAgICAgICAgYSBtaXBtYXAgc2FtcGxpbmcgZmlsdGVyIGlzIHVzZSBhbmQgdGhlIG1pcG1hcCBsZXZlbHMgYXJlbid0IHByb3ZpZGVkIGRpcmVjdGx5LlxuICAgICAgICBAcmV0dXJuIHtUZXh0dXJlfSBOZXcgVGV4dHVyZSBvYmplY3QuXG4gICAgKi9cbiAgICBjcmVhdGVUZXh0dXJlM0QoaW1hZ2UsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBlbXB0eSB0ZXh0dXJlIGp1c3QgZ2l2ZSB3aWR0aC9oZWlnaHQvZGVwdGguXG4gICAgICAgICAgICBvcHRpb25zID0gZGVwdGg7XG4gICAgICAgICAgICBkZXB0aCA9IGhlaWdodDtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoO1xuICAgICAgICAgICAgd2lkdGggPSBpbWFnZTtcbiAgICAgICAgICAgIGltYWdlID0gbnVsbDsgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0dXJlKHRoaXMuZ2wsIHRoaXMuc3RhdGUsIHRoaXMuZ2wuVEVYVFVSRV8zRCwgaW1hZ2UsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCB0cnVlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgY3ViZW1hcC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRleHR1cmUgb3B0aW9ucy5cbiAgICAgICAgQHBhcmFtIHtET01FbGVtZW50fEFycmF5QnVmZmVyVmlld30gW29wdGlvbnMubmVnWF0gVGhlIGltYWdlIGRhdGEgZm9yIHRoZSBuZWdhdGl2ZSBYIGRpcmVjdGlvbi5cbiAgICAgICAgICAgICAgICBDYW4gYmUgYW55IGZvcm1hdCB0aGF0IHdvdWxkIGJlIGFjY2VwdGVkIGJ5IHRleEltYWdlMkQuXG4gICAgICAgIEBwYXJhbSB7RE9NRWxlbWVudHxBcnJheUJ1ZmZlclZpZXd9IFtvcHRpb25zLnBvc1hdIFRoZSBpbWFnZSBkYXRhIGZvciB0aGUgcG9zaXRpdmUgWCBkaXJlY3Rpb24uXG4gICAgICAgICAgICAgICAgQ2FuIGJlIGFueSBmb3JtYXQgdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0ZXhJbWFnZTJELlxuICAgICAgICBAcGFyYW0ge0RPTUVsZW1lbnR8QXJyYXlCdWZmZXJWaWV3fSBbb3B0aW9ucy5uZWdZXSBUaGUgaW1hZ2UgZGF0YSBmb3IgdGhlIG5lZ2F0aXZlIFkgZGlyZWN0aW9uLlxuICAgICAgICAgICAgICAgIENhbiBiZSBhbnkgZm9ybWF0IHRoYXQgd291bGQgYmUgYWNjZXB0ZWQgYnkgdGV4SW1hZ2UyRC5cbiAgICAgICAgQHBhcmFtIHtET01FbGVtZW50fEFycmF5QnVmZmVyVmlld30gW29wdGlvbnMucG9zWV0gVGhlIGltYWdlIGRhdGEgZm9yIHRoZSBwb3NpdGl2ZSBZIGRpcmVjdGlvbi5cbiAgICAgICAgICAgICAgICBDYW4gYmUgYW55IGZvcm1hdCB0aGF0IHdvdWxkIGJlIGFjY2VwdGVkIGJ5IHRleEltYWdlMkQuXG4gICAgICAgIEBwYXJhbSB7RE9NRWxlbWVudHxBcnJheUJ1ZmZlclZpZXd9IFtvcHRpb25zLm5lZ1pdIFRoZSBpbWFnZSBkYXRhIGZvciB0aGUgbmVnYXRpdmUgWiBkaXJlY3Rpb24uXG4gICAgICAgICAgICAgICAgQ2FuIGJlIGFueSBmb3JtYXQgdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0ZXhJbWFnZTJELlxuICAgICAgICBAcGFyYW0ge0RPTUVsZW1lbnR8QXJyYXlCdWZmZXJWaWV3fSBbb3B0aW9ucy5wb3NaXSBUaGUgaW1hZ2UgZGF0YSBmb3IgdGhlIHBvc2l0aXZlIFogZGlyZWN0aW9uLlxuICAgICAgICAgICAgICAgIENhbiBiZSBhbnkgZm9ybWF0IHRoYXQgd291bGQgYmUgYWNjZXB0ZWQgYnkgdGV4SW1hZ2UyRC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLndpZHRoXSBDdWJlbWFwIHNpZGUgd2lkdGguIERlZmF1bHRzIHRvIHRoZSB3aWR0aCBvZiBuZWdYIGlmIG5lZ1ggaXMgYW4gaW1hZ2UuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5oZWlnaHRdIEN1YmVtYXAgc2lkZSBoZWlnaHQuIERlZmF1bHRzIHRvIHRoZSBoZWlnaHQgb2YgbmVnWCBpZiBuZWdYIGlzIGFuIGltYWdlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMudHlwZV0gVHlwZSBvZiBkYXRhIHN0b3JlZCBpbiB0aGUgdGV4dHVyZS4gRGVmYXVsdHMgdG8gVU5TSUdORURfU0hPUlQgXG4gICAgICAgICAgICBpZiBmb3JtYXQgaXMgREVQVEhfQ09NUE9ORU5ULCBVTlNJR05FRF9CWVRFIG90aGVyd2lzZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmZvcm1hdD1SR0JBXSBUZXh0dXJlIGRhdGEgZm9ybWF0LlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuaW50ZXJuYWxGb3JtYXQ9UkdCQV0gVGV4dHVyZSBkYXRhIGludGVybmFsIGZvcm1hdC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mbGlwWT1mYWxzZV0gV2hldGhlciB0aGUgeS1heGlzIHNob3VsZCBiZSBmbGlwcGVkIHdoZW4gdW5wYWNraW5nIHRoZSB0ZXh0dXJlLiBcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkZpbHRlcl0gTWluaWZpY2F0aW9uIGZpbHRlci4gRGVmYXVsdHMgdG8gXG4gICAgICAgICAgICBMSU5FQVJfTUlQTUFQX05FQVJFU1QgaWYgaW1hZ2UgZGF0YSBpcyBwcm92aWRlZCwgTkVBUkVTVCBvdGhlcndpc2UuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYWdGaWx0ZXJdIE1hZ25pZmljYXRpb24gZmlsdGVyLiBEZWZhdWx0cyB0byBMSU5FQVJcbiAgICAgICAgICAgIGlmIGltYWdlIGRhdGEgaXMgcHJvdmlkZWQsIE5FQVJFU1Qgb3RoZXJ3aXNlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMud3JhcFM9UkVQRUFUXSBIb3Jpem9udGFsIHdyYXAgbW9kZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBUPVJFUEVBVF0gVmVydGljYWwgd3JhcCBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZU1vZGU9Tk9ORV0gQ29tcGFyaXNvbiBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZUZ1bmM9TEVRVUFMXSBDb21wYXJpc29uIGZ1bmN0aW9uLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuYmFzZUxldmVsXSBCYXNlIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1heExldmVsXSBNYXhpbXVtIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkxPRF0gTWltaW11bSBsZXZlbCBvZiBkZXRhaWwuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYXhMT0RdIE1heGltdW0gbGV2ZWwgb2YgZGV0YWlsLlxuICAgICAgICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmdlbmVyYXRlTWlwbWFwc10gU2hvdWxkIG1pcG1hcHMgYmUgZ2VuZXJhdGVkLiBEZWZhdWx0cyB0byBnZW5lcmF0aW5nIG1pcG1hcHMgaWZcbiAgICAgICAgICAgIGEgbWlwbWFwIHNhbXBsaW5nIGZpbHRlciBpcyB1c2VkZC5cbiAgICAgICAgQHJldHVybiB7Q3ViZW1hcH0gTmV3IEN1YmVtYXAgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlQ3ViZW1hcChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ3ViZW1hcCh0aGlzLmdsLCB0aGlzLnN0YXRlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgZnJhbWVidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtGcmFtZWJ1ZmZlcn0gTmV3IEZyYW1lYnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZUZyYW1lYnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IEZyYW1lYnVmZmVyKHRoaXMuZ2wsIHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDcmVhdGUgYSBxdWVyeS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSB0YXJnZXQgSW5mb3JtYXRpb24gdG8gcXVlcnkuXG4gICAgICAgIEByZXR1cm4ge1F1ZXJ5fSBOZXcgUXVlcnkgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlUXVlcnkodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUXVlcnkodGhpcy5nbCwgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgdGltZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtUaW1lcn0gTmV3IFRpbWVyIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVRpbWVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRpbWVyKHRoaXMuZ2wpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDcmVhdGUgYSBEcmF3Q2FsbC4gQSBEcmF3Q2FsbCBtYW5hZ2VzIHRoZSBzdGF0ZSBhc3NvY2lhdGVkIHdpdGhcbiAgICAgICAgYSBXZWJHTCBkcmF3IGNhbGwgaW5jbHVkaW5nIGEgcHJvZ3JhbSBhbmQgYXNzb2NpYXRlZCB2ZXJ0ZXggZGF0YSwgdGV4dHVyZXMsXG4gICAgICAgIHVuaWZvcm1zIGFuZCB1bmlmb3JtIGJsb2Nrcy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7UHJvZ3JhbX0gcHJvZ3JhbSBUaGUgcHJvZ3JhbSB0byB1c2UgZm9yIHRoaXMgRHJhd0NhbGwuXG4gICAgICAgIEBwYXJhbSB7VmVydGV4QXJyYXl9IHZlcnRleEFycmF5IFZlcnRleCBkYXRhIHRvIHVzZSBmb3IgZHJhd2luZy5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtwcmltaXRpdmU9VFJJQU5HTEVTXSBUeXBlIG9mIHByaW1pdGl2ZSB0byBkcmF3LlxuICAgICAgICBAcmV0dXJuIHtEcmF3Q2FsbH0gTmV3IERyYXdDYWxsIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZURyYXdDYWxsKHByb2dyYW0sIHZlcnRleEFycmF5LCBwcmltaXRpdmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEcmF3Q2FsbCh0aGlzLmdsLCB0aGlzLnN0YXRlLCBwcm9ncmFtLCB2ZXJ0ZXhBcnJheSwgcHJpbWl0aXZlKTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUYXJlayBTaGVyaWZcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuY29uc3QgQ09OU1RBTlRTID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbmNvbnN0IFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuLyoqXG4gICAgQ3ViZW1hcCBmb3IgZW52aXJvbm1lbnQgbWFwcGluZy5cblxuICAgIEBjbGFzc1xuICAgIEBwcm9wIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0LlxuICAgIEBwcm9wIHtXZWJHTFRleHR1cmV9IHRleHR1cmUgSGFuZGxlIHRvIHRoZSB0ZXh0dXJlLlxuICAgIEBwcm9wIHtHTEVudW19IHR5cGUgVHlwZSBvZiBkYXRhIHN0b3JlZCBpbiB0aGUgdGV4dHVyZS5cbiAgICBAcHJvcCB7R0xFbnVtfSBmb3JtYXQgTGF5b3V0IG9mIHRleHR1cmUgZGF0YS5cbiAgICBAcHJvcCB7R0xFbnVtfSBpbnRlcm5hbEZvcm1hdCBJbnRlcm5hbCBhcnJhbmdlbWVudCBvZiB0aGUgdGV4dHVyZSBkYXRhLlxuICAgIEBwcm9wIHtOdW1iZXJ9IGN1cnJlbnRVbml0IFRoZSBjdXJyZW50IHRleHR1cmUgdW5pdCB0aGlzIGN1YmVtYXAgaXMgYm91bmQgdG8uXG4gICAgQHByb3Age09iamVjdH0gYXBwU3RhdGUgVHJhY2tlZCBHTCBzdGF0ZS5cbiovXG5jbGFzcyBDdWJlbWFwIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsLCBhcHBTdGF0ZSwgb3B0aW9ucykge1xuICAgICAgICBsZXQgeyBuZWdYLCBwb3NYLCBuZWdZLCBwb3NZLCBuZWdaLCBwb3NaIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGxldCBkZWZhdWx0VHlwZSA9IG9wdGlvbnMuZm9ybWF0ID09PSBDT05TVEFOVFMuREVQVEhfQ09NUE9ORU5UID8gQ09OU1RBTlRTLlVOU0lHTkVEX1NIT1JUIDogQ09OU1RBTlRTLlVOU0lHTkVEX0JZVEU7XG5cbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLnRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZm9ybWF0IDogZ2wuUkdCQTtcbiAgICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnR5cGUgOiBkZWZhdWx0VHlwZTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgOiBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUU1t0aGlzLnR5cGVdW3RoaXMuZm9ybWF0XTtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZSA9IGFwcFN0YXRlO1xuICAgICAgICBcbiAgICAgICAgLy8gLTEgaW5kaWNhdGVzIHVuYm91bmRcbiAgICAgICAgdGhpcy5jdXJyZW50VW5pdCA9IC0xO1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB3aWR0aCA9IG5lZ1gud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgPSBuZWdYLmhlaWdodCxcbiAgICAgICAgICAgIGZsaXBZID0gZmFsc2UsXG4gICAgICAgICAgICBtaW5GaWx0ZXIgPSBuZWdYID8gZ2wuTElORUFSX01JUE1BUF9ORUFSRVNUIDogZ2wuTkVBUkVTVCxcbiAgICAgICAgICAgIG1hZ0ZpbHRlciA9IG5lZ1ggPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNULFxuICAgICAgICAgICAgd3JhcFMgPSBnbC5SRVBFQVQsXG4gICAgICAgICAgICB3cmFwVCA9IGdsLlJFUEVBVCxcbiAgICAgICAgICAgIGNvbXBhcmVNb2RlID0gZ2wuTk9ORSxcbiAgICAgICAgICAgIGNvbXBhcmVGdW5jID0gZ2wuTEVRVUFMLFxuICAgICAgICAgICAgZ2VuZXJhdGVNaXBtYXBzID0gbWluRmlsdGVyID09PSBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1QgfHwgbWluRmlsdGVyID09PSBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUlxuICAgICAgICB9ID0gb3B0aW9ucztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuYmluZCgwKTtcbiAgICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgZmxpcFkpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgbWFnRmlsdGVyKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFX0NVQkVfTUFQLCBnbC5URVhUVVJFX01JTl9GSUxURVIsIG1pbkZpbHRlcik7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9XUkFQX1MsIHdyYXBTKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFX0NVQkVfTUFQLCBnbC5URVhUVVJFX1dSQVBfVCwgd3JhcFQpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfQ09NUEFSRV9GVU5DLCBjb21wYXJlRnVuYyk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9DT01QQVJFX01PREUsIGNvbXBhcmVNb2RlKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuYmFzZUxldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9CQVNFX0xFVkVMLCBvcHRpb25zLmJhc2VMZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubWF4TGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFX0NVQkVfTUFQLCBnbC5URVhUVVJFX01BWF9MRVZFTCwgb3B0aW9ucy5tYXhMZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubWluTE9EICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9NSU5fTE9ELCBvcHRpb25zLm1pbkxPRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMubWF4TE9EICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9NQVhfTE9ELCBvcHRpb25zLm1heExPRCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGV2ZWxzID0gZ2VuZXJhdGVNaXBtYXBzID8gTWF0aC5mbG9vcihNYXRoLmxvZzIoTWF0aC5taW4od2lkdGgsIGhlaWdodCkpKSArIDEgOiAxO1xuICAgICAgICBnbC50ZXhTdG9yYWdlMkQoZ2wuVEVYVFVSRV9DVUJFX01BUCwgbGV2ZWxzLCB0aGlzLmludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICBpZiAobmVnWCkge1xuICAgICAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1gsIDAsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIG5lZ1gpO1xuICAgICAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1gsIDAsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIHBvc1gpO1xuICAgICAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ksIDAsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIG5lZ1kpO1xuICAgICAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ksIDAsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIHBvc1kpO1xuICAgICAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1osIDAsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIG5lZ1opO1xuICAgICAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1osIDAsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIHBvc1opO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdlbmVyYXRlTWlwbWFwcykge1xuICAgICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV9DVUJFX01BUCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEZWxldGUgdGhpcyBjdWJlbWFwLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7Q3ViZW1hcH0gVGhlIEN1YmVtYXAgb2JqZWN0LlxuICAgICovXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy50ZXh0dXJlKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy50ZXh0dXJlKTtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnRleHR1cmVzW3RoaXMuY3VycmVudFVuaXRdID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVuaXQgPSAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIHRoaXMgY3ViZW1hcCB0byBhIHRleHR1cmUgdW5pdC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBpZ25vcmVcbiAgICAgICAgQHJldHVybiB7Q3ViZW1hcH0gVGhlIEN1YmVtYXAgb2JqZWN0LlxuICAgICovXG4gICAgYmluZCh1bml0KSB7XG4gICAgICAgIGxldCBjdXJyZW50VGV4dHVyZSA9IHRoaXMuYXBwU3RhdGUudGV4dHVyZXNbdW5pdF07XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFRleHR1cmUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZXh0dXJlLmN1cnJlbnRVbml0ID0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVbml0ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudGV4dHVyZXNbdGhpcy5jdXJyZW50VW5pdF0gPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCArIHVuaXQpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfQ1VCRV9NQVAsIHRoaXMudGV4dHVyZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudGV4dHVyZXNbdW5pdF0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdWJlbWFwO1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGFyZWsgU2hlcmlmXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbmNvbnN0IENPTlNUQU5UUyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbi8qKlxuICAgIEEgRHJhd0NhbGwgcmVwcmVzZW50cyB0aGUgcHJvZ3JhbSBhbmQgdmFsdWVzIG9mIGFzc29jaWF0ZWRcbiAgICBhdHRyaWJ1dGVzLCB1bmlmb3JtcyBhbmQgdGV4dHVyZXMgZm9yIGEgc2luZ2xlIGRyYXcgY2FsbC5cblxuICAgIEBjbGFzc1xuICAgIEBwcm9wIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0LlxuICAgIEBwcm9wIHtQcm9ncmFtfSBjdXJyZW50UHJvZ3JhbSBUaGUgcHJvZ3JhbSB0byB1c2UgZm9yIHRoaXMgZHJhdyBjYWxsLlxuICAgIEBwcm9wIHtWZXJ0ZXhBcnJheX0gY3VycmVudFZlcnRleEFycmF5IFZlcnRleCBhcnJheSB0byB1c2UgZm9yIHRoaXMgZHJhdyBjYWxsLlxuICAgIEBwcm9wIHtUcmFuc2Zvcm1GZWVkYmFja30gY3VycmVudFRyYW5zZm9ybUZlZWRiYWNrIFRyYW5zZm9ybSBmZWVkYmFjayB0byB1c2UgZm9yIHRoaXMgZHJhdyBjYWxsLlxuICAgIEBwcm9wIHtBcnJheX0gdW5pZm9ybUJ1ZmZlcnMgT3JkZXJlZCBsaXN0IG9mIGFjdGl2ZSB1bmlmb3JtIGJ1ZmZlcnMuXG4gICAgQHByb3Age0FycmF5fSB1bmlmb3JtQmxvY2tOYW1lcyBPcmRlcmVkIGxpc3Qgb2YgdW5pZm9ybSBibG9jayBuYW1lcy5cbiAgICBAcHJvcCB7T2JqZWN0fSB1bmlmb3JtQmxvY2tCYXNlcyBNYXAgb2YgdW5pZm9ybSBibG9ja3MgdG8gdW5pZm9ybSBidWZmZXIgYmFzZXMuXG4gICAgQHByb3Age051bWJlcn0gdW5pZm9ybUJsb2NrQ291bnQgTnVtYmVyIG9mIGFjdGl2ZSB1bmlmb3JtIGJsb2NrcyBmb3IgdGhpcyBkcmF3IGNhbGwuXG4gICAgQHByb3Age09iamVjdH0gdW5pZm9ybUluZGljZXMgTWFwIG9mIHVuaWZvcm0gbmFtZXMgdG8gaW5kaWNlcyBpbiB0aGUgdW5pZm9ybSBhcnJheXMuXG4gICAgQHByb3Age0FycmF5fSB1bmlmb3JtTmFtZXMgT3JkZXJlZCBsaXN0IG9mIHVuaWZvcm0gbmFtZXMuXG4gICAgQHByb3Age0FycmF5fSB1bmlmb3JtVmFsdWUgT3JkZXJlZCBsaXN0IG9mIHVuaWZvcm0gdmFsdWVzLlxuICAgIEBwcm9wIHtudW1iZXJ9IHVuaWZvcm1Db3VudCBUaGUgbnVtYmVyIG9mIGFjdGl2ZSB1bmlmb3JtcyBmb3IgdGhpcyBkcmF3IGNhbGwuXG4gICAgQHByb3Age0FycmF5fSB0ZXh0dXJlcyBBcnJheSBvZiBhY3RpdmUgdGV4dHVyZXMuXG4gICAgQHByb3Age251bWJlcn0gdGV4dHVyZUNvdW50IFRoZSBudW1iZXIgb2YgYWN0aXZlIHRleHR1cmVzIGZvciB0aGlzIGRyYXcgY2FsbC5cbiAgICBAcHJvcCB7R0xFbnVtfSBwcmltaXRpdmUgVGhlIHByaW1pdGl2ZSB0eXBlIGJlaW5nIGRyYXduLlxuICAgIEBwcm9wIHtPYmplY3R9IGFwcFN0YXRlIFRyYWNrZWQgR0wgc3RhdGUuXG4gICAgQHByb3Age0dMc2l6ZWl9IG51bUVsZW1lbnRzIFRoZSBudW1iZXIgb2YgZWxlbWVudCB0byBkcmF3LlxuICAgIEBwcm9wIHtHTHNpemVpfSBudW1JbnN0YW5jZXMgVGhlIG51bWJlciBvZiBpbnN0YW5jZXMgdG8gZHJhdy5cbiovXG5jbGFzcyBEcmF3Q2FsbCB7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCwgYXBwU3RhdGUsIHByb2dyYW0sIHZlcnRleEFycmF5LCBwcmltaXRpdmUgPSBDT05TVEFOVFMuVFJJQU5HTEVTKSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMuY3VycmVudFZlcnRleEFycmF5ID0gdmVydGV4QXJyYXk7XG4gICAgICAgIHRoaXMuY3VycmVudFRyYW5zZm9ybUZlZWRiYWNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZSA9IGFwcFN0YXRlO1xuXG4gICAgICAgIHRoaXMudW5pZm9ybUluZGljZXMgPSB7fTtcbiAgICAgICAgdGhpcy51bmlmb3JtTmFtZXMgPSBuZXcgQXJyYXkoQ09OU1RBTlRTLldFQkdMX0lORk8uTUFYX1VOSUZPUk1TKTtcbiAgICAgICAgdGhpcy51bmlmb3JtVmFsdWVzID0gbmV3IEFycmF5KENPTlNUQU5UUy5XRUJHTF9JTkZPLk1BWF9VTklGT1JNUyk7XG4gICAgICAgIHRoaXMudW5pZm9ybUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy51bmlmb3JtQnVmZmVycyA9IG5ldyBBcnJheShDT05TVEFOVFMuV0VCR0xfSU5GTy5NQVhfVU5JRk9STV9CVUZGRVJTKTtcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2tOYW1lcyA9IG5ldyBBcnJheShDT05TVEFOVFMuV0VCR0xfSU5GTy5NQVhfVU5JRk9STV9CVUZGRVJTKTtcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2tCYXNlcyA9IHt9O1xuICAgICAgICB0aGlzLnVuaWZvcm1CbG9ja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5zYW1wbGVySW5kaWNlcyA9IHt9O1xuICAgICAgICB0aGlzLnRleHR1cmVzID0gbmV3IEFycmF5KENPTlNUQU5UUy5XRUJHTF9JTkZPLk1BWF9URVhUVVJFX1VOSVRTKTtcbiAgICAgICAgdGhpcy50ZXh0dXJlQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcblxuICAgICAgICB0aGlzLm51bUVsZW1lbnRzID0gdGhpcy5jdXJyZW50VmVydGV4QXJyYXkubnVtRWxlbWVudHM7XG4gICAgICAgIHRoaXMubnVtSW5zdGFuY2VzID0gdGhpcy5jdXJyZW50VmVydGV4QXJyYXkubnVtSW5zdGFuY2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIGN1cnJlbnQgVHJhbnNmb3JtRmVlZGJhY2sgb2JqZWN0IGZvciBkcmF3XG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge1RyYW5zZm9ybUZlZWRiYWNrfSB0cmFuc2Zvcm1GZWVkYmFjayBUcmFuc2Zvcm0gRmVlZGJhY2sgdG8gc2V0LlxuICAgICAgICBAcmV0dXJuIHtEcmF3Q2FsbH0gVGhlIERyYXdDYWxsIG9iamVjdC5cbiAgICAqL1xuICAgIHRyYW5zZm9ybUZlZWRiYWNrKHRyYW5zZm9ybUZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRyYW5zZm9ybUZlZWRiYWNrID0gdHJhbnNmb3JtRmVlZGJhY2s7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCB0aGUgdmFsdWUgZm9yIGEgdW5pZm9ybS4gQXJyYXkgdW5pZm9ybXMgYXJlIHN1cHBvcnRlZCBieVxuICAgICAgICB1c2luZyBhcHBlbmRpbmcgXCJbMF1cIiB0byB0aGUgYXJyYXkgbmFtZSBhbmQgcGFzc2luZyBhIGZsYXQgYXJyYXlcbiAgICAgICAgd2l0aCBhbGwgcmVxdWlyZWQgdmFsdWVzLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgVW5pZm9ybSBuYW1lLlxuICAgICAgICBAcGFyYW0ge2FueX0gdmFsdWUgVW5pZm9ybSB2YWx1ZS5cbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICB1bmlmb3JtKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudW5pZm9ybUluZGljZXNbbmFtZV07XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IHRoaXMudW5pZm9ybUNvdW50Kys7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1JbmRpY2VzW25hbWVdID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1OYW1lc1tpbmRleF0gPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5pZm9ybVZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRleHR1cmUgdG8gYmluZCB0byBhIHNhbXBsZXIgdW5pZm9ybS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFNhbXBsZXIgdW5pZm9ybSBuYW1lLlxuICAgICAgICBAcGFyYW0ge1RleHR1cmV8Q3ViZW1hcH0gdGV4dHVyZSBUZXh0dXJlIG9yIEN1YmVtYXAgdG8gYmluZC5cbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICB0ZXh0dXJlKG5hbWUsIHRleHR1cmUpIHtcbiAgICAgICAgbGV0IHVuaXQgPSB0aGlzLmN1cnJlbnRQcm9ncmFtLnNhbXBsZXJzW25hbWVdO1xuICAgICAgICB0aGlzLnRleHR1cmVzW3VuaXRdID0gdGV4dHVyZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHVuaWZvcm0gYnVmZmVyIHRvIGJpbmQgdG8gYSB1bmlmb3JtIGJsb2NrLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgVW5pZm9ybSBibG9jayBuYW1lLlxuICAgICAgICBAcGFyYW0ge1VuaWZvcm1CdWZmZXJ9IGJ1ZmZlciBVbmlmb3JtIGJ1ZmZlciB0byBiaW5kLlxuICAgICAgICBAcmV0dXJuIHtEcmF3Q2FsbH0gVGhlIERyYXdDYWxsIG9iamVjdC5cbiAgICAqL1xuICAgIHVuaWZvcm1CbG9jayhuYW1lLCBidWZmZXIpIHtcbiAgICAgICAgbGV0IGJhc2UgPSB0aGlzLmN1cnJlbnRQcm9ncmFtLnVuaWZvcm1CbG9ja3NbbmFtZV07XG4gICAgICAgIHRoaXMudW5pZm9ybUJ1ZmZlcnNbYmFzZV0gPSBidWZmZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCBudW1FbGVtZW50cyBwcm9wZXJ0eSB0byBhbGxvdyBudW1iZXIgb2YgZWxlbWVudHMgdG8gYmUgZHJhd25cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xzaXplaX0gW2NvdW50PTBdIE51bWJlciBvZiBlbGVtZW50IHRvIGRyYXcsIDAgc2V0IHRvIGFsbC5cbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICBlbGVtZW50Q291bnQoY291bnQgPSAwKSB7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubnVtRWxlbWVudHMgPSBNYXRoLm1pbihjb3VudCwgdGhpcy5jdXJyZW50VmVydGV4QXJyYXkubnVtRWxlbWVudHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW1FbGVtZW50cyA9IHRoaXMuY3VycmVudFZlcnRleEFycmF5Lm51bUVsZW1lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCBudW1JbnN0YW5jZXMgcHJvcGVydHkgdG8gYWxsb3cgbnVtYmVyIG9mIGluc3RhbmNlcyBiZSBkcmF3blxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTHNpemVpfSBbY291bnQ9MF0gTnVtYmVyIG9mIGluc3RhbmNlIHRvIGRyYXcsIDAgc2V0IHRvIGFsbC5cbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICBpbnN0YW5jZUNvdW50KGNvdW50ID0gMCkge1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bUluc3RhbmNlcyA9IE1hdGgubWluKGNvdW50LCB0aGlzLmN1cnJlbnRWZXJ0ZXhBcnJheS5udW1JbnN0YW5jZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW1JbnN0YW5jZXMgPSB0aGlzLmN1cnJlbnRWZXJ0ZXhBcnJheS5udW1JbnN0YW5jZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRHJhdyBiYXNlZCBvbiBjdXJyZW50IHN0YXRlLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgdW5pZm9ybU5hbWVzID0gdGhpcy51bmlmb3JtTmFtZXM7XG4gICAgICAgIGxldCB1bmlmb3JtVmFsdWVzID0gdGhpcy51bmlmb3JtVmFsdWVzO1xuICAgICAgICBsZXQgdW5pZm9ybUJ1ZmZlcnMgPSB0aGlzLnVuaWZvcm1CdWZmZXJzO1xuICAgICAgICBsZXQgdW5pZm9ybUJsb2NrQ291bnQgPSB0aGlzLmN1cnJlbnRQcm9ncmFtLnVuaWZvcm1CbG9ja0NvdW50O1xuICAgICAgICBsZXQgdGV4dHVyZXMgPSB0aGlzLnRleHR1cmVzO1xuICAgICAgICBsZXQgdGV4dHVyZUNvdW50ID0gdGhpcy5jdXJyZW50UHJvZ3JhbS5zYW1wbGVyQ291bnQ7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3JhbS5iaW5kKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFZlcnRleEFycmF5LmJpbmQoKTtcblxuICAgICAgICBmb3IgKGxldCB1SW5kZXggPSAwOyB1SW5kZXggPCB0aGlzLnVuaWZvcm1Db3VudDsgKyt1SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2dyYW0udW5pZm9ybSh1bmlmb3JtTmFtZXNbdUluZGV4XSwgdW5pZm9ybVZhbHVlc1t1SW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGJhc2UgPSAwOyBiYXNlIDwgdW5pZm9ybUJsb2NrQ291bnQ7ICsrYmFzZSkge1xuICAgICAgICAgICAgdW5pZm9ybUJ1ZmZlcnNbYmFzZV0uYmluZChiYXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHRJbmRleCA9IDA7IHRJbmRleCA8IHRleHR1cmVDb3VudDsgKyt0SW5kZXgpIHtcbiAgICAgICAgICAgIHRleHR1cmVzW3RJbmRleF0uYmluZCh0SW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyYW5zZm9ybUZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2Zvcm1GZWVkYmFjay5iaW5kKCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJlZ2luVHJhbnNmb3JtRmVlZGJhY2sodGhpcy5wcmltaXRpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZlcnRleEFycmF5Lmluc3RhbmNlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFZlcnRleEFycmF5LmluZGV4ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRyYXdFbGVtZW50c0luc3RhbmNlZCh0aGlzLnByaW1pdGl2ZSwgdGhpcy5udW1FbGVtZW50cywgdGhpcy5jdXJyZW50VmVydGV4QXJyYXkuaW5kZXhUeXBlLCAwLCB0aGlzLm51bUluc3RhbmNlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLnByaW1pdGl2ZSwgMCwgdGhpcy5udW1FbGVtZW50cywgdGhpcy5udW1JbnN0YW5jZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFZlcnRleEFycmF5LmluZGV4ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKHRoaXMucHJpbWl0aXZlLCB0aGlzLm51bUVsZW1lbnRzLCB0aGlzLmN1cnJlbnRWZXJ0ZXhBcnJheS5pbmRleFR5cGUsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKHRoaXMucHJpbWl0aXZlLCAwLCB0aGlzLm51bUVsZW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFuc2Zvcm1GZWVkYmFjaykge1xuICAgICAgICAgICAgdGhpcy5nbC5lbmRUcmFuc2Zvcm1GZWVkYmFjaygpO1xuICAgICAgICAgICAgLy8gVE9ETyhUYXJlayk6IE5lZWQgdG8gcmViaW5kIGJ1ZmZlcnMgZHVlIHRvIGJ1ZyBpbiBBTkdMRS5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGlzIHdoZW4gdGhhdCdzIGZpeGVkLlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuY3VycmVudFRyYW5zZm9ybUZlZWRiYWNrLmFuZ2xlQnVnQnVmZmVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlckJhc2UodGhpcy5nbC5UUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSLCBpLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERyYXdDYWxsO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4vKipcbiAgICBTdG9yYWdlIGZvciB2ZXJ0ZXggZGF0YS5cblxuICAgIEBjbGFzc1xuICAgIEBwcm9wIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0LlxuICAgIEBwcm9wIHtXZWJHTEZyYW1lYnVmZmVyfSBmcmFtZWJ1ZmZlciBIYW5kbGUgdG8gdGhlIGZyYW1lYnVmZmVyLlxuICAgIEBwcm9wIHtBcnJheX0gY29sb3JUZXh0dXJlcyBBcnJheSBvZiBjb2xvciB0ZXh0dXJlIHRhcmdldHMuXG4gICAgQHByb3Age251bWJlcn0gbnVtQ29sb3JUYXJnZXRzIE51bWJlciBvZiBjb2xvciB0ZXh0dXJlIHRhcmdldHMuXG4gICAgQHByb3Age1RleHR1cmV9IGRlcHRoVGV4dHVyZSBEZXB0aCB0ZXh0dXJlIHRhcmdldC5cbiAgICBAcHJvcCB7QXJyYXl9IGNvbG9yQXR0YWNobWVudHMgQXJyYXkgb2YgY29sb3IgYXR0YWNobWVudCBlbnVtcy5cbiAgICBAcHJvcCB7T2JqZWN0fSBhcHBTdGF0ZSBUcmFja2VkIEdMIHN0YXRlLlxuKi9cbmNsYXNzIEZyYW1lYnVmZmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsLCBhcHBTdGF0ZSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuZnJhbWVidWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgICAgICB0aGlzLmFwcFN0YXRlID0gYXBwU3RhdGU7XG5cbiAgICAgICAgdGhpcy5udW1Db2xvclRhcmdldHMgPSAwO1xuXG4gICAgICAgIHRoaXMuY29sb3JUZXh0dXJlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbG9yQXR0YWNobWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xvclRleHR1cmVUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMuZGVwdGhUZXh0dXJlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXB0aFRleHR1cmVUYXJnZXQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBBdHRhY2ggYSBjb2xvciB0YXJnZXQgdG8gdGhpcyBmcmFtZWJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBDb2xvciBhdHRhY2htZW50IGluZGV4LlxuICAgICAgICBAcGFyYW0ge1RleHR1cmV8Q3ViZW1hcH0gdGV4dHVyZSBUaGUgdGV4dHVyZSBvciBjdWJlbWFwIHRvIGF0dGFjaC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFt0YXJnZXRdIFRoZSB0ZXh0dXJlIHRhcmdldCBvciBsYXllciB0byBhdHRhY2guIElmIHRoZSB0ZXh0dXJlIGlzIDNEIG9yIGEgdGV4dHVyZSBhcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHRzIHRvIDAsIG90aGVyd2lzZSB0byBURVhUVVJFXzJELlxuICAgICAgICBAcmV0dXJuIHtGcmFtZWJ1ZmZlcn0gVGhlIEZyYW1lYnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGNvbG9yVGFyZ2V0KGluZGV4LCB0ZXh0dXJlLCB0YXJnZXQgPSB0ZXh0dXJlLmlzM0QgPyAwIDogQ09OU1RBTlRTLlRFWFRVUkVfMkQpIHtcblxuICAgICAgICB0aGlzLmNvbG9yQXR0YWNobWVudHNbaW5kZXhdID0gQ09OU1RBTlRTLkNPTE9SX0FUVEFDSE1FTlQwICsgaW5kZXg7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRGcmFtZWJ1ZmZlciA9IHRoaXMuYmluZEFuZENhcHR1cmVTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuY29sb3JUZXh0dXJlc1tpbmRleF0gPSB0ZXh0dXJlO1xuICAgICAgICB0aGlzLmNvbG9yVGV4dHVyZVRhcmdldHNbaW5kZXhdID0gdGFyZ2V0O1xuXG4gICAgICAgIGlmICh0ZXh0dXJlLmlzM0QpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZnJhbWVidWZmZXJUZXh0dXJlTGF5ZXIodGhpcy5nbC5EUkFXX0ZSQU1FQlVGRkVSLCB0aGlzLmNvbG9yQXR0YWNobWVudHNbaW5kZXhdLCB0ZXh0dXJlLnRleHR1cmUsIDAsIHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRoaXMuZ2wuRFJBV19GUkFNRUJVRkZFUiwgdGhpcy5jb2xvckF0dGFjaG1lbnRzW2luZGV4XSwgdGFyZ2V0LCB0ZXh0dXJlLnRleHR1cmUsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbC5kcmF3QnVmZmVycyh0aGlzLmNvbG9yQXR0YWNobWVudHMpO1xuICAgICAgICB0aGlzLm51bUNvbG9yVGFyZ2V0cysrO1xuXG4gICAgICAgIHRoaXMucmVzdG9yZVN0YXRlKGN1cnJlbnRGcmFtZWJ1ZmZlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEF0dGFjaCBhIGRlcHRoIHRhcmdldCB0byB0aGlzIGZyYW1lYnVmZmVyLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtUZXh0dXJlfEN1YmVtYXB9IHRleHR1cmUgVGhlIHRleHR1cmUgb3IgY3ViZW1hcCB0byBhdHRhY2guXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbdGFyZ2V0XSBUaGUgdGV4dHVyZSB0YXJnZXQgb3IgbGF5ZXIgdG8gYXR0YWNoLiBJZiB0aGUgdGV4dHVyZSBpcyAzRCBvciBhIHRleHR1cmUgYXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0cyB0byAwLCBvdGhlcndpc2UgdG8gVEVYVFVSRV8yRC5cbiAgICAgICAgQHJldHVybiB7RnJhbWVidWZmZXJ9IFRoZSBGcmFtZWJ1ZmZlciBvYmplY3QuXG4gICAgKi9cbiAgICBkZXB0aFRhcmdldCh0ZXh0dXJlLCB0YXJnZXQgPSB0ZXh0dXJlLmlzM0QgPyAwIDogQ09OU1RBTlRTLlRFWFRVUkVfMkQpIHtcblxuICAgICAgICBsZXQgY3VycmVudEZyYW1lYnVmZmVyID0gdGhpcy5iaW5kQW5kQ2FwdHVyZVN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5kZXB0aFRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgICB0aGlzLmRlcHRoVGV4dHVyZVRhcmdldCA9IHRhcmdldDtcblxuICAgICAgICBpZiAodGV4dHVyZS5pczNEKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZUxheWVyKHRoaXMuZ2wuRFJBV19GUkFNRUJVRkZFUiwgQ09OU1RBTlRTLkRFUFRIX0FUVEFDSE1FTlQsIHRleHR1cmUudGV4dHVyZSwgMCwgdGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQodGhpcy5nbC5EUkFXX0ZSQU1FQlVGRkVSLCBDT05TVEFOVFMuREVQVEhfQVRUQUNITUVOVCwgdGFyZ2V0LCB0ZXh0dXJlLnRleHR1cmUsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN0b3JlU3RhdGUoY3VycmVudEZyYW1lYnVmZmVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgUmVzaXplIGFsbCBjdXJyZW50bHkgYXR0YWNoZWQgdGV4dHVyZXMuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge251bWJlcn0gW3dpZHRoPWFwcC53aWR0aF0gTmV3IHdpZHRoIG9mIHRoZSBmcmFtZWJ1ZmZlci5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IFtoZWlnaHQ9YXBwLmhlaWdodF0gTmV3IGhlaWdodCBvZiB0aGUgZnJhbWVidWZmZXIuXG4gICAgICAgIEByZXR1cm4ge0ZyYW1lYnVmZmVyfSBUaGUgRnJhbWVidWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgcmVzaXplKHdpZHRoID0gdGhpcy5nbC5kcmF3aW5nQnVmZmVyV2lkdGgsIGhlaWdodCA9IHRoaXMuZ2wuZHJhd2luZ0J1ZmZlckhlaWdodCwgZGVwdGgpIHtcblxuICAgICAgICBsZXQgY3VycmVudEZyYW1lYnVmZmVyID0gdGhpcy5iaW5kQW5kQ2FwdHVyZVN0YXRlKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUNvbG9yVGFyZ2V0czsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdGV4dHVyZSA9IHRoaXMuY29sb3JUZXh0dXJlc1tpXTtcbiAgICAgICAgICAgIHRleHR1cmUucmVzaXplKHdpZHRoLCBoZWlnaHQsIGRlcHRoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlLmlzM0QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZUxheWVyKHRoaXMuZ2wuRFJBV19GUkFNRUJVRkZFUiwgdGhpcy5jb2xvckF0dGFjaG1lbnRzW2ldLCB0ZXh0dXJlLnRleHR1cmUsIDAsIHRoaXMuY29sb3JUZXh0dXJlVGFyZ2V0c1tpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQodGhpcy5nbC5EUkFXX0ZSQU1FQlVGRkVSLCB0aGlzLmNvbG9yQXR0YWNobWVudHNbaV0sIHRoaXMuY29sb3JUZXh0dXJlVGFyZ2V0c1tpXSwgdGV4dHVyZS50ZXh0dXJlLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRlcHRoVGV4dHVyZSkge1xuICAgICAgICAgICAgdGhpcy5kZXB0aFRleHR1cmUucmVzaXplKHdpZHRoLCBoZWlnaHQsIGRlcHRoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRlcHRoVGV4dHVyZS5pczNEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5mcmFtZWJ1ZmZlclRleHR1cmVMYXllcih0aGlzLmdsLkRSQVdfRlJBTUVCVUZGRVIsIENPTlNUQU5UUy5ERVBUSF9BVFRBQ0hNRU5ULCB0aGlzLmRlcHRoVGV4dHVyZS50ZXh0dXJlLCAwLCB0aGlzLmRlcHRoVGV4dHVyZVRhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQodGhpcy5nbC5EUkFXX0ZSQU1FQlVGRkVSLCBDT05TVEFOVFMuREVQVEhfQVRUQUNITUVOVCwgdGhpcy5kZXB0aFRleHR1cmVUYXJnZXQsIHRoaXMuZGVwdGhUZXh0dXJlLnRleHR1cmUsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN0b3JlU3RhdGUoY3VycmVudEZyYW1lYnVmZmVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRGVsZXRlIHRoaXMgZnJhbWVidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtGcmFtZWJ1ZmZlcn0gVGhlIEZyYW1lYnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVidWZmZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlRnJhbWVidWZmZXIodGhpcy5mcmFtZWJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmZyYW1lYnVmZmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBHZXQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoaXMgZnJhbWVidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtHTEVudW19IFRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGlzIGZyYW1lYnVmZmVyLlxuICAgICovXG4gICAgZ2V0U3RhdHVzKCkge1xuICAgICAgICBsZXQgY3VycmVudEZyYW1lYnVmZmVyID0gdGhpcy5iaW5kQW5kQ2FwdHVyZVN0YXRlKCk7XG4gICAgICAgIGxldCBzdGF0dXMgPSB0aGlzLmdsLmNoZWNrRnJhbWVidWZmZXJTdGF0dXModGhpcy5nbC5EUkFXX0ZSQU1FQlVGRkVSKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlU3RhdGUoY3VycmVudEZyYW1lYnVmZmVyKTtcblxuICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGFzIHRoZSBkcmF3IGZyYW1lYnVmZmVyXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAaWdub3JlXG4gICAgICAgIEByZXR1cm4ge0ZyYW1lYnVmZmVyfSBUaGUgRnJhbWVidWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgYmluZEZvckRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcFN0YXRlLmRyYXdGcmFtZWJ1ZmZlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5EUkFXX0ZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lYnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUuZHJhd0ZyYW1lYnVmZmVyID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGFzIHRoZSByZWFkIGZyYW1lYnVmZmVyXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAaWdub3JlXG4gICAgICAgIEByZXR1cm4ge0ZyYW1lYnVmZmVyfSBUaGUgRnJhbWVidWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgYmluZEZvclJlYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcFN0YXRlLnJlYWRGcmFtZWJ1ZmZlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5SRUFEX0ZSQU1FQlVGRkVSLCB0aGlzLmZyYW1lYnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUucmVhZEZyYW1lYnVmZmVyID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGZvciBhIGZyYW1lYnVmZmVyIHN0YXRlIHVwZGF0ZS5cbiAgICAgICAgQ2FwdHVyZSBjdXJyZW50IGJpbmRpbmcgc28gd2UgY2FuIHJlc3RvcmUgaXQgbGF0ZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAaWdub3JlXG4gICAgICAgIEByZXR1cm4ge0ZyYW1lYnVmZmVyfSBUaGUgRnJhbWVidWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgYmluZEFuZENhcHR1cmVTdGF0ZSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRGcmFtZWJ1ZmZlciA9IHRoaXMuYXBwU3RhdGUuZHJhd0ZyYW1lYnVmZmVyO1xuXG4gICAgICAgIGlmIChjdXJyZW50RnJhbWVidWZmZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRFJBV19GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZWJ1ZmZlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudEZyYW1lYnVmZmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIHJlc3RvcmUgcHJldmlvdXMgYmluZGluZyBhZnRlciBzdGF0ZSB1cGRhdGVcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBpZ25vcmVcbiAgICAgICAgQHJldHVybiB7RnJhbWVidWZmZXJ9IFRoZSBGcmFtZWJ1ZmZlciBvYmplY3QuXG4gICAgKi9cbiAgICByZXN0b3JlU3RhdGUoZnJhbWVidWZmZXIpIHtcbiAgICAgICAgaWYgKGZyYW1lYnVmZmVyICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkRSQVdfRlJBTUVCVUZGRVIsIGZyYW1lYnVmZmVyID8gZnJhbWVidWZmZXIuZnJhbWVidWZmZXIgOiBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyYW1lYnVmZmVyO1xuXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGFyZWsgU2hlcmlmXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbmNvbnN0IENPTlNUQU5UUyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5jb25zdCBTaGFkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuY29uc3QgVW5pZm9ybXMgPSAgX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cbmNvbnN0IFNpbmdsZUNvbXBvbmVudFVuaWZvcm0gPSBVbmlmb3Jtcy5TaW5nbGVDb21wb25lbnRVbmlmb3JtO1xuY29uc3QgTXVsdGlOdW1lcmljVW5pZm9ybSA9IFVuaWZvcm1zLk11bHRpTnVtZXJpY1VuaWZvcm07XG5jb25zdCBNdWx0aUJvb2xVbmlmb3JtID0gVW5pZm9ybXMuTXVsdGlCb29sVW5pZm9ybTtcbmNvbnN0IE1hdHJpeFVuaWZvcm0gPSBVbmlmb3Jtcy5NYXRyaXhVbmlmb3JtO1xuXG4vKipcbiAgICBXZWJHTCBwcm9ncmFtIGNvbnNpc3Rpbmcgb2YgY29tcGlsZWQgYW5kIGxpbmtlZCB2ZXJ0ZXggYW5kIGZyYWdtZW50XG4gICAgc2hhZGVycy5cblxuICAgIEBjbGFzc1xuICAgIEBwcm9wIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0LlxuICAgIEBwcm9wIHtXZWJHTFByb2dyYW19IHByb2dyYW0gVGhlIFdlYkdMIHByb2dyYW0uXG4gICAgQHByb3Age2Jvb2xlYW59IHRyYW5zZm9ybUZlZWRiYWNrIFdoZXRoZXIgdGhpcyBwcm9ncmFtIGlzIHNldCB1cCBmb3IgdHJhbnNmb3JtIGZlZWRiYWNrLlxuICAgIEBwcm9wIHtPYmplY3R9IHVuaWZvcm1zIE1hcCBvZiB1bmlmb3JtIG5hbWVzIHRvIGhhbmRsZXMuXG4gICAgQHByb3Age09iamVjdH0gYXBwU3RhdGUgVHJhY2tlZCBHTCBzdGF0ZS5cbiovXG5jbGFzcyBQcm9ncmFtIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsLCBhcHBTdGF0ZSwgdnNTb3VyY2UsIGZzU291cmNlLCB4Zm9ybUZlZWJhY2tWYXJzKSB7XG4gICAgICAgIGxldCBpO1xuXG4gICAgICAgIGxldCB2U2hhZGVyLCBmU2hhZGVyO1xuXG4gICAgICAgIGxldCBvd25WZXJ0ZXhTaGFkZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IG93bkZyYWdtZW50U2hhZGVyID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgdnNTb3VyY2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHZTaGFkZXIgPSBuZXcgU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2c1NvdXJjZSk7XG4gICAgICAgICAgICBvd25WZXJ0ZXhTaGFkZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdlNoYWRlciA9IHZzU291cmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBmc1NvdXJjZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZlNoYWRlciA9IG5ldyBTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnNTb3VyY2UpO1xuICAgICAgICAgICAgb3duRnJhZ21lbnRTaGFkZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZlNoYWRlciA9IGZzU291cmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2U2hhZGVyLnNoYWRlcik7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmU2hhZGVyLnNoYWRlcik7XG4gICAgICAgIGlmICh4Zm9ybUZlZWJhY2tWYXJzKSB7XG4gICAgICAgICAgICBnbC50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzKHByb2dyYW0sIHhmb3JtRmVlYmFja1ZhcnMsIGdsLlNFUEFSQVRFX0FUVFJJQlMpO1xuICAgICAgICB9XG4gICAgICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG93blZlcnRleFNoYWRlcikge1xuICAgICAgICAgICAgdlNoYWRlci5kZWxldGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvd25GcmFnbWVudFNoYWRlcikge1xuICAgICAgICAgICAgZlNoYWRlci5kZWxldGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZSA9IGFwcFN0YXRlO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUZlZWRiYWNrID0gISF4Zm9ybUZlZWJhY2tWYXJzO1xuICAgICAgICB0aGlzLnVuaWZvcm1zID0ge307XG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrcyA9IHt9O1xuICAgICAgICB0aGlzLnVuaWZvcm1CbG9ja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5zYW1wbGVycyA9IHt9O1xuICAgICAgICB0aGlzLnNhbXBsZXJDb3VudCA9IDA7XG5cbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgICAgICBsZXQgbnVtVW5pZm9ybXMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUyk7XG4gICAgICAgIGxldCB0ZXh0dXJlVW5pdDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVW5pZm9ybXM7ICsraSkge1xuICAgICAgICAgICAgbGV0IHVuaWZvcm1JbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpKTtcbiAgICAgICAgICAgIGxldCB1bmlmb3JtSGFuZGxlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMucHJvZ3JhbSwgdW5pZm9ybUluZm8ubmFtZSk7XG4gICAgICAgICAgICBsZXQgVW5pZm9ybUNsYXNzID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB0eXBlID0gdW5pZm9ybUluZm8udHlwZTtcbiAgICAgICAgICAgIGxldCBudW1FbGVtZW50cyA9IHVuaWZvcm1JbmZvLnNpemU7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLlNBTVBMRVJfMkQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UX1NBTVBMRVJfMkQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfMkQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuU0FNUExFUl8yRF9TSEFET1c6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuU0FNUExFUl8yRF9BUlJBWTpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5JTlRfU0FNUExFUl8yRF9BUlJBWTpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl8yRF9BUlJBWTpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5TQU1QTEVSXzJEX0FSUkFZX1NIQURPVzpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5TQU1QTEVSX0NVQkU6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UX1NBTVBMRVJfQ1VCRTpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl9DVUJFOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLlNBTVBMRVJfQ1VCRV9TSEFET1c6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuU0FNUExFUl8zRDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5JTlRfU0FNUExFUl8zRDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl8zRDpcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZVVuaXQgPSB0aGlzLnNhbXBsZXJDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZXJzW3VuaWZvcm1JbmZvLm5hbWVdID0gdGV4dHVyZVVuaXQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHVuaWZvcm1IYW5kbGUsIHRleHR1cmVVbml0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLlVOU0lHTkVEX0lOVDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVDpcbiAgICAgICAgICAgICAgICAgICAgVW5pZm9ybUNsYXNzID0gbnVtRWxlbWVudHMgPiAxID8gTXVsdGlOdW1lcmljVW5pZm9ybSA6IFNpbmdsZUNvbXBvbmVudFVuaWZvcm07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkJPT0w6XG4gICAgICAgICAgICAgICAgICAgIFVuaWZvcm1DbGFzcyA9IG51bUVsZW1lbnRzID4gMSA/IE11bHRpQm9vbFVuaWZvcm0gOiBTaW5nbGVDb21wb25lbnRVbmlmb3JtO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9WRUMyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLklOVF9WRUMyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUMyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX1ZFQzM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UX1ZFQzM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfVkVDNDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5JTlRfVkVDNDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDNDpcbiAgICAgICAgICAgICAgICAgICAgVW5pZm9ybUNsYXNzID0gTXVsdGlOdW1lcmljVW5pZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuQk9PTF9WRUMyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkJPT0xfVkVDMzpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5CT09MX1ZFQzQ6XG4gICAgICAgICAgICAgICAgICAgIFVuaWZvcm1DbGFzcyA9IE11bHRpQm9vbFVuaWZvcm07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDI6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUMzpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDJ4MzpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyeDQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUM3gyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDN4NDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQ0eDI6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNHgzOlxuICAgICAgICAgICAgICAgICAgICBVbmlmb3JtQ2xhc3MgPSBNYXRyaXhVbmlmb3JtO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5yZWNvZ25pemVkIHR5cGUgZm9yIHVuaWZvcm0gXCIsIHVuaWZvcm1JbmZvLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFVuaWZvcm1DbGFzcykge1xuICAgICAgICAgICAgICAgIHRoaXMudW5pZm9ybXNbdW5pZm9ybUluZm8ubmFtZV0gPSBuZXcgVW5pZm9ybUNsYXNzKGdsLCB1bmlmb3JtSGFuZGxlLCB0eXBlLCBudW1FbGVtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbnVtVW5pZm9ybUJsb2NrcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1fQkxPQ0tTKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVW5pZm9ybUJsb2NrczsgKytpKSB7XG4gICAgICAgICAgICBsZXQgYmxvY2tOYW1lID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybUJsb2NrTmFtZSh0aGlzLnByb2dyYW0sIGkpO1xuICAgICAgICAgICAgbGV0IGJsb2NrSW5kZXggPSBnbC5nZXRVbmlmb3JtQmxvY2tJbmRleCh0aGlzLnByb2dyYW0sIGJsb2NrTmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB1bmlmb3JtQmxvY2tCYXNlID0gdGhpcy51bmlmb3JtQmxvY2tDb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5nbC51bmlmb3JtQmxvY2tCaW5kaW5nKHRoaXMucHJvZ3JhbSwgYmxvY2tJbmRleCwgdW5pZm9ybUJsb2NrQmFzZSk7XG4gICAgICAgICAgICB0aGlzLnVuaWZvcm1CbG9ja3NbYmxvY2tOYW1lXSA9IHVuaWZvcm1CbG9ja0Jhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBnbC51c2VQcm9ncmFtKG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEZWxldGUgdGhpcyBwcm9ncmFtLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7UHJvZ3JhbX0gVGhlIFByb2dyYW0gb2JqZWN0LlxuICAgICovXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9ncmFtKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICAgIFNldCB0aGUgdmFsdWUgb2YgYSB1bmlmb3JtLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQGlnbm9yZVxuICAgICAgICBAcmV0dXJuIHtQcm9ncmFtfSBUaGUgUHJvZ3JhbSBvYmplY3QuXG4gICAgKi9cbiAgICB1bmlmb3JtKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybXNbbmFtZV0uc2V0KHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBcbiAgICAvKipcbiAgICAgICAgVXNlIHRoaXMgcHJvZ3JhbS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBpZ25vcmVcbiAgICAgICAgQHJldHVybiB7UHJvZ3JhbX0gVGhlIFByb2dyYW0gb2JqZWN0LlxuICAgICovXG4gICAgYmluZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwU3RhdGUucHJvZ3JhbSAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnByb2dyYW0gPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2dyYW07XG5cblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGFyZWsgU2hlcmlmXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbmNvbnN0IENPTlNUQU5UUyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbi8vIENsYXNzZXMgdG8gbWFuYWdlIHVuaWZvcm0gdmFsdWUgdXBkYXRlcywgaW5jbHVkaW5nXG4vLyBjYWNoaW5nIGN1cnJlbnQgdmFsdWVzLlxuXG5jb25zdCBVTklGT1JNX0ZVTkNfTkFNRSA9IHt9O1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkJPT0xdID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5JTlRdID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5TQU1QTEVSXzJEXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuSU5UX1NBTVBMRVJfMkRdID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl8yRF0gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlNBTVBMRVJfMkRfU0hBRE9XXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuU0FNUExFUl8yRF9BUlJBWV0gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLklOVF9TQU1QTEVSXzJEX0FSUkFZXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfMkRfQVJSQVldID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5TQU1QTEVSXzJEX0FSUkFZX1NIQURPV10gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlNBTVBMRVJfQ1VCRV0gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLklOVF9TQU1QTEVSX0NVQkVdID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl9DVUJFXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuU0FNUExFUl9DVUJFX1NIQURPV10gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlNBTVBMRVJfM0RdID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5JTlRfU0FNUExFUl8zRF0gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9TQU1QTEVSXzNEXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuVU5TSUdORURfSU5UXSA9IFwidW5pZm9ybTF1aVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUXSA9IFwidW5pZm9ybTFmXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfVkVDMl0gPSBcInVuaWZvcm0yZlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX1ZFQzNdID0gXCJ1bmlmb3JtM2ZcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5GTE9BVF9WRUM0XSA9IFwidW5pZm9ybTRmXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuSU5UX1ZFQzJdID0gXCJ1bmlmb3JtMmlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5JTlRfVkVDM10gPSBcInVuaWZvcm0zaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLklOVF9WRUM0XSA9IFwidW5pZm9ybTRpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzJdID0gXCJ1bmlmb3JtMnVpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzNdID0gXCJ1bmlmb3JtM3VpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzRdID0gXCJ1bmlmb3JtNHVpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuQk9PTF9WRUMyXSA9IFwidW5pZm9ybTJpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuQk9PTF9WRUMzXSA9IFwidW5pZm9ybTNpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuQk9PTF9WRUM0XSA9IFwidW5pZm9ybTRpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfTUFUMl0gPSBcInVuaWZvcm1NYXRyaXgyZnZcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5GTE9BVF9NQVQzXSA9IFwidW5pZm9ybU1hdHJpeDNmdlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX01BVDRdID0gXCJ1bmlmb3JtTWF0cml4NGZ2XCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfTUFUMngzXSA9IFwidW5pZm9ybU1hdHJpeDJ4M2Z2XCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfTUFUMng0XSA9IFwidW5pZm9ybU1hdHJpeDJ4NGZ2XCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfTUFUM3gyXSA9IFwidW5pZm9ybU1hdHJpeDN4MmZ2XCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfTUFUM3g0XSA9IFwidW5pZm9ybU1hdHJpeDN4NGZ2XCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfTUFUNHgyXSA9IFwidW5pZm9ybU1hdHJpeDR4MmZ2XCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfTUFUNHgzXSA9IFwidW5pZm9ybU1hdHJpeDR4M2Z2XCI7XG5cbmNvbnN0IFVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UID0ge307XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuQk9PTF0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLklOVF0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlNBTVBMRVJfMkRdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5JTlRfU0FNUExFUl8yRF0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9TQU1QTEVSXzJEXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuU0FNUExFUl8yRF9TSEFET1ddID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5TQU1QTEVSXzJEX0FSUkFZXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuSU5UX1NBTVBMRVJfMkRfQVJSQVldID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl8yRF9BUlJBWV0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlNBTVBMRVJfMkRfQVJSQVlfU0hBRE9XXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuU0FNUExFUl9DVUJFXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuSU5UX1NBTVBMRVJfQ1VCRV0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9TQU1QTEVSX0NVQkVdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5TQU1QTEVSX0NVQkVfU0hBRE9XXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuU0FNUExFUl8zRF0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLklOVF9TQU1QTEVSXzNEXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfM0RdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5GTE9BVF0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkZMT0FUX1ZFQzJdID0gMjtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5GTE9BVF9WRUMzXSA9IDM7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfVkVDNF0gPSA0O1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLklOVF9WRUMyXSA9IDI7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuSU5UX1ZFQzNdID0gMztcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5JTlRfVkVDNF0gPSA0O1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUMyXSA9IDI7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzNdID0gMztcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDNF0gPSA0O1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkJPT0xfVkVDMl0gPSAyO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkJPT0xfVkVDM10gPSAzO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkJPT0xfVkVDNF0gPSA0O1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkZMT0FUX01BVDJdID0gNDtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5GTE9BVF9NQVQzXSA9IDk7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfTUFUNF0gPSAxNjtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5GTE9BVF9NQVQyeDNdID0gNjtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5GTE9BVF9NQVQyeDRdID0gODtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5GTE9BVF9NQVQzeDJdID0gNjtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5GTE9BVF9NQVQzeDRdID0gMTI7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfTUFUNHgyXSA9IDg7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfTUFUNHgzXSA9IDEyO1xuXG5jb25zdCBVTklGT1JNX0NBQ0hFX0NMQVNTID0ge307XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5JTlRdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlNBTVBMRVJfMkRdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLklOVF9TQU1QTEVSXzJEXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl8yRF0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuU0FNUExFUl8yRF9TSEFET1ddID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlNBTVBMRVJfMkRfQVJSQVldID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLklOVF9TQU1QTEVSXzJEX0FSUkFZXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl8yRF9BUlJBWV0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuU0FNUExFUl8yRF9BUlJBWV9TSEFET1ddID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlNBTVBMRVJfQ1VCRV0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuSU5UX1NBTVBMRVJfQ1VCRV0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfQ1VCRV0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuU0FNUExFUl9DVUJFX1NIQURPV10gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuU0FNUExFUl8zRF0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuSU5UX1NBTVBMRVJfM0RdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9TQU1QTEVSXzNEXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRdID0gVWludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5GTE9BVF0gPSBGbG9hdDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5GTE9BVF9WRUMyXSA9IEZsb2F0MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLkZMT0FUX1ZFQzNdID0gRmxvYXQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuRkxPQVRfVkVDNF0gPSBGbG9hdDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5JTlRfVkVDMl0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuSU5UX1ZFQzNdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLklOVF9WRUM0XSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDMl0gPSBVaW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUMzXSA9IFVpbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzRdID0gVWludDMyQXJyYXk7XG5cbmNsYXNzIFNpbmdsZUNvbXBvbmVudFVuaWZvcm0ge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGdsLCBoYW5kbGUsIHR5cGUpIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLmhhbmRsZSA9IGhhbmRsZTtcbiAgICAgICAgdGhpcy5nbEZ1bmNOYW1lID0gVU5JRk9STV9GVU5DX05BTUVbdHlwZV07XG4gICAgICAgIHRoaXMuY2FjaGUgPSB0eXBlID09PSBDT05TVEFOVFMuQk9PTCA/IGZhbHNlIDogMDtcbiAgICB9XG5cbiAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmdsW3RoaXMuZ2xGdW5jTmFtZV0odGhpcy5oYW5kbGUsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5jbGFzcyBNdWx0aU51bWVyaWNVbmlmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsLCBoYW5kbGUsIHR5cGUsIGNvdW50KSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBoYW5kbGU7XG4gICAgICAgIHRoaXMuZ2xGdW5jTmFtZSA9IFVOSUZPUk1fRlVOQ19OQU1FW3R5cGVdICsgXCJ2XCI7XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBVTklGT1JNX0NBQ0hFX0NMQVNTW3R5cGVdKFVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW3R5cGVdICogY291bnQpO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xbdGhpcy5nbEZ1bmNOYW1lXSh0aGlzLmhhbmRsZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgTXVsdGlCb29sVW5pZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCwgaGFuZGxlLCB0eXBlLCBjb3VudCkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuaGFuZGxlID0gaGFuZGxlO1xuICAgICAgICB0aGlzLmdsRnVuY05hbWUgPSBVTklGT1JNX0ZVTkNfTkFNRVt0eXBlXSArIFwidlwiO1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgQXJyYXkoVU5JRk9STV9DT01QT05FTlRfQ09VTlRbdHlwZV0gKiBjb3VudCkuZmlsbChmYWxzZSk7XG4gICAgfVxuXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2FjaGVbaV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbFt0aGlzLmdsRnVuY05hbWVdKHRoaXMuaGFuZGxlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2pdID0gdmFsdWVbal07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5jbGFzcyBNYXRyaXhVbmlmb3JtIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsLCBoYW5kbGUsIHR5cGUsIGNvdW50KSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBoYW5kbGU7XG4gICAgICAgIHRoaXMuZ2xGdW5jTmFtZSA9IFVOSUZPUk1fRlVOQ19OQU1FW3R5cGVdO1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgRmxvYXQzMkFycmF5KFVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW3R5cGVdICogY291bnQpO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xbdGhpcy5nbEZ1bmNOYW1lXSh0aGlzLmhhbmRsZSwgZmFsc2UsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnNldCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzLlNpbmdsZUNvbXBvbmVudFVuaWZvcm0gPSBTaW5nbGVDb21wb25lbnRVbmlmb3JtO1xubW9kdWxlLmV4cG9ydHMuTXVsdGlOdW1lcmljVW5pZm9ybSA9IE11bHRpTnVtZXJpY1VuaWZvcm07XG5tb2R1bGUuZXhwb3J0cy5NdWx0aUJvb2xVbmlmb3JtID0gTXVsdGlCb29sVW5pZm9ybTtcbm1vZHVsZS5leHBvcnRzLk1hdHJpeFVuaWZvcm0gPSBNYXRyaXhVbmlmb3JtO1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuY29uc3QgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5jb25zdCBEVU1NWV9BUlJBWSA9IG5ldyBBcnJheSgxKTtcblxuLyoqXG4gICAgR2VuZXJhbC1wdXJwb3NlIHRleHR1cmUuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7V2ViR0xUZXh0dXJlfSB0ZXh0dXJlIEhhbmRsZSB0byB0aGUgdGV4dHVyZS5cbiAgICBAcHJvcCB7V2ViR0xTYW1sZXJ9IHNhbXBsZXIgU2FtcGxlciBvYmplY3QuXG4gICAgQHByb3Age0dMRW51bX0gYmluZGluZyBCaW5kaW5nIHBvaW50IGZvciB0aGUgdGV4dHVyZS5cbiAgICBAcHJvcCB7R0xFbnVtfSB0eXBlIFR5cGUgb2YgZGF0YSBzdG9yZWQgaW4gdGhlIHRleHR1cmUuXG4gICAgQHByb3Age0dMRW51bX0gZm9ybWF0IExheW91dCBvZiB0ZXh0dXJlIGRhdGEuXG4gICAgQHByb3Age0dMRW51bX0gaW50ZXJuYWxGb3JtYXQgSW50ZXJuYWwgYXJyYW5nZW1lbnQgb2YgdGhlIHRleHR1cmUgZGF0YS5cbiAgICBAcHJvcCB7bnVtYmVyfSBjdXJyZW50VW5pdCBUaGUgY3VycmVudCB0ZXh0dXJlIHVuaXQgdGhpcyB0ZXh0dXJlIGlzIGJvdW5kIHRvLlxuICAgIEBwcm9wIHtib29sZWFufSBpczNEIFdoZXRoZXIgdGhpcyB0ZXh0dXJlIGNvbnRhaW5zIDNEIGRhdGEuXG4gICAgQHByb3Age2Jvb2xlYW59IGZsaXBZIFdoZXRoZXIgdGhlIHktYXhpcyBpcyBiZWluZyBmbGlwcGVkIGZvciB0aGlzIHRleHR1cmUuXG4gICAgQHByb3Age2Jvb2xlYW59IG1pcG1hcHMgV2hldGhlciB0aGlzIHRleHR1cmUgaXMgdXNpbmcgbWlwbWFwIGZpbHRlcmluZyBcbiAgICAgICAgKGFuZCB0aHVzIHNob3VsZCBoYXZlIGEgY29tcGxldGUgbWlwbWFwIGNoYWluKS5cbiAgICBAcHJvcCB7T2JqZWN0fSBhcHBTdGF0ZSBUcmFja2VkIEdMIHN0YXRlLlxuKi9cbmNsYXNzIFRleHR1cmUge1xuICAgIGNvbnN0cnVjdG9yKGdsLCBhcHBTdGF0ZSwgYmluZGluZywgaW1hZ2UsIHdpZHRoID0gaW1hZ2Uud2lkdGgsIGhlaWdodCA9IGltYWdlLmhlaWdodCwgZGVwdGgsIGlzM0QsIG9wdGlvbnMgPSBDT05TVEFOVFMuRFVNTVlfT0JKRUNUKSB7XG4gICAgICAgIGxldCBkZWZhdWx0VHlwZSA9IG9wdGlvbnMuZm9ybWF0ID09PSBDT05TVEFOVFMuREVQVEhfQ09NUE9ORU5UID8gQ09OU1RBTlRTLlVOU0lHTkVEX1NIT1JUIDogQ09OU1RBTlRTLlVOU0lHTkVEX0JZVEU7XG5cbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgICAgICB0aGlzLnRleHR1cmUgPSBudWxsO1xuICAgICAgICB0aGlzLndpZHRoID0gLTE7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gLTE7XG4gICAgICAgIHRoaXMuZGVwdGggPSAtMTtcbiAgICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLnR5cGUgOiBkZWZhdWx0VHlwZTtcbiAgICAgICAgdGhpcy5pczNEID0gaXMzRDtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZSA9IGFwcFN0YXRlO1xuXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnRlcm5hbEZvcm1hdCA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHJlc3NlZCA9ICEhKFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbb3B0aW9ucy5mb3JtYXRdIHx8IFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbb3B0aW9ucy5pbnRlcm5hbEZvcm1hdF0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuY29tcHJlc3NlZCkge1xuICAgICAgICAgICAgLy8gRm9yIGNvbXByZXNzZWQgdGV4dHVyZXMsIGp1c3QgbmVlZCB0byBwcm92aWRlIG9uZSBvZiBmb3JtYXQsIGludGVybmFsRm9ybWF0LlxuICAgICAgICAgICAgLy8gVGhlIG90aGVyIHdpbGwgYmUgdGhlIHNhbWUuXG4gICAgICAgICAgICB0aGlzLmZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmZvcm1hdCA6IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQ7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCA6IG9wdGlvbnMuZm9ybWF0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXQgPSBvcHRpb25zLmZvcm1hdCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5mb3JtYXQgOiBnbC5SR0JBO1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgOiBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUU1t0aGlzLnR5cGVdW3RoaXMuZm9ybWF0XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0xIGluZGljYXRlcyB1bmJvdW5kXG4gICAgICAgIHRoaXMuY3VycmVudFVuaXQgPSAtMTtcblxuICAgICAgICAvLyBTYW1wbGluZyBwYXJhbWV0ZXJzXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBtaW5GaWx0ZXIgPSBpbWFnZSA/IGdsLkxJTkVBUl9NSVBNQVBfTkVBUkVTVCA6IGdsLk5FQVJFU1QsXG4gICAgICAgICAgICBtYWdGaWx0ZXIgPSBpbWFnZSA/IGdsLkxJTkVBUiA6IGdsLk5FQVJFU1QsXG4gICAgICAgICAgICB3cmFwUyA9IGdsLlJFUEVBVCxcbiAgICAgICAgICAgIHdyYXBUID0gZ2wuUkVQRUFULFxuICAgICAgICAgICAgd3JhcFIgPSBnbC5SRVBFQVQsXG4gICAgICAgICAgICBjb21wYXJlTW9kZSA9IGdsLk5PTkUsXG4gICAgICAgICAgICBjb21wYXJlRnVuYyA9IGdsLkxFUVVBTCxcbiAgICAgICAgICAgIG1pbkxPRCA9IG51bGwsXG4gICAgICAgICAgICBtYXhMT0QgPSBudWxsLFxuICAgICAgICAgICAgYmFzZUxldmVsID0gbnVsbCxcbiAgICAgICAgICAgIG1heExldmVsID0gbnVsbCxcbiAgICAgICAgICAgIGZsaXBZID0gZmFsc2VcbiAgICAgICAgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5taW5GaWx0ZXIgPSBtaW5GaWx0ZXI7XG4gICAgICAgIHRoaXMubWFnRmlsdGVyID0gbWFnRmlsdGVyO1xuICAgICAgICB0aGlzLndyYXBTID0gd3JhcFM7XG4gICAgICAgIHRoaXMud3JhcFQgPSB3cmFwVDtcbiAgICAgICAgdGhpcy53cmFwUiA9IHdyYXBSO1xuICAgICAgICB0aGlzLmNvbXBhcmVNb2RlID0gY29tcGFyZU1vZGU7XG4gICAgICAgIHRoaXMuY29tcGFyZUZ1bmMgPSBjb21wYXJlRnVuYztcbiAgICAgICAgdGhpcy5taW5MT0QgPSBtaW5MT0Q7XG4gICAgICAgIHRoaXMubWF4TE9EID0gbWF4TE9EO1xuICAgICAgICB0aGlzLmJhc2VMZXZlbCA9IGJhc2VMZXZlbDtcbiAgICAgICAgdGhpcy5tYXhMZXZlbCA9IG1heExldmVsO1xuICAgICAgICB0aGlzLmZsaXBZID0gZmxpcFk7XG4gICAgICAgIHRoaXMubWlwbWFwcyA9IChtaW5GaWx0ZXIgPT09IGdsLkxJTkVBUl9NSVBNQVBfTkVBUkVTVCB8fCBtaW5GaWx0ZXIgPT09IGdsLkxJTkVBUl9NSVBNQVBfTElORUFSKTtcblxuICAgICAgICB0aGlzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCk7XG5cbiAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEoaW1hZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFJlLWFsbG9jYXRlIHRleHR1cmUgc3RvcmFnZS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBJbWFnZSB3aWR0aC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBJbWFnZSBoZWlnaHQuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBbZGVwdGhdIEltYWdlIGRlcHRoIG9yIG51bWJlciBvZiBpbWFnZXMuIFJlcXVpcmVkIHdoZW4gcGFzc2luZyAzRCBvciB0ZXh0dXJlIGFycmF5IGRhdGEuXG4gICAgICAgIEByZXR1cm4ge1RleHR1cmV9IFRoZSBUZXh0dXJlIG9iamVjdC5cbiAgICAqL1xuICAgIHJlc2l6ZSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCkge1xuICAgICAgICBkZXB0aCA9IGRlcHRoIHx8IDA7XG5cbiAgICAgICAgaWYgKHdpZHRoID09PSB0aGlzLndpZHRoICYmIGhlaWdodCA9PT0gdGhpcy5oZWlnaHQgJiYgZGVwdGggPT09IHRoaXMuZGVwdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzOyBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLnRleHR1cmUpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VW5pdCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudGV4dHVyZXNbdGhpcy5jdXJyZW50VW5pdF0gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5nbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMuYmluZChNYXRoLm1heCh0aGlzLmN1cnJlbnRVbml0LCAwKSk7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuXG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmJpbmRpbmcsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB0aGlzLm1pbkZpbHRlcik7XG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmJpbmRpbmcsIHRoaXMuZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCB0aGlzLm1hZ0ZpbHRlcik7XG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmJpbmRpbmcsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1MsIHRoaXMud3JhcFMpO1xuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5iaW5kaW5nLCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLndyYXBUKTtcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuYmluZGluZywgdGhpcy5nbC5URVhUVVJFX1dSQVBfUiwgdGhpcy53cmFwUik7XG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmJpbmRpbmcsIHRoaXMuZ2wuVEVYVFVSRV9DT01QQVJFX0ZVTkMsIHRoaXMuY29tcGFyZUZ1bmMpO1xuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5iaW5kaW5nLCB0aGlzLmdsLlRFWFRVUkVfQ09NUEFSRV9NT0RFLCB0aGlzLmNvbXBhcmVNb2RlKTtcbiAgICAgICAgdGhpcy5nbC5waXhlbFN0b3JlaSh0aGlzLmdsLlVOUEFDS19GTElQX1lfV0VCR0wsIHRoaXMuZmxpcFkpO1xuICAgICAgICBpZiAodGhpcy5taW5MT0QgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyZih0aGlzLmJpbmRpbmcsIHRoaXMuZ2wuVEVYVFVSRV9NSU5fTE9ELCB0aGlzLm1pbkxPRCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF4TE9EICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmYodGhpcy5iaW5kaW5nLCB0aGlzLmdsLlRFWFRVUkVfTUFYX0xPRCwgdGhpcy5tYXhMT0QpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJhc2VMZXZlbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuYmluZGluZywgdGhpcy5nbC5URVhUVVJFX0JBU0VfTEVWRUwsIHRoaXMuYmFzZUxldmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1heExldmVsICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5iaW5kaW5nLCB0aGlzLmdsLlRFWFRVUkVfTUFYX0xFVkVMLCB0aGlzLm1heExldmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZXZlbHM7XG4gICAgICAgIGlmICh0aGlzLmlzM0QpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pcG1hcHMpIHtcbiAgICAgICAgICAgICAgICBsZXZlbHMgPSBNYXRoLmZsb29yKE1hdGgubG9nMihNYXRoLm1heChNYXRoLm1heCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCksIHRoaXMuZGVwdGgpKSkgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXZlbHMgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbC50ZXhTdG9yYWdlM0QodGhpcy5iaW5kaW5nLCBsZXZlbHMsIHRoaXMuaW50ZXJuYWxGb3JtYXQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLmRlcHRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pcG1hcHMpIHtcbiAgICAgICAgICAgICAgICBsZXZlbHMgPSBNYXRoLmZsb29yKE1hdGgubG9nMihNYXRoLm1heCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpKSArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldmVscyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdsLnRleFN0b3JhZ2UyRCh0aGlzLmJpbmRpbmcsIGxldmVscywgdGhpcy5pbnRlcm5hbEZvcm1hdCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCB0aGUgaW1hZ2UgZGF0YSBmb3IgdGhlIHRleHR1cmUuIEFuIGFycmF5IGNhbiBiZSBwYXNzZWQgdG8gbWFudWFsbHkgc2V0IGFsbCBsZXZlbHMgXG4gICAgICAgIG9mIHRoZSBtaXBtYXAgY2hhaW4uIElmIGEgc2luZ2xlIGxldmVsIGlzIHBhc3NlZCBhbmQgbWlwbWFwIGZpbHRlcmluZyBpcyBiZWluZyB1c2VkLFxuICAgICAgICBnZW5lcmF0ZU1pcG1hcCgpIHdpbGwgYmUgY2FsbGVkIHRvIHByb2R1Y2UgdGhlIHJlbWFpbmluZyBsZXZlbHMuXG4gICAgICAgIE5PVEU6IHRoZSBkYXRhIG11c3QgZml0IHRoZSBjdXJyZW50bHktYWxsb2NhdGVkIHN0b3JhZ2UhXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0ltYWdlRWxlbWVudHxBcnJheUJ1ZmZlclZpZXd8QXJyYXl9IGRhdGEgSW1hZ2UgZGF0YS4gSWYgYW4gYXJyYXkgaXMgcGFzc2VkLCBpdCB3aWxsIGJlIFxuICAgICAgICAgICAgdXNlZCB0byBzZXQgbWlwIG1hcCBsZXZlbHMuXG4gICAgICAgIEByZXR1cm4ge1RleHR1cmV9IFRoZSBUZXh0dXJlIG9iamVjdC5cbiAgICAqL1xuICAgIGRhdGEoZGF0YSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIERVTU1ZX0FSUkFZWzBdID0gZGF0YTtcbiAgICAgICAgICAgIGRhdGEgPSBEVU1NWV9BUlJBWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBudW1MZXZlbHMgPSB0aGlzLm1pcG1hcHMgPyBkYXRhLmxlbmd0aCA6IDE7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgbGV0IGRlcHRoID0gdGhpcy5kZXB0aDtcbiAgICAgICAgbGV0IGdlbmVyYXRlTWlwbWFwcyA9IHRoaXMubWlwbWFwcyAmJiBkYXRhLmxlbmd0aCA9PT0gMTtcbiAgICAgICAgbGV0IGk7XG5cbiAgICAgICAgdGhpcy5iaW5kKE1hdGgubWF4KHRoaXMuY3VycmVudFVuaXQsIDApKTtcblxuICAgICAgICBpZiAodGhpcy5jb21wcmVzc2VkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pczNEKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bUxldmVsczsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuY29tcHJlc3NlZFRleFN1YkltYWdlM0QodGhpcy5iaW5kaW5nLCBpLCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgdGhpcy5mb3JtYXQsIGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoID4+IDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQgPj4gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRlcHRoID0gTWF0aC5tYXgoZGVwdGggPj4gMSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtTGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbC5jb21wcmVzc2VkVGV4U3ViSW1hZ2UyRCh0aGlzLmJpbmRpbmcsIGksIDAsIDAsIHdpZHRoLCBoZWlnaHQsIHRoaXMuZm9ybWF0LCBkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCA+PiAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0ID4+IDEsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzM0QpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1MZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4U3ViSW1hZ2UzRCh0aGlzLmJpbmRpbmcsIGksIDAsIDAsIDAsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoID4+IDEsIDEpO1xuICAgICAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCA+PiAxLCAxKTtcbiAgICAgICAgICAgICAgICBkZXB0aCA9IE1hdGgubWF4KGRlcHRoID4+IDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bUxldmVsczsgKytpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC50ZXhTdWJJbWFnZTJEKHRoaXMuYmluZGluZywgaSwgMCwgMCwgd2lkdGgsIGhlaWdodCwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCA+PiAxLCAxKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQgPj4gMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2VuZXJhdGVNaXBtYXBzKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmdlbmVyYXRlTWlwbWFwKHRoaXMuYmluZGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRGVsZXRlIHRoaXMgdGV4dHVyZS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1RleHR1cmV9IFRoZSBUZXh0dXJlIG9iamVjdC5cbiAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKHRoaXMudGV4dHVyZSk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VW5pdCAhPT0gLTEgJiYgdGhpcy5hcHBTdGF0ZS50ZXh0dXJlc1t0aGlzLmN1cnJlbnRVbml0XSA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudGV4dHVyZXNbdGhpcy5jdXJyZW50VW5pdF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVuaXQgPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIHRoaXMgdGV4dHVyZSB0byBhIHRleHR1cmUgdW5pdC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBpZ25vcmVcbiAgICAgICAgQHJldHVybiB7VGV4dHVyZX0gVGhlIFRleHR1cmUgb2JqZWN0LlxuICAgICovXG4gICAgYmluZCh1bml0KSB7XG4gICAgICAgIGxldCBjdXJyZW50VGV4dHVyZSA9IHRoaXMuYXBwU3RhdGUudGV4dHVyZXNbdW5pdF07XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFRleHR1cmUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUZXh0dXJlLmN1cnJlbnRVbml0ID0gLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVbml0ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudGV4dHVyZXNbdGhpcy5jdXJyZW50VW5pdF0gPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCArIHVuaXQpO1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmJpbmRpbmcsIHRoaXMudGV4dHVyZSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudGV4dHVyZXNbdW5pdF0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlO1xuXG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuY29uc3QgUXVlcnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXG4vKipcbiAgICBSZW5kZXJpbmcgdGltZXIuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7T2JqZWN0fSBjcHVUaW1lciBUaW1lciBmb3IgQ1BVLiBXaWxsIGJlIHdpbmRvdy5wZXJmb3JtYW5jZSwgaWYgYXZhaWxhYmxlLCBvciB3aW5kb3cuRGF0ZS5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gZ3B1VGltZXIgV2hldGhlciB0aGUgZ3B1IHRpbWluZyBpcyBhdmFpbGFibGUgKEVYVF9kaXNqb2ludF90aW1lcl9xdWVyeV93ZWJnbDIgb3JcbiAgICAgICAgICAgIEVYVF9kaXNqb2ludF90aW1lcl9xdWVyeSBhcmUgc3VwcG9ydGVkKS5cbiAgICBAcHJvcCB7V2ViR0xRdWVyeX0gZ3B1VGltZXJRdWVyeSBUaW1lciBxdWVyeSBvYmplY3QgZm9yIEdQVSAoaWYgZ3B1IHRpbWluZyBpcyBzdXBwb3J0ZWQpLlxuICAgIEBwcm9wIHtib29sZWFufSBncHVUaW1lclF1ZXJ5SW5Qcm9ncmVzcyBXaGV0aGVyIGEgZ3B1IHRpbWVyIHF1ZXJ5IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICBAcHJvcCB7bnVtYmVyfSBjcHVTdGFydFRpbWUgV2hlbiB0aGUgbGFzdCBDUFUgdGltaW5nIHN0YXJ0ZWQuXG4gICAgQHByb3Age251bWJlcn0gY3B1VGltZSBUaW1lIHNwZW50IG9uIENQVSBkdXJpbmcgbGFzdCB0aW1pbmcuIE9ubHkgdmFsaWQgaWYgcmVhZHkoKSByZXR1cm5zIHRydWUuXG4gICAgQHByb3Age251bWJlcn0gZ3B1VGltZSBUaW1lIHNwZW50IG9uIEdQVSBkdXJpbmcgbGFzdCB0aW1pbmcuIE9ubHkgdmFsaWQgaWYgcmVhZHkoKSByZXR1cm5zIHRydWUuXG4gICAgICAgICAgICBXaWxsIHJlbWFpbiAwIGlmIGV4dGVuc2lvbiBFWFRfZGlzam9pbnRfdGltZXJfcXVlcnlfd2ViZ2wyIGlzIHVuYXZhaWxhYmxlLlxuKi9cbmNsYXNzIFRpbWVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsKSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5jcHVUaW1lciA9IHdpbmRvdy5wZXJmb3JtYW5jZSB8fCB3aW5kb3cuRGF0ZTtcblxuICAgICAgICAvLyBOb3RlKFRhcmVrKTogRmlyZWZveCBmb3Igc29tZSByZWFzb24gb25seSBzdXBwb3J0cyBFWFRfZGlzam9pbnRfdGltZXJfcXVlcnksIHNvIGhhdmUgdG8gdHJ5IGJvdGhcbiAgICAgICAgdmFyIGdwdVRpbWVyRXh0ZW5zaW9uID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oXCJFWFRfZGlzam9pbnRfdGltZXJfcXVlcnlfd2ViZ2wyXCIpIHx8IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5XCIpO1xuICAgICAgICBpZiAoZ3B1VGltZXJFeHRlbnNpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ3B1VGltZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ncHVUaW1lclF1ZXJ5ID0gbmV3IFF1ZXJ5KHRoaXMuZ2wsIENPTlNUQU5UUy5USU1FX0VMQVBTRURfRVhUKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3B1VGltZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ3B1VGltZXJRdWVyeSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNwdVN0YXJ0VGltZSA9IDA7XG4gICAgICAgIHRoaXMuY3B1VGltZSA9IDA7XG4gICAgICAgIHRoaXMuZ3B1VGltZSA9IDA7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgICAgU3RhcnQgdGltaW5nLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7VGltZXJ9IFRoZSBUaW1lciBvYmplY3QuXG4gICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3B1VGltZXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ncHVUaW1lclF1ZXJ5LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3B1VGltZXJRdWVyeS5iZWdpbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3B1U3RhcnRUaW1lID0gdGhpcy5jcHVUaW1lci5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3B1U3RhcnRUaW1lID0gdGhpcy5jcHVUaW1lci5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICAgIFN0b3AgdGltaW5nLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7VGltZXJ9IFRoZSBUaW1lciBvYmplY3QuXG4gICAgKi9cbiAgICBlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdwdVRpbWVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3B1VGltZXJRdWVyeS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdwdVRpbWVyUXVlcnkuZW5kKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcHVUaW1lID0gdGhpcy5jcHVUaW1lci5ub3coKSAtIHRoaXMuY3B1U3RhcnRUaW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jcHVUaW1lID0gdGhpcy5jcHVUaW1lci5ub3coKSAtIHRoaXMuY3B1U3RhcnRUaW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENoZWNrIGlmIHRpbWluZyByZXN1bHRzIGFyZSBhdmFpbGFibGUuIElmXG4gICAgICAgIHRoaXMgbWV0aG9kIHJldHVybnMgdHJ1ZSwgdGhlIGNwdVRpbWUgYW5kXG4gICAgICAgIGdwdVRpbWUgcHJvcGVydGllcyB3aWxsIGJlIHNldCB0byB2YWxpZFxuICAgICAgICB2YWx1ZXMuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtib29sZWFufSBJZiByZXN1bHRzIGFyZSBhdmFpbGFibGUuXG4gICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3B1VGltZXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ncHVUaW1lclF1ZXJ5LmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGdwdVRpbWVyQXZhaWxhYmxlID0gdGhpcy5ncHVUaW1lclF1ZXJ5LnJlYWR5KCk7XG4gICAgICAgICAgICB2YXIgZ3B1VGltZXJEaXNqb2ludCA9IHRoaXMuZ2wuZ2V0UGFyYW1ldGVyKENPTlNUQU5UUy5HUFVfRElTSk9JTlRfRVhUKTtcblxuICAgICAgICAgICAgaWYgKGdwdVRpbWVyQXZhaWxhYmxlICYmICFncHVUaW1lckRpc2pvaW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncHVUaW1lID0gdGhpcy5ncHVUaW1lclF1ZXJ5LnJlc3VsdCAgLyAxMDAwMDAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmNwdVN0YXJ0VGltZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEZWxldGUgdGhpcyB0aW1lci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1RpbWVyfSBUaGUgVGltZXIgb2JqZWN0LlxuICAgICovXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5ncHVUaW1lclF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLmdwdVRpbWVyUXVlcnkuZGVsZXRlKCk7XG4gICAgICAgICAgICB0aGlzLmdwdVRpbWVyUXVlcnkgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5ncHVUaW1lciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZXI7XG5cblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGFyZWsgU2hlcmlmXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbi8qKlxuICAgIFRyYW5mb3JtIGZlZWRiYWNrIG9iamVjdC5cblxuICAgIEBjbGFzc1xuICAgIEBwcm9wIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0LlxuICAgIEBwcm9wIHtXZWJHTFRyYW5zZm9ybUZlZWRiYWNrfSB0cmFuc2Zvcm1GZWVkYmFjayBUcmFuc2Zvcm0gZmVlZGJhY2sgb2JqZWN0LlxuICAgIEBwcm9wIHtPYmplY3R9IGFwcFN0YXRlIFRyYWNrZWQgR0wgc3RhdGUuXG4qL1xuY2xhc3MgVHJhbnNmb3JtRmVlZGJhY2sge1xuXG4gICAgY29uc3RydWN0b3IoZ2wsIGFwcFN0YXRlKSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1GZWVkYmFjayA9IGdsLmNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrKCk7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUgPSBhcHBTdGF0ZTtcblxuICAgICAgICAvLyBUT0RPKFRhcmVrKTogTmVlZCB0byByZWJpbmQgYnVmZmVycyBkdWUgdG8gYnVnIGluIEFOR0xFLlxuICAgICAgICAvLyBSZW1vdmUgdGhpcyB3aGVuIHRoYXQncyBmaXhlZC5cbiAgICAgICAgdGhpcy5hbmdsZUJ1Z0J1ZmZlcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCBhIGZlZWRiYWNrIGJ1ZmZlciB0byBjYXB0dXJlIHRyYW5zZm9ybSBvdXRwdXQuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggb2YgdHJhbnNmb3JtIGZlZWRiYWNrIHZhcnlpbmcgdG8gY2FwdHVyZS5cbiAgICAgICAgQHBhcmFtIHtWZXJ0ZXhCdWZmZXJ9IGJ1ZmZlciBCdWZmZXIgdG8gcmVjb3JkIG91dHB1dCBpbnRvLlxuICAgICAgICBAcmV0dXJuIHtUcmFuc2Zvcm1GZWVkYmFja30gVGhlIFRyYW5zZm9ybUZlZWRiYWNrIG9iamVjdC5cbiAgICAqL1xuICAgIGZlZWRiYWNrQnVmZmVyKGluZGV4LCBidWZmZXIpIHtcbiAgICAgICAgdGhpcy5nbC5iaW5kVHJhbnNmb3JtRmVlZGJhY2sodGhpcy5nbC5UUkFOU0ZPUk1fRkVFREJBQ0ssIHRoaXMudHJhbnNmb3JtRmVlZGJhY2spO1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXJCYXNlKHRoaXMuZ2wuVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUiwgaW5kZXgsIGJ1ZmZlci5idWZmZXIpO1xuICAgICAgICB0aGlzLmdsLmJpbmRUcmFuc2Zvcm1GZWVkYmFjayh0aGlzLmdsLlRSQU5TRk9STV9GRUVEQkFDSywgbnVsbCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlckJhc2UodGhpcy5nbC5UUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSLCBpbmRleCwgbnVsbCk7XG5cbiAgICAgICAgdGhpcy5hbmdsZUJ1Z0J1ZmZlcnNbaW5kZXhdID0gYnVmZmVyO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEZWxldGUgdGhpcyB0cmFuc2Zvcm0gZmVlZGJhY2suXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtUcmFuc2Zvcm1GZWVkYmFja30gVGhlIFRyYW5zZm9ybUZlZWRiYWNrIG9iamVjdC5cbiAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNmb3JtRmVlZGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlVHJhbnNmb3JtRmVlZGJhY2sodGhpcy50cmFuc2Zvcm1GZWVkYmFjayk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybUZlZWRiYWNrID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIHRoaXMgdHJhbnNmb3JtIGZlZWRiYWNrLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQGlnbm9yZVxuICAgICAgICBAcmV0dXJuIHtUcmFuc2Zvcm1GZWVkYmFja30gVGhlIFRyYW5zZm9ybUZlZWRiYWNrIG9iamVjdC5cbiAgICAqL1xuICAgIGJpbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcFN0YXRlLnRyYW5zZm9ybUZlZWRiYWNrICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUcmFuc2Zvcm1GZWVkYmFjayh0aGlzLmdsLlRSQU5TRk9STV9GRUVEQkFDSywgdGhpcy50cmFuc2Zvcm1GZWVkYmFjayk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmFuZ2xlQnVnQnVmZmVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlckJhc2UodGhpcy5nbC5UUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSLCBpLCB0aGlzLmFuZ2xlQnVnQnVmZmVyc1tpXS5idWZmZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnRyYW5zZm9ybUZlZWRiYWNrID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybUZlZWRiYWNrO1xuXG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4vKipcbiAgICBTdG9yYWdlIGZvciB1bmlmb3JtIGRhdGEuIERhdGEgaXMgc3RvcmVkIGluIHN0ZDE0MCBsYXlvdXQuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7V2ViR0xCdWZmZXJ9IGJ1ZmZlciBBbGxvY2F0ZWQgYnVmZmVyIHN0b3JhZ2UuXG4gICAgQHByb3Age0Zsb2F0MzJBcnJheX0gZGF0YSBCdWZmZXIgZGF0YS5cbiAgICBAcHJvcCB7T2JqZWN0fSBkYXRhVmlld3MgTWFwIG9mIGJhc2UgZGF0YSB0eXBlcyB0byBtYXRjaGluZyBBcnJheUJ1ZmZlclZpZXdzIG9mIHRoZSBidWZmZXIgZGF0YS5cbiAgICBAcHJvcCB7QXJyYXl9IG9mZnNldHMgT2Zmc2V0cyBpbnRvIHRoZSBhcnJheSBmb3IgZWFjaCBpdGVtIGluIHRoZSBidWZmZXIuXG4gICAgQHByb3Age0FycmF5fSBzaXplcyBTaXplIG9mIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBvZmZzZXQuXG4gICAgQHByb3Age0FycmF5fSB0eXBlcyBUaGUgYmFzZSB0eXBlIG9mIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBvZmZzZXQgKEZMT0FULCBJTlQgb3IgVU5TSUdORURfSU5UKS5cbiAgICBAcHJvcCB7bnVtYmVyfSBzaXplIFRoZSBzaXplIG9mIHRoZSBidWZmZXIgKGluIDQtYnl0ZSBpdGVtcykuXG4gICAgQHByb3Age0dMRW51bX0gdXNhZ2UgVXNhZ2UgcGF0dGVybiBvZiB0aGUgYnVmZmVyLlxuKi9cbmNsYXNzIFVuaWZvcm1CdWZmZXIge1xuXG4gICAgY29uc3RydWN0b3IoZ2wsIGFwcFN0YXRlLCBsYXlvdXQsIHVzYWdlID0gZ2wuRFlOQU1JQ19EUkFXKSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgdGhpcy5kYXRhVmlld3MgPSB7fTtcbiAgICAgICAgdGhpcy5vZmZzZXRzID0gbmV3IEFycmF5KGxheW91dC5sZW5ndGgpO1xuICAgICAgICB0aGlzLnNpemVzID0gbmV3IEFycmF5KGxheW91dC5sZW5ndGgpO1xuICAgICAgICB0aGlzLnR5cGVzID0gbmV3IEFycmF5KGxheW91dC5sZW5ndGgpO1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgICB0aGlzLnVzYWdlID0gdXNhZ2U7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUgPSBhcHBTdGF0ZTtcblxuICAgICAgICAvLyAtMSBpbmRpY2F0ZXMgdW5ib3VuZFxuICAgICAgICB0aGlzLmN1cnJlbnRCYXNlID0gLTE7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxheW91dC5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBsYXlvdXRbaV07XG4gICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLklOVDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuQk9PTDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRzW2ldID0gdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gQ09OU1RBTlRTLklOVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlc1tpXSA9IENPTlNUQU5UUy5JTlQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSBDT05TVEFOVFMuVU5TSUdORURfSU5UKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzW2ldID0gQ09OU1RBTlRTLlVOU0lHTkVEX0lOVDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXNbaV0gPSBDT05TVEFOVFMuRkxPQVQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUrKztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfVkVDMjpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5JTlRfVkVDMjpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDMjpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5CT09MX1ZFQzI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSArPSB0aGlzLnNpemUgJSAyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldHNbaV0gPSB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNbaV0gPSAyO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBDT05TVEFOVFMuSU5UX1ZFQzIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXNbaV0gPSBDT05TVEFOVFMuSU5UO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUMyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzW2ldID0gQ09OU1RBTlRTLlVOU0lHTkVEX0lOVDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXNbaV0gPSBDT05TVEFOVFMuRkxPQVQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfVkVDMzpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5JTlRfVkVDMzpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDMzpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5CT09MX1ZFQzM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfVkVDNDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5JTlRfVkVDNDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDNDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5CT09MX1ZFQzQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSArPSAoNCAtIHRoaXMuc2l6ZSAlIDQpICUgNDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRzW2ldID0gdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldID0gNDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gQ09OU1RBTlRTLklOVF9WRUM0IHx8IHR5cGUgPT09IENPTlNUQU5UUy5JTlRfVkVDMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlc1tpXSA9IENPTlNUQU5UUy5JTlQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzQgfHwgdGhpcy50eXBlID09PSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXNbaV0gPSBDT05TVEFOVFMuVU5TSUdORURfSU5UO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlc1tpXSA9IENPTlNUQU5UUy5GTE9BVDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSArPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDJ4MzpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyeDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSArPSAoNCAtIHRoaXMuc2l6ZSAlIDQpICUgNDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRzW2ldID0gdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldID0gODtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlc1tpXSA9IENPTlNUQU5UUy5GTE9BVDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUMzpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQzeDI6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUM3g0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gKDQgLSB0aGlzLnNpemUgJSA0KSAlIDQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0c1tpXSA9IHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IDEyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzW2ldID0gQ09OU1RBTlRTLkZMT0FUO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSArPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQ0eDI6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNHgzOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gKDQgLSB0aGlzLnNpemUgJSA0KSAlIDQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0c1tpXSA9IHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IDE2O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzW2ldID0gQ09OU1RBTlRTLkZMT0FUO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZSArPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuc3VwcG9ydGVkIHR5cGUgZm9yIHVuaWZvcm0gYnVmZmVyLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2l6ZSArPSAoNCAtIHRoaXMuc2l6ZSAlIDQpICUgNDtcblxuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMuZGF0YVZpZXdzW0NPTlNUQU5UUy5GTE9BVF0gPSB0aGlzLmRhdGE7XG4gICAgICAgIHRoaXMuZGF0YVZpZXdzW0NPTlNUQU5UUy5JTlRdID0gbmV3IEludDMyQXJyYXkodGhpcy5kYXRhLmJ1ZmZlcik7XG4gICAgICAgIHRoaXMuZGF0YVZpZXdzW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRdID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuZGF0YS5idWZmZXIpO1xuXG4gICAgICAgIFxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5VTklGT1JNX0JVRkZFUiwgdGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy5nbC5VTklGT1JNX0JVRkZFUiwgdGhpcy5zaXplICogNCwgdGhpcy51c2FnZSk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLlVOSUZPUk1fQlVGRkVSLCBudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgVXBkYXRlIGRhdGEgZm9yIGEgZ2l2ZW4gaXRlbSBpbiB0aGUgYnVmZmVyLiBOT1RFOiBEYXRhIGlzIG5vdFxuICAgICAgICBzZW50IHRoZSB0aGUgR1BVIHVudGlsIHRoZSB1cGRhdGUoKSBtZXRob2QgaXMgY2FsbGVkIVxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IGluIHRoZSBsYXlvdXQgb2YgaXRlbSB0byBzZXQuXG4gICAgICAgIEBwYXJhbSB7QXJyYXlCdWZmZXJWaWV3fSB2YWx1ZSBWYWx1ZSB0byBzdG9yZSBhdCB0aGUgbGF5b3V0IGxvY2F0aW9uLlxuICAgICAgICBAcmV0dXJuIHtVbmlmb3JtQnVmZmVyfSBUaGUgVW5pZm9ybUJ1ZmZlciBvYmplY3QuXG4gICAgKi9cbiAgICBzZXQoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy5kYXRhVmlld3NbdGhpcy50eXBlc1tpbmRleF1dO1xuXG4gICAgICAgIGlmICh0aGlzLnNpemVzW2luZGV4XSA9PT0gMSkgIHtcbiAgICAgICAgICAgIHZpZXdbdGhpcy5vZmZzZXRzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXcuc2V0KHZhbHVlLCB0aGlzLm9mZnNldHNbaW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZW5kIHN0b3JlZCBidWZmZXIgZGF0YSB0byB0aGUgR1BVLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IFtpbmRleF0gSW5kZXggaW4gdGhlIGxheW91dCBvZiBpdGVtIHRvIHNlbmQgdG8gdGhlIEdQVS4gSWYgb21taXRlZCwgZW50aXJlIGJ1ZmZlciBpcyBzZW50LlxuICAgICAgICBAcmV0dXJuIHtVbmlmb3JtQnVmZmVyfSBUaGUgVW5pZm9ybUJ1ZmZlciBvYmplY3QuXG4gICAgKi9cbiAgICB1cGRhdGUoaW5kZXgpIHtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIGxldCBvZmZzZXQ7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBiZWdpbiA9IHRoaXMub2Zmc2V0c1tpbmRleF07XG4gICAgICAgICAgICBsZXQgZW5kID0gYmVnaW4gKyB0aGlzLnNpemVzW2luZGV4XTtcbiAgICAgICAgICAgIGRhdGEgPSB0aGlzLmRhdGEuc3ViYXJyYXkoYmVnaW4sIGVuZCk7XG4gICAgICAgICAgICBvZmZzZXQgPSBiZWdpbiAqIDQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5VTklGT1JNX0JVRkZFUiwgdGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEodGhpcy5nbC5VTklGT1JNX0JVRkZFUiwgb2Zmc2V0LCBkYXRhKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuVU5JRk9STV9CVUZGRVIsIG51bGwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEZWxldGUgdGhpcyB1bmlmb3JtIGJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1VuaWZvcm1CdWZmZXJ9IFRoZSBVbmlmb3JtQnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRCYXNlICE9PSAtMSAmJiB0aGlzLmFwcFN0YXRlLnVuaWZvcm1CdWZmZXJzW3RoaXMuY3VycmVudEJhc2VdID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS51bmlmb3JtQnVmZmVyc1t0aGlzLmN1cnJlbnRCYXNlXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCB0aGlzIHVuaWZvcm0gYnVmZmVyIHRvIHRoZSBnaXZlbiBiYXNlLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQGlnbm9yZVxuICAgICAgICBAcmV0dXJuIHtVbmlmb3JtQnVmZmVyfSBUaGUgVW5pZm9ybUJ1ZmZlciBvYmplY3QuXG4gICAgKi9cbiAgICBiaW5kKGJhc2UpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRCdWZmZXIgPSB0aGlzLmFwcFN0YXRlLnVuaWZvcm1CdWZmZXJzW2Jhc2VdO1xuXG4gICAgICAgIGlmIChjdXJyZW50QnVmZmVyICE9PSB0aGlzKSB7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50QnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJ1ZmZlci5jdXJyZW50QmFzZSA9IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QmFzZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnVuaWZvcm1CdWZmZXJzW3RoaXMuY3VycmVudEJhc2VdID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyQmFzZSh0aGlzLmdsLlVOSUZPUk1fQlVGRkVSLCBiYXNlLCB0aGlzLmJ1ZmZlcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudW5pZm9ybUJ1ZmZlcnNbYmFzZV0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmFzZSA9IGJhc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmlmb3JtQnVmZmVyO1xuXG5cbi8qKiovIH0pLFxuLyogMTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGFyZWsgU2hlcmlmXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbmNvbnN0IENPTlNUQU5UUyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbi8qKlxuICAgIE9yZ2FuaXplcyB2ZXJ0ZXggYnVmZmVyIGFuZCBhdHRyaWJ1dGUgc3RhdGUuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7V2ViR0xWZXJ0ZXhBcnJheU9iamVjdH0gdmVydGV4QXJyYXkgVmVydGV4IGFycmF5IG9iamVjdC5cbiAgICBAcHJvcCB7bnVtYmVyfSBudW1FbGVtZW50cyBOdW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIHZlcnRleCBhcnJheS5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gaW5kZXhlZCBXaGV0aGVyIHRoaXMgdmVydGV4IGFycmF5IGlzIHNldCB1cCBmb3IgaW5kZXhlZCBkcmF3aW5nLlxuICAgIEBwcm9wIHtHTGVudW19IGluZGV4VHlwZSBEYXRhIHR5cGUgb2YgdGhlIGluZGljZXMuXG4gICAgQHByb3Age2Jvb2xlYW59IGluc3RhbmNlZCBXaGV0aGVyIHRoaXMgdmVydGV4IGFycmF5IGlzIHNldCB1cCBmb3IgaW5zdGFuY2VkIGRyYXdpbmcuXG4gICAgQHByb3Age251bWJlcn0gbnVtSW5zdGFuY2VzIE51bWJlciBvZiBpbnN0YW5jZXMgdG8gZHJhdyB3aXRoIHRoaXMgdmVydGV4IGFycmF5LlxuICAgIEBwcm9wIHtPYmplY3R9IGFwcFN0YXRlIFRyYWNrZWQgR0wgc3RhdGUuXG4qL1xuY2xhc3MgVmVydGV4QXJyYXkge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGdsLCBhcHBTdGF0ZSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMudmVydGV4QXJyYXkgPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuICAgICAgICB0aGlzLmFwcFN0YXRlID0gYXBwU3RhdGU7XG4gICAgICAgIHRoaXMubnVtRWxlbWVudHMgPSAwO1xuICAgICAgICB0aGlzLmluZGV4VHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VkQnVmZmVycyA9IDA7XG4gICAgICAgIHRoaXMuaW5kZXhlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm51bUluc3RhbmNlcyA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgYW4gcGVyLXZlcnRleCBhdHRyaWJ1dGUgYnVmZmVyIHRvIHRoaXMgdmVydGV4IGFycmF5LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGF0dHJpYnV0ZUluZGV4IFRoZSBhdHRyaWJ1dGUgbG9jYXRpb24gdG8gYmluZCB0by5cbiAgICAgICAgQHBhcmFtIHtWZXJ0ZXhCdWZmZXJ9IHZlcnRleEJ1ZmZlciBUaGUgVmVydGV4QnVmZmVyIHRvIGJpbmQuXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEFycmF5fSBUaGUgVmVydGV4QXJyYXkgb2JqZWN0LlxuICAgICovXG4gICAgdmVydGV4QXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVCdWZmZXIoYXR0cmlidXRlSW5kZXgsIHZlcnRleEJ1ZmZlciwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgYW4gcGVyLWluc3RhbmNlIGF0dHJpYnV0ZSBidWZmZXIgdG8gdGhpcyB2ZXJ0ZXggYXJyYXkuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge251bWJlcn0gYXR0cmlidXRlSW5kZXggVGhlIGF0dHJpYnV0ZSBsb2NhdGlvbiB0byBiaW5kIHRvLlxuICAgICAgICBAcGFyYW0ge1ZlcnRleEJ1ZmZlcn0gdmVydGV4QnVmZmVyIFRoZSBWZXJ0ZXhCdWZmZXIgdG8gYmluZC5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QXJyYXl9IFRoZSBWZXJ0ZXhBcnJheSBvYmplY3QuXG4gICAgKi9cbiAgICBpbnN0YW5jZUF0dHJpYnV0ZUJ1ZmZlcihhdHRyaWJ1dGVJbmRleCwgdmVydGV4QnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIsIHRydWUsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgYW4gcGVyLXZlcnRleCBpbnRlZ2VyIGF0dHJpYnV0ZSBidWZmZXIgdG8gdGhpcyB2ZXJ0ZXggYXJyYXkuXG4gICAgICAgIE5vdGUgdGhhdCB0aGlzIHJlZmVycyB0byB0aGUgYXR0cmlidXRlIGluIHRoZSBzaGFkZXIgYmVpbmcgYW4gaW50ZWdlcixcbiAgICAgICAgbm90IHRoZSBkYXRhIHN0b3JlZCBpbiB0aGUgdmVydGV4IGJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBhdHRyaWJ1dGVJbmRleCBUaGUgYXR0cmlidXRlIGxvY2F0aW9uIHRvIGJpbmQgdG8uXG4gICAgICAgIEBwYXJhbSB7VmVydGV4QnVmZmVyfSB2ZXJ0ZXhCdWZmZXIgVGhlIFZlcnRleEJ1ZmZlciB0byBiaW5kLlxuICAgICAgICBAcmV0dXJuIHtWZXJ0ZXhBcnJheX0gVGhlIFZlcnRleEFycmF5IG9iamVjdC5cbiAgICAqL1xuICAgIHZlcnRleEludGVnZXJBdHRyaWJ1dGVCdWZmZXIoYXR0cmlidXRlSW5kZXgsIHZlcnRleEJ1ZmZlcikge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUJ1ZmZlcihhdHRyaWJ1dGVJbmRleCwgdmVydGV4QnVmZmVyLCBmYWxzZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGFuIHBlci1pbnN0YW5jZSBpbnRlZ2VyIGF0dHJpYnV0ZSBidWZmZXIgdG8gdGhpcyB2ZXJ0ZXggYXJyYXkuXG4gICAgICAgIE5vdGUgdGhhdCB0aGlzIHJlZmVycyB0byB0aGUgYXR0cmlidXRlIGluIHRoZSBzaGFkZXIgYmVpbmcgYW4gaW50ZWdlcixcbiAgICAgICAgbm90IHRoZSBkYXRhIHN0b3JlZCBpbiB0aGUgdmVydGV4IGJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBhdHRyaWJ1dGVJbmRleCBUaGUgYXR0cmlidXRlIGxvY2F0aW9uIHRvIGJpbmQgdG8uXG4gICAgICAgIEBwYXJhbSB7VmVydGV4QnVmZmVyfSB2ZXJ0ZXhCdWZmZXIgVGhlIFZlcnRleEJ1ZmZlciB0byBiaW5kLlxuICAgICAgICBAcmV0dXJuIHtWZXJ0ZXhBcnJheX0gVGhlIFZlcnRleEFycmF5IG9iamVjdC5cbiAgICAqL1xuICAgIGluc3RhbmNlSW50ZWdlckF0dHJpYnV0ZUJ1ZmZlcihhdHRyaWJ1dGVJbmRleCwgdmVydGV4QnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIsIHRydWUsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCBhbiBwZXItdmVydGV4IG5vcm1hbGl6ZWQgYXR0cmlidXRlIGJ1ZmZlciB0byB0aGlzIHZlcnRleCBhcnJheS5cbiAgICAgICAgSW50ZWdlciBkYXRhIGluIHRoZSB2ZXJ0ZXggYnVmZmVyIHdpbGwgYmUgbm9ybWFsaXplZCB0byBbLTEuMCwgMS4wXSBpZlxuICAgICAgICBzaWduZWQsIFswLjAsIDEuMF0gaWYgdW5zaWduZWQuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge251bWJlcn0gYXR0cmlidXRlSW5kZXggVGhlIGF0dHJpYnV0ZSBsb2NhdGlvbiB0byBiaW5kIHRvLlxuICAgICAgICBAcGFyYW0ge1ZlcnRleEJ1ZmZlcn0gdmVydGV4QnVmZmVyIFRoZSBWZXJ0ZXhCdWZmZXIgdG8gYmluZC5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QXJyYXl9IFRoZSBWZXJ0ZXhBcnJheSBvYmplY3QuXG4gICAgKi9cbiAgICB2ZXJ0ZXhOb3JtYWxpemVkQXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVCdWZmZXIoYXR0cmlidXRlSW5kZXgsIHZlcnRleEJ1ZmZlciwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCBhbiBwZXItaW5zdGFuY2Ugbm9ybWFsaXplZCBhdHRyaWJ1dGUgYnVmZmVyIHRvIHRoaXMgdmVydGV4IGFycmF5LlxuICAgICAgICBJbnRlZ2VyIGRhdGEgaW4gdGhlIHZlcnRleCBidWZmZXIgd2lsbCBiZSBub3JtYWxpemVkIHRvIFstMS4wLCAxLjBdIGlmXG4gICAgICAgIHNpZ25lZCwgWzAuMCwgMS4wXSBpZiB1bnNpZ25lZC5cbiAgICAgICAgXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGF0dHJpYnV0ZUluZGV4IFRoZSBhdHRyaWJ1dGUgbG9jYXRpb24gdG8gYmluZCB0by5cbiAgICAgICAgQHBhcmFtIHtWZXJ0ZXhCdWZmZXJ9IHZlcnRleEJ1ZmZlciBUaGUgVmVydGV4QnVmZmVyIHRvIGJpbmQuXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEFycmF5fSBUaGUgVmVydGV4QXJyYXkgb2JqZWN0LlxuICAgICovXG4gICAgaW5zdGFuY2VOb3JtYWxpemVkQXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVCdWZmZXIoYXR0cmlidXRlSW5kZXgsIHZlcnRleEJ1ZmZlciwgdHJ1ZSwgZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGFuIGluZGV4IGJ1ZmZlciB0byB0aGlzIHZlcnRleCBhcnJheS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7VmVydGV4QnVmZmVyfSB2ZXJ0ZXhCdWZmZXIgVGhlIFZlcnRleEJ1ZmZlciB0byBiaW5kLlxuICAgICAgICBAcmV0dXJuIHtWZXJ0ZXhBcnJheX0gVGhlIFZlcnRleEFycmF5IG9iamVjdC5cbiAgICAqL1xuICAgIGluZGV4QnVmZmVyKHZlcnRleEJ1ZmZlcikge1xuICAgICAgICB0aGlzLmdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZlcnRleEFycmF5KTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHZlcnRleEJ1ZmZlci5iaW5kaW5nLCB2ZXJ0ZXhCdWZmZXIuYnVmZmVyKTtcblxuICAgICAgICB0aGlzLm51bUVsZW1lbnRzID0gdmVydGV4QnVmZmVyLm51bUl0ZW1zICogMztcbiAgICAgICAgdGhpcy5pbmRleFR5cGUgPSB2ZXJ0ZXhCdWZmZXIudHlwZTtcbiAgICAgICAgdGhpcy5pbmRleGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHZlcnRleEJ1ZmZlci5iaW5kaW5nLCBudWxsKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRGVsZXRlIHRoaXMgdmVydGV4IGFycmF5LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7VmVydGV4QXJyYXl9IFRoZSBWZXJ0ZXhBcnJheSBvYmplY3QuXG4gICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZlcnRleEFycmF5KSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVZlcnRleEFycmF5KHRoaXMudmVydGV4QXJyYXkpO1xuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhBcnJheSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgdGhpcyB2ZXJ0ZXggYXJyYXkuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAaWdub3JlXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEFycmF5fSBUaGUgVmVydGV4QXJyYXkgb2JqZWN0LlxuICAgICovXG4gICAgYmluZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXBwU3RhdGUudmVydGV4QXJyYXkgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmVydGV4QXJyYXkpO1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS52ZXJ0ZXhBcnJheSA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQXR0YWNoIGFuIGF0dHJpYnV0ZSBidWZmZXJcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBpZ25vcmVcbiAgICAgICAgQHJldHVybiB7VmVydGV4QXJyYXl9IFRoZSBWZXJ0ZXhBcnJheSBvYmplY3QuXG4gICAgKi9cbiAgICBhdHRyaWJ1dGVCdWZmZXIoYXR0cmlidXRlSW5kZXgsIHZlcnRleEJ1ZmZlciwgaW5zdGFuY2VkLCBpbnRlZ2VyLCBub3JtYWxpemVkKSB7XG4gICAgICAgIHRoaXMuZ2wuYmluZFZlcnRleEFycmF5KHRoaXMudmVydGV4QXJyYXkpO1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodmVydGV4QnVmZmVyLmJpbmRpbmcsIHZlcnRleEJ1ZmZlci5idWZmZXIpO1xuXG4gICAgICAgIGxldCBudW1Db2x1bW5zID0gdmVydGV4QnVmZmVyLm51bUNvbHVtbnM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2x1bW5zOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChpbnRlZ2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJJUG9pbnRlcihcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlSW5kZXggKyBpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhCdWZmZXIuaXRlbVNpemUsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlci50eXBlLFxuICAgICAgICAgICAgICAgICAgICBudW1Db2x1bW5zICogdmVydGV4QnVmZmVyLml0ZW1TaXplICogQ09OU1RBTlRTLlRZUEVfU0laRVt2ZXJ0ZXhCdWZmZXIudHlwZV0sXG4gICAgICAgICAgICAgICAgICAgIGkgKiB2ZXJ0ZXhCdWZmZXIuaXRlbVNpemUgKiBDT05TVEFOVFMuVFlQRV9TSVpFW3ZlcnRleEJ1ZmZlci50eXBlXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlSW5kZXggKyBpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhCdWZmZXIuaXRlbVNpemUsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRleEJ1ZmZlci50eXBlLFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkLFxuICAgICAgICAgICAgICAgICAgICBudW1Db2x1bW5zICogdmVydGV4QnVmZmVyLml0ZW1TaXplICogQ09OU1RBTlRTLlRZUEVfU0laRVt2ZXJ0ZXhCdWZmZXIudHlwZV0sXG4gICAgICAgICAgICAgICAgICAgIGkgKiB2ZXJ0ZXhCdWZmZXIuaXRlbVNpemUgKiBDT05TVEFOVFMuVFlQRV9TSVpFW3ZlcnRleEJ1ZmZlci50eXBlXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbnN0YW5jZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYkRpdmlzb3IoYXR0cmlidXRlSW5kZXggKyBpLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhdHRyaWJ1dGVJbmRleCArIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZWQgPSB0aGlzLmluc3RhbmNlZCB8fCBpbnN0YW5jZWQ7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlZCkge1xuICAgICAgICAgICAgdGhpcy5udW1JbnN0YW5jZXMgPSB2ZXJ0ZXhCdWZmZXIubnVtSXRlbXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm51bUVsZW1lbnRzID0gdGhpcy5udW1FbGVtZW50cyB8fCB2ZXJ0ZXhCdWZmZXIubnVtSXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHZlcnRleEJ1ZmZlci5iaW5kaW5nLCBudWxsKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXhBcnJheTtcblxuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUYXJlayBTaGVyaWZcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuY29uc3QgQ09OU1RBTlRTID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuLyoqXG4gICAgU3RvcmFnZSBmb3IgdmVydGV4IGRhdGEuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7V2ViR0xCdWZmZXJ9IGJ1ZmZlciBBbGxvY2F0ZWQgYnVmZmVyIHN0b3JhZ2UuXG4gICAgQHByb3Age0dMRW51bX0gdHlwZSBUaGUgdHlwZSBvZiBkYXRhIHN0b3JlZCBpbiB0aGUgYnVmZmVyLlxuICAgIEBwcm9wIHtudW1iZXJ9IGl0ZW1TaXplIE51bWJlciBvZiBhcnJheSBlbGVtZW50cyBwZXIgdmVydGV4LlxuICAgIEBwcm9wIHtudW1iZXJ9IG51bUl0ZW1zIE51bWJlciBvZiB2ZXJ0aWNlcyByZXByZXNlbnRlZC5cbiAgICBAcHJvcCB7R0xFbnVtfSB1c2FnZSBUaGUgdXNhZ2UgcGF0dGVybiBvZiB0aGUgYnVmZmVyLlxuICAgIEBwcm9wIHtib29sZWFufSBpbmRleEFycmF5IFdoZXRoZXIgdGhpcyBpcyBhbiBpbmRleCBhcnJheS5cbiAgICBAcHJvcCB7R0xFbnVtfSBiaW5kaW5nIEdMIGJpbmRpbmcgcG9pbnQgKEFSUkFZX0JVRkZFUiBvciBFTEVNRU5UX0FSUkFZX0JVRkZFUikuXG4gICAgQHByb3Age09iamVjdH0gYXBwU3RhdGUgVHJhY2tlZCBHTCBzdGF0ZS5cbiovXG5jbGFzcyBWZXJ0ZXhCdWZmZXIge1xuXG4gICAgY29uc3RydWN0b3IoZ2wsIGFwcFN0YXRlLCB0eXBlLCBpdGVtU2l6ZSwgZGF0YSwgdXNhZ2UgPSBnbC5TVEFUSUNfRFJBVywgaW5kZXhBcnJheSkge1xuICAgICAgICBsZXQgbnVtQ29sdW1ucztcbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDQ6XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQ0eDI6XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQ0eDM6XG4gICAgICAgICAgICAgICAgbnVtQ29sdW1ucyA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQzOlxuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUM3gyOlxuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUM3g0OlxuICAgICAgICAgICAgICAgIG51bUNvbHVtbnMgPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUMjpcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDJ4MzpcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDJ4NDpcbiAgICAgICAgICAgICAgICBudW1Db2x1bW5zID0gMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbnVtQ29sdW1ucyA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNDpcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDN4NDpcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDJ4NDpcbiAgICAgICAgICAgICAgICBpdGVtU2l6ZSA9IDQ7XG4gICAgICAgICAgICAgICAgdHlwZSA9IENPTlNUQU5UUy5GTE9BVDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDM6XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQ0eDM6XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyeDM6XG4gICAgICAgICAgICAgICAgaXRlbVNpemUgPSAzO1xuICAgICAgICAgICAgICAgIHR5cGUgPSBDT05TVEFOVFMuRkxPQVQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyOlxuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUM3gyOlxuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNHgyOlxuICAgICAgICAgICAgICAgIGl0ZW1TaXplID0gMjtcbiAgICAgICAgICAgICAgICB0eXBlID0gQ09OU1RBTlRTLkZMT0FUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFMZW5ndGg7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGE7XG4gICAgICAgICAgICBkYXRhICo9IENPTlNUQU5UUy5UWVBFX1NJWkVbdHlwZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUgPSBhcHBTdGF0ZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5pdGVtU2l6ZSA9IGl0ZW1TaXplO1xuICAgICAgICB0aGlzLm51bUl0ZW1zID0gZGF0YUxlbmd0aCAvIChpdGVtU2l6ZSAqIG51bUNvbHVtbnMpO1xuICAgICAgICB0aGlzLm51bUNvbHVtbnMgPSBudW1Db2x1bW5zO1xuICAgICAgICB0aGlzLnVzYWdlID0gdXNhZ2U7XG4gICAgICAgIHRoaXMuaW5kZXhBcnJheSA9ICEhaW5kZXhBcnJheTtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gdGhpcy5pbmRleEFycmF5ID8gZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIgOiBnbC5BUlJBWV9CVUZGRVI7XG5cbiAgICAgICAgZ2wuYmluZEJ1ZmZlcih0aGlzLmJpbmRpbmcsIHRoaXMuYnVmZmVyKTtcbiAgICAgICAgZ2wuYnVmZmVyRGF0YSh0aGlzLmJpbmRpbmcsIGRhdGEsIHRoaXMudXNhZ2UpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKHRoaXMuYmluZGluZywgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFVwZGF0ZSBkYXRhIGluIHRoaXMgYnVmZmVyLiBOT1RFOiB0aGUgZGF0YSBtdXN0IGZpdFxuICAgICAgICB0aGUgb3JpZ2luYWxseS1hbGxvY2F0ZWQgYnVmZmVyIVxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtWZXJ0ZXhCdWZmZXJWaWV3fSBkYXRhIERhdGEgdG8gc3RvcmUgaW4gdGhlIGJ1ZmZlci5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QnVmZmVyfSBUaGUgVmVydGV4QnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGRhdGEoZGF0YSkge1xuICAgICAgICAvLyBEb24ndCB3YW50IHRvIHVwZGF0ZSB2ZXJ0ZXggYXJyYXkgYmluZGluZ3NcbiAgICAgICAgbGV0IGN1cnJlbnRWZXJ0ZXhBcnJheSA9IHRoaXMuYXBwU3RhdGUudmVydGV4QXJyYXk7XG4gICAgICAgIGlmIChjdXJyZW50VmVydGV4QXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuYmluZGluZywgdGhpcy5idWZmZXIpO1xuICAgICAgICB0aGlzLmdsLmJ1ZmZlclN1YkRhdGEodGhpcy5iaW5kaW5nLCAwLCBkYXRhKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuYmluZGluZywgbnVsbCk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRWZXJ0ZXhBcnJheSkge1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVmVydGV4QXJyYXkoY3VycmVudFZlcnRleEFycmF5LnZlcnRleEFycmF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEZWxldGUgdGhpcyBhcnJheSBidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtWZXJ0ZXhCdWZmZXJ9IFRoZSBWZXJ0ZXhCdWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5idWZmZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuYnVmZmVyKTtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRleEJ1ZmZlcjtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCJpbXBvcnQgUGljb0dMIGZyb20gJ3BpY29nbCc7XG5cbmV4cG9ydCBjb25zdCBub29wRnJhZyA9ICcjdmVyc2lvbiAzMDAgZXNcXG52b2lkIG1haW4oKSB7fSc7XG5cbmV4cG9ydCBjb25zdCBsb2c0ID0geCA9PiAuNSAqIE1hdGgubG9nMih4KTtcblxuZXhwb3J0IGNvbnN0IGlzUG93ZXJPZjIgPSB4ID0+ICh4ICYgKHggLSAxKSkgPT09IDA7XG5cbmV4cG9ydCBjb25zdCBuZWFyZXN0UG93ZXJPZlR3byA9IHggPT4gMiAqKiBNYXRoLm1heChNYXRoLmNlaWwoTWF0aC5sb2cyKHgpKSwgMSk7XG5cbmV4cG9ydCBjb25zdCBuZWFyZXN0UG93ZXJPZkZvdXIgPSB4ID0+IDQgKiogTWF0aC5tYXgoTWF0aC5jZWlsKGxvZzQoeCkpLCAxKTtcblxuY29uc3QgRkxPQVRfRk9STUFUU19CWV9JVEVNX1NJWkUgPSB7XG4gICAgMTogW1BpY29HTC5SRUQsICBQaWNvR0wuUjMyRl0sXG4gICAgMjogW1BpY29HTC5SRywgICBQaWNvR0wuUkczMkZdLFxuICAgIDM6IFtQaWNvR0wuUkdCLCAgUGljb0dMLlJHQjMyRl0sXG4gICAgNDogW1BpY29HTC5SR0JBLCBQaWNvR0wuUkdCQTMyRl0sXG59O1xuXG5leHBvcnQgY29uc3QgaXNGbG9hdFRleHR1cmUgPSAodGV4LCBpdGVtU2l6ZSkgPT4gKFxuICAgIHRleC50eXBlID09PSBQaWNvR0wuRkxPQVQgJiZcbiAgICB0ZXguZm9ybWF0ID09PSBGTE9BVF9GT1JNQVRTX0JZX0lURU1fU0laRVtpdGVtU2l6ZV1bMF0gJiZcbiAgICB0ZXguaW50ZXJuYWxGb3JtYXQgPT09IEZMT0FUX0ZPUk1BVFNfQllfSVRFTV9TSVpFW2l0ZW1TaXplXVsxXVxuKTtcblxuZXhwb3J0IGNvbnN0IGlzRmxvYXRCdWZmZXIgPSAoYnVmLCBpdGVtU2l6ZSkgPT4gKFxuICAgIGJ1Zi50eXBlID09PSBQaWNvR0wuRkxPQVQgJiZcbiAgICBidWYuaXRlbVNpemUgPT0gaXRlbVNpemVcbik7XG5cbmV4cG9ydCBjb25zdCBpc1Vuc2lnbmVkQnVmZmVyID0gKGJ1ZiwgaXRlbVNpemUpID0+IChcbiAgICBidWYudHlwZSA9PT0gUGljb0dMLlVOU0lHTkVEX0lOVCAmJlxuICAgIGJ1Zi5pdGVtU2l6ZSA9PSBpdGVtU2l6ZVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZsb2F0VGV4dHVyZShhcHAsIHdpZHRoLCBoZWlnaHQsIGl0ZW1TaXplKSB7XG4gICAgY29uc3QgW2Zvcm1hdCwgaW50ZXJuYWxGb3JtYXRdID0gRkxPQVRfRk9STUFUU19CWV9JVEVNX1NJWkVbaXRlbVNpemVdO1xuXG4gICAgcmV0dXJuIGFwcC5jcmVhdGVUZXh0dXJlMkQod2lkdGgsIGhlaWdodCwge1xuICAgICAgICB0eXBlOiBQaWNvR0wuRkxPQVQsXG4gICAgICAgIGZvcm1hdCxcbiAgICAgICAgaW50ZXJuYWxGb3JtYXQsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRnJvbVRleHR1cmUoYXBwLCB0ZXh0dXJlKSB7XG4gICAgY29uc3QgZmIgPSBhcHAuY3JlYXRlRnJhbWVidWZmZXIoKS5jb2xvclRhcmdldCgwLCB0ZXh0dXJlKTtcbiAgICBhcHAucmVhZEZyYW1lYnVmZmVyKGZiKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGbG9hdDMyQXJyYXkoNCAqIHRleHR1cmUud2lkdGggKiB0ZXh0dXJlLmhlaWdodCk7XG4gICAgYXBwLmdsLnJlYWRQaXhlbHMoMCwgMCwgdGV4dHVyZS53aWR0aCwgdGV4dHVyZS5oZWlnaHQsIFBpY29HTC5SR0JBLCBQaWNvR0wuRkxPQVQsIHJlc3VsdCk7XG5cbiAgICBhcHAuZGVmYXVsdFJlYWRGcmFtZWJ1ZmZlcigpO1xuXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocmVzdWx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFyaWFudChleHByKSB7XG4gICAgaWYgKCFleHByKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yO1xuICAgICAgICBlcnJvci5uYW1lID0gJ0Fzc2VydGlvbkVycm9yJztcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgcGljayA9IChvYmosIHByb3BzKSA9PiBwcm9wcy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwgcHJvcCkgPT4ge1xuICAgICAgICBpZiAocHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IG9ialtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiwge30pO1xuIiwiaW1wb3J0IFBpY29HTCBmcm9tICdwaWNvZ2wnO1xuXG5pbXBvcnQge2ludmFyaWFudCwgbG9nNCwgaXNGbG9hdFRleHR1cmUsIGlzRmxvYXRCdWZmZXJ9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IGludHJvVmVydCBmcm9tICcuL2ludHJvLnZlcnQnO1xuaW1wb3J0IHJlZHVjZVZlcnQgZnJvbSAnLi9yZWR1Y2UudmVydCc7XG5pbXBvcnQgc3RvcmVGcmFnIGZyb20gJy4vc3RvcmUuZnJhZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbyhhcHAsIGRhdGEsIHBhdHRlcm4gPSBkYXRhLml0ZW1TaXplKSB7XG4gICAgaW52YXJpYW50KGlzRmxvYXRCdWZmZXIoZGF0YSwgMikgfHwgaXNGbG9hdEJ1ZmZlcihkYXRhLCAzKSB8fCBpc0Zsb2F0QnVmZmVyKGRhdGEsIDQpKTtcblxuICAgIGNvbnN0IHtnbH0gPSBhcHA7XG5cbiAgICBjb25zdCB2YW8gPSBhcHAuY3JlYXRlVmVydGV4QXJyYXkoKTtcblxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8udmVydGV4QXJyYXkpO1xuICAgIGdsLmJpbmRCdWZmZXIoZGF0YS5iaW5kaW5nLCBkYXRhLmJ1ZmZlcik7XG5cbiAgICBjb25zdCBzdGVwU2l6ZSA9IGRhdGEuaXRlbVNpemUgKiBQaWNvR0wuVFlQRV9TSVpFW1BpY29HTC5GTE9BVF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgICBQaWNvR0wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDQgKiBzdGVwU2l6ZSxcbiAgICAgICAgICAgIGkgKiBzdGVwU2l6ZVxuICAgICAgICApO1xuXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpO1xuICAgIH1cblxuICAgIHZhby5pbnN0YW5jZWQgPSBmYWxzZTtcblxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICBnbC5iaW5kQnVmZmVyKGRhdGEuYmluZGluZywgbnVsbCk7XG5cbiAgICByZXR1cm4gdmFvO1xufVxuXG5jbGFzcyBLaXQge1xuICAgIHN0YXRpYyByZWFkYWJsZShhcHAsIHByb2dyYW0sIGJ1ZmZlciwgcGF0dGVybikge1xuICAgICAgICBjb25zdCB2YW8gPSBjcmVhdGVWYW8oYXBwLCBidWZmZXIsIHBhdHRlcm4pO1xuICAgICAgICBjb25zdCBjYWxsID0gYXBwLmNyZWF0ZURyYXdDYWxsKHByb2dyYW0sIHZhbywgUGljb0dMLlBPSU5UUyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBLaXQoYnVmZmVyLCB2YW8sIGNhbGwsIG51bGwpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkdXBsZXgoYXBwLCBwcm9ncmFtLCBzaXplLCBwYXR0ZXJuKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGFwcC5jcmVhdGVWZXJ0ZXhCdWZmZXIoUGljb0dMLkZMT0FULCA0LCA0ICogTWF0aC5tYXgoc2l6ZSwgMSkpO1xuICAgICAgICBjb25zdCB2YW8gPSBjcmVhdGVWYW8oYXBwLCBidWYsIHBhdHRlcm4pO1xuICAgICAgICBjb25zdCBjYWxsID0gYXBwLmNyZWF0ZURyYXdDYWxsKHByb2dyYW0sIHZhbywgUGljb0dMLlBPSU5UUyk7XG4gICAgICAgIGNvbnN0IHRmID0gYXBwLmNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrKCkuZmVlZGJhY2tCdWZmZXIoMCwgYnVmKTtcblxuICAgICAgICByZXR1cm4gbmV3IEtpdChidWYsIHZhbywgY2FsbCwgdGYpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGJ1ZiwgdmFvLCBjYWxsLCB0Zikge1xuICAgICAgICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgICAgICAgdGhpcy52YW8gPSB2YW87XG4gICAgICAgIHRoaXMuY2FsbCA9IGNhbGw7XG4gICAgICAgIHRoaXMudGYgPSB0ZjtcbiAgICB9XG5cbiAgICBkcmF3KHNpemUsIHRmKSB7XG4gICAgICAgIHRoaXMuY2FsbC5udW1FbGVtZW50cyA9IHNpemU7XG5cbiAgICAgICAgaWYgKHRmKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGwudHJhbnNmb3JtRmVlZGJhY2sodGYpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxsLmRyYXcoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICBpbnZhcmlhbnQoYXBwLmZsb2F0UmVuZGVyVGFyZ2V0c0VuYWJsZWQpO1xuXG4gICAgY29uc3QgbWFyayA9IFN5bWJvbCgpO1xuXG4gICAgY29uc3QgaW50cm9Qcm9nID0gYXBwLmNyZWF0ZVByb2dyYW0oaW50cm9WZXJ0LCBzdG9yZUZyYWcsIFsncmVzdWx0J10pO1xuICAgIGNvbnN0IHJlZHVjZVByb2cgPSBhcHAuY3JlYXRlUHJvZ3JhbShyZWR1Y2VWZXJ0LCBzdG9yZUZyYWcsIFsncmVzdWx0J10pO1xuXG4gICAgbGV0IE4gPSAtMTtcbiAgICBsZXQgdGVtcEEgPSBudWxsO1xuICAgIGxldCB0ZW1wQiA9IG51bGw7XG4gICAgbGV0IHN0ZXBDb3VudCA9IC0xO1xuXG4gICAgLy8gMS00OiBkYXRhIC0tKGludHJvKS0+IHJlc3VsdFxuICAgIC8vIDUtMTY6IGRhdGEgLS0oaW50cm8pLT4gdGVtcEEgLS0ocmVkdWNlKS0+IHJlc3VsdFxuICAgIC8vIDE3LTY0OiBkYXRhIC0tKGludHJvKS0+IHRlbXBBIC0tKHJlZHVjZSktPiB0ZW1wQiAtLShyZWR1Y2UpLT4gcmVzdWx0XG4gICAgLy8gLi4uOiBkYXRhIC0tKGludHJvKS0+IHRlbXBBIC0tKHJlZHVjZSktPiB0ZW1wQiAtLShyZWR1Y2UpLT4gdGVtcEEgLi4uXG5cbiAgICByZXR1cm4gKGRhdGEsIHJlc3VsdCkgPT4ge1xuICAgICAgICBsZXQgYWN0aXZlS2l0ID0gZGF0YVttYXJrXTtcblxuICAgICAgICBpbnZhcmlhbnQoTiA9PT0gLTEgfHwgTiA9PT0gZGF0YS5udW1JdGVtcyk7XG5cbiAgICAgICAgaWYgKCFhY3RpdmVLaXQpIHtcbiAgICAgICAgICAgIGFjdGl2ZUtpdCA9IGRhdGFbbWFya10gPSBLaXQucmVhZGFibGUoYXBwLCBpbnRyb1Byb2csIGRhdGEsIDIpO1xuXG4gICAgICAgICAgICBOID0gZGF0YS5udW1JdGVtcztcbiAgICAgICAgICAgIHN0ZXBDb3VudCA9IE1hdGgubWF4KE1hdGguY2VpbChsb2c0KE4pKSwgMSk7XG5cbiAgICAgICAgICAgIHRlbXBBID0gS2l0LmR1cGxleChhcHAsIHJlZHVjZVByb2csIDQgKiogKHN0ZXBDb3VudCAtIDEpKTtcbiAgICAgICAgICAgIHRlbXBCID0gS2l0LmR1cGxleChhcHAsIHJlZHVjZVByb2csIDQgKiogKHN0ZXBDb3VudCAtIDIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHRGYiA9IHJlc3VsdFttYXJrXTtcblxuICAgICAgICBpZiAoIXJlc3VsdEZiKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdFRleHR1cmUocmVzdWx0LCA0KSk7XG5cbiAgICAgICAgICAgIHJlc3VsdEZiID0gcmVzdWx0W21hcmtdID0gYXBwLmNyZWF0ZUZyYW1lYnVmZmVyKClcbiAgICAgICAgICAgICAgICAuY29sb3JUYXJnZXQoMCwgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2ZUtpdC5jYWxsLnVuaWZvcm0oJ04nLCBOKTtcblxuICAgICAgICBhcHAubm9SYXN0ZXJpemUoKTtcblxuICAgICAgICBmb3IgKGxldCBzaXplID0gNCAqKiAoc3RlcENvdW50IC0gMSk7IHNpemUgPiAxOyBzaXplIC89IDQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRLaXQgPSBhY3RpdmVLaXQgPT09IHRlbXBBID8gdGVtcEIgOiB0ZW1wQTtcblxuICAgICAgICAgICAgYWN0aXZlS2l0LmRyYXcoc2l6ZSwgbmV4dEtpdC50Zik7XG5cbiAgICAgICAgICAgIGFjdGl2ZUtpdCA9IG5leHRLaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBhcHBcbiAgICAgICAgICAgIC5yYXN0ZXJpemUoKVxuICAgICAgICAgICAgLmRyYXdGcmFtZWJ1ZmZlcihyZXN1bHRGYilcbiAgICAgICAgICAgIC52aWV3cG9ydCgwLCAwLCAxLCAxKTtcblxuICAgICAgICBhY3RpdmVLaXQuZHJhdygxKTtcblxuICAgICAgICByZXR1cm4gc3RlcENvdW50O1xuICAgIH07XG59XG4iLCJpbXBvcnQgUGljb0dMIGZyb20gJ3BpY29nbCc7XG5cbmltcG9ydCB7aW52YXJpYW50LCBpc0Zsb2F0VGV4dHVyZSwgaXNGbG9hdEJ1ZmZlcn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgYXNzZW1ibGVWZXJ0IGZyb20gJy4vYXNzZW1ibGUudmVydCc7XG5pbXBvcnQgc3RvcmVGcmFnIGZyb20gJy4vc3RvcmUuZnJhZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICBpbnZhcmlhbnQoYXBwLmZsb2F0UmVuZGVyVGFyZ2V0c0VuYWJsZWQpO1xuXG4gICAgY29uc3QgbWFyayA9IFN5bWJvbCgpO1xuXG4gICAgY29uc3QgcHJvZyA9IGFwcC5jcmVhdGVQcm9ncmFtKGFzc2VtYmxlVmVydCwgc3RvcmVGcmFnKTtcblxuICAgIHJldHVybiAocG9zaXRpb25zLCBtYXNzZXMsIGJvdW5kcywgcmVzdWx0KSA9PiB7XG4gICAgICAgIGxldCBjYWxsID0gcG9zaXRpb25zW21hcmtdO1xuXG4gICAgICAgIGlmICghY2FsbCkge1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRCdWZmZXIocG9zaXRpb25zLCAyKSk7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdEJ1ZmZlcihtYXNzZXMsIDEpKTtcbiAgICAgICAgICAgIGludmFyaWFudChwb3NpdGlvbnMubnVtSXRlbXMgPT09IG1hc3Nlcy5udW1JdGVtcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbyA9IGFwcC5jcmVhdGVWZXJ0ZXhBcnJheSgpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigwLCBwb3NpdGlvbnMpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigxLCBtYXNzZXMpO1xuXG4gICAgICAgICAgICBjYWxsID0gcG9zaXRpb25zW21hcmtdID0gYXBwLmNyZWF0ZURyYXdDYWxsKHByb2csIHZhbywgUGljb0dMLlBPSU5UUyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmIgPSByZXN1bHRbbWFya107XG5cbiAgICAgICAgaWYgKCFmYikge1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKHJlc3VsdCwgNCkpO1xuXG4gICAgICAgICAgICBmYiA9IHJlc3VsdFttYXJrXSA9IGFwcC5jcmVhdGVGcmFtZWJ1ZmZlcigpXG4gICAgICAgICAgICAgICAgLmNvbG9yVGFyZ2V0KDAsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdFRleHR1cmUoYm91bmRzLCA0KSk7XG4gICAgICAgIGludmFyaWFudChib3VuZHMud2lkdGggPT09IDEgJiYgYm91bmRzLmhlaWdodCA9PT0gMSk7XG5cbiAgICAgICAgY2FsbFxuICAgICAgICAgICAgLy8gVE9ETzogY2FuIHdlIGF2b2lkIGJvcmRlcnM/XG4gICAgICAgICAgICAudW5pZm9ybSgnYm9yZGVyJywgWzEgLSAxL3Jlc3VsdC53aWR0aCwgMSAtIDEvcmVzdWx0LmhlaWdodF0pXG4gICAgICAgICAgICAudGV4dHVyZSgnYm91bmRzJywgYm91bmRzKTtcblxuICAgICAgICBhcHBcbiAgICAgICAgICAgIC5kcmF3RnJhbWVidWZmZXIoZmIpXG4gICAgICAgICAgICAudmlld3BvcnQoMCwgMCwgcmVzdWx0LndpZHRoLCByZXN1bHQuaGVpZ2h0KVxuICAgICAgICAgICAgLmNsZWFyTWFzayhQaWNvR0wuQ09MT1JfQlVGRkVSX0JJVClcbiAgICAgICAgICAgIC5jbGVhckNvbG9yKDAsIDAsIDAsIDApXG4gICAgICAgICAgICAuY2xlYXIoKVxuICAgICAgICAgICAgLmJsZW5kRnVuYyhQaWNvR0wuT05FLCBQaWNvR0wuT05FKVxuICAgICAgICAgICAgLmJsZW5kKCk7XG5cbiAgICAgICAgY2FsbC5kcmF3KCk7XG5cbiAgICAgICAgYXBwLm5vQmxlbmQoKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IFBpY29HTCBmcm9tICdwaWNvZ2wnO1xuXG5pbXBvcnQge2ludmFyaWFudCwgaXNQb3dlck9mMiwgaXNGbG9hdFRleHR1cmUsIGNyZWF0ZUZsb2F0VGV4dHVyZX0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgcXVhZFZlcnQgZnJvbSAnLi9xdWFkLnZlcnQnO1xuaW1wb3J0IHJlZHVjZUZyYWcgZnJvbSAnLi9yZWR1Y2UuZnJhZyc7XG5cbmNvbnN0IFFVQUQgPSBuZXcgRmxvYXQzMkFycmF5KFstMSwgMSwgLTEsIC0xLCAxLCAxLCAxLCAtMV0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgaW52YXJpYW50KGFwcC5mbG9hdFJlbmRlclRhcmdldHNFbmFibGVkKTtcblxuICAgIGNvbnN0IHtnbH0gPSBhcHA7XG5cbiAgICBjb25zdCBtYXJrID0gU3ltYm9sKCk7XG5cbiAgICBjb25zdCBwcm9nID0gYXBwLmNyZWF0ZVByb2dyYW0ocXVhZFZlcnQsIHJlZHVjZUZyYWcpO1xuXG4gICAgY29uc3QgYnVmID0gYXBwLmNyZWF0ZVZlcnRleEJ1ZmZlcihQaWNvR0wuRkxPQVQsIDIsIFFVQUQpO1xuICAgIGNvbnN0IHZhbyA9IGFwcC5jcmVhdGVWZXJ0ZXhBcnJheSgpLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigwLCBidWYpO1xuICAgIGNvbnN0IGNhbGwgPSBhcHAuY3JlYXRlRHJhd0NhbGwocHJvZywgdmFvLCBQaWNvR0wuVFJJQU5HTEVfU1RSSVApO1xuXG4gICAgcmV0dXJuIChncmlkLCByZXN1bHQpID0+IHtcbiAgICAgICAgaW52YXJpYW50KGdyaWQud2lkdGggPT09IGdyaWQuaGVpZ2h0KTtcbiAgICAgICAgaW52YXJpYW50KGdyaWQud2lkdGggPj0gOCk7XG4gICAgICAgIGludmFyaWFudChpc1Bvd2VyT2YyKGdyaWQud2lkdGgpKTtcbiAgICAgICAgaW52YXJpYW50KGdyaWQud2lkdGggPT09IHJlc3VsdC53aWR0aCArIDIpO1xuICAgICAgICBpbnZhcmlhbnQoZ3JpZC5oZWlnaHQgPT09IDIgKiByZXN1bHQuaGVpZ2h0KTtcbiAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKGdyaWQsIDQpKTtcbiAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKHJlc3VsdCwgNCkpO1xuXG4gICAgICAgIGxldCBpbnRlcmltID0gZ3JpZFttYXJrXTtcblxuICAgICAgICBpZiAoIWludGVyaW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRleEEgPSBjcmVhdGVGbG9hdFRleHR1cmUoYXBwLCBncmlkLndpZHRoIC8gMiwgZ3JpZC5oZWlnaHQgLyAyLCA0KTtcbiAgICAgICAgICAgIGNvbnN0IHRleEIgPSBjcmVhdGVGbG9hdFRleHR1cmUoYXBwLCBncmlkLndpZHRoIC8gNCwgZ3JpZC5oZWlnaHQgLyA0LCA0KTtcblxuICAgICAgICAgICAgY29uc3QgZmJBID0gYXBwLmNyZWF0ZUZyYW1lYnVmZmVyKCkuY29sb3JUYXJnZXQoMCwgdGV4QSk7XG4gICAgICAgICAgICBjb25zdCBmYkIgPSBhcHAuY3JlYXRlRnJhbWVidWZmZXIoKS5jb2xvclRhcmdldCgwLCB0ZXhCKTtcblxuICAgICAgICAgICAgaW50ZXJpbSA9IGdyaWRbbWFya10gPSB7dGV4QSwgdGV4QiwgZmJBLCBmYkJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3RleEEsIHRleEIsIGZiQSwgZmJCfSA9IGludGVyaW07XG5cbiAgICAgICAgLy8gZ3JpZCAtLT4gdGV4QSAtLT4gdGV4QiAtLT4gdGV4QSAtLT4gLi5cbiAgICAgICAgbGV0IGFjdGl2ZUZiID0gZmJBO1xuICAgICAgICBsZXQgYWN0aXZlVGV4ID0gZ3JpZDtcblxuICAgICAgICBmb3IgKGxldCBzaXplID0gZ3JpZC53aWR0aCAvIDIsIG9mZnNldCA9IDA7IHNpemUgPiAxOyBvZmZzZXQgKz0gc2l6ZSwgc2l6ZSAvPSAyKSB7XG4gICAgICAgICAgICBhcHBcbiAgICAgICAgICAgICAgICAucmVhZEZyYW1lYnVmZmVyKGFjdGl2ZUZiKVxuICAgICAgICAgICAgICAgIC5kcmF3RnJhbWVidWZmZXIoYWN0aXZlRmIpXG4gICAgICAgICAgICAgICAgLnZpZXdwb3J0KDAsIDAsIHNpemUsIHNpemUpO1xuXG4gICAgICAgICAgICBjYWxsXG4gICAgICAgICAgICAgICAgLnRleHR1cmUoJ2xldmVsJywgYWN0aXZlVGV4KVxuICAgICAgICAgICAgICAgIC5kcmF3KCk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGhvdyBtdWNoIGRvZXMgY29weWluZyBjb3N0P1xuICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgcmVzdWx0LnRleHR1cmUpO1xuICAgICAgICAgICAgZ2wuY29weVRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgb2Zmc2V0LCAwLCAwLCAwLCBzaXplLCBzaXplKTtcblxuICAgICAgICAgICAgYWN0aXZlRmIgPSBhY3RpdmVGYiA9PT0gZmJBID8gZmJCIDogZmJBO1xuICAgICAgICAgICAgYWN0aXZlVGV4ID0gYWN0aXZlVGV4ID09PSB0ZXhBID8gdGV4QiA6IHRleEE7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiaW1wb3J0IFBpY29HTCBmcm9tICdwaWNvZ2wnO1xuXG5pbXBvcnQge2ludmFyaWFudCwgaXNGbG9hdFRleHR1cmUsIGlzVW5zaWduZWRCdWZmZXIsIGlzRmxvYXRCdWZmZXJ9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IHNpbXVsYXRlVmVydCBmcm9tICcuL3NpbXVsYXRlLnZlcnQnO1xuaW1wb3J0IHN0b3JlRnJhZyBmcm9tICcuL3N0b3JlLmZyYWcnO1xuXG5jb25zdCB7RkxPQVR9ID0gUGljb0dMO1xuY29uc3QgQ09OU1RBTlRTX0xBWU9VVCA9IFtGTE9BVCwgRkxPQVQsIEZMT0FULCBGTE9BVCwgRkxPQVQsIEZMT0FULCBGTE9BVCwgRkxPQVRdO1xuXG5mdW5jdGlvbiBzYXZlQ29uc3RhbnRzKGNvbnN0cywgdWIpIHtcbiAgICB1Yi5zZXQoMCwgY29uc3RzLm5vZGVDb3VudCk7XG4gICAgdWIuc2V0KDEsIGNvbnN0cy5kZWx0YVQpO1xuICAgIHViLnNldCgyLCBjb25zdHMuc3ByaW5nQ29lZik7XG4gICAgdWIuc2V0KDMsIGNvbnN0cy5zcHJpbmdMZW5ndGgpO1xuICAgIHViLnNldCg0LCBjb25zdHMucmVwdWxzZUNvZWYpO1xuICAgIHViLnNldCg1LCBjb25zdHMudGhldGEgKiBjb25zdHMudGhldGEpO1xuICAgIHViLnNldCg2LCBjb25zdHMuZHJhZ0NvZWYpO1xuICAgIHViLnNldCg3LCBjb25zdHMuZ3Jhdml0eUNvZWYpO1xuICAgIHViLnVwZGF0ZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgaW52YXJpYW50KGFwcC5mbG9hdFJlbmRlclRhcmdldHNFbmFibGVkKTtcblxuICAgIGNvbnN0IG1hcmsgPSBTeW1ib2woKTtcblxuICAgIGNvbnN0IGNvbnN0YW50c1VCID0gYXBwLmNyZWF0ZVVuaWZvcm1CdWZmZXIoQ09OU1RBTlRTX0xBWU9VVCk7XG5cbiAgICBjb25zdCBwcm9nID0gYXBwLmNyZWF0ZVByb2dyYW0oc2ltdWxhdGVWZXJ0LCBzdG9yZUZyYWcsIFsncmVzdWx0UG9zaXRpb24nLCAncmVzdWx0VmVsb2NpdHknXSk7XG5cbiAgICBsZXQgcHJldkNvbnN0YW50cyA9IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICBwb3NpdGlvbnMsIHZlbG9jaXRpZXMsIG1hc3NlcywgZWRnZXNMb2NzLFxuICAgICAgICBib3VuZHMsIHB5cmFtaWQsIGdyaWQsIGFsbFBvc2l0aW9ucywgZWRnZXMsXG4gICAgICAgIGNvbnN0YW50cyxcbiAgICAgICAgcmVzdWx0UG9zaXRpb25zLCByZXN1bHRWZWxvY2l0aWVzLFxuICAgICAgICByZXN1bHRBbGxQb3NpdGlvbnMsXG4gICAgKSA9PiB7XG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShweXJhbWlkLCA0KSk7XG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShncmlkLCA0KSk7XG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShhbGxQb3NpdGlvbnMsIDIpKTtcbiAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKGVkZ2VzLCAzKSk7XG4gICAgICAgIGludmFyaWFudChhbGxQb3NpdGlvbnMud2lkdGggPT09IHJlc3VsdEFsbFBvc2l0aW9ucy53aWR0aCk7XG4gICAgICAgIGludmFyaWFudChweXJhbWlkLndpZHRoID09PSAyICogcHlyYW1pZC5oZWlnaHQgLSAyKTtcbiAgICAgICAgaW52YXJpYW50KHB5cmFtaWQuaGVpZ2h0ID49IDIpO1xuICAgICAgICBpbnZhcmlhbnQoZ3JpZC53aWR0aCA9PSBncmlkLmhlaWdodCk7XG4gICAgICAgIGludmFyaWFudCgyICogcHlyYW1pZC5oZWlnaHQgPT09IGdyaWQuaGVpZ2h0KTtcbiAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKGJvdW5kcywgNCkpO1xuICAgICAgICBpbnZhcmlhbnQoYm91bmRzLndpZHRoID09PSAxICYmIGJvdW5kcy5oZWlnaHQgPT09IDEpO1xuXG4gICAgICAgIGlmIChjb25zdGFudHMgIT09IHByZXZDb25zdGFudHMpIHtcbiAgICAgICAgICAgIHNhdmVDb25zdGFudHMoY29uc3RhbnRzLCBjb25zdGFudHNVQik7XG5cbiAgICAgICAgICAgIHByZXZDb25zdGFudHMgPSBjb25zdGFudHM7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FsbCA9IHBvc2l0aW9uc1ttYXJrXTtcblxuICAgICAgICBpZiAoIWNhbGwpIHtcbiAgICAgICAgICAgIGludmFyaWFudChpc0Zsb2F0QnVmZmVyKHBvc2l0aW9ucywgMikpO1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRCdWZmZXIodmVsb2NpdGllcywgMikpO1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRCdWZmZXIocmVzdWx0UG9zaXRpb25zLCAyKSk7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdEJ1ZmZlcihyZXN1bHRWZWxvY2l0aWVzLCAyKSk7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdEJ1ZmZlcihtYXNzZXMsIDEpKTtcbiAgICAgICAgICAgIGludmFyaWFudChpc1Vuc2lnbmVkQnVmZmVyKGVkZ2VzTG9jcywgMikpO1xuICAgICAgICAgICAgaW52YXJpYW50KHBvc2l0aW9ucy5udW1JdGVtcyA9PT0gdmVsb2NpdGllcy5udW1JdGVtcyk7XG4gICAgICAgICAgICBpbnZhcmlhbnQocG9zaXRpb25zLm51bUl0ZW1zID09PSByZXN1bHRQb3NpdGlvbnMubnVtSXRlbXMpO1xuICAgICAgICAgICAgaW52YXJpYW50KHBvc2l0aW9ucy5udW1JdGVtcyA9PT0gcmVzdWx0VmVsb2NpdGllcy5udW1JdGVtcyk7XG4gICAgICAgICAgICBpbnZhcmlhbnQocG9zaXRpb25zLm51bUl0ZW1zID09PSBlZGdlc0xvY3MubnVtSXRlbXMpO1xuICAgICAgICAgICAgaW52YXJpYW50KHBvc2l0aW9ucy5udW1JdGVtcyA9PT0gbWFzc2VzLm51bUl0ZW1zKTtcblxuICAgICAgICAgICAgY29uc3QgdmFvID0gYXBwLmNyZWF0ZVZlcnRleEFycmF5KClcbiAgICAgICAgICAgICAgICAudmVydGV4QXR0cmlidXRlQnVmZmVyKDAsIHBvc2l0aW9ucylcbiAgICAgICAgICAgICAgICAudmVydGV4QXR0cmlidXRlQnVmZmVyKDEsIHZlbG9jaXRpZXMpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigyLCBtYXNzZXMpXG4gICAgICAgICAgICAgICAgLnZlcnRleEludGVnZXJBdHRyaWJ1dGVCdWZmZXIoMywgZWRnZXNMb2NzKTtcblxuICAgICAgICAgICAgY29uc3QgdGYgPSBhcHAuY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2soKVxuICAgICAgICAgICAgICAgIC5mZWVkYmFja0J1ZmZlcigwLCByZXN1bHRQb3NpdGlvbnMpXG4gICAgICAgICAgICAgICAgLmZlZWRiYWNrQnVmZmVyKDEsIHJlc3VsdFZlbG9jaXRpZXMpO1xuXG4gICAgICAgICAgICBjYWxsID0gYXBwLmNyZWF0ZURyYXdDYWxsKHByb2csIHZhbywgUGljb0dMLlBPSU5UUylcbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtRmVlZGJhY2sodGYpO1xuXG4gICAgICAgICAgICBwb3NpdGlvbnNbbWFya10gPSB2ZWxvY2l0aWVzW21hcmtdID0gY2FsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGludmFyaWFudChwb3NpdGlvbnNbbWFya10gPT09IHZlbG9jaXRpZXNbbWFya10pO1xuXG4gICAgICAgIGxldCBmYiA9IHJlc3VsdEFsbFBvc2l0aW9uc1ttYXJrXTtcblxuICAgICAgICBpZiAoIWZiKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdFRleHR1cmUocmVzdWx0QWxsUG9zaXRpb25zLCAyKSk7XG5cbiAgICAgICAgICAgIGZiID0gcmVzdWx0QWxsUG9zaXRpb25zW21hcmtdID0gYXBwLmNyZWF0ZUZyYW1lYnVmZmVyKCkuY29sb3JUYXJnZXQoMCwgcmVzdWx0QWxsUG9zaXRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcFxuICAgICAgICAgICAgLmRyYXdGcmFtZWJ1ZmZlcihmYilcbiAgICAgICAgICAgIC52aWV3cG9ydCgwLCAwLCByZXN1bHRBbGxQb3NpdGlvbnMud2lkdGgsIHJlc3VsdEFsbFBvc2l0aW9ucy5oZWlnaHQpO1xuXG4gICAgICAgIGNhbGxcbiAgICAgICAgICAgIC51bmlmb3JtQmxvY2soJ0NvbnN0YW50cycsIGNvbnN0YW50c1VCKVxuICAgICAgICAgICAgLnRleHR1cmUoJ3B5cmFtaWQnLCBweXJhbWlkKVxuICAgICAgICAgICAgLnRleHR1cmUoJ2dyaWQnLCBncmlkKVxuICAgICAgICAgICAgLnRleHR1cmUoJ3Bvc2l0aW9ucycsIGFsbFBvc2l0aW9ucylcbiAgICAgICAgICAgIC50ZXh0dXJlKCdlZGdlcycsIGVkZ2VzKVxuICAgICAgICAgICAgLnRleHR1cmUoJ2JvdW5kcycsIGJvdW5kcylcbiAgICAgICAgICAgIC5kcmF3KCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCBQaWNvR0wgZnJvbSAncGljb2dsJztcblxuaW1wb3J0IHtcbiAgICBpbnZhcmlhbnQsXG4gICAgY3JlYXRlRmxvYXRUZXh0dXJlLCBpc0Zsb2F0VGV4dHVyZSwgcmVhZEZyb21UZXh0dXJlLFxuICAgIGlzRmxvYXRCdWZmZXIsXG59IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IGxvY2F0ZVZlcnQgZnJvbSAnLi9sb2NhdGUudmVydCc7XG5pbXBvcnQgc3RvcmVGcmFnIGZyb20gJy4vc3RvcmUuZnJhZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICBjb25zdCBtYXJrID0gU3ltYm9sKCk7XG5cbiAgICBjb25zdCBwcm9nID0gYXBwLmNyZWF0ZVByb2dyYW0obG9jYXRlVmVydCwgc3RvcmVGcmFnKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGNyZWF0ZUZsb2F0VGV4dHVyZShhcHAsIDEsIDEsIDQpXG4gICAgICAgIC5kYXRhKG5ldyBGbG9hdDMyQXJyYXkoNCkpO1xuXG4gICAgY29uc3QgZmIgPSBhcHAuY3JlYXRlRnJhbWVidWZmZXIoKVxuICAgICAgICAgICAgLmNvbG9yVGFyZ2V0KDAsIHJlc3VsdCk7XG5cbiAgICByZXR1cm4gKHBvc2l0aW9ucywgY3Vyc29yKSA9PiB7XG4gICAgICAgIGxldCBjYWxsID0gcG9zaXRpb25zW21hcmtdO1xuXG4gICAgICAgIGlmICghY2FsbCkge1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRCdWZmZXIocG9zaXRpb25zLCAyKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbyA9IGFwcC5jcmVhdGVWZXJ0ZXhBcnJheSgpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigwLCBwb3NpdGlvbnMpO1xuXG4gICAgICAgICAgICBjYWxsID0gcG9zaXRpb25zW21hcmtdID0gYXBwLmNyZWF0ZURyYXdDYWxsKHByb2csIHZhbywgUGljb0dMLlBPSU5UUyk7XG4gICAgICAgIH1cblxuICAgICAgICBhcHBcbiAgICAgICAgICAgIC5kcmF3RnJhbWVidWZmZXIoZmIpXG4gICAgICAgICAgICAudmlld3BvcnQoMCwgMCwgMSwgMSlcbiAgICAgICAgICAgIC5jbGVhck1hc2soUGljb0dMLkNPTE9SX0JVRkZFUl9CSVQpXG4gICAgICAgICAgICAuY2xlYXJDb2xvcigtMSwgLTEsIC0xLCAtMSlcbiAgICAgICAgICAgIC5jbGVhcigpO1xuXG4gICAgICAgIGNhbGxcbiAgICAgICAgICAgIC51bmlmb3JtKCdjdXJzb3InLCBjdXJzb3IpXG4gICAgICAgICAgICAuZHJhdygpO1xuXG4gICAgICAgIHJldHVybiByZWFkRnJvbVRleHR1cmUoYXBwLCByZXN1bHQpWzBdIHwgMDtcbiAgICB9O1xufVxuIiwiaW1wb3J0IFBpY29HTCBmcm9tICdwaWNvZ2wnO1xuXG5pbXBvcnQge2ludmFyaWFudCwgaXNGbG9hdFRleHR1cmUsIGlzRmxvYXRCdWZmZXJ9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IGFzc2VtYmxlVmVydCBmcm9tICcuL2Fzc2VtYmxlLnZlcnQnO1xuaW1wb3J0IHNlbGVjdEZyYWcgZnJvbSAnLi9zZWxlY3QuZnJhZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICBpbnZhcmlhbnQoYXBwLmZsb2F0UmVuZGVyVGFyZ2V0c0VuYWJsZWQpO1xuXG4gICAgY29uc3QgbWFyayA9IFN5bWJvbCgpO1xuXG4gICAgY29uc3QgcHJvZyA9IGFwcC5jcmVhdGVQcm9ncmFtKGFzc2VtYmxlVmVydCwgc2VsZWN0RnJhZyk7XG5cbiAgICByZXR1cm4gKHBvc2l0aW9ucywgbWFzc2VzLCB2aWV3cG9ydCwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGxldCBjYWxsID0gcG9zaXRpb25zW21hcmtdO1xuXG4gICAgICAgIGlmICghY2FsbCkge1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRCdWZmZXIocG9zaXRpb25zLCAyKSk7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdEJ1ZmZlcihtYXNzZXMsIDEpKTtcbiAgICAgICAgICAgIGludmFyaWFudChwb3NpdGlvbnMubnVtSXRlbXMgPT09IG1hc3Nlcy5udW1JdGVtcyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbyA9IGFwcC5jcmVhdGVWZXJ0ZXhBcnJheSgpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigwLCBwb3NpdGlvbnMpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigxLCBtYXNzZXMpO1xuXG4gICAgICAgICAgICBjYWxsID0gcG9zaXRpb25zW21hcmtdID0gYXBwLmNyZWF0ZURyYXdDYWxsKHByb2csIHZhbywgUGljb0dMLlBPSU5UUyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmIgPSByZXN1bHRbbWFya107XG5cbiAgICAgICAgaWYgKCFmYikge1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKHJlc3VsdCwgMSkpO1xuXG4gICAgICAgICAgICBmYiA9IHJlc3VsdFttYXJrXSA9IGFwcC5jcmVhdGVGcmFtZWJ1ZmZlcigpXG4gICAgICAgICAgICAgICAgLmNvbG9yVGFyZ2V0KDAsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnZhcmlhbnQodmlld3BvcnQubGVuZ3RoID09PSA0KTtcblxuICAgICAgICBjYWxsXG4gICAgICAgICAgICAudW5pZm9ybSgndmlld3BvcnQnLCB2aWV3cG9ydCk7XG5cbiAgICAgICAgYXBwXG4gICAgICAgICAgICAuZHJhd0ZyYW1lYnVmZmVyKGZiKVxuICAgICAgICAgICAgLnZpZXdwb3J0KDAsIDAsIHJlc3VsdC53aWR0aCwgcmVzdWx0LmhlaWdodClcbiAgICAgICAgICAgIC5jbGVhck1hc2soUGljb0dMLkNPTE9SX0JVRkZFUl9CSVQpXG4gICAgICAgICAgICAuY2xlYXJDb2xvcigtMSwgLTEsIC0xLCAtMSlcbiAgICAgICAgICAgIC5jbGVhcigpXG4gICAgICAgICAgICAuYmxlbmRGdW5jKFBpY29HTC5PTkUsIFBpY29HTC5PTkUpXG4gICAgICAgICAgICAuYmxlbmQoKTtcblxuICAgICAgICBhcHAuZ2wuYmxlbmRFcXVhdGlvbihhcHAuZ2wuTUFYKTtcblxuICAgICAgICBjYWxsLmRyYXcoKTtcblxuICAgICAgICBhcHAuZ2wuYmxlbmRFcXVhdGlvbihhcHAuZ2wuRlVOQ19BREQpO1xuICAgICAgICBhcHAubm9CbGVuZCgpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgUGljb0dMIGZyb20gJ3BpY29nbCc7XG5cbmltcG9ydCB7aW52YXJpYW50LCBpc0Zsb2F0VGV4dHVyZSwgaXNGbG9hdEJ1ZmZlcn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgbG9jYXRlVmVydCBmcm9tICcuL2xvY2F0ZS52ZXJ0JztcbmltcG9ydCBjb2xvckZyYWcgZnJvbSAnLi9jb2xvci5mcmFnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICAgIGNvbnN0IG1hcmsgPSBTeW1ib2woKTtcblxuICAgIGNvbnN0IHByb2cgPSBhcHAuY3JlYXRlUHJvZ3JhbShsb2NhdGVWZXJ0LCBjb2xvckZyYWcpO1xuXG4gICAgcmV0dXJuIChjb3JuZXJzLCBwb3NpdGlvbnMsIG5vZGVDb3VudCkgPT4ge1xuICAgICAgICBsZXQgY2FsbCA9IGNvcm5lcnNbbWFya107XG5cbiAgICAgICAgaWYgKCFjYWxsKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdEJ1ZmZlcihjb3JuZXJzLCAyKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbyA9IGFwcC5jcmVhdGVWZXJ0ZXhBcnJheSgpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigwLCBjb3JuZXJzKTtcblxuICAgICAgICAgICAgY2FsbCA9IGNvcm5lcnNbbWFya10gPSBhcHAuY3JlYXRlRHJhd0NhbGwocHJvZywgdmFvLCBQaWNvR0wuVFJJQU5HTEVTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShwb3NpdGlvbnMsIDIpKTtcblxuICAgICAgICBhcHBcbiAgICAgICAgICAgIC5kZWZhdWx0RHJhd0ZyYW1lYnVmZmVyKClcbiAgICAgICAgICAgIC52aWV3cG9ydCgwLCAwLCBhcHAud2lkdGgsIGFwcC5oZWlnaHQpO1xuXG4gICAgICAgIGNhbGwubnVtRWxlbWVudHMgPSA2ICogbm9kZUNvdW50O1xuXG4gICAgICAgIGNhbGxcbiAgICAgICAgICAgIC51bmlmb3JtKCdpbnZTaGFwZScsIFsxL2FwcC53aWR0aCwgMS9hcHAuaGVpZ2h0XSlcbiAgICAgICAgICAgIC50ZXh0dXJlKCdwb3NpdGlvbnMnLCBwb3NpdGlvbnMpXG4gICAgICAgICAgICAuZHJhdygpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgUGljb0dMIGZyb20gJ3BpY29nbCc7XG5cbmltcG9ydCB7aW52YXJpYW50LCBpc0Zsb2F0VGV4dHVyZSwgaXNVbnNpZ25lZEJ1ZmZlcn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgbG9jYXRlVmVydCBmcm9tICcuL2xvY2F0ZS52ZXJ0JztcbmltcG9ydCBjb2xvckZyYWcgZnJvbSAnLi9jb2xvci5mcmFnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICAgIGNvbnN0IG1hcmsgPSBTeW1ib2woKTtcblxuICAgIGNvbnN0IHByb2cgPSBhcHAuY3JlYXRlUHJvZ3JhbShsb2NhdGVWZXJ0LCBjb2xvckZyYWcpO1xuXG4gICAgcmV0dXJuIChlbmRwb2ludHMsIHBvc2l0aW9ucykgPT4ge1xuICAgICAgICBsZXQgY2FsbCA9IGVuZHBvaW50c1ttYXJrXTtcblxuICAgICAgICBpZiAoIWNhbGwpIHtcbiAgICAgICAgICAgIGludmFyaWFudChpc1Vuc2lnbmVkQnVmZmVyKGVuZHBvaW50cywgMSkpO1xuXG4gICAgICAgICAgICBjb25zdCB2YW8gPSBhcHAuY3JlYXRlVmVydGV4QXJyYXkoKVxuICAgICAgICAgICAgICAgIC52ZXJ0ZXhJbnRlZ2VyQXR0cmlidXRlQnVmZmVyKDAsIGVuZHBvaW50cyk7XG5cbiAgICAgICAgICAgIGNhbGwgPSBlbmRwb2ludHNbbWFya10gPSBhcHAuY3JlYXRlRHJhd0NhbGwocHJvZywgdmFvLCBQaWNvR0wuTElORVMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKHBvc2l0aW9ucywgMikpO1xuXG4gICAgICAgIGFwcFxuICAgICAgICAgICAgLmRlZmF1bHREcmF3RnJhbWVidWZmZXIoKVxuICAgICAgICAgICAgLnZpZXdwb3J0KDAsIDAsIGFwcC53aWR0aCwgYXBwLmhlaWdodCk7XG5cbiAgICAgICAgY2FsbFxuICAgICAgICAgICAgLnVuaWZvcm0oJ2ludlNoYXBlJywgWzEvYXBwLndpZHRoLCAxL2FwcC5oZWlnaHRdKVxuICAgICAgICAgICAgLnRleHR1cmUoJ3Bvc2l0aW9ucycsIHBvc2l0aW9ucylcbiAgICAgICAgICAgIC5kcmF3KCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCBQaWNvR0wgZnJvbSAncGljb2dsJztcblxuaW1wb3J0IHtpbnZhcmlhbnQsIGlzRmxvYXRUZXh0dXJlLCBpc0Zsb2F0QnVmZmVyfSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCBsb2NhdGVWZXJ0IGZyb20gJy4vbG9jYXRlLnZlcnQnO1xuaW1wb3J0IGNvbG9yRnJhZyBmcm9tICcuL2NvbG9yLmZyYWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgY29uc3QgbWFyayA9IFN5bWJvbCgpO1xuXG4gICAgY29uc3QgcHJvZyA9IGFwcC5jcmVhdGVQcm9ncmFtKGxvY2F0ZVZlcnQsIGNvbG9yRnJhZyk7XG5cbiAgICByZXR1cm4gKGNvcm5lcnMsIGdyaWQsIHBvc2l0aW9ucykgPT4ge1xuICAgICAgICBsZXQgY2FsbCA9IGNvcm5lcnNbbWFya107XG5cbiAgICAgICAgaWYgKCFjYWxsKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdEJ1ZmZlcihjb3JuZXJzLCAyKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbyA9IGFwcC5jcmVhdGVWZXJ0ZXhBcnJheSgpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigwLCBjb3JuZXJzKTtcblxuICAgICAgICAgICAgY2FsbCA9IGNvcm5lcnNbbWFya10gPSBhcHAuY3JlYXRlRHJhd0NhbGwocHJvZywgdmFvLCBQaWNvR0wuVFJJQU5HTEVTKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShncmlkLCAxKSk7XG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShwb3NpdGlvbnMsIDIpKTtcblxuICAgICAgICBhcHBcbiAgICAgICAgICAgIC5kZWZhdWx0RHJhd0ZyYW1lYnVmZmVyKClcbiAgICAgICAgICAgIC52aWV3cG9ydCgwLCAwLCBhcHAud2lkdGgsIGFwcC5oZWlnaHQpO1xuXG4gICAgICAgIGNhbGwubnVtRWxlbWVudHMgPSA2ICogZ3JpZC53aWR0aCAqIGdyaWQuaGVpZ2h0O1xuXG4gICAgICAgIGNhbGxcbiAgICAgICAgICAgIC51bmlmb3JtKCdpbnZTaGFwZScsIFsxL2FwcC53aWR0aCwgMS9hcHAuaGVpZ2h0XSlcbiAgICAgICAgICAgIC50ZXh0dXJlKCdncmlkJywgZ3JpZClcbiAgICAgICAgICAgIC50ZXh0dXJlKCdwb3NpdGlvbnMnLCBwb3NpdGlvbnMpXG4gICAgICAgICAgICAuZHJhdygpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgUGljb0dMIGZyb20gJ3BpY29nbCc7XG5cbmltcG9ydCBmaW5kQm91bmRzIGZyb20gJy4vZmluZEJvdW5kcyc7XG5pbXBvcnQgYnVpbGRHcmlkIGZyb20gJy4vYnVpbGRHcmlkJztcbmltcG9ydCBidWlsZFB5cmFtaWQgZnJvbSAnLi9idWlsZFB5cmFtaWQnO1xuaW1wb3J0IHNpbXVsYXRlIGZyb20gJy4vc2ltdWxhdGUnO1xuaW1wb3J0IGRldGVjdEN1cnNvciBmcm9tICcuL2RldGVjdEN1cnNvcic7XG5pbXBvcnQgc2VsZWN0Tm9kZXMgZnJvbSAnLi9zZWxlY3ROb2Rlcyc7XG5pbXBvcnQgZHJhd05vZGVzIGZyb20gJy4vZHJhd05vZGVzJztcbmltcG9ydCBkcmF3RWRnZXMgZnJvbSAnLi9kcmF3RWRnZXMnO1xuaW1wb3J0IGRyYXdMYWJlbHMgZnJvbSAnLi9kcmF3TGFiZWxzJztcblxuaW1wb3J0IHtjcmVhdGVGbG9hdFRleHR1cmUsIG5lYXJlc3RQb3dlck9mVHdvLCBuZWFyZXN0UG93ZXJPZkZvdXIsIHBpY2t9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBUQVJHRVRfRlJBTUVfRFVSQVRJT04gPSAxMDAwLzMwOyAvLyBbbXNdXG5cbmV4cG9ydCBjbGFzcyBHcmFwaCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIGNvbnN0IGFwcCA9IHRoaXMuX2FwcCA9IFBpY29HTC5jcmVhdGVBcHAoY2FudmFzKTtcblxuICAgICAgICBhcHAuZmxvYXRSZW5kZXJUYXJnZXRzKCk7XG5cbiAgICAgICAgLyogVml2YUdyYXBoOlxuICAgICAgICAgKiAgZGVsdGFUOiAwLjAyLFxuICAgICAgICAgKiAgc3ByaW5nQ29lZjogMC4wMDAyLFxuICAgICAgICAgKiAgc3ByaW5nTGVuZ3RoOiAzMCxcbiAgICAgICAgICogIHJlcHVsc2VDb2VmOiAxLjIsXG4gICAgICAgICAqICB0aGV0YTogMC44LFxuICAgICAgICAgKiAgZHJhZ0NvZWY6IDAuMDIsXG4gICAgICAgICAqICBncmF2aXR5Q29lZjogMSxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2NvbnN0YW50cyA9IHtcbiAgICAgICAgICAgIG5vZGVDb3VudDogMCxcbiAgICAgICAgICAgIGRlbHRhVDogMC4wMixcbiAgICAgICAgICAgIHNwcmluZ0NvZWY6IDAuMDAwMixcbiAgICAgICAgICAgIHNwcmluZ0xlbmd0aDogMzAsXG4gICAgICAgICAgICByZXB1bHNlQ29lZjogMS4yLFxuICAgICAgICAgICAgdGhldGE6IDAuOCxcbiAgICAgICAgICAgIGRyYWdDb2VmOiAwLjAyLFxuICAgICAgICAgICAgZ3Jhdml0eUNvZWY6IDEsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fbm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fZWRnZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5fbm9kZU5hbWVUb0lkID0gbmV3IE1hcDtcblxuICAgICAgICB0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3Nob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zaG91bGREcmF3ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2hvdWxkRHJhd0xhYmVscyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zdGVwc1BlclNjaGVkdWxlID0gMTtcblxuICAgICAgICB0aGlzLl92aWV3cG9ydCA9IFstYXBwLndpZHRoLzIsIC1hcHAuaGVpZ2h0LzIsIGFwcC53aWR0aCwgYXBwLmhlaWdodF07XG5cbiAgICAgICAgdGhpcy5fc3RlcHMgPSB7XG4gICAgICAgICAgICBmaW5kQm91bmRzOiBmaW5kQm91bmRzKGFwcCksXG4gICAgICAgICAgICBidWlsZEdyaWQ6IGJ1aWxkR3JpZChhcHApLFxuICAgICAgICAgICAgYnVpbGRQeXJhbWlkOiBidWlsZFB5cmFtaWQoYXBwKSxcbiAgICAgICAgICAgIHNpbXVsYXRlOiBzaW11bGF0ZShhcHApLFxuICAgICAgICAgICAgZGV0ZWN0Q3Vyc29yOiBkZXRlY3RDdXJzb3IoYXBwKSxcbiAgICAgICAgICAgIHNlbGVjdE5vZGVzOiBzZWxlY3ROb2RlcyhhcHApLFxuICAgICAgICAgICAgZHJhd05vZGVzOiBkcmF3Tm9kZXMoYXBwKSxcbiAgICAgICAgICAgIGRyYXdFZGdlczogZHJhd0VkZ2VzKGFwcCksXG4gICAgICAgICAgICBkcmF3TGFiZWxzOiBkcmF3TGFiZWxzKGFwcCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fYnVmZmVycyA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uc0E6IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbnNCOiBudWxsLFxuICAgICAgICAgICAgdmVsb2NpdGllc0E6IG51bGwsXG4gICAgICAgICAgICB2ZWxvY2l0aWVzQjogbnVsbCxcbiAgICAgICAgICAgIG1hc3NlczogbnVsbCxcbiAgICAgICAgICAgIGVkZ2VzTG9jczogbnVsbCxcbiAgICAgICAgICAgIGVkZ2Vwb2ludHM6IG51bGwsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fdGV4dHVyZXMgPSB7XG4gICAgICAgICAgICBib3VuZHM6IG51bGwsXG4gICAgICAgICAgICBncmlkOiBudWxsLFxuICAgICAgICAgICAgcHlyYW1pZDogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uc0E6IG51bGwsXG4gICAgICAgICAgICBwb3NpdGlvbnNCOiBudWxsLFxuICAgICAgICAgICAgZWRnZXM6IG51bGwsXG4gICAgICAgIH07XG5cbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4gdGhpcy5fb25DbGljayhldiksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25maWd1cmUoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbnN0YW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbnN0YW50cywgcGljayhjb25maWcsXG4gICAgICAgICAgICBbJ2RlbHRhVCcsICdzcHJpbmdDb2VmJywgJ3NwcmluZ0xlbmd0aCcsICdyZXB1bHNlQ29lZicsICd0aGV0YScsICdkcmFnQ29lZicsICdncmF2aXR5Q29lZiddXG4gICAgICAgICkpO1xuXG4gICAgICAgIGlmIChjb25maWcuc2hvdWxkRHJhdyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG91bGREcmF3ID0gY29uZmlnLnNob3VsZERyYXc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLnNob3VsZERyYXdMYWJlbHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvdWxkRHJhd0xhYmVscyA9IGNvbmZpZy5zaG91bGREcmF3TGFiZWxzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2hvdWxkVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhZGROb2Rlcyhub2Rlcykge1xuICAgICAgICBsZXQgbmV4dElkID0gdGhpcy5fbm9kZXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoY29uc3Qge25hbWUsIHgsIHksIHdlaWdodH0gb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX25vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgIT0gbnVsbCA/IG5hbWUgOiBudWxsLFxuICAgICAgICAgICAgICAgIHg6IHggIT0gbnVsbCA/IHggOiAwLFxuICAgICAgICAgICAgICAgIHk6IHkgIT0gbnVsbCA/IHkgOiAwLFxuICAgICAgICAgICAgICAgIHdlaWdodDogd2VpZ2h0ICE9IG51bGwgPyB3ZWlnaHQgOiAxLFxuICAgICAgICAgICAgICAgIGVkZ2VzOiBbXSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbm9kZU5hbWVUb0lkLnNldChuYW1lLCBuZXh0SWQrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zaG91bGRVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgICAgIGZvciAoY29uc3Qge3NvdXJjZSwgdGFyZ2V0LCB3ZWlnaHR9IG9mIGVkZ2VzKSB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2VJZCA9IHR5cGVvZiBzb3VyY2UgPT09ICdudW1iZXInID8gc291cmNlIDogdGhpcy5fbm9kZU5hbWVUb0lkLmdldChzb3VyY2UpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJyA/IHRhcmdldCA6IHRoaXMuX25vZGVOYW1lVG9JZC5nZXQodGFyZ2V0KTtcblxuICAgICAgICAgICAgdGhpcy5fbm9kZXNbc291cmNlSWRdLmVkZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0SWQsXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiB3ZWlnaHQgIT0gbnVsbCA/IHdlaWdodCA6IDEsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgKyt0aGlzLl9lZGdlQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zaG91bGRVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9ydW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGVwKCkge1xuICAgICAgICBpZiAodGhpcy5fc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdHVybigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhhbHQoKSB7XG4gICAgICAgIHRoaXMuX3J1bm5pbmcgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfc2NoZWR1bGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcnVubmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0ZXBzUGVyU2NoZWR1bGU7ICsraSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RlcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBzcGVudCA9IERhdGUubm93KCkgLSBzdGFydDtcblxuICAgICAgICAgICAgaWYgKHNwZW50IDw9IFRBUkdFVF9GUkFNRV9EVVJBVElPTiAtIDUpIHtcbiAgICAgICAgICAgICAgICArK3RoaXMuX3N0ZXBzUGVyU2NoZWR1bGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNwZW50ID49IFRBUkdFVF9GUkFNRV9EVVJBVElPTiArIDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGVwc1BlclNjaGVkdWxlID0gTWF0aC5tYXgodGhpcy5fc3RlcHNQZXJTY2hlZHVsZSAtIDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfb25DbGljayhldmVudCkge1xuICAgICAgICBjb25zdCB7Y2FudmFzfSA9IHRoaXMuX2FwcC5nbDtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSByZWN0LmhlaWdodCAtIChldmVudC5jbGllbnRZIC0gcmVjdC50b3ApO1xuXG4gICAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuX2J1ZmZlcnM7XG4gICAgICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5fc3RlcHM7XG5cbiAgICAgICAgY29uc3QgaWR4ID0gc3RlcHMuZGV0ZWN0Q3Vyc29yKGJ1Zi5wb3NpdGlvbnNBLCBbeCwgeV0pO1xuXG4gICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnQ0xJQ0snLCBpZHgsIHRoaXMuX25vZGVzW2lkeF0ubmFtZSk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgYXBwID0gdGhpcy5fYXBwO1xuICAgICAgICBjb25zdCBidWYgPSB0aGlzLl9idWZmZXJzO1xuICAgICAgICBjb25zdCB0ZXggPSB0aGlzLl90ZXh0dXJlcztcblxuICAgICAgICBjb25zdCBub2RlQ291bnQgPSB0aGlzLl9ub2Rlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGVkZ2VDb3VudCA9IHRoaXMuX2VkZ2VDb3VudDtcblxuICAgICAgICAvLyBUT0RPOiBzZWxlY3QgY2VsbCBudW1iZXIgYnkgY2FudmFzIGFuZCBmb250IHNpemVzLlxuICAgICAgICBjb25zdCB2cEdyaWRTaGFwZSA9IFsxMCwgM107XG5cbiAgICAgICAgLy8gVE9ETzogaW1wcm92ZSB0aGUgaGV1cmlzdGljLlxuICAgICAgICBjb25zdCBncmlkU2l6ZSA9IE1hdGgubWF4KG5lYXJlc3RQb3dlck9mVHdvKE1hdGguc3FydCgzICogbm9kZUNvdW50KSksIDgpO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uc1Zib0xlbiA9IDIgKiBuZWFyZXN0UG93ZXJPZkZvdXIobm9kZUNvdW50KTtcbiAgICAgICAgY29uc3QgcG9zVGV4U2l6ZSA9IE1hdGguY2VpbChNYXRoLnNxcnQobm9kZUNvdW50KSk7XG4gICAgICAgIGNvbnN0IGVkZ1RleFNpemUgPSBNYXRoLmNlaWwoTWF0aC5zcXJ0KGVkZ2VDb3VudCkpO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoMiAqIHBvc1RleFNpemUgKiBwb3NUZXhTaXplKTtcbiAgICAgICAgY29uc3QgbWFzc2VzID0gbmV3IEZsb2F0MzJBcnJheShub2RlQ291bnQpO1xuICAgICAgICBjb25zdCBlZGdlc0xvY3MgPSBuZXcgVWludDMyQXJyYXkoMiAqIG5vZGVDb3VudCk7XG4gICAgICAgIGNvbnN0IGVkZ2VzID0gbmV3IEZsb2F0MzJBcnJheSgzICogZWRnVGV4U2l6ZSAqIGVkZ1RleFNpemUpO1xuICAgICAgICBjb25zdCBlbmRwb2ludHMgPSBuZXcgVWludDMyQXJyYXkoMiAqIGVkZ2VDb3VudCk7XG4gICAgICAgIGNvbnN0IGNvcm5lcnMgPSBuZXcgRmxvYXQzMkFycmF5KDEyICogTWF0aC5tYXgobm9kZUNvdW50LCB2cEdyaWRTaGFwZVswXSAqIHZwR3JpZFNoYXBlWzFdKSk7XG5cbiAgICAgICAgY29uc3QgY29ybmVyVG1wbCA9IFstMSwgMSwgLTEsIC0xLCAxLCAxLCAxLCAxLCAtMSwgLTEsIDEsIC0xXTtcblxuICAgICAgICBsZXQgZWRnZXNMb2NzTGVuID0gMDtcbiAgICAgICAgbGV0IGVuZHBvaW50c0xlbiA9IDA7XG4gICAgICAgIGxldCBlZGdlc0xlbiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX25vZGVzW2ldO1xuXG4gICAgICAgICAgICBwb3NpdGlvbnNbMippXSA9IG5vZGUueDtcbiAgICAgICAgICAgIHBvc2l0aW9uc1syKmkrMV0gPSBub2RlLnk7XG4gICAgICAgICAgICBtYXNzZXNbaV0gPSBub2RlLndlaWdodDtcbiAgICAgICAgICAgIGVkZ2VzTG9jc1syKmldID0gZWRnZXNMb2NzTGVuO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygbm9kZS5lZGdlcykge1xuICAgICAgICAgICAgICAgIGVkZ2VzW2VkZ2VzTGVuKytdID0gaTtcbiAgICAgICAgICAgICAgICBlZGdlc1tlZGdlc0xlbisrXSA9IGVkZ2UudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGVkZ2VzW2VkZ2VzTGVuKytdID0gZWRnZS53ZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBlbmRwb2ludHNbZW5kcG9pbnRzTGVuKytdID0gaTtcbiAgICAgICAgICAgICAgICBlbmRwb2ludHNbZW5kcG9pbnRzTGVuKytdID0gZWRnZS50YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICArK2VkZ2VzTG9jc0xlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWRnZXNMb2NzWzIqaSsxXSA9IGVkZ2VzTG9jc0xlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ybmVycy5sZW5ndGg7IGkgKz0gMTIpIHtcbiAgICAgICAgICAgIGNvcm5lcnMuc2V0KGNvcm5lclRtcGwsIGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBjb25zdGFudHMuXG5cbiAgICAgICAgdGhpcy5fY29uc3RhbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uc3RhbnRzLCB7bm9kZUNvdW50fSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBidWZmZXJzLlxuXG4gICAgICAgIGJ1Zi5wb3NpdGlvbnNBID0gYXBwLmNyZWF0ZVZlcnRleEJ1ZmZlcihQaWNvR0wuRkxPQVQsIDIsIHBvc2l0aW9uc1Zib0xlbilcbiAgICAgICAgICAgIC5kYXRhKHBvc2l0aW9ucy5zdWJhcnJheSgwLCAyICogbm9kZUNvdW50KSk7XG5cbiAgICAgICAgYnVmLnBvc2l0aW9uc0IgPSBhcHAuY3JlYXRlVmVydGV4QnVmZmVyKFBpY29HTC5GTE9BVCwgMiwgcG9zaXRpb25zVmJvTGVuKTtcblxuICAgICAgICAvLyBUT0RPOiBob3cgdG8gYXZvaWQgdGhpcyBoYWNrP1xuICAgICAgICBidWYucG9zaXRpb25zQS5udW1JdGVtcyA9IG5vZGVDb3VudDtcbiAgICAgICAgYnVmLnBvc2l0aW9uc0IubnVtSXRlbXMgPSBub2RlQ291bnQ7XG5cbiAgICAgICAgYnVmLnZlbG9jaXRpZXNBID0gYXBwLmNyZWF0ZVZlcnRleEJ1ZmZlcihQaWNvR0wuRkxPQVQsIDIsIDIgKiBub2RlQ291bnQpO1xuICAgICAgICBidWYudmVsb2NpdGllc0IgPSBhcHAuY3JlYXRlVmVydGV4QnVmZmVyKFBpY29HTC5GTE9BVCwgMiwgMiAqIG5vZGVDb3VudCk7XG4gICAgICAgIGJ1Zi5tYXNzZXMgPSBhcHAuY3JlYXRlVmVydGV4QnVmZmVyKFBpY29HTC5GTE9BVCwgMSwgbWFzc2VzKTtcbiAgICAgICAgYnVmLmVkZ2VzTG9jcyA9IGFwcC5jcmVhdGVWZXJ0ZXhCdWZmZXIoUGljb0dMLlVOU0lHTkVEX0lOVCwgMiwgZWRnZXNMb2NzKTtcbiAgICAgICAgYnVmLmVuZHBvaW50cyA9IGFwcC5jcmVhdGVWZXJ0ZXhCdWZmZXIoUGljb0dMLlVOU0lHTkVEX0lOVCwgMSwgZW5kcG9pbnRzKTtcbiAgICAgICAgYnVmLmNvcm5lcnMgPSBhcHAuY3JlYXRlVmVydGV4QnVmZmVyKFBpY29HTC5GTE9BVCwgMiwgY29ybmVycyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXh0dXJlcy5cblxuICAgICAgICB0ZXguYm91bmRzID0gY3JlYXRlRmxvYXRUZXh0dXJlKGFwcCwgMSwgMSwgNCk7XG4gICAgICAgIHRleC5ncmlkID0gY3JlYXRlRmxvYXRUZXh0dXJlKGFwcCwgZ3JpZFNpemUsIGdyaWRTaXplLCA0KTtcbiAgICAgICAgdGV4LnB5cmFtaWQgPSBjcmVhdGVGbG9hdFRleHR1cmUoYXBwLCBncmlkU2l6ZSAtIDIsIGdyaWRTaXplIC8gMiwgNCk7XG5cbiAgICAgICAgdGV4LnBvc2l0aW9uc0EgPSBjcmVhdGVGbG9hdFRleHR1cmUoYXBwLCBwb3NUZXhTaXplLCBwb3NUZXhTaXplLCAyKS5kYXRhKHBvc2l0aW9ucyk7XG4gICAgICAgIHRleC5wb3NpdGlvbnNCID0gY3JlYXRlRmxvYXRUZXh0dXJlKGFwcCwgcG9zVGV4U2l6ZSwgcG9zVGV4U2l6ZSwgMik7XG5cbiAgICAgICAgdGV4LmVkZ2VzID0gY3JlYXRlRmxvYXRUZXh0dXJlKGFwcCwgZWRnVGV4U2l6ZSwgZWRnVGV4U2l6ZSwgMykuZGF0YShlZGdlcyk7XG5cbiAgICAgICAgdGV4LnZpZXdwb3J0R3JpZCA9IGNyZWF0ZUZsb2F0VGV4dHVyZShhcHAsIHZwR3JpZFNoYXBlWzBdLCB2cEdyaWRTaGFwZVsxXSwgMSk7XG4gICAgfVxuXG4gICAgX2NsZWFyKCkge1xuICAgICAgICB0aGlzLl9hcHBcbiAgICAgICAgICAgIC5kZWZhdWx0RHJhd0ZyYW1lYnVmZmVyKClcbiAgICAgICAgICAgIC52aWV3cG9ydCgwLCAwLCB0aGlzLl9hcHAud2lkdGgsIHRoaXMuX2FwcC5oZWlnaHQpXG4gICAgICAgICAgICAuY2xlYXJDb2xvcigwLCAwLCAwLCAwKVxuICAgICAgICAgICAgLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgX3R1cm4oKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuX2J1ZmZlcnM7XG4gICAgICAgIGNvbnN0IHRleCA9IHRoaXMuX3RleHR1cmVzO1xuICAgICAgICBjb25zdCBzdGVwcyA9IHRoaXMuX3N0ZXBzO1xuXG4gICAgICAgIHN0ZXBzLmZpbmRCb3VuZHMoYnVmLnBvc2l0aW9uc0EsIHRleC5ib3VuZHMpO1xuXG4gICAgICAgIHN0ZXBzLmJ1aWxkR3JpZChidWYucG9zaXRpb25zQSwgYnVmLm1hc3NlcywgdGV4LmJvdW5kcywgdGV4LmdyaWQpO1xuXG4gICAgICAgIHN0ZXBzLmJ1aWxkUHlyYW1pZCh0ZXguZ3JpZCwgdGV4LnB5cmFtaWQpO1xuXG4gICAgICAgIHN0ZXBzLnNpbXVsYXRlKFxuICAgICAgICAgICAgYnVmLnBvc2l0aW9uc0EsIGJ1Zi52ZWxvY2l0aWVzQSwgYnVmLm1hc3NlcywgYnVmLmVkZ2VzTG9jcyxcbiAgICAgICAgICAgIHRleC5ib3VuZHMsIHRleC5weXJhbWlkLCB0ZXguZ3JpZCwgdGV4LnBvc2l0aW9uc0EsIHRleC5lZGdlcyxcbiAgICAgICAgICAgIHRoaXMuX2NvbnN0YW50cyxcbiAgICAgICAgICAgIGJ1Zi5wb3NpdGlvbnNCLCBidWYudmVsb2NpdGllc0IsXG4gICAgICAgICAgICB0ZXgucG9zaXRpb25zQixcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9jbGVhcigpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zaG91bGREcmF3KSB7XG4gICAgICAgICAgICBzdGVwcy5kcmF3RWRnZXMoYnVmLmVuZHBvaW50cywgdGV4LnBvc2l0aW9uc0EpO1xuICAgICAgICAgICAgc3RlcHMuZHJhd05vZGVzKGJ1Zi5jb3JuZXJzLCB0ZXgucG9zaXRpb25zQSwgdGhpcy5fY29uc3RhbnRzLm5vZGVDb3VudCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9zaG91bGREcmF3TGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgc3RlcHMuc2VsZWN0Tm9kZXMoYnVmLnBvc2l0aW9uc0EsIGJ1Zi5tYXNzZXMsIHRoaXMuX3ZpZXdwb3J0LCB0ZXgudmlld3BvcnRHcmlkKTtcbiAgICAgICAgICAgICAgICBzdGVwcy5kcmF3TGFiZWxzKGJ1Zi5jb3JuZXJzLCB0ZXgudmlld3BvcnRHcmlkLCB0ZXgucG9zaXRpb25zQSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBbYnVmLnBvc2l0aW9uc0EsIGJ1Zi5wb3NpdGlvbnNCXSA9IFtidWYucG9zaXRpb25zQiwgYnVmLnBvc2l0aW9uc0FdO1xuICAgICAgICBbYnVmLnZlbG9jaXRpZXNBLCBidWYudmVsb2NpdGllc0JdID0gW2J1Zi52ZWxvY2l0aWVzQiwgYnVmLnZlbG9jaXRpZXNBXTtcbiAgICAgICAgW3RleC5wb3NpdGlvbnNBLCB0ZXgucG9zaXRpb25zQl0gPSBbdGV4LnBvc2l0aW9uc0IsIHRleC5wb3NpdGlvbnNBXTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsid2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJyb290IiwiZmFjdG9yeSIsIm1vZHVsZSIsInRoaXMiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJpIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsIm4iLCJfX2VzTW9kdWxlIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnbCIsImdldENvbnRleHQiLCJDT05TVEFOVFMiLCJERVBUSF9CVUZGRVJfQklUIiwiU1RFTkNJTF9CVUZGRVJfQklUIiwiQ09MT1JfQlVGRkVSX0JJVCIsIlBPSU5UUyIsIkxJTkVTIiwiTElORV9MT09QIiwiTElORV9TVFJJUCIsIlRSSUFOR0xFUyIsIlRSSUFOR0xFX1NUUklQIiwiVFJJQU5HTEVfRkFOIiwiWkVSTyIsIk9ORSIsIlNSQ19DT0xPUiIsIk9ORV9NSU5VU19TUkNfQ09MT1IiLCJTUkNfQUxQSEEiLCJPTkVfTUlOVVNfU1JDX0FMUEhBIiwiRFNUX0FMUEhBIiwiT05FX01JTlVTX0RTVF9BTFBIQSIsIkRTVF9DT0xPUiIsIk9ORV9NSU5VU19EU1RfQ09MT1IiLCJTUkNfQUxQSEFfU0FUVVJBVEUiLCJGVU5DX0FERCIsIkJMRU5EX0VRVUFUSU9OIiwiQkxFTkRfRVFVQVRJT05fUkdCIiwiQkxFTkRfRVFVQVRJT05fQUxQSEEiLCJGVU5DX1NVQlRSQUNUIiwiRlVOQ19SRVZFUlNFX1NVQlRSQUNUIiwiQkxFTkRfRFNUX1JHQiIsIkJMRU5EX1NSQ19SR0IiLCJCTEVORF9EU1RfQUxQSEEiLCJCTEVORF9TUkNfQUxQSEEiLCJDT05TVEFOVF9DT0xPUiIsIk9ORV9NSU5VU19DT05TVEFOVF9DT0xPUiIsIkNPTlNUQU5UX0FMUEhBIiwiT05FX01JTlVTX0NPTlNUQU5UX0FMUEhBIiwiQkxFTkRfQ09MT1IiLCJBUlJBWV9CVUZGRVIiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsIkFSUkFZX0JVRkZFUl9CSU5ESU5HIiwiRUxFTUVOVF9BUlJBWV9CVUZGRVJfQklORElORyIsIlNUUkVBTV9EUkFXIiwiU1RBVElDX0RSQVciLCJEWU5BTUlDX0RSQVciLCJCVUZGRVJfU0laRSIsIkJVRkZFUl9VU0FHRSIsIkNVUlJFTlRfVkVSVEVYX0FUVFJJQiIsIkZST05UIiwiQkFDSyIsIkZST05UX0FORF9CQUNLIiwiQ1VMTF9GQUNFIiwiQkxFTkQiLCJESVRIRVIiLCJTVEVOQ0lMX1RFU1QiLCJERVBUSF9URVNUIiwiU0NJU1NPUl9URVNUIiwiUE9MWUdPTl9PRkZTRVRfRklMTCIsIlNBTVBMRV9BTFBIQV9UT19DT1ZFUkFHRSIsIlNBTVBMRV9DT1ZFUkFHRSIsIk5PX0VSUk9SIiwiSU5WQUxJRF9FTlVNIiwiSU5WQUxJRF9WQUxVRSIsIklOVkFMSURfT1BFUkFUSU9OIiwiT1VUX09GX01FTU9SWSIsIkNXIiwiQ0NXIiwiTElORV9XSURUSCIsIkFMSUFTRURfUE9JTlRfU0laRV9SQU5HRSIsIkFMSUFTRURfTElORV9XSURUSF9SQU5HRSIsIkNVTExfRkFDRV9NT0RFIiwiRlJPTlRfRkFDRSIsIkRFUFRIX1JBTkdFIiwiREVQVEhfV1JJVEVNQVNLIiwiREVQVEhfQ0xFQVJfVkFMVUUiLCJERVBUSF9GVU5DIiwiU1RFTkNJTF9DTEVBUl9WQUxVRSIsIlNURU5DSUxfRlVOQyIsIlNURU5DSUxfRkFJTCIsIlNURU5DSUxfUEFTU19ERVBUSF9GQUlMIiwiU1RFTkNJTF9QQVNTX0RFUFRIX1BBU1MiLCJTVEVOQ0lMX1JFRiIsIlNURU5DSUxfVkFMVUVfTUFTSyIsIlNURU5DSUxfV1JJVEVNQVNLIiwiU1RFTkNJTF9CQUNLX0ZVTkMiLCJTVEVOQ0lMX0JBQ0tfRkFJTCIsIlNURU5DSUxfQkFDS19QQVNTX0RFUFRIX0ZBSUwiLCJTVEVOQ0lMX0JBQ0tfUEFTU19ERVBUSF9QQVNTIiwiU1RFTkNJTF9CQUNLX1JFRiIsIlNURU5DSUxfQkFDS19WQUxVRV9NQVNLIiwiU1RFTkNJTF9CQUNLX1dSSVRFTUFTSyIsIlZJRVdQT1JUIiwiU0NJU1NPUl9CT1giLCJDT0xPUl9DTEVBUl9WQUxVRSIsIkNPTE9SX1dSSVRFTUFTSyIsIlVOUEFDS19BTElHTk1FTlQiLCJQQUNLX0FMSUdOTUVOVCIsIk1BWF9URVhUVVJFX1NJWkUiLCJNQVhfVklFV1BPUlRfRElNUyIsIlNVQlBJWEVMX0JJVFMiLCJSRURfQklUUyIsIkdSRUVOX0JJVFMiLCJCTFVFX0JJVFMiLCJBTFBIQV9CSVRTIiwiREVQVEhfQklUUyIsIlNURU5DSUxfQklUUyIsIlBPTFlHT05fT0ZGU0VUX1VOSVRTIiwiUE9MWUdPTl9PRkZTRVRfRkFDVE9SIiwiVEVYVFVSRV9CSU5ESU5HXzJEIiwiU0FNUExFX0JVRkZFUlMiLCJTQU1QTEVTIiwiU0FNUExFX0NPVkVSQUdFX1ZBTFVFIiwiU0FNUExFX0NPVkVSQUdFX0lOVkVSVCIsIkNPTVBSRVNTRURfVEVYVFVSRV9GT1JNQVRTIiwiRE9OVF9DQVJFIiwiRkFTVEVTVCIsIk5JQ0VTVCIsIkdFTkVSQVRFX01JUE1BUF9ISU5UIiwiQllURSIsIlVOU0lHTkVEX0JZVEUiLCJTSE9SVCIsIlVOU0lHTkVEX1NIT1JUIiwiSU5UIiwiVU5TSUdORURfSU5UIiwiRkxPQVQiLCJERVBUSF9DT01QT05FTlQiLCJBTFBIQSIsIlJHQiIsIlJHQkEiLCJMVU1JTkFOQ0UiLCJMVU1JTkFOQ0VfQUxQSEEiLCJVTlNJR05FRF9TSE9SVF80XzRfNF80IiwiVU5TSUdORURfU0hPUlRfNV81XzVfMSIsIlVOU0lHTkVEX1NIT1JUXzVfNl81IiwiRlJBR01FTlRfU0hBREVSIiwiVkVSVEVYX1NIQURFUiIsIk1BWF9WRVJURVhfQVRUUklCUyIsIk1BWF9WRVJURVhfVU5JRk9STV9WRUNUT1JTIiwiTUFYX1ZBUllJTkdfVkVDVE9SUyIsIk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTIiwiTUFYX1ZFUlRFWF9URVhUVVJFX0lNQUdFX1VOSVRTIiwiTUFYX1RFWFRVUkVfSU1BR0VfVU5JVFMiLCJNQVhfRlJBR01FTlRfVU5JRk9STV9WRUNUT1JTIiwiU0hBREVSX1RZUEUiLCJERUxFVEVfU1RBVFVTIiwiTElOS19TVEFUVVMiLCJWQUxJREFURV9TVEFUVVMiLCJBVFRBQ0hFRF9TSEFERVJTIiwiQUNUSVZFX1VOSUZPUk1TIiwiQUNUSVZFX0FUVFJJQlVURVMiLCJTSEFESU5HX0xBTkdVQUdFX1ZFUlNJT04iLCJDVVJSRU5UX1BST0dSQU0iLCJORVZFUiIsIkxFU1MiLCJFUVVBTCIsIkxFUVVBTCIsIkdSRUFURVIiLCJOT1RFUVVBTCIsIkdFUVVBTCIsIkFMV0FZUyIsIktFRVAiLCJSRVBMQUNFIiwiSU5DUiIsIkRFQ1IiLCJJTlZFUlQiLCJJTkNSX1dSQVAiLCJERUNSX1dSQVAiLCJWRU5ET1IiLCJSRU5ERVJFUiIsIlZFUlNJT04iLCJORUFSRVNUIiwiTElORUFSIiwiTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCIsIkxJTkVBUl9NSVBNQVBfTkVBUkVTVCIsIk5FQVJFU1RfTUlQTUFQX0xJTkVBUiIsIkxJTkVBUl9NSVBNQVBfTElORUFSIiwiVEVYVFVSRV9NQUdfRklMVEVSIiwiVEVYVFVSRV9NSU5fRklMVEVSIiwiVEVYVFVSRV9XUkFQX1MiLCJURVhUVVJFX1dSQVBfVCIsIlRFWFRVUkVfMkQiLCJURVhUVVJFIiwiVEVYVFVSRV9DVUJFX01BUCIsIlRFWFRVUkVfQklORElOR19DVUJFX01BUCIsIlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCIsIlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCIsIlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWSIsIlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSIsIlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWiIsIlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWiIsIk1BWF9DVUJFX01BUF9URVhUVVJFX1NJWkUiLCJURVhUVVJFMCIsIlRFWFRVUkUxIiwiVEVYVFVSRTIiLCJURVhUVVJFMyIsIlRFWFRVUkU0IiwiVEVYVFVSRTUiLCJURVhUVVJFNiIsIlRFWFRVUkU3IiwiVEVYVFVSRTgiLCJURVhUVVJFOSIsIlRFWFRVUkUxMCIsIlRFWFRVUkUxMSIsIlRFWFRVUkUxMiIsIlRFWFRVUkUxMyIsIlRFWFRVUkUxNCIsIlRFWFRVUkUxNSIsIlRFWFRVUkUxNiIsIlRFWFRVUkUxNyIsIlRFWFRVUkUxOCIsIlRFWFRVUkUxOSIsIlRFWFRVUkUyMCIsIlRFWFRVUkUyMSIsIlRFWFRVUkUyMiIsIlRFWFRVUkUyMyIsIlRFWFRVUkUyNCIsIlRFWFRVUkUyNSIsIlRFWFRVUkUyNiIsIlRFWFRVUkUyNyIsIlRFWFRVUkUyOCIsIlRFWFRVUkUyOSIsIlRFWFRVUkUzMCIsIlRFWFRVUkUzMSIsIkFDVElWRV9URVhUVVJFIiwiUkVQRUFUIiwiQ0xBTVBfVE9fRURHRSIsIk1JUlJPUkVEX1JFUEVBVCIsIkZMT0FUX1ZFQzIiLCJGTE9BVF9WRUMzIiwiRkxPQVRfVkVDNCIsIklOVF9WRUMyIiwiSU5UX1ZFQzMiLCJJTlRfVkVDNCIsIkJPT0wiLCJCT09MX1ZFQzIiLCJCT09MX1ZFQzMiLCJCT09MX1ZFQzQiLCJGTE9BVF9NQVQyIiwiRkxPQVRfTUFUMyIsIkZMT0FUX01BVDQiLCJTQU1QTEVSXzJEIiwiU0FNUExFUl9DVUJFIiwiVkVSVEVYX0FUVFJJQl9BUlJBWV9FTkFCTEVEIiwiVkVSVEVYX0FUVFJJQl9BUlJBWV9TSVpFIiwiVkVSVEVYX0FUVFJJQl9BUlJBWV9TVFJJREUiLCJWRVJURVhfQVRUUklCX0FSUkFZX1RZUEUiLCJWRVJURVhfQVRUUklCX0FSUkFZX05PUk1BTElaRUQiLCJWRVJURVhfQVRUUklCX0FSUkFZX1BPSU5URVIiLCJWRVJURVhfQVRUUklCX0FSUkFZX0JVRkZFUl9CSU5ESU5HIiwiSU1QTEVNRU5UQVRJT05fQ09MT1JfUkVBRF9UWVBFIiwiSU1QTEVNRU5UQVRJT05fQ09MT1JfUkVBRF9GT1JNQVQiLCJDT01QSUxFX1NUQVRVUyIsIkxPV19GTE9BVCIsIk1FRElVTV9GTE9BVCIsIkhJR0hfRkxPQVQiLCJMT1dfSU5UIiwiTUVESVVNX0lOVCIsIkhJR0hfSU5UIiwiRlJBTUVCVUZGRVIiLCJSRU5ERVJCVUZGRVIiLCJSR0JBNCIsIlJHQjVfQTEiLCJSR0I1NjUiLCJERVBUSF9DT01QT05FTlQxNiIsIlNURU5DSUxfSU5ERVgiLCJTVEVOQ0lMX0lOREVYOCIsIkRFUFRIX1NURU5DSUwiLCJSRU5ERVJCVUZGRVJfV0lEVEgiLCJSRU5ERVJCVUZGRVJfSEVJR0hUIiwiUkVOREVSQlVGRkVSX0lOVEVSTkFMX0ZPUk1BVCIsIlJFTkRFUkJVRkZFUl9SRURfU0laRSIsIlJFTkRFUkJVRkZFUl9HUkVFTl9TSVpFIiwiUkVOREVSQlVGRkVSX0JMVUVfU0laRSIsIlJFTkRFUkJVRkZFUl9BTFBIQV9TSVpFIiwiUkVOREVSQlVGRkVSX0RFUFRIX1NJWkUiLCJSRU5ERVJCVUZGRVJfU1RFTkNJTF9TSVpFIiwiRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9PQkpFQ1RfVFlQRSIsIkZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfT0JKRUNUX05BTUUiLCJGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1RFWFRVUkVfTEVWRUwiLCJGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1RFWFRVUkVfQ1VCRV9NQVBfRkFDRSIsIkNPTE9SX0FUVEFDSE1FTlQwIiwiREVQVEhfQVRUQUNITUVOVCIsIlNURU5DSUxfQVRUQUNITUVOVCIsIkRFUFRIX1NURU5DSUxfQVRUQUNITUVOVCIsIk5PTkUiLCJGUkFNRUJVRkZFUl9DT01QTEVURSIsIkZSQU1FQlVGRkVSX0lOQ09NUExFVEVfQVRUQUNITUVOVCIsIkZSQU1FQlVGRkVSX0lOQ09NUExFVEVfTUlTU0lOR19BVFRBQ0hNRU5UIiwiRlJBTUVCVUZGRVJfSU5DT01QTEVURV9ESU1FTlNJT05TIiwiRlJBTUVCVUZGRVJfVU5TVVBQT1JURUQiLCJGUkFNRUJVRkZFUl9CSU5ESU5HIiwiUkVOREVSQlVGRkVSX0JJTkRJTkciLCJNQVhfUkVOREVSQlVGRkVSX1NJWkUiLCJJTlZBTElEX0ZSQU1FQlVGRkVSX09QRVJBVElPTiIsIlVOUEFDS19GTElQX1lfV0VCR0wiLCJVTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wiLCJDT05URVhUX0xPU1RfV0VCR0wiLCJVTlBBQ0tfQ09MT1JTUEFDRV9DT05WRVJTSU9OX1dFQkdMIiwiQlJPV1NFUl9ERUZBVUxUX1dFQkdMIiwiUkVBRF9CVUZGRVIiLCJVTlBBQ0tfUk9XX0xFTkdUSCIsIlVOUEFDS19TS0lQX1JPV1MiLCJVTlBBQ0tfU0tJUF9QSVhFTFMiLCJQQUNLX1JPV19MRU5HVEgiLCJQQUNLX1NLSVBfUk9XUyIsIlBBQ0tfU0tJUF9QSVhFTFMiLCJDT0xPUiIsIkRFUFRIIiwiU1RFTkNJTCIsIlJFRCIsIlJHQjgiLCJSR0JBOCIsIlJHQjEwX0EyIiwiVEVYVFVSRV9CSU5ESU5HXzNEIiwiVU5QQUNLX1NLSVBfSU1BR0VTIiwiVU5QQUNLX0lNQUdFX0hFSUdIVCIsIlRFWFRVUkVfM0QiLCJURVhUVVJFX1dSQVBfUiIsIk1BWF8zRF9URVhUVVJFX1NJWkUiLCJVTlNJR05FRF9JTlRfMl8xMF8xMF8xMF9SRVYiLCJNQVhfRUxFTUVOVFNfVkVSVElDRVMiLCJNQVhfRUxFTUVOVFNfSU5ESUNFUyIsIlRFWFRVUkVfTUlOX0xPRCIsIlRFWFRVUkVfTUFYX0xPRCIsIlRFWFRVUkVfQkFTRV9MRVZFTCIsIlRFWFRVUkVfTUFYX0xFVkVMIiwiTUlOIiwiTUFYIiwiREVQVEhfQ09NUE9ORU5UMjQiLCJNQVhfVEVYVFVSRV9MT0RfQklBUyIsIlRFWFRVUkVfQ09NUEFSRV9NT0RFIiwiVEVYVFVSRV9DT01QQVJFX0ZVTkMiLCJDVVJSRU5UX1FVRVJZIiwiUVVFUllfUkVTVUxUIiwiUVVFUllfUkVTVUxUX0FWQUlMQUJMRSIsIlNUUkVBTV9SRUFEIiwiU1RSRUFNX0NPUFkiLCJTVEFUSUNfUkVBRCIsIlNUQVRJQ19DT1BZIiwiRFlOQU1JQ19SRUFEIiwiRFlOQU1JQ19DT1BZIiwiTUFYX0RSQVdfQlVGRkVSUyIsIkRSQVdfQlVGRkVSMCIsIkRSQVdfQlVGRkVSMSIsIkRSQVdfQlVGRkVSMiIsIkRSQVdfQlVGRkVSMyIsIkRSQVdfQlVGRkVSNCIsIkRSQVdfQlVGRkVSNSIsIkRSQVdfQlVGRkVSNiIsIkRSQVdfQlVGRkVSNyIsIkRSQVdfQlVGRkVSOCIsIkRSQVdfQlVGRkVSOSIsIkRSQVdfQlVGRkVSMTAiLCJEUkFXX0JVRkZFUjExIiwiRFJBV19CVUZGRVIxMiIsIkRSQVdfQlVGRkVSMTMiLCJEUkFXX0JVRkZFUjE0IiwiRFJBV19CVUZGRVIxNSIsIk1BWF9GUkFHTUVOVF9VTklGT1JNX0NPTVBPTkVOVFMiLCJNQVhfVkVSVEVYX1VOSUZPUk1fQ09NUE9ORU5UUyIsIlNBTVBMRVJfM0QiLCJTQU1QTEVSXzJEX1NIQURPVyIsIkZSQUdNRU5UX1NIQURFUl9ERVJJVkFUSVZFX0hJTlQiLCJQSVhFTF9QQUNLX0JVRkZFUiIsIlBJWEVMX1VOUEFDS19CVUZGRVIiLCJQSVhFTF9QQUNLX0JVRkZFUl9CSU5ESU5HIiwiUElYRUxfVU5QQUNLX0JVRkZFUl9CSU5ESU5HIiwiRkxPQVRfTUFUMngzIiwiRkxPQVRfTUFUMng0IiwiRkxPQVRfTUFUM3gyIiwiRkxPQVRfTUFUM3g0IiwiRkxPQVRfTUFUNHgyIiwiRkxPQVRfTUFUNHgzIiwiU1JHQiIsIlNSR0I4IiwiU1JHQjhfQUxQSEE4IiwiQ09NUEFSRV9SRUZfVE9fVEVYVFVSRSIsIlJHQkEzMkYiLCJSR0IzMkYiLCJSR0JBMTZGIiwiUkdCMTZGIiwiVkVSVEVYX0FUVFJJQl9BUlJBWV9JTlRFR0VSIiwiTUFYX0FSUkFZX1RFWFRVUkVfTEFZRVJTIiwiTUlOX1BST0dSQU1fVEVYRUxfT0ZGU0VUIiwiTUFYX1BST0dSQU1fVEVYRUxfT0ZGU0VUIiwiTUFYX1ZBUllJTkdfQ09NUE9ORU5UUyIsIlRFWFRVUkVfMkRfQVJSQVkiLCJURVhUVVJFX0JJTkRJTkdfMkRfQVJSQVkiLCJSMTFGX0cxMUZfQjEwRiIsIlVOU0lHTkVEX0lOVF8xMEZfMTFGXzExRl9SRVYiLCJSR0I5X0U1IiwiVU5TSUdORURfSU5UXzVfOV85XzlfUkVWIiwiVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUl9NT0RFIiwiTUFYX1RSQU5TRk9STV9GRUVEQkFDS19TRVBBUkFURV9DT01QT05FTlRTIiwiVFJBTlNGT1JNX0ZFRURCQUNLX1ZBUllJTkdTIiwiVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUl9TVEFSVCIsIlRSQU5TRk9STV9GRUVEQkFDS19CVUZGRVJfU0laRSIsIlRSQU5TRk9STV9GRUVEQkFDS19QUklNSVRJVkVTX1dSSVRURU4iLCJSQVNURVJJWkVSX0RJU0NBUkQiLCJNQVhfVFJBTlNGT1JNX0ZFRURCQUNLX0lOVEVSTEVBVkVEX0NPTVBPTkVOVFMiLCJNQVhfVFJBTlNGT1JNX0ZFRURCQUNLX1NFUEFSQVRFX0FUVFJJQlMiLCJJTlRFUkxFQVZFRF9BVFRSSUJTIiwiU0VQQVJBVEVfQVRUUklCUyIsIlRSQU5TRk9STV9GRUVEQkFDS19CVUZGRVIiLCJUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSX0JJTkRJTkciLCJSR0JBMzJVSSIsIlJHQjMyVUkiLCJSR0JBMTZVSSIsIlJHQjE2VUkiLCJSR0JBOFVJIiwiUkdCOFVJIiwiUkdCQTMySSIsIlJHQjMySSIsIlJHQkExNkkiLCJSR0IxNkkiLCJSR0JBOEkiLCJSR0I4SSIsIlJFRF9JTlRFR0VSIiwiUkdCX0lOVEVHRVIiLCJSR0JBX0lOVEVHRVIiLCJTQU1QTEVSXzJEX0FSUkFZIiwiU0FNUExFUl8yRF9BUlJBWV9TSEFET1ciLCJTQU1QTEVSX0NVQkVfU0hBRE9XIiwiVU5TSUdORURfSU5UX1ZFQzIiLCJVTlNJR05FRF9JTlRfVkVDMyIsIlVOU0lHTkVEX0lOVF9WRUM0IiwiSU5UX1NBTVBMRVJfMkQiLCJJTlRfU0FNUExFUl8zRCIsIklOVF9TQU1QTEVSX0NVQkUiLCJJTlRfU0FNUExFUl8yRF9BUlJBWSIsIlVOU0lHTkVEX0lOVF9TQU1QTEVSXzJEIiwiVU5TSUdORURfSU5UX1NBTVBMRVJfM0QiLCJVTlNJR05FRF9JTlRfU0FNUExFUl9DVUJFIiwiVU5TSUdORURfSU5UX1NBTVBMRVJfMkRfQVJSQVkiLCJERVBUSF9DT01QT05FTlQzMkYiLCJERVBUSDMyRl9TVEVOQ0lMOCIsIkZMT0FUXzMyX1VOU0lHTkVEX0lOVF8yNF84X1JFViIsIkZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfQ09MT1JfRU5DT0RJTkciLCJGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX0NPTVBPTkVOVF9UWVBFIiwiRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9SRURfU0laRSIsIkZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfR1JFRU5fU0laRSIsIkZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfQkxVRV9TSVpFIiwiRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9BTFBIQV9TSVpFIiwiRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9ERVBUSF9TSVpFIiwiRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9TVEVOQ0lMX1NJWkUiLCJGUkFNRUJVRkZFUl9ERUZBVUxUIiwiVU5TSUdORURfSU5UXzI0XzgiLCJERVBUSDI0X1NURU5DSUw4IiwiVU5TSUdORURfTk9STUFMSVpFRCIsIkRSQVdfRlJBTUVCVUZGRVJfQklORElORyIsIlJFQURfRlJBTUVCVUZGRVIiLCJEUkFXX0ZSQU1FQlVGRkVSIiwiUkVBRF9GUkFNRUJVRkZFUl9CSU5ESU5HIiwiUkVOREVSQlVGRkVSX1NBTVBMRVMiLCJGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1RFWFRVUkVfTEFZRVIiLCJNQVhfQ09MT1JfQVRUQUNITUVOVFMiLCJDT0xPUl9BVFRBQ0hNRU5UMSIsIkNPTE9SX0FUVEFDSE1FTlQyIiwiQ09MT1JfQVRUQUNITUVOVDMiLCJDT0xPUl9BVFRBQ0hNRU5UNCIsIkNPTE9SX0FUVEFDSE1FTlQ1IiwiQ09MT1JfQVRUQUNITUVOVDYiLCJDT0xPUl9BVFRBQ0hNRU5UNyIsIkNPTE9SX0FUVEFDSE1FTlQ4IiwiQ09MT1JfQVRUQUNITUVOVDkiLCJDT0xPUl9BVFRBQ0hNRU5UMTAiLCJDT0xPUl9BVFRBQ0hNRU5UMTEiLCJDT0xPUl9BVFRBQ0hNRU5UMTIiLCJDT0xPUl9BVFRBQ0hNRU5UMTMiLCJDT0xPUl9BVFRBQ0hNRU5UMTQiLCJDT0xPUl9BVFRBQ0hNRU5UMTUiLCJGUkFNRUJVRkZFUl9JTkNPTVBMRVRFX01VTFRJU0FNUExFIiwiTUFYX1NBTVBMRVMiLCJIQUxGX0ZMT0FUIiwiUkciLCJSR19JTlRFR0VSIiwiUjgiLCJSRzgiLCJSMTZGIiwiUjMyRiIsIlJHMTZGIiwiUkczMkYiLCJSOEkiLCJSOFVJIiwiUjE2SSIsIlIxNlVJIiwiUjMySSIsIlIzMlVJIiwiUkc4SSIsIlJHOFVJIiwiUkcxNkkiLCJSRzE2VUkiLCJSRzMySSIsIlJHMzJVSSIsIlZFUlRFWF9BUlJBWV9CSU5ESU5HIiwiUjhfU05PUk0iLCJSRzhfU05PUk0iLCJSR0I4X1NOT1JNIiwiUkdCQThfU05PUk0iLCJTSUdORURfTk9STUFMSVpFRCIsIkNPUFlfUkVBRF9CVUZGRVIiLCJDT1BZX1dSSVRFX0JVRkZFUiIsIkNPUFlfUkVBRF9CVUZGRVJfQklORElORyIsIkNPUFlfV1JJVEVfQlVGRkVSX0JJTkRJTkciLCJVTklGT1JNX0JVRkZFUiIsIlVOSUZPUk1fQlVGRkVSX0JJTkRJTkciLCJVTklGT1JNX0JVRkZFUl9TVEFSVCIsIlVOSUZPUk1fQlVGRkVSX1NJWkUiLCJNQVhfVkVSVEVYX1VOSUZPUk1fQkxPQ0tTIiwiTUFYX0ZSQUdNRU5UX1VOSUZPUk1fQkxPQ0tTIiwiTUFYX0NPTUJJTkVEX1VOSUZPUk1fQkxPQ0tTIiwiTUFYX1VOSUZPUk1fQlVGRkVSX0JJTkRJTkdTIiwiTUFYX1VOSUZPUk1fQkxPQ0tfU0laRSIsIk1BWF9DT01CSU5FRF9WRVJURVhfVU5JRk9STV9DT01QT05FTlRTIiwiTUFYX0NPTUJJTkVEX0ZSQUdNRU5UX1VOSUZPUk1fQ09NUE9ORU5UUyIsIlVOSUZPUk1fQlVGRkVSX09GRlNFVF9BTElHTk1FTlQiLCJBQ1RJVkVfVU5JRk9STV9CTE9DS1MiLCJVTklGT1JNX1RZUEUiLCJVTklGT1JNX1NJWkUiLCJVTklGT1JNX0JMT0NLX0lOREVYIiwiVU5JRk9STV9PRkZTRVQiLCJVTklGT1JNX0FSUkFZX1NUUklERSIsIlVOSUZPUk1fTUFUUklYX1NUUklERSIsIlVOSUZPUk1fSVNfUk9XX01BSk9SIiwiVU5JRk9STV9CTE9DS19CSU5ESU5HIiwiVU5JRk9STV9CTE9DS19EQVRBX1NJWkUiLCJVTklGT1JNX0JMT0NLX0FDVElWRV9VTklGT1JNUyIsIlVOSUZPUk1fQkxPQ0tfQUNUSVZFX1VOSUZPUk1fSU5ESUNFUyIsIlVOSUZPUk1fQkxPQ0tfUkVGRVJFTkNFRF9CWV9WRVJURVhfU0hBREVSIiwiVU5JRk9STV9CTE9DS19SRUZFUkVOQ0VEX0JZX0ZSQUdNRU5UX1NIQURFUiIsIklOVkFMSURfSU5ERVgiLCJNQVhfVkVSVEVYX09VVFBVVF9DT01QT05FTlRTIiwiTUFYX0ZSQUdNRU5UX0lOUFVUX0NPTVBPTkVOVFMiLCJNQVhfU0VSVkVSX1dBSVRfVElNRU9VVCIsIk9CSkVDVF9UWVBFIiwiU1lOQ19DT05ESVRJT04iLCJTWU5DX1NUQVRVUyIsIlNZTkNfRkxBR1MiLCJTWU5DX0ZFTkNFIiwiU1lOQ19HUFVfQ09NTUFORFNfQ09NUExFVEUiLCJVTlNJR05BTEVEIiwiU0lHTkFMRUQiLCJBTFJFQURZX1NJR05BTEVEIiwiVElNRU9VVF9FWFBJUkVEIiwiQ09ORElUSU9OX1NBVElTRklFRCIsIldBSVRfRkFJTEVEIiwiU1lOQ19GTFVTSF9DT01NQU5EU19CSVQiLCJWRVJURVhfQVRUUklCX0FSUkFZX0RJVklTT1IiLCJBTllfU0FNUExFU19QQVNTRUQiLCJBTllfU0FNUExFU19QQVNTRURfQ09OU0VSVkFUSVZFIiwiU0FNUExFUl9CSU5ESU5HIiwiUkdCMTBfQTJVSSIsIklOVF8yXzEwXzEwXzEwX1JFViIsIlRSQU5TRk9STV9GRUVEQkFDSyIsIlRSQU5TRk9STV9GRUVEQkFDS19QQVVTRUQiLCJUUkFOU0ZPUk1fRkVFREJBQ0tfQUNUSVZFIiwiVFJBTlNGT1JNX0ZFRURCQUNLX0JJTkRJTkciLCJURVhUVVJFX0lNTVVUQUJMRV9GT1JNQVQiLCJNQVhfRUxFTUVOVF9JTkRFWCIsIlRFWFRVUkVfSU1NVVRBQkxFX0xFVkVMUyIsIlRJTUVPVVRfSUdOT1JFRCIsIk1BWF9DTElFTlRfV0FJVF9USU1FT1VUX1dFQkdMIiwiUVVFUllfQ09VTlRFUl9CSVRTX0VYVCIsIlRJTUVfRUxBUFNFRF9FWFQiLCJUSU1FU1RBTVBfRVhUIiwiR1BVX0RJU0pPSU5UX0VYVCIsIkNPTVBSRVNTRURfUkdCX1MzVENfRFhUMV9FWFQiLCJDT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQxX0VYVCIsIkNPTVBSRVNTRURfUkdCQV9TM1RDX0RYVDNfRVhUIiwiQ09NUFJFU1NFRF9SR0JBX1MzVENfRFhUNV9FWFQiLCJDT01QUkVTU0VEX1NSR0JfUzNUQ19EWFQxX0VYVCIsIkNPTVBSRVNTRURfU1JHQl9BTFBIQV9TM1RDX0RYVDFfRVhUIiwiQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUM19FWFQiLCJDT01QUkVTU0VEX1NSR0JfQUxQSEFfUzNUQ19EWFQ1X0VYVCIsIkNPTVBSRVNTRURfUjExX0VBQyIsIkNPTVBSRVNTRURfU0lHTkVEX1IxMV9FQUMiLCJDT01QUkVTU0VEX1JHMTFfRUFDIiwiQ09NUFJFU1NFRF9TSUdORURfUkcxMV9FQUMiLCJDT01QUkVTU0VEX1JHQjhfRVRDMiIsIkNPTVBSRVNTRURfU1JHQjhfRVRDMiIsIkNPTVBSRVNTRURfUkdCOF9QVU5DSFRIUk9VR0hfQUxQSEExX0VUQzIiLCJDT01QUkVTU0VEX1NSR0I4X1BVTkNIVEhST1VHSF9BTFBIQTFfRVRDMiIsIkNPTVBSRVNTRURfUkdCQThfRVRDMl9FQUMiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9FVEMyX0VBQyIsIkNPTVBSRVNTRURfUkdCX1BWUlRDXzRCUFBWMV9JTUciLCJDT01QUkVTU0VEX1JHQl9QVlJUQ18yQlBQVjFfSU1HIiwiQ09NUFJFU1NFRF9SR0JBX1BWUlRDXzRCUFBWMV9JTUciLCJDT01QUkVTU0VEX1JHQkFfUFZSVENfMkJQUFYxX0lNRyIsIkNPTVBSRVNTRURfUkdCQV9BU1RDXzR4NF9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ181eDRfS0hSIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfNXg1X0tIUiIsIkNPTVBSRVNTRURfUkdCQV9BU1RDXzZ4NV9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ182eDZfS0hSIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfOHg1X0tIUiIsIkNPTVBSRVNTRURfUkdCQV9BU1RDXzh4Nl9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ184eDhfS0hSIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4NV9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ18xMHg2X0tIUiIsIkNPTVBSRVNTRURfUkdCQV9BU1RDXzEweDhfS0hSIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4MTBfS0hSIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfMTJ4MTBfS0hSIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfMTJ4MTJfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ180eDRfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ181eDRfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ181eDVfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ182eDVfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ182eDZfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ184eDVfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ184eDZfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ184eDhfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg1X0tIUiIsIkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTB4Nl9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEweDhfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHgxMF9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEyeDEwX0tIUiIsIkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTJ4MTJfS0hSIiwiVFlQRV9TSVpFIiwiV0VCR0xfSU5GTyIsIk1BWF9URVhUVVJFX1VOSVRTIiwiZ2V0UGFyYW1ldGVyIiwiTUFYX1VOSUZPUk1fQlVGRkVSUyIsIkRVTU1ZX09CSkVDVCIsIlRFWFRVUkVfRk9STUFUX0RFRkFVTFRTIiwiQ09NUFJFU1NFRF9UWVBFUyIsIlNoYWRlciIsImNvbnN0cnVjdG9yIiwidHlwZSIsInNvdXJjZSIsInNoYWRlciIsImNyZWF0ZVNoYWRlciIsInNoYWRlclNvdXJjZSIsImNvbXBpbGVTaGFkZXIiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJsaW5lcyIsImNvbnNvbGUiLCJlcnJvciIsImdldFNoYWRlckluZm9Mb2ciLCJzcGxpdCIsImxlbmd0aCIsImRlbGV0ZSIsImRlbGV0ZVNoYWRlciIsIlF1ZXJ5IiwidGFyZ2V0IiwicXVlcnkiLCJjcmVhdGVRdWVyeSIsImFjdGl2ZSIsInJlc3VsdCIsImJlZ2luIiwiYmVnaW5RdWVyeSIsImVuZCIsImVuZFF1ZXJ5IiwicmVhZHkiLCJnZXRRdWVyeVBhcmFtZXRlciIsIk51bWJlciIsImRlbGV0ZVF1ZXJ5IiwiQXBwIiwiUGljb0dMIiwidmVyc2lvbiIsImNyZWF0ZUFwcCIsImNvbnRleHRBdHRyaWJ1dGVzIiwiQ3ViZW1hcCIsIkRyYXdDYWxsIiwiRnJhbWVidWZmZXIiLCJQcm9ncmFtIiwiVGV4dHVyZSIsIlRpbWVyIiwiVHJhbnNmb3JtRmVlZGJhY2siLCJVbmlmb3JtQnVmZmVyIiwiVmVydGV4QXJyYXkiLCJWZXJ0ZXhCdWZmZXIiLCJ3aWR0aCIsImRyYXdpbmdCdWZmZXJXaWR0aCIsImhlaWdodCIsImRyYXdpbmdCdWZmZXJIZWlnaHQiLCJ2aWV3cG9ydFgiLCJ2aWV3cG9ydFkiLCJ2aWV3cG9ydFdpZHRoIiwidmlld3BvcnRIZWlnaHQiLCJjdXJyZW50RHJhd0NhbGxzIiwiZW1wdHlGcmFnbWVudFNoYWRlciIsInN0YXRlIiwicHJvZ3JhbSIsInZlcnRleEFycmF5IiwidHJhbnNmb3JtRmVlZGJhY2siLCJhY3RpdmVUZXh0dXJlIiwidGV4dHVyZXMiLCJBcnJheSIsInVuaWZvcm1CdWZmZXJzIiwiZnJlZVVuaWZvcm1CdWZmZXJCYXNlcyIsImRyYXdGcmFtZWJ1ZmZlciIsInJlYWRGcmFtZWJ1ZmZlciIsImNsZWFyQml0cyIsImNwdVRpbWUiLCJncHVUaW1lIiwiZmxvYXRSZW5kZXJUYXJnZXRzRW5hYmxlZCIsImxpbmVhckZsb2F0VGV4dHVyZXNFbmFibGVkIiwiczN0Y1RleHR1cmVzRW5hYmxlZCIsInMzdGNTUkdCVGV4dHVyZXNFbmFibGVkIiwiZXRjVGV4dHVyZXNFbmFibGVkIiwiYXN0Y1RleHR1cmVzRW5hYmxlZCIsInB2cnRjVGV4dHVyZXNFbmFibGVkIiwidmlld3BvcnQiLCJjb2xvck1hc2siLCJyIiwiZyIsImIiLCJhIiwiY2xlYXJDb2xvciIsImNsZWFyTWFzayIsIm1hc2siLCJjbGVhciIsImZyYW1lYnVmZmVyIiwiYmluZEZvckRyYXciLCJiaW5kRm9yUmVhZCIsImRlZmF1bHREcmF3RnJhbWVidWZmZXIiLCJiaW5kRnJhbWVidWZmZXIiLCJkZWZhdWx0UmVhZEZyYW1lYnVmZmVyIiwiZGVwdGhSYW5nZSIsIm5lYXIiLCJmYXIiLCJkZXB0aFRlc3QiLCJlbmFibGUiLCJub0RlcHRoVGVzdCIsImRpc2FibGUiLCJkZXB0aE1hc2siLCJkZXB0aEZ1bmMiLCJmdW5jIiwiYmxlbmQiLCJub0JsZW5kIiwiYmxlbmRGdW5jIiwic3JjIiwiZGVzdCIsImJsZW5kRnVuY1NlcGFyYXRlIiwiY3NyYyIsImNkZXN0IiwiYXNyYyIsImFkZXN0Iiwic3RlbmNpbFRlc3QiLCJub1N0ZW5jaWxUZXN0Iiwic2Npc3NvclRlc3QiLCJub1NjaXNzb3JUZXN0Iiwic2Npc3NvciIsIngiLCJ5Iiwic3RlbmNpbE1hc2siLCJzdGVuY2lsTWFza1NlcGFyYXRlIiwiZmFjZSIsInN0ZW5jaWxGdW5jIiwicmVmIiwic3RlbmNpbEZ1bmNTZXBhcmF0ZSIsInN0ZW5jaWxPcCIsInN0ZW5jaWxGYWlsIiwiZGVwdGhGYWlsIiwicGFzcyIsInN0ZW5jaWxPcFNlcGFyYXRlIiwicmFzdGVyaXplIiwibm9SYXN0ZXJpemUiLCJjdWxsQmFja2ZhY2VzIiwiZHJhd0JhY2tmYWNlcyIsImZsb2F0UmVuZGVyVGFyZ2V0cyIsImdldEV4dGVuc2lvbiIsImxpbmVhckZsb2F0VGV4dHVyZXMiLCJzM3RjVGV4dHVyZXMiLCJleHQiLCJldGNUZXh0dXJlcyIsImFzdGNUZXh0dXJlcyIsInB2cnRjVGV4dHVyZXMiLCJyZWFkUGl4ZWwiLCJvdXRDb2xvciIsIm9wdGlvbnMiLCJmb3JtYXQiLCJyZWFkUGl4ZWxzIiwiZGVmYXVsdFZpZXdwb3J0IiwicmVzaXplIiwiY3JlYXRlUHJvZ3JhbSIsInZzU291cmNlIiwiZnNTb3VyY2UiLCJ4Zm9ybUZlZWRiYWNrVmFycyIsImNyZWF0ZVZlcnRleEFycmF5IiwiY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2siLCJjcmVhdGVWZXJ0ZXhCdWZmZXIiLCJpdGVtU2l6ZSIsImRhdGEiLCJ1c2FnZSIsImNyZWF0ZU1hdHJpeEJ1ZmZlciIsImNyZWF0ZUluZGV4QnVmZmVyIiwiY3JlYXRlVW5pZm9ybUJ1ZmZlciIsImxheW91dCIsImNyZWF0ZVRleHR1cmUyRCIsImltYWdlIiwidW5kZWZpbmVkIiwiY3JlYXRlVGV4dHVyZUFycmF5IiwiZGVwdGgiLCJjcmVhdGVUZXh0dXJlM0QiLCJjcmVhdGVDdWJlbWFwIiwiY3JlYXRlRnJhbWVidWZmZXIiLCJjcmVhdGVUaW1lciIsImNyZWF0ZURyYXdDYWxsIiwicHJpbWl0aXZlIiwiYXBwU3RhdGUiLCJuZWdYIiwicG9zWCIsIm5lZ1kiLCJwb3NZIiwibmVnWiIsInBvc1oiLCJkZWZhdWx0VHlwZSIsInRleHR1cmUiLCJjcmVhdGVUZXh0dXJlIiwiaW50ZXJuYWxGb3JtYXQiLCJjdXJyZW50VW5pdCIsImZsaXBZIiwibWluRmlsdGVyIiwibWFnRmlsdGVyIiwid3JhcFMiLCJ3cmFwVCIsImNvbXBhcmVNb2RlIiwiY29tcGFyZUZ1bmMiLCJnZW5lcmF0ZU1pcG1hcHMiLCJiaW5kIiwicGl4ZWxTdG9yZWkiLCJ0ZXhQYXJhbWV0ZXJpIiwiYmFzZUxldmVsIiwibWF4TGV2ZWwiLCJtaW5MT0QiLCJtYXhMT0QiLCJsZXZlbHMiLCJNYXRoIiwiZmxvb3IiLCJsb2cyIiwibWluIiwidGV4U3RvcmFnZTJEIiwidGV4U3ViSW1hZ2UyRCIsImdlbmVyYXRlTWlwbWFwIiwiZGVsZXRlVGV4dHVyZSIsInVuaXQiLCJjdXJyZW50VGV4dHVyZSIsImJpbmRUZXh0dXJlIiwiY3VycmVudFByb2dyYW0iLCJjdXJyZW50VmVydGV4QXJyYXkiLCJjdXJyZW50VHJhbnNmb3JtRmVlZGJhY2siLCJ1bmlmb3JtSW5kaWNlcyIsInVuaWZvcm1OYW1lcyIsIk1BWF9VTklGT1JNUyIsInVuaWZvcm1WYWx1ZXMiLCJ1bmlmb3JtQ291bnQiLCJ1bmlmb3JtQmxvY2tOYW1lcyIsInVuaWZvcm1CbG9ja0Jhc2VzIiwidW5pZm9ybUJsb2NrQ291bnQiLCJzYW1wbGVySW5kaWNlcyIsInRleHR1cmVDb3VudCIsIm51bUVsZW1lbnRzIiwibnVtSW5zdGFuY2VzIiwidW5pZm9ybSIsInZhbHVlIiwiaW5kZXgiLCJzYW1wbGVycyIsInVuaWZvcm1CbG9jayIsImJ1ZmZlciIsImJhc2UiLCJ1bmlmb3JtQmxvY2tzIiwiZWxlbWVudENvdW50IiwiY291bnQiLCJpbnN0YW5jZUNvdW50IiwiZHJhdyIsInNhbXBsZXJDb3VudCIsInVJbmRleCIsInRJbmRleCIsImJlZ2luVHJhbnNmb3JtRmVlZGJhY2siLCJpbnN0YW5jZWQiLCJpbmRleGVkIiwiZHJhd0VsZW1lbnRzSW5zdGFuY2VkIiwiaW5kZXhUeXBlIiwiZHJhd0FycmF5c0luc3RhbmNlZCIsImRyYXdFbGVtZW50cyIsImRyYXdBcnJheXMiLCJlbmRUcmFuc2Zvcm1GZWVkYmFjayIsImxlbiIsImFuZ2xlQnVnQnVmZmVycyIsImJpbmRCdWZmZXJCYXNlIiwibnVtQ29sb3JUYXJnZXRzIiwiY29sb3JUZXh0dXJlcyIsImNvbG9yQXR0YWNobWVudHMiLCJjb2xvclRleHR1cmVUYXJnZXRzIiwiZGVwdGhUZXh0dXJlIiwiZGVwdGhUZXh0dXJlVGFyZ2V0IiwiY29sb3JUYXJnZXQiLCJpczNEIiwiY3VycmVudEZyYW1lYnVmZmVyIiwiYmluZEFuZENhcHR1cmVTdGF0ZSIsImZyYW1lYnVmZmVyVGV4dHVyZUxheWVyIiwiZnJhbWVidWZmZXJUZXh0dXJlMkQiLCJkcmF3QnVmZmVycyIsInJlc3RvcmVTdGF0ZSIsImRlcHRoVGFyZ2V0IiwiZGVsZXRlRnJhbWVidWZmZXIiLCJnZXRTdGF0dXMiLCJzdGF0dXMiLCJjaGVja0ZyYW1lYnVmZmVyU3RhdHVzIiwiVW5pZm9ybXMiLCJTaW5nbGVDb21wb25lbnRVbmlmb3JtIiwiTXVsdGlOdW1lcmljVW5pZm9ybSIsIk11bHRpQm9vbFVuaWZvcm0iLCJNYXRyaXhVbmlmb3JtIiwieGZvcm1GZWViYWNrVmFycyIsInZTaGFkZXIiLCJmU2hhZGVyIiwib3duVmVydGV4U2hhZGVyIiwib3duRnJhZ21lbnRTaGFkZXIiLCJhdHRhY2hTaGFkZXIiLCJ0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzIiwibGlua1Byb2dyYW0iLCJnZXRQcm9ncmFtUGFyYW1ldGVyIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJ1bmlmb3JtcyIsInVzZVByb2dyYW0iLCJudW1Vbmlmb3JtcyIsInRleHR1cmVVbml0IiwidW5pZm9ybUluZm8iLCJnZXRBY3RpdmVVbmlmb3JtIiwidW5pZm9ybUhhbmRsZSIsImdldFVuaWZvcm1Mb2NhdGlvbiIsIlVuaWZvcm1DbGFzcyIsInNpemUiLCJ1bmlmb3JtMWkiLCJudW1Vbmlmb3JtQmxvY2tzIiwiYmxvY2tOYW1lIiwiZ2V0QWN0aXZlVW5pZm9ybUJsb2NrTmFtZSIsImJsb2NrSW5kZXgiLCJnZXRVbmlmb3JtQmxvY2tJbmRleCIsInVuaWZvcm1CbG9ja0Jhc2UiLCJ1bmlmb3JtQmxvY2tCaW5kaW5nIiwiZGVsZXRlUHJvZ3JhbSIsInNldCIsIlVOSUZPUk1fRlVOQ19OQU1FIiwiVU5JRk9STV9DT01QT05FTlRfQ09VTlQiLCJVTklGT1JNX0NBQ0hFX0NMQVNTIiwiSW50MzJBcnJheSIsIlVpbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiaGFuZGxlIiwiZ2xGdW5jTmFtZSIsImNhY2hlIiwiZmlsbCIsImoiLCJEVU1NWV9BUlJBWSIsImJpbmRpbmciLCJjb21wcmVzc2VkIiwid3JhcFIiLCJtaXBtYXBzIiwibWF4IiwidGV4UGFyYW1ldGVyZiIsInRleFN0b3JhZ2UzRCIsImlzQXJyYXkiLCJudW1MZXZlbHMiLCJjb21wcmVzc2VkVGV4U3ViSW1hZ2UzRCIsImNvbXByZXNzZWRUZXhTdWJJbWFnZTJEIiwidGV4U3ViSW1hZ2UzRCIsImNwdVRpbWVyIiwid2luZG93IiwicGVyZm9ybWFuY2UiLCJEYXRlIiwiZ3B1VGltZXJFeHRlbnNpb24iLCJncHVUaW1lciIsImdwdVRpbWVyUXVlcnkiLCJjcHVTdGFydFRpbWUiLCJzdGFydCIsIm5vdyIsImdwdVRpbWVyQXZhaWxhYmxlIiwiZ3B1VGltZXJEaXNqb2ludCIsImZlZWRiYWNrQnVmZmVyIiwiYmluZFRyYW5zZm9ybUZlZWRiYWNrIiwiZGVsZXRlVHJhbnNmb3JtRmVlZGJhY2siLCJjcmVhdGVCdWZmZXIiLCJkYXRhVmlld3MiLCJvZmZzZXRzIiwic2l6ZXMiLCJ0eXBlcyIsImN1cnJlbnRCYXNlIiwiYmluZEJ1ZmZlciIsImJ1ZmZlckRhdGEiLCJ2aWV3IiwidXBkYXRlIiwib2Zmc2V0Iiwic3ViYXJyYXkiLCJidWZmZXJTdWJEYXRhIiwiZGVsZXRlQnVmZmVyIiwiY3VycmVudEJ1ZmZlciIsImluc3RhbmNlZEJ1ZmZlcnMiLCJ2ZXJ0ZXhBdHRyaWJ1dGVCdWZmZXIiLCJhdHRyaWJ1dGVJbmRleCIsInZlcnRleEJ1ZmZlciIsImF0dHJpYnV0ZUJ1ZmZlciIsImluc3RhbmNlQXR0cmlidXRlQnVmZmVyIiwidmVydGV4SW50ZWdlckF0dHJpYnV0ZUJ1ZmZlciIsImluc3RhbmNlSW50ZWdlckF0dHJpYnV0ZUJ1ZmZlciIsInZlcnRleE5vcm1hbGl6ZWRBdHRyaWJ1dGVCdWZmZXIiLCJpbnN0YW5jZU5vcm1hbGl6ZWRBdHRyaWJ1dGVCdWZmZXIiLCJpbmRleEJ1ZmZlciIsImJpbmRWZXJ0ZXhBcnJheSIsIm51bUl0ZW1zIiwiZGVsZXRlVmVydGV4QXJyYXkiLCJpbnRlZ2VyIiwibm9ybWFsaXplZCIsIm51bUNvbHVtbnMiLCJ2ZXJ0ZXhBdHRyaWJJUG9pbnRlciIsInZlcnRleEF0dHJpYlBvaW50ZXIiLCJ2ZXJ0ZXhBdHRyaWJEaXZpc29yIiwiZW5hYmxlVmVydGV4QXR0cmliQXJyYXkiLCJpbmRleEFycmF5IiwiZGF0YUxlbmd0aCIsImxvZzQiLCJpc1Bvd2VyT2YyIiwibmVhcmVzdFBvd2VyT2ZUd28iLCJjZWlsIiwibmVhcmVzdFBvd2VyT2ZGb3VyIiwiRkxPQVRfRk9STUFUU19CWV9JVEVNX1NJWkUiLCJpc0Zsb2F0VGV4dHVyZSIsInRleCIsImlzRmxvYXRCdWZmZXIiLCJidWYiLCJpc1Vuc2lnbmVkQnVmZmVyIiwiY3JlYXRlRmxvYXRUZXh0dXJlIiwiYXBwIiwicmVhZEZyb21UZXh0dXJlIiwiZmIiLCJmcm9tIiwiaW52YXJpYW50IiwiZXhwciIsIkVycm9yIiwicGljayIsIm9iaiIsInByb3BzIiwicmVkdWNlIiwicHJvcCIsImNyZWF0ZVZhbyIsInBhdHRlcm4iLCJ2YW8iLCJzdGVwU2l6ZSIsIktpdCIsInJlYWRhYmxlIiwiZHVwbGV4IiwidGYiLCJtYXJrIiwiU3ltYm9sIiwiaW50cm9Qcm9nIiwiaW50cm9WZXJ0Iiwic3RvcmVGcmFnIiwicmVkdWNlUHJvZyIsInJlZHVjZVZlcnQiLCJOIiwidGVtcEEiLCJ0ZW1wQiIsInN0ZXBDb3VudCIsImFjdGl2ZUtpdCIsInJlc3VsdEZiIiwibmV4dEtpdCIsInByb2ciLCJhc3NlbWJsZVZlcnQiLCJwb3NpdGlvbnMiLCJtYXNzZXMiLCJib3VuZHMiLCJRVUFEIiwicXVhZFZlcnQiLCJyZWR1Y2VGcmFnIiwiZ3JpZCIsImludGVyaW0iLCJ0ZXhBIiwidGV4QiIsImZiQSIsImZiQiIsImFjdGl2ZUZiIiwiYWN0aXZlVGV4IiwiY29weVRleFN1YkltYWdlMkQiLCJDT05TVEFOVFNfTEFZT1VUIiwic2F2ZUNvbnN0YW50cyIsImNvbnN0cyIsInViIiwibm9kZUNvdW50IiwiZGVsdGFUIiwic3ByaW5nQ29lZiIsInNwcmluZ0xlbmd0aCIsInJlcHVsc2VDb2VmIiwidGhldGEiLCJkcmFnQ29lZiIsImdyYXZpdHlDb2VmIiwiY29uc3RhbnRzVUIiLCJzaW11bGF0ZVZlcnQiLCJwcmV2Q29uc3RhbnRzIiwidmVsb2NpdGllcyIsImVkZ2VzTG9jcyIsInB5cmFtaWQiLCJhbGxQb3NpdGlvbnMiLCJlZGdlcyIsImNvbnN0YW50cyIsInJlc3VsdFBvc2l0aW9ucyIsInJlc3VsdFZlbG9jaXRpZXMiLCJyZXN1bHRBbGxQb3NpdGlvbnMiLCJsb2NhdGVWZXJ0IiwiY3Vyc29yIiwic2VsZWN0RnJhZyIsImJsZW5kRXF1YXRpb24iLCJjb2xvckZyYWciLCJjb3JuZXJzIiwiZW5kcG9pbnRzIiwiVEFSR0VUX0ZSQU1FX0RVUkFUSU9OIiwiR3JhcGgiLCJfYXBwIiwiX2NvbnN0YW50cyIsIl9ub2RlcyIsIl9lZGdlQ291bnQiLCJfbm9kZU5hbWVUb0lkIiwiTWFwIiwiX3J1bm5pbmciLCJfc2hvdWxkVXBkYXRlIiwiX3Nob3VsZERyYXciLCJfc2hvdWxkRHJhd0xhYmVscyIsIl9zdGVwc1BlclNjaGVkdWxlIiwiX3ZpZXdwb3J0IiwiX3N0ZXBzIiwiZmluZEJvdW5kcyIsImJ1aWxkR3JpZCIsImJ1aWxkUHlyYW1pZCIsInNpbXVsYXRlIiwiZGV0ZWN0Q3Vyc29yIiwic2VsZWN0Tm9kZXMiLCJkcmF3Tm9kZXMiLCJkcmF3RWRnZXMiLCJkcmF3TGFiZWxzIiwiX2J1ZmZlcnMiLCJwb3NpdGlvbnNBIiwicG9zaXRpb25zQiIsInZlbG9jaXRpZXNBIiwidmVsb2NpdGllc0IiLCJlZGdlcG9pbnRzIiwiX3RleHR1cmVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiX29uQ2xpY2siLCJjb25maWd1cmUiLCJjb25maWciLCJhc3NpZ24iLCJzaG91bGREcmF3Iiwic2hvdWxkRHJhd0xhYmVscyIsImFkZE5vZGVzIiwibm9kZXMiLCJuZXh0SWQiLCJ3ZWlnaHQiLCJwdXNoIiwiYWRkRWRnZXMiLCJzb3VyY2VJZCIsInRhcmdldElkIiwicnVuIiwiX3NjaGVkdWxlIiwic3RlcCIsIl91cGRhdGUiLCJfdHVybiIsImhhbHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwic3BlbnQiLCJldmVudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJzdGVwcyIsImlkeCIsImxvZyIsImVkZ2VDb3VudCIsInZwR3JpZFNoYXBlIiwiZ3JpZFNpemUiLCJzcXJ0IiwicG9zaXRpb25zVmJvTGVuIiwicG9zVGV4U2l6ZSIsImVkZ1RleFNpemUiLCJjb3JuZXJUbXBsIiwiZWRnZXNMb2NzTGVuIiwiZW5kcG9pbnRzTGVuIiwiZWRnZXNMZW4iLCJub2RlIiwiZWRnZSIsInZpZXdwb3J0R3JpZCIsIl9jbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCQyxTQUFTQSxnQ0FBVCxDQUEwQ0MsSUFBMUMsRUFBZ0RDLE9BQWhELEVBQXlEO0lBRXhEQyxjQUFBLEdBQWlCRCxPQUFPLEVBQXhCLENBREQ7R0FERCxFQVNHRSxjQVRILEVBU1MsWUFBVzs7O2dCQUNNQyxPQUFULEVBQWtCOzs7Ozs7O1lBRXJCQyxnQkFBZ0IsR0FBRyxFQUF2Qjs7Ozs7Ozs7aUJBR1NDLG1CQUFULENBQTZCQyxRQUE3QixFQUF1Qzs7Ozs7OztjQUduQ0YsZ0JBQWdCLENBQUNFLFFBQUQsQ0FBbkIsRUFBK0I7O21CQUN2QkYsZ0JBQWdCLENBQUNFLFFBQUQsQ0FBaEIsQ0FBMkJDLE9BQWxDOzs7Ozs7Ozs7Y0FHR04sTUFBTSxHQUFHRyxnQkFBZ0IsQ0FBQ0UsUUFBRCxDQUFoQixHQUE2Qjs7WUFDekNFLENBQUMs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
