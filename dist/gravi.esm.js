function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/*
PicoGL.js v0.8.8

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
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["PicoGL"] = factory();else root["PicoGL"] = factory();
})(undefined, function () {
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
      var _TYPE_SIZE;

      var canvas = document.createElement("canvas");
      var gl = canvas.getContext("webgl2"); // https://www.khronos.org/registry/webgl/specs/1.0/
      // https://www.khronos.org/registry/webgl/specs/latest/2.0/#1.1

      var CONSTANTS = {
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
        TYPE_SIZE: (_TYPE_SIZE = {}, _TYPE_SIZE[gl.BYTE] = 1, _TYPE_SIZE[gl.UNSIGNED_BYTE] = 1, _TYPE_SIZE[gl.SHORT] = 2, _TYPE_SIZE[gl.UNSIGNED_SHORT] = 2, _TYPE_SIZE[gl.INT] = 4, _TYPE_SIZE[gl.UNSIGNED_INT] = 4, _TYPE_SIZE[gl.FLOAT] = 4, _TYPE_SIZE),
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
      var _CONSTANTS$UNSIGNED_B, _CONSTANTS$UNSIGNED_S, _CONSTANTS$FLOAT, _TEXTURE_FORMAT_DEFAU;

      var CONSTANTS = __webpack_require__(0);

      var TEXTURE_FORMAT_DEFAULTS = (_TEXTURE_FORMAT_DEFAU = {}, _TEXTURE_FORMAT_DEFAU[CONSTANTS.UNSIGNED_BYTE] = (_CONSTANTS$UNSIGNED_B = {}, _CONSTANTS$UNSIGNED_B[CONSTANTS.RED] = CONSTANTS.R8, _CONSTANTS$UNSIGNED_B[CONSTANTS.RG] = CONSTANTS.RG8, _CONSTANTS$UNSIGNED_B[CONSTANTS.RGB] = CONSTANTS.RGB8, _CONSTANTS$UNSIGNED_B[CONSTANTS.RGBA] = CONSTANTS.RGBA8, _CONSTANTS$UNSIGNED_B), _TEXTURE_FORMAT_DEFAU[CONSTANTS.UNSIGNED_SHORT] = (_CONSTANTS$UNSIGNED_S = {}, _CONSTANTS$UNSIGNED_S[CONSTANTS.DEPTH_COMPONENT] = CONSTANTS.DEPTH_COMPONENT16, _CONSTANTS$UNSIGNED_S), _TEXTURE_FORMAT_DEFAU[CONSTANTS.FLOAT] = (_CONSTANTS$FLOAT = {}, _CONSTANTS$FLOAT[CONSTANTS.RED] = CONSTANTS.R16F, _CONSTANTS$FLOAT[CONSTANTS.RG] = CONSTANTS.RG16F, _CONSTANTS$FLOAT[CONSTANTS.RGB] = CONSTANTS.RGB16F, _CONSTANTS$FLOAT[CONSTANTS.RGBA] = CONSTANTS.RGBA16F, _CONSTANTS$FLOAT[CONSTANTS.DEPTH_COMPONENT] = CONSTANTS.DEPTH_COMPONENT32F, _CONSTANTS$FLOAT), _TEXTURE_FORMAT_DEFAU.COMPRESSED_TYPES = {}, _TEXTURE_FORMAT_DEFAU);
      module.exports = TEXTURE_FORMAT_DEFAULTS;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      var Shader =
      /*#__PURE__*/
      function () {
        function Shader(gl, type, source) {
          this.gl = gl;
          this.shader = gl.createShader(type);
          gl.shaderSource(this.shader, source);
          gl.compileShader(this.shader);

          if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
            var i, lines;
            console.error(gl.getShaderInfoLog(this.shader));
            lines = source.split("\n");

            for (i = 0; i < lines.length; ++i) {
              console.error(i + 1 + ": " + lines[i]);
            }
          }
        }
        /**
            Delete this shader.
             @method
            @return {Shader} The Shader object.
        */


        var _proto = Shader.prototype;

        _proto.delete = function _delete() {
          if (this.shader) {
            this.gl.deleteShader(this.shader);
            this.shader = null;
          }

          return this;
        };

        return Shader;
      }();

      module.exports = Shader;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      var Query =
      /*#__PURE__*/
      function () {
        function Query(gl, target) {
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


        var _proto2 = Query.prototype;

        _proto2.begin = function begin() {
          if (!this.active) {
            this.gl.beginQuery(this.target, this.query);
            this.result = null;
          }

          return this;
        };
        /**
            End a query.
             @method
            @return {Query} The Query object.
        */


        _proto2.end = function end() {
          if (!this.active) {
            this.gl.endQuery(this.target);
            this.active = true;
          }

          return this;
        };
        /**
            Check if query result is available.
             @method
            @return {boolean} If results are available.
        */


        _proto2.ready = function ready() {
          if (this.active && this.gl.getQueryParameter(this.query, this.gl.QUERY_RESULT_AVAILABLE)) {
            this.active = false; // Note(Tarek): Casting because FF incorrectly returns booleans.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1422714 

            this.result = Number(this.gl.getQueryParameter(this.query, this.gl.QUERY_RESULT));
            return true;
          }

          return false;
        };
        /**
            Delete this query.
             @method
            @return {Query} The Query object.
        */


        _proto2.delete = function _delete() {
          if (this.query) {
            this.gl.deleteQuery(this.query);
            this.query = null;
          }

          return this;
        };

        return Query;
      }();

      module.exports = Query;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      var App = __webpack_require__(5);
      /**
          Global PicoGL module. For convenience, all WebGL enums are stored
          as properties of PicoGL (e.g. PicoGL.FLOAT, PicoGL.ONE_MINUS_SRC_ALPHA).
      
          @namespace PicoGL
      */


      var PicoGL = __webpack_require__(0);

      PicoGL.version = "0.8.8";
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
      var CONSTANTS = __webpack_require__(0);

      var TEXTURE_FORMAT_DEFAULTS = __webpack_require__(1);

      var Cubemap = __webpack_require__(6);

      var DrawCall = __webpack_require__(7);

      var Framebuffer = __webpack_require__(8);

      var Program = __webpack_require__(9);

      var Shader = __webpack_require__(2);

      var Texture = __webpack_require__(11);

      var Timer = __webpack_require__(12);

      var TransformFeedback = __webpack_require__(13);

      var UniformBuffer = __webpack_require__(14);

      var VertexArray = __webpack_require__(15);

      var VertexBuffer = __webpack_require__(16);

      var Query = __webpack_require__(3);
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


      var App =
      /*#__PURE__*/
      function () {
        function App(canvas, contextAttributes) {
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


        var _proto3 = App.prototype;

        _proto3.colorMask = function colorMask(r, g, b, a) {
          this.gl.colorMask(r, g, b, a);
          return this;
        };
        /**
            Set the clear color.
             @method
            @param {number} r Red channel.
            @param {number} g Green channel.
            @param {number} b Blue channel.
            @param {number} a Alpha channel.
            @return {App} The App object.
        */


        _proto3.clearColor = function clearColor(r, g, b, a) {
          this.gl.clearColor(r, g, b, a);
          return this;
        };
        /**
            Set the clear mask bits to use when calling clear().
            E.g. app.clearMask(PicoGL.COLOR_BUFFER_BIT).
             @method
            @param {GLEnum} mask Bit mask of buffers to clear.
            @return {App} The App object.
        */


        _proto3.clearMask = function clearMask(mask) {
          this.clearBits = mask;
          return this;
        };
        /**
            Clear the canvas
             @method
            @return {App} The App object.
        */


        _proto3.clear = function clear() {
          this.gl.clear(this.clearBits);
          return this;
        };
        /**
            Bind a draw framebuffer to the WebGL context.
             @method
            @param {Framebuffer} framebuffer The Framebuffer object to bind.
            @see Framebuffer
            @return {App} The App object.
        */


        _proto3.drawFramebuffer = function drawFramebuffer(framebuffer) {
          framebuffer.bindForDraw();
          return this;
        };
        /**
            Bind a read framebuffer to the WebGL context.
             @method
            @param {Framebuffer} framebuffer The Framebuffer object to bind.
            @see Framebuffer
            @return {App} The App object.
        */


        _proto3.readFramebuffer = function readFramebuffer(framebuffer) {
          framebuffer.bindForRead();
          return this;
        };
        /**
            Switch back to the default framebuffer for drawing (i.e. draw to the screen).
            Note that this method resets the viewport to match the default framebuffer.
             @method
            @return {App} The App object.
        */


        _proto3.defaultDrawFramebuffer = function defaultDrawFramebuffer() {
          if (this.state.drawFramebuffer !== null) {
            this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, null);
            this.state.drawFramebuffer = null;
          }

          return this;
        };
        /**
            Switch back to the default framebuffer for reading (i.e. read from the screen).
             @method
            @return {App} The App object.
        */


        _proto3.defaultReadFramebuffer = function defaultReadFramebuffer() {
          if (this.state.readFramebuffer !== null) {
            this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, null);
            this.state.readFramebuffer = null;
          }

          return this;
        };
        /**
            Set the depth range.
             @method
            @param {number} near Minimum depth value.
            @param {number} far Maximum depth value.
            @return {App} The App object.
        */


        _proto3.depthRange = function depthRange(near, far) {
          this.gl.depthRange(near, far);
          return this;
        };
        /**
            Enable depth testing.
             @method
            @return {App} The App object.
        */


        _proto3.depthTest = function depthTest() {
          this.gl.enable(this.gl.DEPTH_TEST);
          return this;
        };
        /**
            Disable depth testing.
             @method
            @return {App} The App object.
        */


        _proto3.noDepthTest = function noDepthTest() {
          this.gl.disable(this.gl.DEPTH_TEST);
          return this;
        };
        /**
            Enable or disable writing to the depth buffer.
             @method
            @param {Boolean} mask The depth mask.
            @return {App} The App object.
        */


        _proto3.depthMask = function depthMask(mask) {
          this.gl.depthMask(mask);
          return this;
        };
        /**
            Set the depth test function. E.g. app.depthFunc(PicoGL.LEQUAL).
             @method
            @param {GLEnum} func The depth testing function to use.
            @return {App} The App object.
        */


        _proto3.depthFunc = function depthFunc(func) {
          this.gl.depthFunc(func);
          return this;
        };
        /**
            Enable blending.
             @method
            @return {App} The App object.
        */


        _proto3.blend = function blend() {
          this.gl.enable(this.gl.BLEND);
          return this;
        };
        /**
            Disable blending
             @method
            @return {App} The App object.
        */


        _proto3.noBlend = function noBlend() {
          this.gl.disable(this.gl.BLEND);
          return this;
        };
        /**
            Set the blend function. E.g. app.blendFunc(PicoGL.ONE, PicoGL.ONE_MINUS_SRC_ALPHA).
             @method
            @param {GLEnum} src The source blending weight.
            @param {GLEnum} dest The destination blending weight.
            @return {App} The App object.
        */


        _proto3.blendFunc = function blendFunc(src, dest) {
          this.gl.blendFunc(src, dest);
          return this;
        };
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


        _proto3.blendFuncSeparate = function blendFuncSeparate(csrc, cdest, asrc, adest) {
          this.gl.blendFuncSeparate(csrc, cdest, asrc, adest);
          return this;
        };
        /**
            Enable stencil testing.
            NOTE: Only works if { stencil: true } passed as a
            context attribute when creating the App!
             @method
            @return {App} The App object.
        */


        _proto3.stencilTest = function stencilTest() {
          this.gl.enable(this.gl.STENCIL_TEST);
          return this;
        };
        /**
            Disable stencil testing.
             @method
            @return {App} The App object.
        */


        _proto3.noStencilTest = function noStencilTest() {
          this.gl.disable(this.gl.STENCIL_TEST);
          return this;
        };
        /**
            Enable scissor testing.
             @method
            @return {App} The App object.
        */


        _proto3.scissorTest = function scissorTest() {
          this.gl.enable(this.gl.SCISSOR_TEST);
          return this;
        };
        /**
            Disable scissor testing.
             @method
            @return {App} The App object.
        */


        _proto3.noScissorTest = function noScissorTest() {
          this.gl.disable(this.gl.SCISSOR_TEST);
          return this;
        };
        /**
            Define the scissor box.
             @method
            @return {App} The App object.
        */


        _proto3.scissor = function scissor(x, y, width, height) {
          this.gl.scissor(x, y, width, height);
          return this;
        };
        /**
            Set the bitmask to use for tested stencil values.
            E.g. app.stencilMask(0xFF).
            NOTE: Only works if { stencil: true } passed as a
            context attribute when creating the App!
             @method
            @param {number} mask The mask value.
            @return {App} The App object.
         */


        _proto3.stencilMask = function stencilMask(mask) {
          this.gl.stencilMask(mask);
          return this;
        };
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


        _proto3.stencilMaskSeparate = function stencilMaskSeparate(face, mask) {
          this.gl.stencilMaskSeparate(face, mask);
          return this;
        };
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


        _proto3.stencilFunc = function stencilFunc(func, ref, mask) {
          this.gl.stencilFunc(func, ref, mask);
          return this;
        };
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


        _proto3.stencilFuncSeparate = function stencilFuncSeparate(face, func, ref, mask) {
          this.gl.stencilFuncSeparate(face, func, ref, mask);
          return this;
        };
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


        _proto3.stencilOp = function stencilOp(stencilFail, depthFail, pass) {
          this.gl.stencilOp(stencilFail, depthFail, pass);
          return this;
        };
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


        _proto3.stencilOpSeparate = function stencilOpSeparate(face, stencilFail, depthFail, pass) {
          this.gl.stencilOpSeparate(face, stencilFail, depthFail, pass);
          return this;
        };
        /**
            Enable rasterization step.
             @method
            @return {App} The App object.
        */


        _proto3.rasterize = function rasterize() {
          this.gl.disable(this.gl.RASTERIZER_DISCARD);
          return this;
        };
        /**
            Disable rasterization step.
             @method
            @return {App} The App object.
        */


        _proto3.noRasterize = function noRasterize() {
          this.gl.enable(this.gl.RASTERIZER_DISCARD);
          return this;
        };
        /**
            Enable backface culling.
             @method
            @return {App} The App object.
        */


        _proto3.cullBackfaces = function cullBackfaces() {
          this.gl.enable(this.gl.CULL_FACE);
          return this;
        };
        /**
            Disable backface culling.
             @method
            @return {App} The App object.
        */


        _proto3.drawBackfaces = function drawBackfaces() {
          this.gl.disable(this.gl.CULL_FACE);
          return this;
        };
        /**
            Enable the EXT_color_buffer_float extension. Allows for creating float textures as
            render targets on FrameBuffer objects.
             @method
            @see Framebuffer
            @return {App} The App object.
        */


        _proto3.floatRenderTargets = function floatRenderTargets() {
          this.floatRenderTargetsEnabled = !!this.gl.getExtension("EXT_color_buffer_float");
          return this;
        };
        /**
            Enable the OES_texture_float_linear extension. Allows for linear blending on float textures.
             @method
            @see Framebuffer
            @return {App} The App object.
        */


        _proto3.linearFloatTextures = function linearFloatTextures() {
          this.linearFloatTexturesEnabled = !!this.gl.getExtension("OES_texture_float_linear");
          return this;
        };
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


        _proto3.s3tcTextures = function s3tcTextures() {
          var ext = this.gl.getExtension("WEBGL_compressed_texture_s3tc");
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
        };
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


        _proto3.etcTextures = function etcTextures() {
          var ext = this.gl.getExtension("WEBGL_compressed_texture_etc");
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
        };
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


        _proto3.astcTextures = function astcTextures() {
          var ext = this.gl.getExtension("WEBGL_compressed_texture_astc");
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
        };
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


        _proto3.pvrtcTextures = function pvrtcTextures() {
          var ext = this.gl.getExtension("WEBGL_compressed_texture_pvrtc");
          this.pvrtcTexturesEnabled = !!ext;

          if (this.pvrtcTexturesEnabled) {
            TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = true;
            TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = true;
            TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = true;
            TEXTURE_FORMAT_DEFAULTS.COMPRESSED_TYPES[CONSTANTS.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = true;
          }

          return this;
        };
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


        _proto3.readPixel = function readPixel(x, y, outColor, options) {
          if (options === void 0) {
            options = CONSTANTS.DUMMY_OBJECT;
          }

          var _options = options,
              _options$format = _options.format,
              format = _options$format === void 0 ? CONSTANTS.RGBA : _options$format,
              _options$type = _options.type,
              type = _options$type === void 0 ? CONSTANTS.UNSIGNED_BYTE : _options$type;
          this.gl.readPixels(x, y, 1, 1, format, type, outColor);
          return this;
        };
        /**
            Set the viewport.
             @method
            @param {number} x Left bound of the viewport rectangle.
            @param {number} y Lower bound of the viewport rectangle.
            @param {number} width Width of the viewport rectangle.
            @param {number} height Height of the viewport rectangle.
            @return {App} The App object.
        */


        _proto3.viewport = function viewport(x, y, width, height) {
          if (this.viewportWidth !== width || this.viewportHeight !== height || this.viewportX !== x || this.viewportY !== y) {
            this.viewportX = x;
            this.viewportY = y;
            this.viewportWidth = width;
            this.viewportHeight = height;
            this.gl.viewport(x, y, this.viewportWidth, this.viewportHeight);
          }

          return this;
        };
        /**
            Set the viewport to the full canvas.
             @method
            @return {App} The App object.
        */


        _proto3.defaultViewport = function defaultViewport() {
          this.viewport(0, 0, this.width, this.height);
          return this;
        };
        /**
            Resize the drawing surface.
             @method
            @param {number} width The new canvas width.
            @param {number} height The new canvas height.
            @return {App} The App object.
        */


        _proto3.resize = function resize(width, height) {
          this.canvas.width = width;
          this.canvas.height = height;
          this.width = this.gl.drawingBufferWidth;
          this.height = this.gl.drawingBufferHeight;
          this.viewport(0, 0, this.width, this.height);
          return this;
        };
        /**
            Create a program.
             @method
            @param {Shader|string} vertexShader Vertex shader object or source code.
            @param {Shader|string} fragmentShader Fragment shader object or source code.
            @param {Array} [xformFeedbackVars] Transform feedback varyings.
            @return {Program} New Program object.
        */


        _proto3.createProgram = function createProgram(vsSource, fsSource, xformFeedbackVars) {
          return new Program(this.gl, this.state, vsSource, fsSource, xformFeedbackVars);
        };
        /**
            Create a shader. Creating a shader separately from a program allows for
            shader reuse.
             @method
            @param {GLEnum} type Shader type.
            @param {string} source Shader source.
            @return {Shader} New Shader object.
        */


        _proto3.createShader = function createShader(type, source) {
          return new Shader(this.gl, type, source);
        };
        /**
            Create a vertex array.
             @method
            @return {VertexArray} New VertexArray object.
        */


        _proto3.createVertexArray = function createVertexArray() {
          return new VertexArray(this.gl, this.state);
        };
        /**
            Create a transform feedback object.
             @method
            @return {TransformFeedback} New TransformFeedback object.
        */


        _proto3.createTransformFeedback = function createTransformFeedback() {
          return new TransformFeedback(this.gl, this.state);
        };
        /**
            Create a vertex buffer.
             @method
            @param {GLEnum} type The data type stored in the vertex buffer.
            @param {number} itemSize Number of elements per vertex.
            @param {ArrayBufferView} data Buffer data.
            @param {GLEnum} [usage=STATIC_DRAW] Buffer usage.
            @return {VertexBuffer} New VertexBuffer object.
        */


        _proto3.createVertexBuffer = function createVertexBuffer(type, itemSize, data, usage) {
          return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage);
        };
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


        _proto3.createMatrixBuffer = function createMatrixBuffer(type, data, usage) {
          return new VertexBuffer(this.gl, this.state, type, 0, data, usage);
        };
        /**
            Create an index buffer.
             @method
            @param {GLEnum} type The data type stored in the index buffer.
            @param {number} itemSize Number of elements per primitive.
            @param {ArrayBufferView} data Index buffer data.
            @param {GLEnum} [usage=STATIC_DRAW] Buffer usage.
            @return {VertexBuffer} New VertexBuffer object.
        */


        _proto3.createIndexBuffer = function createIndexBuffer(type, itemSize, data, usage) {
          return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage, true);
        };
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


        _proto3.createUniformBuffer = function createUniformBuffer(layout, usage) {
          return new UniformBuffer(this.gl, this.state, layout, usage);
        };
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


        _proto3.createTexture2D = function createTexture2D(image, width, height, options) {
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
        };
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


        _proto3.createTextureArray = function createTextureArray(image, width, height, depth, options) {
          if (typeof image === "number") {
            // Create empty texture just give width/height/depth.
            options = depth;
            depth = height;
            height = width;
            width = image;
            image = null;
          }

          return new Texture(this.gl, this.state, this.gl.TEXTURE_2D_ARRAY, image, width, height, depth, true, options);
        };
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


        _proto3.createTexture3D = function createTexture3D(image, width, height, depth, options) {
          if (typeof image === "number") {
            // Create empty texture just give width/height/depth.
            options = depth;
            depth = height;
            height = width;
            width = image;
            image = null;
          }

          return new Texture(this.gl, this.state, this.gl.TEXTURE_3D, image, width, height, depth, true, options);
        };
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


        _proto3.createCubemap = function createCubemap(options) {
          return new Cubemap(this.gl, this.state, options);
        };
        /**
            Create a framebuffer.
             @method
            @return {Framebuffer} New Framebuffer object.
        */


        _proto3.createFramebuffer = function createFramebuffer() {
          return new Framebuffer(this.gl, this.state);
        };
        /**
            Create a query.
             @method
            @param {GLEnum} target Information to query.
            @return {Query} New Query object.
        */


        _proto3.createQuery = function createQuery(target) {
          return new Query(this.gl, target);
        };
        /**
            Create a timer.
             @method
            @return {Timer} New Timer object.
        */


        _proto3.createTimer = function createTimer() {
          return new Timer(this.gl);
        };
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


        _proto3.createDrawCall = function createDrawCall(program, vertexArray, primitive) {
          return new DrawCall(this.gl, this.state, program, vertexArray, primitive);
        };

        return App;
      }();

      module.exports = App;
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0);

      var TEXTURE_FORMAT_DEFAULTS = __webpack_require__(1);
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


      var Cubemap =
      /*#__PURE__*/
      function () {
        function Cubemap(gl, appState, options) {
          var negX = options.negX,
              posX = options.posX,
              negY = options.negY,
              posY = options.posY,
              negZ = options.negZ,
              posZ = options.posZ;
          var defaultType = options.format === CONSTANTS.DEPTH_COMPONENT ? CONSTANTS.UNSIGNED_SHORT : CONSTANTS.UNSIGNED_BYTE;
          this.gl = gl;
          this.texture = gl.createTexture();
          this.format = options.format !== undefined ? options.format : gl.RGBA;
          this.type = options.type !== undefined ? options.type : defaultType;
          this.internalFormat = options.internalFormat !== undefined ? options.internalFormat : TEXTURE_FORMAT_DEFAULTS[this.type][this.format];
          this.appState = appState; // -1 indicates unbound

          this.currentUnit = -1;
          var _options$width = options.width,
              width = _options$width === void 0 ? negX.width : _options$width,
              _options$height = options.height,
              height = _options$height === void 0 ? negX.height : _options$height,
              _options$flipY = options.flipY,
              flipY = _options$flipY === void 0 ? false : _options$flipY,
              _options$minFilter = options.minFilter,
              minFilter = _options$minFilter === void 0 ? negX ? gl.LINEAR_MIPMAP_NEAREST : gl.NEAREST : _options$minFilter,
              _options$magFilter = options.magFilter,
              magFilter = _options$magFilter === void 0 ? negX ? gl.LINEAR : gl.NEAREST : _options$magFilter,
              _options$wrapS = options.wrapS,
              wrapS = _options$wrapS === void 0 ? gl.REPEAT : _options$wrapS,
              _options$wrapT = options.wrapT,
              wrapT = _options$wrapT === void 0 ? gl.REPEAT : _options$wrapT,
              _options$compareMode = options.compareMode,
              compareMode = _options$compareMode === void 0 ? gl.NONE : _options$compareMode,
              _options$compareFunc = options.compareFunc,
              compareFunc = _options$compareFunc === void 0 ? gl.LEQUAL : _options$compareFunc,
              _options$generateMipm = options.generateMipmaps,
              generateMipmaps = _options$generateMipm === void 0 ? minFilter === gl.LINEAR_MIPMAP_NEAREST || minFilter === gl.LINEAR_MIPMAP_LINEAR : _options$generateMipm;
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

          var levels = generateMipmaps ? Math.floor(Math.log2(Math.min(width, height))) + 1 : 1;
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


        var _proto4 = Cubemap.prototype;

        _proto4.delete = function _delete() {
          if (this.texture) {
            this.gl.deleteTexture(this.texture);
            this.texture = null;
            this.appState.textures[this.currentUnit] = null;
            this.currentUnit = -1;
          }

          return this;
        };
        /**
            Bind this cubemap to a texture unit.
             @method
            @ignore
            @return {Cubemap} The Cubemap object.
        */


        _proto4.bind = function bind(unit) {
          var currentTexture = this.appState.textures[unit];

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
        };

        return Cubemap;
      }();

      module.exports = Cubemap;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0);
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


      var DrawCall =
      /*#__PURE__*/
      function () {
        function DrawCall(gl, appState, program, vertexArray, primitive) {
          if (primitive === void 0) {
            primitive = CONSTANTS.TRIANGLES;
          }

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


        var _proto5 = DrawCall.prototype;

        _proto5.transformFeedback = function transformFeedback(_transformFeedback) {
          this.currentTransformFeedback = _transformFeedback;
          return this;
        };
        /**
            Set the value for a uniform. Array uniforms are supported by
            using appending "[0]" to the array name and passing a flat array
            with all required values.
             @method
            @param {string} name Uniform name.
            @param {any} value Uniform value.
            @return {DrawCall} The DrawCall object.
        */


        _proto5.uniform = function uniform(name, value) {
          var index = this.uniformIndices[name];

          if (index === undefined) {
            index = this.uniformCount++;
            this.uniformIndices[name] = index;
            this.uniformNames[index] = name;
          }

          this.uniformValues[index] = value;
          return this;
        };
        /**
            Set texture to bind to a sampler uniform.
             @method
            @param {string} name Sampler uniform name.
            @param {Texture} texture Texture to bind.
            @return {DrawCall} The DrawCall object.
        */


        _proto5.texture = function texture(name, _texture) {
          var unit = this.currentProgram.samplers[name];
          this.textures[unit] = _texture;
          return this;
        };
        /**
            Set uniform buffer to bind to a uniform block.
             @method
            @param {string} name Uniform block name.
            @param {UniformBuffer} buffer Uniform buffer to bind.
            @return {DrawCall} The DrawCall object.
        */


        _proto5.uniformBlock = function uniformBlock(name, buffer) {
          var base = this.currentProgram.uniformBlocks[name];
          this.uniformBuffers[base] = buffer;
          return this;
        };
        /**
            Set numElements property to allow number of elements to be drawn
             @method
            @param {GLsizei} [count=0] Number of element to draw, 0 set to all.
            @return {DrawCall} The DrawCall object.
        */


        _proto5.elementCount = function elementCount(count) {
          if (count === void 0) {
            count = 0;
          }

          if (count > 0) {
            this.numElements = Math.min(count, this.currentVertexArray.numElements);
          } else {
            this.numElements = this.currentVertexArray.numElements;
          }

          return this;
        };
        /**
            Set numInstances property to allow number of instances be drawn
             @method
            @param {GLsizei} [count=0] Number of instance to draw, 0 set to all.
            @return {DrawCall} The DrawCall object.
        */


        _proto5.instanceCount = function instanceCount(count) {
          if (count === void 0) {
            count = 0;
          }

          if (count > 0) {
            this.numInstances = Math.min(count, this.currentVertexArray.numInstances);
          } else {
            this.numInstances = this.currentVertexArray.numInstances;
          }

          return this;
        };
        /**
            Draw based on current state.
             @method
            @return {DrawCall} The DrawCall object.
        */


        _proto5.draw = function draw() {
          var uniformNames = this.uniformNames;
          var uniformValues = this.uniformValues;
          var uniformBuffers = this.uniformBuffers;
          var uniformBlockCount = this.currentProgram.uniformBlockCount;
          var textures = this.textures;
          var textureCount = this.currentProgram.samplerCount;
          this.currentProgram.bind();
          this.currentVertexArray.bind();

          for (var uIndex = 0; uIndex < this.uniformCount; ++uIndex) {
            this.currentProgram.uniform(uniformNames[uIndex], uniformValues[uIndex]);
          }

          for (var base = 0; base < uniformBlockCount; ++base) {
            uniformBuffers[base].bind(base);
          }

          for (var tIndex = 0; tIndex < textureCount; ++tIndex) {
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

            for (var i = 0, len = this.currentTransformFeedback.angleBugBuffers.length; i < len; ++i) {
              this.gl.bindBufferBase(this.gl.TRANSFORM_FEEDBACK_BUFFER, i, null);
            }
          }

          return this;
        };

        return DrawCall;
      }();

      module.exports = DrawCall;
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0);
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


      var Framebuffer =
      /*#__PURE__*/
      function () {
        function Framebuffer(gl, appState) {
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
            @param {Texture} texture The texture to attach.
            @param {GLEnum} [target] The texture target or layer to attach. If the texture is 3D or a texture array,
                defaults to 0, otherwise to TEXTURE_2D.
            @return {Framebuffer} The Framebuffer object.
        */


        var _proto6 = Framebuffer.prototype;

        _proto6.colorTarget = function colorTarget(index, texture, target) {
          if (target === void 0) {
            target = texture.is3D ? 0 : CONSTANTS.TEXTURE_2D;
          }

          this.colorAttachments[index] = CONSTANTS.COLOR_ATTACHMENT0 + index;
          var currentFramebuffer = this.bindAndCaptureState();
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
        };
        /**
            Attach a depth target to this framebuffer.
             @method
            @param {Texture} texture The texture to attach.
            @param {GLEnum} [target] The texture target or layer to attach. If the texture is 3D or a texture array,
                defaults to 0, otherwise to TEXTURE_2D.
            @return {Framebuffer} The Framebuffer object.
        */


        _proto6.depthTarget = function depthTarget(texture, target) {
          if (target === void 0) {
            target = texture.is3D ? 0 : CONSTANTS.TEXTURE_2D;
          }

          var currentFramebuffer = this.bindAndCaptureState();
          this.depthTexture = texture;
          this.depthTextureTarget = target;

          if (texture.is3D) {
            this.gl.framebufferTextureLayer(this.gl.DRAW_FRAMEBUFFER, CONSTANTS.DEPTH_ATTACHMENT, texture.texture, 0, target);
          } else {
            this.gl.framebufferTexture2D(this.gl.DRAW_FRAMEBUFFER, CONSTANTS.DEPTH_ATTACHMENT, target, texture.texture, 0);
          }

          this.restoreState(currentFramebuffer);
          return this;
        };
        /**
            Resize all currently attached textures.
             @method
            @param {number} [width=app.width] New width of the framebuffer.
            @param {number} [height=app.height] New height of the framebuffer.
            @return {Framebuffer} The Framebuffer object.
        */


        _proto6.resize = function resize(width, height, depth) {
          if (width === void 0) {
            width = this.gl.drawingBufferWidth;
          }

          if (height === void 0) {
            height = this.gl.drawingBufferHeight;
          }

          var currentFramebuffer = this.bindAndCaptureState();

          for (var i = 0; i < this.numColorTargets; ++i) {
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
        };
        /**
            Delete this framebuffer.
             @method
            @return {Framebuffer} The Framebuffer object.
        */


        _proto6.delete = function _delete() {
          if (this.framebuffer) {
            this.gl.deleteFramebuffer(this.framebuffer);
            this.framebuffer = null;
          }

          return this;
        };
        /**
            Bind as the draw framebuffer
             @method
            @ignore
            @return {Framebuffer} The Framebuffer object.
        */


        _proto6.bindForDraw = function bindForDraw() {
          if (this.appState.drawFramebuffer !== this) {
            this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, this.framebuffer);
            this.appState.drawFramebuffer = this;
          }

          return this;
        };
        /**
            Bind as the read framebuffer
             @method
            @ignore
            @return {Framebuffer} The Framebuffer object.
        */


        _proto6.bindForRead = function bindForRead() {
          if (this.appState.readFramebuffer !== this) {
            this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.framebuffer);
            this.appState.readFramebuffer = this;
          }

          return this;
        };
        /**
            Bind for a framebuffer state update.
            Capture current binding so we can restore it later.
             @method
            @ignore
            @return {Framebuffer} The Framebuffer object.
        */


        _proto6.bindAndCaptureState = function bindAndCaptureState() {
          var currentFramebuffer = this.appState.drawFramebuffer;

          if (currentFramebuffer !== this) {
            this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, this.framebuffer);
          }

          return currentFramebuffer;
        };
        /**
            Bind restore previous binding after state update
             @method
            @ignore
            @return {Framebuffer} The Framebuffer object.
        */


        _proto6.restoreState = function restoreState(framebuffer) {
          if (framebuffer !== this) {
            this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, framebuffer ? framebuffer.framebuffer : null);
          }

          return this;
        };

        return Framebuffer;
      }();

      module.exports = Framebuffer;
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0);

      var Shader = __webpack_require__(2);

      var Uniforms = __webpack_require__(10);

      var SingleComponentUniform = Uniforms.SingleComponentUniform;
      var MultiNumericUniform = Uniforms.MultiNumericUniform;
      var MultiBoolUniform = Uniforms.MultiBoolUniform;
      var MatrixUniform = Uniforms.MatrixUniform;
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

      var Program =
      /*#__PURE__*/
      function () {
        function Program(gl, appState, vsSource, fsSource, xformFeebackVars) {
          var i;
          var vShader, fShader;
          var ownVertexShader = false;
          var ownFragmentShader = false;

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

          var program = gl.createProgram();
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
          var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
          var textureUnit;

          for (i = 0; i < numUniforms; ++i) {
            var uniformInfo = gl.getActiveUniform(program, i);
            var uniformHandle = gl.getUniformLocation(this.program, uniformInfo.name);
            var UniformClass = null;
            var type = uniformInfo.type;
            var numElements = uniformInfo.size;

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

          var numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);

          for (i = 0; i < numUniformBlocks; ++i) {
            var blockName = gl.getActiveUniformBlockName(this.program, i);
            var blockIndex = gl.getUniformBlockIndex(this.program, blockName);
            var uniformBlockBase = this.uniformBlockCount++;
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


        var _proto7 = Program.prototype;

        _proto7.delete = function _delete() {
          if (this.program) {
            this.gl.deleteProgram(this.program);
            this.program = null;
          }

          return this;
        };
        /**
            Set the value of a uniform.
             @method
            @ignore
            @return {Program} The Program object.
        */


        _proto7.uniform = function uniform(name, value) {
          this.uniforms[name].set(value);
          return this;
        }; // 

        /**
            Use this program.
             @method
            @ignore
            @return {Program} The Program object.
        */


        _proto7.bind = function bind() {
          if (this.appState.program !== this) {
            this.gl.useProgram(this.program);
            this.appState.program = this;
          }

          return this;
        };

        return Program;
      }();

      module.exports = Program;
      /***/
    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0); // Classes to manage uniform value updates, including
      // caching current values.


      var UNIFORM_FUNC_NAME = {};
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
      var UNIFORM_COMPONENT_COUNT = {};
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
      var UNIFORM_CACHE_CLASS = {};
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

      var SingleComponentUniform =
      /*#__PURE__*/
      function () {
        function SingleComponentUniform(gl, handle, type) {
          this.gl = gl;
          this.handle = handle;
          this.glFuncName = UNIFORM_FUNC_NAME[type];
          this.cache = type === CONSTANTS.BOOL ? false : 0;
        }

        var _proto8 = SingleComponentUniform.prototype;

        _proto8.set = function set(value) {
          if (this.cache !== value) {
            this.gl[this.glFuncName](this.handle, value);
            this.cache = value;
          }
        };

        return SingleComponentUniform;
      }();

      var MultiNumericUniform =
      /*#__PURE__*/
      function () {
        function MultiNumericUniform(gl, handle, type, count) {
          this.gl = gl;
          this.handle = handle;
          this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
          this.count = count;
          this.cache = new UNIFORM_CACHE_CLASS[type](UNIFORM_COMPONENT_COUNT[type] * count);
        }

        var _proto9 = MultiNumericUniform.prototype;

        _proto9.set = function set(value) {
          for (var _i = 0, len = value.length; _i < len; ++_i) {
            if (this.cache[_i] !== value[_i]) {
              this.gl[this.glFuncName](this.handle, value);
              this.cache.set(value);
              return;
            }
          }
        };

        return MultiNumericUniform;
      }();

      var MultiBoolUniform =
      /*#__PURE__*/
      function () {
        function MultiBoolUniform(gl, handle, type, count) {
          this.gl = gl;
          this.handle = handle;
          this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
          this.count = count;
          this.cache = new Array(UNIFORM_COMPONENT_COUNT[type] * count).fill(false);
        }

        var _proto10 = MultiBoolUniform.prototype;

        _proto10.set = function set(value) {
          for (var _i2 = 0, len = value.length; _i2 < len; ++_i2) {
            if (this.cache[_i2] !== value[_i2]) {
              this.gl[this.glFuncName](this.handle, value);

              for (var j = _i2; j < len; j++) {
                this.cache[j] = value[j];
              }

              return;
            }
          }
        };

        return MultiBoolUniform;
      }();

      var MatrixUniform =
      /*#__PURE__*/
      function () {
        function MatrixUniform(gl, handle, type, count) {
          this.gl = gl;
          this.handle = handle;
          this.glFuncName = UNIFORM_FUNC_NAME[type];
          this.count = count;
          this.cache = new Float32Array(UNIFORM_COMPONENT_COUNT[type] * count);
        }

        var _proto11 = MatrixUniform.prototype;

        _proto11.set = function set(value) {
          for (var _i3 = 0, len = value.length; _i3 < len; ++_i3) {
            if (this.cache[_i3] !== value[_i3]) {
              this.gl[this.glFuncName](this.handle, false, value);
              this.cache.set(value);
              return;
            }
          }
        };

        return MatrixUniform;
      }();

      module.exports.SingleComponentUniform = SingleComponentUniform;
      module.exports.MultiNumericUniform = MultiNumericUniform;
      module.exports.MultiBoolUniform = MultiBoolUniform;
      module.exports.MatrixUniform = MatrixUniform;
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0);

      var TEXTURE_FORMAT_DEFAULTS = __webpack_require__(1);

      var DUMMY_ARRAY = new Array(1);
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

      var Texture =
      /*#__PURE__*/
      function () {
        function Texture(gl, appState, binding, image, width, height, depth, is3D, options) {
          if (width === void 0) {
            width = image.width;
          }

          if (height === void 0) {
            height = image.height;
          }

          if (options === void 0) {
            options = CONSTANTS.DUMMY_OBJECT;
          }

          var defaultType = options.format === CONSTANTS.DEPTH_COMPONENT ? CONSTANTS.UNSIGNED_SHORT : CONSTANTS.UNSIGNED_BYTE;
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

          var _options2 = options,
              _options2$minFilter = _options2.minFilter,
              minFilter = _options2$minFilter === void 0 ? image ? gl.LINEAR_MIPMAP_NEAREST : gl.NEAREST : _options2$minFilter,
              _options2$magFilter = _options2.magFilter,
              magFilter = _options2$magFilter === void 0 ? image ? gl.LINEAR : gl.NEAREST : _options2$magFilter,
              _options2$wrapS = _options2.wrapS,
              wrapS = _options2$wrapS === void 0 ? gl.REPEAT : _options2$wrapS,
              _options2$wrapT = _options2.wrapT,
              wrapT = _options2$wrapT === void 0 ? gl.REPEAT : _options2$wrapT,
              _options2$wrapR = _options2.wrapR,
              wrapR = _options2$wrapR === void 0 ? gl.REPEAT : _options2$wrapR,
              _options2$compareMode = _options2.compareMode,
              compareMode = _options2$compareMode === void 0 ? gl.NONE : _options2$compareMode,
              _options2$compareFunc = _options2.compareFunc,
              compareFunc = _options2$compareFunc === void 0 ? gl.LEQUAL : _options2$compareFunc,
              _options2$minLOD = _options2.minLOD,
              minLOD = _options2$minLOD === void 0 ? null : _options2$minLOD,
              _options2$maxLOD = _options2.maxLOD,
              maxLOD = _options2$maxLOD === void 0 ? null : _options2$maxLOD,
              _options2$baseLevel = _options2.baseLevel,
              baseLevel = _options2$baseLevel === void 0 ? null : _options2$baseLevel,
              _options2$maxLevel = _options2.maxLevel,
              maxLevel = _options2$maxLevel === void 0 ? null : _options2$maxLevel,
              _options2$flipY = _options2.flipY,
              flipY = _options2$flipY === void 0 ? false : _options2$flipY;
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


        var _proto12 = Texture.prototype;

        _proto12.resize = function resize(width, height, depth) {
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

          var levels;

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
        };
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


        _proto12.data = function data(_data) {
          if (!Array.isArray(_data)) {
            DUMMY_ARRAY[0] = _data;
            _data = DUMMY_ARRAY;
          }

          var numLevels = this.mipmaps ? _data.length : 1;
          var width = this.width;
          var height = this.height;
          var depth = this.depth;
          var generateMipmaps = this.mipmaps && _data.length === 1;
          var i;
          this.bind(Math.max(this.currentUnit, 0));

          if (this.compressed) {
            if (this.is3D) {
              for (i = 0; i < numLevels; ++i) {
                this.gl.compressedTexSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, _data[i]);
                width = Math.max(width >> 1, 1);
                height = Math.max(height >> 1, 1);
                depth = Math.max(depth >> 1, 1);
              }
            } else {
              for (i = 0; i < numLevels; ++i) {
                this.gl.compressedTexSubImage2D(this.binding, i, 0, 0, width, height, this.format, _data[i]);
                width = Math.max(width >> 1, 1);
                height = Math.max(height >> 1, 1);
              }
            }
          } else if (this.is3D) {
            for (i = 0; i < numLevels; ++i) {
              this.gl.texSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, this.type, _data[i]);
              width = Math.max(width >> 1, 1);
              height = Math.max(height >> 1, 1);
              depth = Math.max(depth >> 1, 1);
            }
          } else {
            for (i = 0; i < numLevels; ++i) {
              this.gl.texSubImage2D(this.binding, i, 0, 0, width, height, this.format, this.type, _data[i]);
              width = Math.max(width >> 1, 1);
              height = Math.max(height >> 1, 1);
            }
          }

          if (generateMipmaps) {
            this.gl.generateMipmap(this.binding);
          }

          return this;
        };
        /**
            Delete this texture.
             @method
            @return {Texture} The Texture object.
        */


        _proto12.delete = function _delete() {
          if (this.texture) {
            this.gl.deleteTexture(this.texture);
            this.texture = null;

            if (this.currentUnit !== -1 && this.appState.textures[this.currentUnit] === this) {
              this.appState.textures[this.currentUnit] = null;
              this.currentUnit = -1;
            }
          }

          return this;
        };
        /**
            Bind this texture to a texture unit.
             @method
            @ignore
            @return {Texture} The Texture object.
        */


        _proto12.bind = function bind(unit) {
          var currentTexture = this.appState.textures[unit];

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
        };

        return Texture;
      }();

      module.exports = Texture;
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0);

      var Query = __webpack_require__(3);
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


      var Timer =
      /*#__PURE__*/
      function () {
        function Timer(gl) {
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


        var _proto13 = Timer.prototype;

        _proto13.start = function start() {
          if (this.gpuTimer) {
            if (!this.gpuTimerQuery.active) {
              this.gpuTimerQuery.begin();
              this.cpuStartTime = this.cpuTimer.now();
            }
          } else {
            this.cpuStartTime = this.cpuTimer.now();
          }

          return this;
        };
        /**
            Stop timing.
             @method
            @return {Timer} The Timer object.
        */


        _proto13.end = function end() {
          if (this.gpuTimer) {
            if (!this.gpuTimerQuery.active) {
              this.gpuTimerQuery.end();
              this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
            }
          } else {
            this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
          }

          return this;
        };
        /**
            Check if timing results are available. If
            this method returns true, the cpuTime and
            gpuTime properties will be set to valid
            values.
             @method
            @return {boolean} If results are available.
        */


        _proto13.ready = function ready() {
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
        };
        /**
            Delete this timer.
             @method
            @return {Timer} The Timer object.
        */


        _proto13.delete = function _delete() {
          if (this.gpuTimerQuery) {
            this.gpuTimerQuery.delete();
            this.gpuTimerQuery = null;
            this.gpuTimer = false;
          }

          return this;
        };

        return Timer;
      }();

      module.exports = Timer;
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      var TransformFeedback =
      /*#__PURE__*/
      function () {
        function TransformFeedback(gl, appState) {
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


        var _proto14 = TransformFeedback.prototype;

        _proto14.feedbackBuffer = function feedbackBuffer(index, buffer) {
          this.gl.bindTransformFeedback(this.gl.TRANSFORM_FEEDBACK, this.transformFeedback);
          this.gl.bindBufferBase(this.gl.TRANSFORM_FEEDBACK_BUFFER, index, buffer.buffer);
          this.gl.bindTransformFeedback(this.gl.TRANSFORM_FEEDBACK, null);
          this.gl.bindBufferBase(this.gl.TRANSFORM_FEEDBACK_BUFFER, index, null);
          this.angleBugBuffers[index] = buffer;
          return this;
        };
        /**
            Delete this transform feedback.
             @method
            @return {TransformFeedback} The TransformFeedback object.
        */


        _proto14.delete = function _delete() {
          if (this.transformFeedback) {
            this.gl.deleteTransformFeedback(this.transformFeedback);
            this.transformFeedback = null;
          }

          return this;
        };
        /**
            Bind this transform feedback.
             @method
            @ignore
            @return {TransformFeedback} The TransformFeedback object.
        */


        _proto14.bind = function bind() {
          if (this.appState.transformFeedback !== this) {
            this.gl.bindTransformFeedback(this.gl.TRANSFORM_FEEDBACK, this.transformFeedback);

            for (var _i4 = 0, len = this.angleBugBuffers.length; _i4 < len; ++_i4) {
              this.gl.bindBufferBase(this.gl.TRANSFORM_FEEDBACK_BUFFER, _i4, this.angleBugBuffers[_i4].buffer);
            }

            this.appState.transformFeedback = this;
          }

          return this;
        };

        return TransformFeedback;
      }();

      module.exports = TransformFeedback;
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0);
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


      var UniformBuffer =
      /*#__PURE__*/
      function () {
        function UniformBuffer(gl, appState, layout, usage) {
          if (usage === void 0) {
            usage = gl.DYNAMIC_DRAW;
          }

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

          for (var _i5 = 0, len = layout.length; _i5 < len; ++_i5) {
            var type = layout[_i5];

            switch (type) {
              case CONSTANTS.FLOAT:
              case CONSTANTS.INT:
              case CONSTANTS.UNSIGNED_INT:
              case CONSTANTS.BOOL:
                this.offsets[_i5] = this.size;
                this.sizes[_i5] = 1;

                if (type === CONSTANTS.INT) {
                  this.types[_i5] = CONSTANTS.INT;
                } else if (this.type === CONSTANTS.UNSIGNED_INT) {
                  this.types[_i5] = CONSTANTS.UNSIGNED_INT;
                } else {
                  this.types[_i5] = CONSTANTS.FLOAT;
                }

                this.size++;
                break;

              case CONSTANTS.FLOAT_VEC2:
              case CONSTANTS.INT_VEC2:
              case CONSTANTS.UNSIGNED_INT_VEC2:
              case CONSTANTS.BOOL_VEC2:
                this.size += this.size % 2;
                this.offsets[_i5] = this.size;
                this.sizes[_i5] = 2;

                if (type === CONSTANTS.INT_VEC2) {
                  this.types[_i5] = CONSTANTS.INT;
                } else if (this.type === CONSTANTS.UNSIGNED_INT_VEC2) {
                  this.types[_i5] = CONSTANTS.UNSIGNED_INT;
                } else {
                  this.types[_i5] = CONSTANTS.FLOAT;
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
                this.offsets[_i5] = this.size;
                this.sizes[_i5] = 4;

                if (type === CONSTANTS.INT_VEC4 || type === CONSTANTS.INT_VEC3) {
                  this.types[_i5] = CONSTANTS.INT;
                } else if (this.type === CONSTANTS.UNSIGNED_INT_VEC4 || this.type === CONSTANTS.UNSIGNED_INT_VEC3) {
                  this.types[_i5] = CONSTANTS.UNSIGNED_INT;
                } else {
                  this.types[_i5] = CONSTANTS.FLOAT;
                }

                this.size += 4;
                break;

              case CONSTANTS.FLOAT_MAT2:
              case CONSTANTS.FLOAT_MAT2x3:
              case CONSTANTS.FLOAT_MAT2x4:
                this.size += (4 - this.size % 4) % 4;
                this.offsets[_i5] = this.size;
                this.sizes[_i5] = 8;
                this.types[_i5] = CONSTANTS.FLOAT;
                this.size += 8;
                break;

              case CONSTANTS.FLOAT_MAT3:
              case CONSTANTS.FLOAT_MAT3x2:
              case CONSTANTS.FLOAT_MAT3x4:
                this.size += (4 - this.size % 4) % 4;
                this.offsets[_i5] = this.size;
                this.sizes[_i5] = 12;
                this.types[_i5] = CONSTANTS.FLOAT;
                this.size += 12;
                break;

              case CONSTANTS.FLOAT_MAT4:
              case CONSTANTS.FLOAT_MAT4x2:
              case CONSTANTS.FLOAT_MAT4x3:
                this.size += (4 - this.size % 4) % 4;
                this.offsets[_i5] = this.size;
                this.sizes[_i5] = 16;
                this.types[_i5] = CONSTANTS.FLOAT;
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


        var _proto15 = UniformBuffer.prototype;

        _proto15.set = function set(index, value) {
          var view = this.dataViews[this.types[index]];

          if (this.sizes[index] === 1) {
            view[this.offsets[index]] = value;
          } else {
            view.set(value, this.offsets[index]);
          }

          return this;
        };
        /**
            Send stored buffer data to the GPU.
             @method
            @param {number} [index] Index in the layout of item to send to the GPU. If ommited, entire buffer is sent.
            @return {UniformBuffer} The UniformBuffer object.
        */


        _proto15.update = function update(index) {
          var data;
          var offset;

          if (index === undefined) {
            data = this.data;
            offset = 0;
          } else {
            var begin = this.offsets[index];
            var end = begin + this.sizes[index];
            data = this.data.subarray(begin, end);
            offset = begin * 4;
          }

          this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, this.buffer);
          this.gl.bufferSubData(this.gl.UNIFORM_BUFFER, offset, data);
          this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, null);
          return this;
        };
        /**
            Delete this uniform buffer.
             @method
            @return {UniformBuffer} The UniformBuffer object.
        */


        _proto15.delete = function _delete() {
          if (this.buffer) {
            this.gl.deleteBuffer(this.buffer);
            this.buffer = null;

            if (this.currentBase !== -1 && this.appState.uniformBuffers[this.currentBase] === this) {
              this.appState.uniformBuffers[this.currentBase] = null;
            }
          }

          return this;
        };
        /**
            Bind this uniform buffer to the given base.
             @method
            @ignore
            @return {UniformBuffer} The UniformBuffer object.
        */


        _proto15.bind = function bind(base) {
          var currentBuffer = this.appState.uniformBuffers[base];

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
        };

        return UniformBuffer;
      }();

      module.exports = UniformBuffer;
      /***/
    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0);
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


      var VertexArray =
      /*#__PURE__*/
      function () {
        function VertexArray(gl, appState) {
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


        var _proto16 = VertexArray.prototype;

        _proto16.vertexAttributeBuffer = function vertexAttributeBuffer(attributeIndex, vertexBuffer) {
          this.attributeBuffer(attributeIndex, vertexBuffer, false, false, false);
          return this;
        };
        /**
            Bind an per-instance attribute buffer to this vertex array.
             @method
            @param {number} attributeIndex The attribute location to bind to.
            @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
            @return {VertexArray} The VertexArray object.
        */


        _proto16.instanceAttributeBuffer = function instanceAttributeBuffer(attributeIndex, vertexBuffer) {
          this.attributeBuffer(attributeIndex, vertexBuffer, true, false, false);
          return this;
        };
        /**
            Bind an per-vertex integer attribute buffer to this vertex array.
            Note that this refers to the attribute in the shader being an integer,
            not the data stored in the vertex buffer.
             @method
            @param {number} attributeIndex The attribute location to bind to.
            @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
            @return {VertexArray} The VertexArray object.
        */


        _proto16.vertexIntegerAttributeBuffer = function vertexIntegerAttributeBuffer(attributeIndex, vertexBuffer) {
          this.attributeBuffer(attributeIndex, vertexBuffer, false, true, false);
          return this;
        };
        /**
            Bind an per-instance integer attribute buffer to this vertex array.
            Note that this refers to the attribute in the shader being an integer,
            not the data stored in the vertex buffer.
             @method
            @param {number} attributeIndex The attribute location to bind to.
            @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
            @return {VertexArray} The VertexArray object.
        */


        _proto16.instanceIntegerAttributeBuffer = function instanceIntegerAttributeBuffer(attributeIndex, vertexBuffer) {
          this.attributeBuffer(attributeIndex, vertexBuffer, true, true, false);
          return this;
        };
        /**
            Bind an per-vertex normalized attribute buffer to this vertex array.
            Integer data in the vertex buffer will be normalized to [-1.0, 1.0] if
            signed, [0.0, 1.0] if unsigned.
             @method
            @param {number} attributeIndex The attribute location to bind to.
            @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
            @return {VertexArray} The VertexArray object.
        */


        _proto16.vertexNormalizedAttributeBuffer = function vertexNormalizedAttributeBuffer(attributeIndex, vertexBuffer) {
          this.attributeBuffer(attributeIndex, vertexBuffer, false, false, true);
          return this;
        };
        /**
            Bind an per-instance normalized attribute buffer to this vertex array.
            Integer data in the vertex buffer will be normalized to [-1.0, 1.0] if
            signed, [0.0, 1.0] if unsigned.
            
            @method
            @param {number} attributeIndex The attribute location to bind to.
            @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
            @return {VertexArray} The VertexArray object.
        */


        _proto16.instanceNormalizedAttributeBuffer = function instanceNormalizedAttributeBuffer(attributeIndex, vertexBuffer) {
          this.attributeBuffer(attributeIndex, vertexBuffer, true, false, true);
          return this;
        };
        /**
            Bind an index buffer to this vertex array.
             @method
            @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
            @return {VertexArray} The VertexArray object.
        */


        _proto16.indexBuffer = function indexBuffer(vertexBuffer) {
          this.gl.bindVertexArray(this.vertexArray);
          this.gl.bindBuffer(vertexBuffer.binding, vertexBuffer.buffer);
          this.numElements = vertexBuffer.numItems * 3;
          this.indexType = vertexBuffer.type;
          this.indexed = true;
          this.gl.bindVertexArray(null);
          this.gl.bindBuffer(vertexBuffer.binding, null);
          return this;
        };
        /**
            Delete this vertex array.
             @method
            @return {VertexArray} The VertexArray object.
        */


        _proto16.delete = function _delete() {
          if (this.vertexArray) {
            this.gl.deleteVertexArray(this.vertexArray);
            this.vertexArray = null;
          }

          this.gl.bindVertexArray(null);
          return this;
        };
        /**
            Bind this vertex array.
             @method
            @ignore
            @return {VertexArray} The VertexArray object.
        */


        _proto16.bind = function bind() {
          if (this.appState.vertexArray !== this) {
            this.gl.bindVertexArray(this.vertexArray);
            this.appState.vertexArray = this;
          }

          return this;
        };
        /**
            Attach an attribute buffer
             @method
            @ignore
            @return {VertexArray} The VertexArray object.
        */


        _proto16.attributeBuffer = function attributeBuffer(attributeIndex, vertexBuffer, instanced, integer, normalized) {
          this.gl.bindVertexArray(this.vertexArray);
          this.gl.bindBuffer(vertexBuffer.binding, vertexBuffer.buffer);
          var numColumns = vertexBuffer.numColumns;

          for (var _i6 = 0; _i6 < numColumns; ++_i6) {
            if (integer) {
              this.gl.vertexAttribIPointer(attributeIndex + _i6, vertexBuffer.itemSize, vertexBuffer.type, numColumns * vertexBuffer.itemSize * CONSTANTS.TYPE_SIZE[vertexBuffer.type], _i6 * vertexBuffer.itemSize * CONSTANTS.TYPE_SIZE[vertexBuffer.type]);
            } else {
              this.gl.vertexAttribPointer(attributeIndex + _i6, vertexBuffer.itemSize, vertexBuffer.type, normalized, numColumns * vertexBuffer.itemSize * CONSTANTS.TYPE_SIZE[vertexBuffer.type], _i6 * vertexBuffer.itemSize * CONSTANTS.TYPE_SIZE[vertexBuffer.type]);
            }

            if (instanced) {
              this.gl.vertexAttribDivisor(attributeIndex + _i6, 1);
            }

            this.gl.enableVertexAttribArray(attributeIndex + _i6);
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
        };

        return VertexArray;
      }();

      module.exports = VertexArray;
      /***/
    },
    /* 16 */

    /***/
    function (module, exports, __webpack_require__) {
      var CONSTANTS = __webpack_require__(0);
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


      var VertexBuffer =
      /*#__PURE__*/
      function () {
        function VertexBuffer(gl, appState, type, itemSize, data, usage, indexArray) {
          if (usage === void 0) {
            usage = gl.STATIC_DRAW;
          }

          var numColumns;

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

          var dataLength;

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


        var _proto17 = VertexBuffer.prototype;

        _proto17.data = function data(_data2) {
          // Don't want to update vertex array bindings
          var currentVertexArray = this.appState.vertexArray;

          if (currentVertexArray) {
            this.gl.bindVertexArray(null);
          }

          this.gl.bindBuffer(this.binding, this.buffer);
          this.gl.bufferSubData(this.binding, 0, _data2);
          this.gl.bindBuffer(this.binding, null);

          if (currentVertexArray) {
            this.gl.bindVertexArray(currentVertexArray.vertexArray);
          }

          return this;
        };
        /**
            Delete this array buffer.
             @method
            @return {VertexBuffer} The VertexBuffer object.
        */


        _proto17.delete = function _delete() {
          if (this.buffer) {
            this.gl.deleteBuffer(this.buffer);
            this.buffer = null;
          }

          return this;
        };

        return VertexBuffer;
      }();

      module.exports = VertexBuffer;
      /***/
    }]
    /******/
    )
  );
});

var log4 = function log4(x) {
  return .5 * Math.log2(x);
};
var isPowerOf2 = function isPowerOf2(x) {
  return (x & x - 1) === 0;
};
var FLOAT_FORMATS_BY_ITEM_SIZE = {
  2: [undefined, undefined],
  3: [undefined, undefined],
  4: [undefined, undefined]
};
var isFloatTexture = function isFloatTexture(tex, itemSize) {
  return tex.type === undefined && tex.format === FLOAT_FORMATS_BY_ITEM_SIZE[itemSize][0] && tex.internalFormat === FLOAT_FORMATS_BY_ITEM_SIZE[itemSize][1];
};
var isFloatBuffer = function isFloatBuffer(buf, itemSize) {
  return buf.type === undefined && buf.itemSize == itemSize;
};

function createFloatTexture(app, width, height, itemSize) {
  var _FLOAT_FORMATS_BY_ITE = FLOAT_FORMATS_BY_ITEM_SIZE[itemSize],
      format = _FLOAT_FORMATS_BY_ITE[0],
      internalFormat = _FLOAT_FORMATS_BY_ITE[1];
  return app.createTexture2D(width, height, {
    type: undefined,
    format: format,
    internalFormat: internalFormat
  });
}
function invariant(expr) {
  if (!expr) {
    var error = new Error();
    error.name = 'AssertionError';
    throw error;
  }
}

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
  var stepSize = data.itemSize * undefined[undefined];

  for (var i = 0; i < 4; ++i) {
    gl.vertexAttribPointer(i, pattern, undefined, false, 4 * stepSize, i * stepSize);
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
    var call = app.createDrawCall(program, vao, undefined);
    return new Kit(buffer, vao, call, null);
  };

  Kit.duplex = function duplex(app, program, size, pattern) {
    var buf = app.createVertexBuffer(undefined, 4, 4 * Math.max(size, 1));
    var vao = createVao(app, buf, pattern);
    var call = app.createDrawCall(program, vao, undefined);
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

  _proto.resize = function resize(size) {// TODO: implement resizing.
  };

  _proto.draw = function draw(size, tf) {
    this.call.numElements = size;

    if (tf) {
      this.call.transformFeedback(tf);
    }

    this.call.draw();
  };

  return Kit;
}();

var findBounds = function (app) {
  invariant(app.floatRenderTargetsEnabled);
  var mark = Symbol();
  var introProg = app.createProgram(introVert, storeFrag, ['result']);
  var reduceProg = app.createProgram(reduceVert, storeFrag, ['result']);
  var N = -1;
  var tempA = null;
  var tempB = null; // 1-4: data --(intro)-> result
  // 5-16: data --(intro)-> tempA --(reduce)-> result
  // 17-64: data --(intro)-> tempA --(reduce)-> tempB --(reduce)-> result
  // ...: data --(intro)-> tempA --(reduce)-> tempB --(reduce)-> tempA ...

  return function (data, result) {
    var activeKit = data[mark];

    if (!activeKit) {
      activeKit = data[mark] = Kit.readable(app, introProg, data, 2);
    }

    var resultFb = result[mark];

    if (!resultFb) {
      invariant(isFloatTexture(result, 4));
      resultFb = result[mark] = app.createFramebuffer().colorTarget(0, result);
    }

    var stepCount = Math.max(Math.ceil(log4(data.numItems)), 1);

    if (data.numItems !== N) {
      N = data.numItems;
      tempA = tempA ? tempA.resize(N) : Kit.duplex(app, reduceProg, Math.pow(4, stepCount - 1));
      tempB = tempB ? tempB.resize(N) : Kit.duplex(app, reduceProg, Math.pow(4, stepCount - 2));
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
};

var assembleVert = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 position;\nlayout(location = 1) in float mass;\n\nuniform sampler2D bounds;\nuniform vec2 invShape;\nuniform vec2 border;\n\nout vec4 result;\n\nvoid main() {\n    vec4 minmax = texelFetch(bounds, ivec2(0, 0), 0);\n\n    vec2 space = minmax.zw - minmax.xy;\n    vec2 area = space * invShape;\n\n    result = vec4(position * mass, mass, area.x * area.y);\n\n    // (x_min, y_min) --> (-1, -1)\n    // (x_max, y_max) --> ( 1,  1)\n    vec2 halfSize = .5 * space;\n\n    vec2 cell = (position - minmax.xy - halfSize) / halfSize;\n\n    gl_Position = vec4(clamp(cell, -border, border), 0., 1.);\n}\n"; // eslint-disable-line

var storeFrag$1 = "#version 300 es\n\n// TODO: what about highp precision?\nprecision mediump float;\n#define GLSLIFY 1\n\nin vec4 result;\nout vec4 outResult;\n\nvoid main() {\n    outResult = result;\n}\n"; // eslint-disable-line

var buildGrid = function (app) {
  invariant(app.floatRenderTargetsEnabled);
  var mark = Symbol();
  var prog = app.createProgram(assembleVert, storeFrag$1);
  return function (positions, masses, bounds, result) {
    var call = positions[mark];

    if (!call) {
      invariant(isFloatBuffer(positions, 2));
      invariant(isFloatBuffer(masses, 1));
      invariant(positions.numItems === masses.numItems);
      invariant(positions[mark] === masses[mark]);
      var vao = app.createVertexArray().vertexAttributeBuffer(0, positions).vertexAttributeBuffer(1, masses);
      call = positions[mark] = masses[mark] = app.createDrawCall(prog, vao, undefined);
    }

    invariant(positions[mark] === masses[mark]);
    var fb = result[mark];

    if (!fb) {
      invariant(isFloatTexture(result, 4));
      fb = result[mark] = app.createFramebuffer().colorTarget(0, result);
    }

    invariant(isFloatTexture(bounds, 4));
    invariant(bounds.width === 1 && bounds.height === 1); // TODO: use an uniform buffer.

    call.uniform('invShape', [1 / result.width, 1 / result.height]) // TODO: can we avoid borders?
    .uniform('border', [1 - 1 / result.width, 1 - 1 / result.height]).texture('bounds', bounds);
    app.drawFramebuffer(fb).viewport(0, 0, result.width, result.height).clearMask(undefined).clearColor(0, 0, 0, 0).clear().blendFuncSeparate(undefined, undefined, undefined, undefined).blend();
    call.draw();
    app.noBlend();
  };
};

var quadVert = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 position;\n\nvoid main() {\n    gl_Position = vec4(position, 0., 1.);\n}\n"; // eslint-disable-line

var reduceFrag = "#version 300 es\n\n// TODO: what about highp precision?\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D level;\n\nout vec4 result;\n\nvoid main() {\n    ivec2 coord = 2 * ivec2(gl_FragCoord.xy);\n\n    result = texelFetch(level, coord, 0)\n           + texelFetch(level, coord + ivec2(1, 0), 0)\n           + texelFetch(level, coord + ivec2(0, 1), 0)\n           + texelFetch(level, coord + ivec2(1, 1), 0);\n}\n"; // eslint-disable-line

var QUAD = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);
var buildPyramid = function (app) {
  invariant(app.floatRenderTargetsEnabled);
  var gl = app.gl;
  var mark = Symbol();
  var prog = app.createProgram(quadVert, reduceFrag);
  var buf = app.createVertexBuffer(undefined, 2, QUAD);
  var vao = app.createVertexArray().vertexAttributeBuffer(0, buf);
  var call = app.createDrawCall(prog, vao, undefined);
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
};

var simulateVert = "#version 300 es\n#define GLSLIFY 1\n\nlayout(location = 0) in vec2 position;\nlayout(location = 1) in vec2 velocity;\nlayout(location = 2) in float mass;\nlayout(location = 3) in uvec2 edgesLoc;\n\nconst uint MAX_PYRAMID_LEVELS = 12u; // up to 8192x8192 grid\n\nuniform sampler2D pyramid;\nuniform sampler2D grid;\nuniform sampler2D positions;\nuniform sampler2D edges;\n\nuniform Constants {\n    float nodeCount;\n    float deltaT;\n    float kSpring;\n    float kLength;\n    float kRepulse;\n    float kTheta2;\n    float kDrag;\n    float kGravity;\n};\n\nout vec2 resultPosition;\nout vec2 resultVelocity;\n\nconst float M_2PI = 6.283185307179586;\nconst float M_EPS = 0.00001;\nconst vec2 ZERO = vec2(0., 0.);\n\nvec2 getUniqDirection() {\n    float angle = float(gl_VertexID) / nodeCount * M_2PI;\n\n    return vec2(cos(angle), sin(angle));\n}\n\nvec2 calcSpringForce(int idx, float weight) {\n    if (idx < 0) {\n        return ZERO;\n    }\n\n    int row = textureSize(positions, 0).x;\n    ivec2 coord = ivec2(idx / row, idx / row);\n\n    vec2 anotherPosition = texelFetch(positions, coord, 0).xy;\n\n    vec2 delta = anotherPosition - position;\n    float dist2 = dot(delta, delta);\n\n    // TODO: use M_EPS²?\n    if (dist2 < M_EPS) {\n        delta = 0.01 * getUniqDirection();\n        dist2 = 0.0001;\n    }\n\n    float diff = 1. - kLength * inversesqrt(dist2);\n\n    return weight * delta * diff;\n}\n\nvec2 calcSpringForce() {\n    uint row = uint(textureSize(edges, 0).x);\n\n    vec2 force = ZERO;\n\n    // TODO: what about blending in an another step?\n    for (uint idx = edgesLoc.x; idx < edgesLoc.y; ++idx) {\n        ivec2 coord = ivec2(idx / row, idx % row);\n        vec4 edge = texelFetch(edges, coord, 0);\n\n        force += calcSpringForce(int(edge.y), edge.z);\n    }\n\n    return kSpring * force;\n}\n\nvec2 calcRepulseForce(ivec2 coords) {\n    vec3 cell = texelFetch(grid, coords, 0).xyz;\n\n    vec2 cellCenter = cell.xy / cell.z;\n\n    vec2 delta = position - cellCenter;\n    float dist = length(delta);\n\n    if (dist < M_EPS) {\n        delta = 0.01 * getUniqDirection();\n        dist = 0.01;\n    }\n\n    return cell.z * delta / (dist * dist * dist);\n}\n\nvec2 calcRepulseForce() {\n    const uint MAX_STACK_SIZE = 3u * MAX_PYRAMID_LEVELS + 1u;\n\n    struct Node {\n        ivec2 coords;\n        uint lvlSize;\n        uint lvlOffset;\n    };\n\n    Node stack[MAX_STACK_SIZE];\n\n    uint lastLvlOffset = uint(textureSize(pyramid, 0).x) - 2u;\n\n    stack[0] = Node(ivec2(0, 1), 2u, lastLvlOffset);\n    stack[1] = Node(ivec2(1, 1), 2u, lastLvlOffset);\n    stack[2] = Node(ivec2(1, 0), 2u, lastLvlOffset);\n    stack[3] = Node(ivec2(0, 0), 2u, lastLvlOffset);\n\n    uint sp = 4u;\n\n    vec2 force = ZERO;\n\n    while (sp > 0u) {\n        Node node = stack[--sp];\n\n        vec4 region = texelFetch(pyramid, ivec2(node.lvlOffset, 0u) + node.coords, 0);\n        float regionMass = region.z;\n\n        if (regionMass < M_EPS) {\n            continue;\n        }\n\n        vec2 regionCenter = region.xy / regionMass;\n\n        vec2 delta = position - regionCenter;\n        float dist2 = dot(delta, delta);\n\n        if (region.w < kTheta2 * dist2) {\n            force += regionMass * delta / pow(dist2, 1.5);\n        } else if (node.lvlOffset == 0u) {\n            ivec2 base = 4 * node.coords;\n\n            force += calcRepulseForce(base + ivec2(0, 1))\n                   + calcRepulseForce(base + ivec2(1, 1))\n                   + calcRepulseForce(base + ivec2(1, 0))\n                   + calcRepulseForce(base);\n        } else {\n            ivec2 base = 4 * node.coords;\n            uint lvlSize = 2u * node.lvlSize;\n            uint lvlOffset = node.lvlOffset - lvlSize;\n\n            stack[sp++] = Node(base + ivec2(0, 1), lvlSize, lvlOffset);\n            stack[sp++] = Node(base + ivec2(1, 1), lvlSize, lvlOffset);\n            stack[sp++] = Node(base + ivec2(1, 0), lvlSize, lvlOffset);\n            stack[sp++] = Node(base, lvlSize, lvlOffset);\n        }\n    }\n\n    return kRepulse * mass * force;\n}\n\nvec2 calcDragForce() {\n    return -kDrag * velocity;\n}\n\nvec2 calcGravityForce() {\n    return -kGravity * mass * normalize(position);\n}\n\nvoid main() {\n    vec2 force = calcSpringForce() + calcRepulseForce() + calcDragForce() + calcGravityForce();\n\n    vec2 deltaV = force / mass * deltaT;\n\n    vec2 resultVelocity = velocity + deltaV;\n\n    float dist2 = dot(resultVelocity, resultVelocity);\n\n    if (dist2 > 1.) {\n        resultVelocity *= inversesqrt(dist2);\n    }\n\n    // TODO: investigate integration methods.\n    resultPosition += resultVelocity * deltaT;\n\n    int row = textureSize(positions, 0).x;\n    vec2 coords = 2. * vec2(gl_VertexID / row, gl_VertexID % row) / float(row) - 1.;\n\n    // TODO: store positions in a texture.\n    gl_Position = vec4(coords, 0., 1.);\n}\n"; // eslint-disable-line

var storeFrag$2 = "#version 300 es\n\n// TODO: what about highp precision?\nprecision mediump float;\n#define GLSLIFY 1\n\nin vec2 resultPosition;\nout vec2 result;\n\nvoid main() {\n    result = resultPosition;\n}\n"; // eslint-disable-line

var FLOAT = undefined;
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
}

var simulate = function (app) {
  invariant(app.floatRenderTargetsEnabled);
  var mark = Symbol();
  var constantsUB = app.createUniformBuffer(CONSTANTS_LAYOUT);
  var prog = app.createProgram(simulateVert, storeFrag$2, ['resultPosition', 'resultVelocity']);
  var prevConstants = null;
  return function (positions, velocities, masses, edgesLocs, pyramid, grid, allPositions, edges, constants, resultPositions, resultVelocities, resultAllPositions) {
    invariant(isFloatTexture(pyramid, 4));
    invariant(isFloatTexture(grid, 4));
    invariant(isFloatTexture(allPositions, 2));
    invariant(isFloatTexture(edges, 3));
    invariant(allPositions.width === resultAllPositions.width);

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
      var vao = app.createVertexArray().vertexAttributeBuffer(0, positions).vertexAttributeBuffer(1, velocities).vertexAttributeBuffer(2, masses).vertexAttributeBuffer(3, edgesLocs);
      var tf = app.createTransformFeedback().feedbackBuffer(0, resultPositions).feedbackBuffer(1, resultVelocities);
      call = app.createDrawCall(prog, vao, undefined).transformFeedback(tf);
      positions[mark] = velocities[mark] = masses[mark] = edgesLocs[mark] = call;
    }

    invariant(positions[mark] === velocities[mark] && positions[mark] === masses[mark] && positions[mark] === edgesLocs[mark]);
    var fb = resultAllPositions[mark];

    if (!fb) {
      invariant(isFloatTexture(resultAllPositions, 2));
      fb = resultAllPositions[mark] = app.createFramebuffer().colorTarget(0, resultAllPositions);
    }

    app.drawFramebuffer(fb).viewport(0, 0, resultAllPositions.width, resultAllPositions.height);
    call.uniformBlock('Constants', constantsUB).texture('pyramid', pyramid).texture('grid', grid).texture('positions', allPositions).texture('edges', edges).draw();
  };
};

var drawNodes = function (app) {
  return function () {};
};

var drawEdges = function (app) {
  return function (edges, positions) {};
};

var GRID_SIZE = 512;

var Graph =
/*#__PURE__*/
function () {
  function Graph(canvas) {
    var app = this._app = undefined(canvas);
    app.floatRenderTargets();
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
    this._steps = {
      findBounds: findBounds(app),
      buildGrid: buildGrid(app),
      buildPyramid: buildPyramid(app),
      simulate: simulate(app),
      drawNodes: drawNodes(app),
      drawEdges: drawEdges(app)
    };
    this._buffers = {
      positionsA: null,
      positionsB: null,
      velocitiesA: null,
      velocitiesB: null,
      masses: null,
      edgesLocs: null
    };
    this._textures = {
      bounds: null,
      grid: null,
      pyramid: null,
      allPositionsA: null,
      allPositionsB: null,
      edges: null
    };
  }

  var _proto = Graph.prototype;

  _proto.configure = function configure(config) {
    this._constants = Object.assign({}, this._constants, config);
    return this;
  };

  _proto.addNodes = function addNodes(nodes) {
    var nextId = this._nodes.length;

    for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var _ref3 = _ref2;
      var _name = _ref3.name;
      var _position = _ref3.position;
      var _weight = _ref3.weight;

      this._nodes.push({
        name: _name != null ? _name : null,
        position: _position || [0, 0],
        weight: _weight != null ? _weight : 1,
        edges: []
      });

      if (_name != null) {
        this._nodeNameToId.set(_name, nextId++);
      }
    }

    this._run();

    return this;
  };

  _proto.addEdges = function addEdges(edges) {
    for (var _iterator2 = edges, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref5 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref5 = _i2.value;
      }

      var _ref6 = _ref5;
      var _source = _ref6.source;
      var _target = _ref6.target;
      var _weight2 = _ref6.weight;
      var sourceId = typeof _source === 'number' ? _source : this._nodeNameToId.get(_source);
      var targetId = typeof _target === 'number' ? _target : this._nodeNameToId.get(_target);

      this._nodes[sourceId].edges.push({
        target: targetId,
        weight: _weight2 != null ? _weight2 : 1
      });

      ++this._edgeCount;
    }

    this._run();

    return this;
  };

  _proto._run = function _run() {
    this._shouldUpdate = true;

    if (!this._running) {
      this._progress();

      this._running = true;
    }
  };

  _proto._progress = function _progress() {
    var _this = this;

    window.requestAnimationFrame(function (_) {
      if (_this._shouldUpdate) {
        _this._update();

        _this._shouldUpdate = false;
      }

      _this._turn();

      _this._progress();
    });
  };

  _proto._update = function _update() {
    var app = this._app;
    var buf = this._buffers;
    var tex = this._textures;
    var nodeCount = this._nodes.length;
    var edgeCount = this._edgeCount;
    var positions = new Float32Array(2 * nodeCount);
    var masses = new Float32Array(nodeCount);
    var edgesLocs = new Uint32Array(2 * nodeCount);
    var edges = new Float32Array(3 * edgeCount);
    var l = 0;

    for (var i = 0; i < nodeCount; ++i) {
      var node = this._nodes[i];
      positions[2 * i] = node.positions[0];
      positions[2 * i + 1] = node.positions[1];
      masses[i] = node.weight;
      edgesLocs[2 * i] = l;

      for (var _iterator3 = node.edges, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref7;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref7 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref7 = _i3.value;
        }

        var _edge = _ref7;
        edges[(_readOnlyError("l"), l++)] = i;
        edges[(_readOnlyError("l"), l++)] = _edge.target;
        edges[(_readOnlyError("l"), l++)] = _edge.weight;
      }

      edgesLocs[2 * i + 1] = l;
    } // Update the constants.


    this._constants = Object.assign({}, this._constants, {
      nodeCount: nodeCount
    }); // Create the buffers.

    buf.positionsA = app.createVertexBuffer(undefined, 2, positions);
    buf.positionsB = app.createVertexBuffer(undefined, 2, positions.length);
    buf.velocitiesA = app.createVertexBuffer(undefined, 2, positions.length);
    buf.velocitiesB = app.createVertexBuffer(undefined, 2, positions.length);
    buf.masses = app.createVertexBuffer(undefined, 1, masses);
    buf.edgesLocs = app.createVertexBuffer(undefined, 2, edgesLocs); // Create the textures.

    tex.bounds = createFloatTexture(app, 1, 1, 4);
    tex.grid = createFloatTexture(app, GRID_SIZE, GRID_SIZE, 4);
    tex.pyramid = createFloatTexture(app, GRID_SIZE - 2, GRID_SIZE / 2, 4);
    var posTexSize = Math.ceil(Math.sqrt(nodeCount));
    tex.allPositionsA = createFloatTexture(app, posTexSize, posTexSize, 2);
    tex.allPositionsB = createFloatTexture(app, posTexSize, posTexSize, 2);
    var edgTexSize = Math.ceil(Math.sqrt(edgeCount));
    tex.edges = createFloatTexture(app, edgTexSize, edgTexSize, 2);
  };

  _proto._turn = function _turn() {
    var buf = this._buffers;
    var tex = this._textures;
    var steps = this._steps;
    steps.drawEdges(tex.edges, tex.allPositionsA);
    /*
    steps.findBounds(buf.positionsA, tex.bounds);
     steps.buildGrid(buf.positionsA, buf.masses, tex.bounds, tex.grid);
     steps.buildPyramid(tex.grid, tex.pyramid);
     steps.simulate(
        buf.positionsA, buf.velocitiesA, buf.masses, buf.edgesLocs,
        tex.pyramid, tex.grid, tex.allPositionsA, tex.edges,
        this._constants,
        buf.positionsB, buf.velocitiesB,
        tex.allPositionsB,
    );
     steps.drawEdges(tex.edges, tex.allPositionsB);
     steps.drawNodes(tex.allPositionsB);
     [buf.positionsA, buf.positionsB] = [buf.positionsB, buf.positionsA];
    [buf.velocitiesA, buf.velocitiesB] = [buf.velocitiesB, buf.velocitiesA];
    [tex.allPositionsA, tex.allPositionsB] = [tex.allPositionsB, tex.allPositionsA];
    */
  };

  return Graph;
}();

export default Graph;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdmkuZXNtLmpzIiwic291cmNlcyI6WyIuLi9yb2xsdXBQbHVnaW5CYWJlbEhlbHBlcnMiLCIuLi9ub2RlX21vZHVsZXMvcGljb2dsL2J1aWxkL3BpY29nbC5qcyIsIi4uL3NyYy91dGlscy5qcyIsIi4uL3NyYy9maW5kQm91bmRzL2luZGV4LmpzIiwiLi4vc3JjL2J1aWxkR3JpZC9pbmRleC5qcyIsIi4uL3NyYy9idWlsZFB5cmFtaWQvaW5kZXguanMiLCIuLi9zcmMvc2ltdWxhdGUvaW5kZXguanMiLCIuLi9zcmMvZHJhd05vZGVzL2luZGV4LmpzIiwiLi4vc3JjL2RyYXdFZGdlcy9pbmRleC5qcyIsIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBfdHlwZW9mIGFzIHR5cGVvZiwgX2pzeCBhcyBqc3gsIF9hc3luY0l0ZXJhdG9yIGFzIGFzeW5jSXRlcmF0b3IsIF9Bd2FpdFZhbHVlIGFzIEF3YWl0VmFsdWUsIF9Bc3luY0dlbmVyYXRvciBhcyBBc3luY0dlbmVyYXRvciwgX3dyYXBBc3luY0dlbmVyYXRvciBhcyB3cmFwQXN5bmNHZW5lcmF0b3IsIF9hd2FpdEFzeW5jR2VuZXJhdG9yIGFzIGF3YWl0QXN5bmNHZW5lcmF0b3IsIF9hc3luY0dlbmVyYXRvckRlbGVnYXRlIGFzIGFzeW5jR2VuZXJhdG9yRGVsZWdhdGUsIF9hc3luY1RvR2VuZXJhdG9yIGFzIGFzeW5jVG9HZW5lcmF0b3IsIF9jbGFzc0NhbGxDaGVjayBhcyBjbGFzc0NhbGxDaGVjaywgX2NyZWF0ZUNsYXNzIGFzIGNyZWF0ZUNsYXNzLCBfZGVmaW5lRW51bWVyYWJsZVByb3BlcnRpZXMgYXMgZGVmaW5lRW51bWVyYWJsZVByb3BlcnRpZXMsIF9kZWZhdWx0cyBhcyBkZWZhdWx0cywgX2RlZmluZVByb3BlcnR5IGFzIGRlZmluZVByb3BlcnR5LCBfZXh0ZW5kcyBhcyBleHRlbmRzLCBfZ2V0IGFzIGdldCwgX2luaGVyaXRzIGFzIGluaGVyaXRzLCBfaW5oZXJpdHNMb29zZSBhcyBpbmhlcml0c0xvb3NlLCBfaW5zdGFuY2VvZiBhcyBpbnN0YW5jZW9mLCBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IGFzIGludGVyb3BSZXF1aXJlRGVmYXVsdCwgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgYXMgaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCwgX25ld0Fycm93Q2hlY2sgYXMgbmV3QXJyb3dDaGVjaywgX29iamVjdERlc3RydWN0dXJpbmdFbXB0eSBhcyBvYmplY3REZXN0cnVjdHVyaW5nRW1wdHksIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBhcyBvYmplY3RXaXRob3V0UHJvcGVydGllcywgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gYXMgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiwgX3NldCBhcyBzZXQsIF9zbGljZWRUb0FycmF5IGFzIHNsaWNlZFRvQXJyYXksIF9zbGljZWRUb0FycmF5TG9vc2UgYXMgc2xpY2VkVG9BcnJheUxvb3NlLCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIGFzIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbCwgX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlIGFzIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlLCBfdGVtcG9yYWxSZWYgYXMgdGVtcG9yYWxSZWYsIF9yZWFkT25seUVycm9yIGFzIHJlYWRPbmx5RXJyb3IsIF9jbGFzc05hbWVURFpFcnJvciBhcyBjbGFzc05hbWVURFpFcnJvciwgX3RlbXBvcmFsVW5kZWZpbmVkIGFzIHRlbXBvcmFsVW5kZWZpbmVkLCBfdG9BcnJheSBhcyB0b0FycmF5LCBfdG9Db25zdW1hYmxlQXJyYXkgYXMgdG9Db25zdW1hYmxlQXJyYXksIF9za2lwRmlyc3RHZW5lcmF0b3JOZXh0IGFzIHNraXBGaXJzdEdlbmVyYXRvck5leHQsIF90b1Byb3BlcnR5S2V5IGFzIHRvUHJvcGVydHlLZXkgfTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFO1xuXG5mdW5jdGlvbiBfanN4KHR5cGUsIHByb3BzLCBrZXksIGNoaWxkcmVuKSB7XG4gIGlmICghUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5mb3IgJiYgU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIikgfHwgMHhlYWM3O1xuICB9XG5cbiAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHM7XG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAzO1xuXG4gIGlmICghcHJvcHMgJiYgY2hpbGRyZW5MZW5ndGggIT09IDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgaWYgKHByb3BzICYmIGRlZmF1bHRQcm9wcykge1xuICAgIGZvciAodmFyIHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKCFwcm9wcykge1xuICAgIHByb3BzID0gZGVmYXVsdFByb3BzIHx8IHt9O1xuICB9XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IG5ldyBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDNdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5ID09PSB1bmRlZmluZWQgPyBudWxsIDogJycgKyBrZXksXG4gICAgcmVmOiBudWxsLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICBfb3duZXI6IG51bGxcbiAgfTtcbn1cblxuZnVuY3Rpb24gX2FzeW5jSXRlcmF0b3IoaXRlcmFibGUpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGlmIChTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgICAgdmFyIG1ldGhvZCA9IGl0ZXJhYmxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtcbiAgICAgIGlmIChtZXRob2QgIT0gbnVsbCkgcmV0dXJuIG1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICB9XG5cbiAgICBpZiAoU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICByZXR1cm4gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpO1xuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgaXMgbm90IGFzeW5jIGl0ZXJhYmxlXCIpO1xufVxuXG5mdW5jdGlvbiBfQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLndyYXBwZWQgPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gX0FzeW5jR2VuZXJhdG9yKGdlbikge1xuICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGFyZzogYXJnLFxuICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgbmV4dDogbnVsbFxuICAgICAgfTtcblxuICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgdmFyIHdyYXBwZWRBd2FpdCA9IHZhbHVlIGluc3RhbmNlb2YgX0F3YWl0VmFsdWU7XG4gICAgICBQcm9taXNlLnJlc29sdmUod3JhcHBlZEF3YWl0ID8gdmFsdWUud3JhcHBlZCA6IHZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgaWYgKHdyYXBwZWRBd2FpdCkge1xuICAgICAgICAgIHJlc3VtZShcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgYXJnKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgaWYgKGZyb250KSB7XG4gICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gIGlmICh0eXBlb2YgZ2VuLnJldHVybiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhpcy5yZXR1cm4gPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICBfQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbn1cblxuX0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xufTtcblxuX0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG59O1xuXG5fQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xufTtcblxuZnVuY3Rpb24gX3dyYXBBc3luY0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgX0FzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfYXdhaXRBc3luY0dlbmVyYXRvcih2YWx1ZSkge1xuICByZXR1cm4gbmV3IF9Bd2FpdFZhbHVlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gX2FzeW5jR2VuZXJhdG9yRGVsZWdhdGUoaW5uZXIsIGF3YWl0V3JhcCkge1xuICB2YXIgaXRlciA9IHt9LFxuICAgICAgd2FpdGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHB1bXAoa2V5LCB2YWx1ZSkge1xuICAgIHdhaXRpbmcgPSB0cnVlO1xuICAgIHZhbHVlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHJlc29sdmUoaW5uZXJba2V5XSh2YWx1ZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBhd2FpdFdyYXAodmFsdWUpXG4gICAgfTtcbiAgfVxuXG4gIDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvcikge1xuICAgIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH1cblxuICBpdGVyLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAod2FpdGluZykge1xuICAgICAgd2FpdGluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBwdW1wKFwibmV4dFwiLCB2YWx1ZSk7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBpbm5lci50aHJvdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgaXRlci50aHJvdyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHdhaXRpbmcpIHtcbiAgICAgICAgd2FpdGluZyA9IGZhbHNlO1xuICAgICAgICB0aHJvdyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHB1bXAoXCJ0aHJvd1wiLCB2YWx1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5uZXIucmV0dXJuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBpdGVyLnJldHVybiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHB1bXAoXCJyZXR1cm5cIiwgdmFsdWUpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaXRlcjtcbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZUVudW1lcmFibGVQcm9wZXJ0aWVzKG9iaiwgZGVzY3MpIHtcbiAgZm9yICh2YXIga2V5IGluIGRlc2NzKSB7XG4gICAgdmFyIGRlc2MgPSBkZXNjc1trZXldO1xuICAgIGRlc2MuY29uZmlndXJhYmxlID0gZGVzYy5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgZGVzYyk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvYmplY3RTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhkZXNjcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdFN5bWJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzeW0gPSBvYmplY3RTeW1ib2xzW2ldO1xuICAgICAgdmFyIGRlc2MgPSBkZXNjc1tzeW1dO1xuICAgICAgZGVzYy5jb25maWd1cmFibGUgPSBkZXNjLmVudW1lcmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHN5bSwgZGVzYyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2RlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTtcblxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25maWd1cmFibGUgJiYgb2JqW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9nZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7XG5cbiAgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcblxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIF9pbnN0YW5jZW9mKGxlZnQsIHJpZ2h0KSB7XG4gIGlmIChyaWdodCAhPSBudWxsICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgcmlnaHRbU3ltYm9sLmhhc0luc3RhbmNlXSkge1xuICAgIHJldHVybiByaWdodFtTeW1ib2wuaGFzSW5zdGFuY2VdKGxlZnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsZWZ0IGluc3RhbmNlb2YgcmlnaHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9IGVsc2Uge1xuICAgIHZhciBuZXdPYmogPSB7fTtcblxuICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9O1xuXG4gICAgICAgICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5ld09iai5kZWZhdWx0ID0gb2JqO1xuICAgIHJldHVybiBuZXdPYmo7XG4gIH1cbn1cblxuZnVuY3Rpb24gX25ld0Fycm93Q2hlY2soaW5uZXJUaGlzLCBib3VuZFRoaXMpIHtcbiAgaWYgKGlubmVyVGhpcyAhPT0gYm91bmRUaGlzKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBpbnN0YW50aWF0ZSBhbiBhcnJvdyBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5KG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgZGVzdHJ1Y3R1cmUgdW5kZWZpbmVkXCIpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9zZXQob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgX3NldChwYXJlbnQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYyAmJiBkZXNjLndyaXRhYmxlKSB7XG4gICAgZGVzYy52YWx1ZSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBzZXR0ZXIgPSBkZXNjLnNldDtcblxuICAgIGlmIChzZXR0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0dGVyLmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9zbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHtcbiAgICByZXR1cm4gX3NsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheUxvb3NlKGFyciwgaSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgICAgX2Fyci5wdXNoKF9zdGVwLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKHN0cmluZ3MsIHJhdykge1xuICBzdHJpbmdzLnJhdyA9IHJhdztcbiAgcmV0dXJuIHN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIF90ZW1wb3JhbFJlZih2YWwsIG5hbWUpIHtcbiAgaWYgKHZhbCA9PT0gX3RlbXBvcmFsVW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKG5hbWUgKyBcIiBpcyBub3QgZGVmaW5lZCAtIHRlbXBvcmFsIGRlYWQgem9uZVwiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc05hbWVURFpFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkNsYXNzIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgY2Fubm90IGJlIHJlZmVyZW5jZWQgaW4gY29tcHV0ZWQgcHJvcGVydHkga2V5cy5cIik7XG59XG5cbnZhciBfdGVtcG9yYWxVbmRlZmluZWQgPSB7fTtcblxuZnVuY3Rpb24gX3RvQXJyYXkoYXJyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnIgOiBBcnJheS5mcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfc2tpcEZpcnN0R2VuZXJhdG9yTmV4dChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpdCA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaXQubmV4dCgpO1xuICAgIHJldHVybiBpdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoa2V5KSB7XG4gIGlmICh0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gU3RyaW5nKGtleSk7XG4gIH1cbn0iLCIvKlxuUGljb0dMLmpzIHYwLjguOFxuXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG50aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG50aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG51c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxudGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1NcbkZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG5JTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBpY29HTFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQaWNvR0xcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUYXJlayBTaGVyaWZcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5sZXQgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKTtcblxuLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvc3BlY3MvMS4wL1xuLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvc3BlY3MvbGF0ZXN0LzIuMC8jMS4xXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gICAgREVQVEhfQlVGRkVSX0JJVDogMHgwMDAwMDEwMCxcbiAgICBTVEVOQ0lMX0JVRkZFUl9CSVQ6IDB4MDAwMDA0MDAsXG4gICAgQ09MT1JfQlVGRkVSX0JJVDogMHgwMDAwNDAwMCxcbiAgICBQT0lOVFM6IDB4MDAwMCxcbiAgICBMSU5FUzogMHgwMDAxLFxuICAgIExJTkVfTE9PUDogMHgwMDAyLFxuICAgIExJTkVfU1RSSVA6IDB4MDAwMyxcbiAgICBUUklBTkdMRVM6IDB4MDAwNCxcbiAgICBUUklBTkdMRV9TVFJJUDogMHgwMDA1LFxuICAgIFRSSUFOR0xFX0ZBTjogMHgwMDA2LFxuICAgIFpFUk86IDAsXG4gICAgT05FOiAxLFxuICAgIFNSQ19DT0xPUjogMHgwMzAwLFxuICAgIE9ORV9NSU5VU19TUkNfQ09MT1I6IDB4MDMwMSxcbiAgICBTUkNfQUxQSEE6IDB4MDMwMixcbiAgICBPTkVfTUlOVVNfU1JDX0FMUEhBOiAweDAzMDMsXG4gICAgRFNUX0FMUEhBOiAweDAzMDQsXG4gICAgT05FX01JTlVTX0RTVF9BTFBIQTogMHgwMzA1LFxuICAgIERTVF9DT0xPUjogMHgwMzA2LFxuICAgIE9ORV9NSU5VU19EU1RfQ09MT1I6IDB4MDMwNyxcbiAgICBTUkNfQUxQSEFfU0FUVVJBVEU6IDB4MDMwOCxcbiAgICBGVU5DX0FERDogMHg4MDA2LFxuICAgIEJMRU5EX0VRVUFUSU9OOiAweDgwMDksXG4gICAgQkxFTkRfRVFVQVRJT05fUkdCOiAweDgwMDksXG4gICAgQkxFTkRfRVFVQVRJT05fQUxQSEE6IDB4ODgzRCxcbiAgICBGVU5DX1NVQlRSQUNUOiAweDgwMEEsXG4gICAgRlVOQ19SRVZFUlNFX1NVQlRSQUNUOiAweDgwMEIsXG4gICAgQkxFTkRfRFNUX1JHQjogMHg4MEM4LFxuICAgIEJMRU5EX1NSQ19SR0I6IDB4ODBDOSxcbiAgICBCTEVORF9EU1RfQUxQSEE6IDB4ODBDQSxcbiAgICBCTEVORF9TUkNfQUxQSEE6IDB4ODBDQixcbiAgICBDT05TVEFOVF9DT0xPUjogMHg4MDAxLFxuICAgIE9ORV9NSU5VU19DT05TVEFOVF9DT0xPUjogMHg4MDAyLFxuICAgIENPTlNUQU5UX0FMUEhBOiAweDgwMDMsXG4gICAgT05FX01JTlVTX0NPTlNUQU5UX0FMUEhBOiAweDgwMDQsXG4gICAgQkxFTkRfQ09MT1I6IDB4ODAwNSxcbiAgICBBUlJBWV9CVUZGRVI6IDB4ODg5MixcbiAgICBFTEVNRU5UX0FSUkFZX0JVRkZFUjogMHg4ODkzLFxuICAgIEFSUkFZX0JVRkZFUl9CSU5ESU5HOiAweDg4OTQsXG4gICAgRUxFTUVOVF9BUlJBWV9CVUZGRVJfQklORElORzogMHg4ODk1LFxuICAgIFNUUkVBTV9EUkFXOiAweDg4RTAsXG4gICAgU1RBVElDX0RSQVc6IDB4ODhFNCxcbiAgICBEWU5BTUlDX0RSQVc6IDB4ODhFOCxcbiAgICBCVUZGRVJfU0laRTogMHg4NzY0LFxuICAgIEJVRkZFUl9VU0FHRTogMHg4NzY1LFxuICAgIENVUlJFTlRfVkVSVEVYX0FUVFJJQjogMHg4NjI2LFxuICAgIEZST05UOiAweDA0MDQsXG4gICAgQkFDSzogMHgwNDA1LFxuICAgIEZST05UX0FORF9CQUNLOiAweDA0MDgsXG4gICAgQ1VMTF9GQUNFOiAweDBCNDQsXG4gICAgQkxFTkQ6IDB4MEJFMixcbiAgICBESVRIRVI6IDB4MEJEMCxcbiAgICBTVEVOQ0lMX1RFU1Q6IDB4MEI5MCxcbiAgICBERVBUSF9URVNUOiAweDBCNzEsXG4gICAgU0NJU1NPUl9URVNUOiAweDBDMTEsXG4gICAgUE9MWUdPTl9PRkZTRVRfRklMTDogMHg4MDM3LFxuICAgIFNBTVBMRV9BTFBIQV9UT19DT1ZFUkFHRTogMHg4MDlFLFxuICAgIFNBTVBMRV9DT1ZFUkFHRTogMHg4MEEwLFxuICAgIE5PX0VSUk9SOiAwLFxuICAgIElOVkFMSURfRU5VTTogMHgwNTAwLFxuICAgIElOVkFMSURfVkFMVUU6IDB4MDUwMSxcbiAgICBJTlZBTElEX09QRVJBVElPTjogMHgwNTAyLFxuICAgIE9VVF9PRl9NRU1PUlk6IDB4MDUwNSxcbiAgICBDVzogMHgwOTAwLFxuICAgIENDVzogMHgwOTAxLFxuICAgIExJTkVfV0lEVEg6IDB4MEIyMSxcbiAgICBBTElBU0VEX1BPSU5UX1NJWkVfUkFOR0U6IDB4ODQ2RCxcbiAgICBBTElBU0VEX0xJTkVfV0lEVEhfUkFOR0U6IDB4ODQ2RSxcbiAgICBDVUxMX0ZBQ0VfTU9ERTogMHgwQjQ1LFxuICAgIEZST05UX0ZBQ0U6IDB4MEI0NixcbiAgICBERVBUSF9SQU5HRTogMHgwQjcwLFxuICAgIERFUFRIX1dSSVRFTUFTSzogMHgwQjcyLFxuICAgIERFUFRIX0NMRUFSX1ZBTFVFOiAweDBCNzMsXG4gICAgREVQVEhfRlVOQzogMHgwQjc0LFxuICAgIFNURU5DSUxfQ0xFQVJfVkFMVUU6IDB4MEI5MSxcbiAgICBTVEVOQ0lMX0ZVTkM6IDB4MEI5MixcbiAgICBTVEVOQ0lMX0ZBSUw6IDB4MEI5NCxcbiAgICBTVEVOQ0lMX1BBU1NfREVQVEhfRkFJTDogMHgwQjk1LFxuICAgIFNURU5DSUxfUEFTU19ERVBUSF9QQVNTOiAweDBCOTYsXG4gICAgU1RFTkNJTF9SRUY6IDB4MEI5NyxcbiAgICBTVEVOQ0lMX1ZBTFVFX01BU0s6IDB4MEI5MyxcbiAgICBTVEVOQ0lMX1dSSVRFTUFTSzogMHgwQjk4LFxuICAgIFNURU5DSUxfQkFDS19GVU5DOiAweDg4MDAsXG4gICAgU1RFTkNJTF9CQUNLX0ZBSUw6IDB4ODgwMSxcbiAgICBTVEVOQ0lMX0JBQ0tfUEFTU19ERVBUSF9GQUlMOiAweDg4MDIsXG4gICAgU1RFTkNJTF9CQUNLX1BBU1NfREVQVEhfUEFTUzogMHg4ODAzLFxuICAgIFNURU5DSUxfQkFDS19SRUY6IDB4OENBMyxcbiAgICBTVEVOQ0lMX0JBQ0tfVkFMVUVfTUFTSzogMHg4Q0E0LFxuICAgIFNURU5DSUxfQkFDS19XUklURU1BU0s6IDB4OENBNSxcbiAgICBWSUVXUE9SVDogMHgwQkEyLFxuICAgIFNDSVNTT1JfQk9YOiAweDBDMTAsXG4gICAgQ09MT1JfQ0xFQVJfVkFMVUU6IDB4MEMyMixcbiAgICBDT0xPUl9XUklURU1BU0s6IDB4MEMyMyxcbiAgICBVTlBBQ0tfQUxJR05NRU5UOiAweDBDRjUsXG4gICAgUEFDS19BTElHTk1FTlQ6IDB4MEQwNSxcbiAgICBNQVhfVEVYVFVSRV9TSVpFOiAweDBEMzMsXG4gICAgTUFYX1ZJRVdQT1JUX0RJTVM6IDB4MEQzQSxcbiAgICBTVUJQSVhFTF9CSVRTOiAweDBENTAsXG4gICAgUkVEX0JJVFM6IDB4MEQ1MixcbiAgICBHUkVFTl9CSVRTOiAweDBENTMsXG4gICAgQkxVRV9CSVRTOiAweDBENTQsXG4gICAgQUxQSEFfQklUUzogMHgwRDU1LFxuICAgIERFUFRIX0JJVFM6IDB4MEQ1NixcbiAgICBTVEVOQ0lMX0JJVFM6IDB4MEQ1NyxcbiAgICBQT0xZR09OX09GRlNFVF9VTklUUzogMHgyQTAwLFxuICAgIFBPTFlHT05fT0ZGU0VUX0ZBQ1RPUjogMHg4MDM4LFxuICAgIFRFWFRVUkVfQklORElOR18yRDogMHg4MDY5LFxuICAgIFNBTVBMRV9CVUZGRVJTOiAweDgwQTgsXG4gICAgU0FNUExFUzogMHg4MEE5LFxuICAgIFNBTVBMRV9DT1ZFUkFHRV9WQUxVRTogMHg4MEFBLFxuICAgIFNBTVBMRV9DT1ZFUkFHRV9JTlZFUlQ6IDB4ODBBQixcbiAgICBDT01QUkVTU0VEX1RFWFRVUkVfRk9STUFUUzogMHg4NkEzLFxuICAgIERPTlRfQ0FSRTogMHgxMTAwLFxuICAgIEZBU1RFU1Q6IDB4MTEwMSxcbiAgICBOSUNFU1Q6IDB4MTEwMixcbiAgICBHRU5FUkFURV9NSVBNQVBfSElOVDogMHg4MTkyLFxuICAgIEJZVEU6IDB4MTQwMCxcbiAgICBVTlNJR05FRF9CWVRFOiAweDE0MDEsXG4gICAgU0hPUlQ6IDB4MTQwMixcbiAgICBVTlNJR05FRF9TSE9SVDogMHgxNDAzLFxuICAgIElOVDogMHgxNDA0LFxuICAgIFVOU0lHTkVEX0lOVDogMHgxNDA1LFxuICAgIEZMT0FUOiAweDE0MDYsXG4gICAgREVQVEhfQ09NUE9ORU5UOiAweDE5MDIsXG4gICAgQUxQSEE6IDB4MTkwNixcbiAgICBSR0I6IDB4MTkwNyxcbiAgICBSR0JBOiAweDE5MDgsXG4gICAgTFVNSU5BTkNFOiAweDE5MDksXG4gICAgTFVNSU5BTkNFX0FMUEhBOiAweDE5MEEsXG4gICAgVU5TSUdORURfU0hPUlRfNF80XzRfNDogMHg4MDMzLFxuICAgIFVOU0lHTkVEX1NIT1JUXzVfNV81XzE6IDB4ODAzNCxcbiAgICBVTlNJR05FRF9TSE9SVF81XzZfNTogMHg4MzYzLFxuICAgIEZSQUdNRU5UX1NIQURFUjogMHg4QjMwLFxuICAgIFZFUlRFWF9TSEFERVI6IDB4OEIzMSxcbiAgICBNQVhfVkVSVEVYX0FUVFJJQlM6IDB4ODg2OSxcbiAgICBNQVhfVkVSVEVYX1VOSUZPUk1fVkVDVE9SUzogMHg4REZCLFxuICAgIE1BWF9WQVJZSU5HX1ZFQ1RPUlM6IDB4OERGQyxcbiAgICBNQVhfQ09NQklORURfVEVYVFVSRV9JTUFHRV9VTklUUzogMHg4QjRELFxuICAgIE1BWF9WRVJURVhfVEVYVFVSRV9JTUFHRV9VTklUUzogMHg4QjRDLFxuICAgIE1BWF9URVhUVVJFX0lNQUdFX1VOSVRTOiAweDg4NzIsXG4gICAgTUFYX0ZSQUdNRU5UX1VOSUZPUk1fVkVDVE9SUzogMHg4REZELFxuICAgIFNIQURFUl9UWVBFOiAweDhCNEYsXG4gICAgREVMRVRFX1NUQVRVUzogMHg4QjgwLFxuICAgIExJTktfU1RBVFVTOiAweDhCODIsXG4gICAgVkFMSURBVEVfU1RBVFVTOiAweDhCODMsXG4gICAgQVRUQUNIRURfU0hBREVSUzogMHg4Qjg1LFxuICAgIEFDVElWRV9VTklGT1JNUzogMHg4Qjg2LFxuICAgIEFDVElWRV9BVFRSSUJVVEVTOiAweDhCODksXG4gICAgU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OOiAweDhCOEMsXG4gICAgQ1VSUkVOVF9QUk9HUkFNOiAweDhCOEQsXG4gICAgTkVWRVI6IDB4MDIwMCxcbiAgICBMRVNTOiAweDAyMDEsXG4gICAgRVFVQUw6IDB4MDIwMixcbiAgICBMRVFVQUw6IDB4MDIwMyxcbiAgICBHUkVBVEVSOiAweDAyMDQsXG4gICAgTk9URVFVQUw6IDB4MDIwNSxcbiAgICBHRVFVQUw6IDB4MDIwNixcbiAgICBBTFdBWVM6IDB4MDIwNyxcbiAgICBLRUVQOiAweDFFMDAsXG4gICAgUkVQTEFDRTogMHgxRTAxLFxuICAgIElOQ1I6IDB4MUUwMixcbiAgICBERUNSOiAweDFFMDMsXG4gICAgSU5WRVJUOiAweDE1MEEsXG4gICAgSU5DUl9XUkFQOiAweDg1MDcsXG4gICAgREVDUl9XUkFQOiAweDg1MDgsXG4gICAgVkVORE9SOiAweDFGMDAsXG4gICAgUkVOREVSRVI6IDB4MUYwMSxcbiAgICBWRVJTSU9OOiAweDFGMDIsXG4gICAgTkVBUkVTVDogMHgyNjAwLFxuICAgIExJTkVBUjogMHgyNjAxLFxuICAgIE5FQVJFU1RfTUlQTUFQX05FQVJFU1Q6IDB4MjcwMCxcbiAgICBMSU5FQVJfTUlQTUFQX05FQVJFU1Q6IDB4MjcwMSxcbiAgICBORUFSRVNUX01JUE1BUF9MSU5FQVI6IDB4MjcwMixcbiAgICBMSU5FQVJfTUlQTUFQX0xJTkVBUjogMHgyNzAzLFxuICAgIFRFWFRVUkVfTUFHX0ZJTFRFUjogMHgyODAwLFxuICAgIFRFWFRVUkVfTUlOX0ZJTFRFUjogMHgyODAxLFxuICAgIFRFWFRVUkVfV1JBUF9TOiAweDI4MDIsXG4gICAgVEVYVFVSRV9XUkFQX1Q6IDB4MjgwMyxcbiAgICBURVhUVVJFXzJEOiAweDBERTEsXG4gICAgVEVYVFVSRTogMHgxNzAyLFxuICAgIFRFWFRVUkVfQ1VCRV9NQVA6IDB4ODUxMyxcbiAgICBURVhUVVJFX0JJTkRJTkdfQ1VCRV9NQVA6IDB4ODUxNCxcbiAgICBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1g6IDB4ODUxNSxcbiAgICBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1g6IDB4ODUxNixcbiAgICBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1k6IDB4ODUxNyxcbiAgICBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1k6IDB4ODUxOCxcbiAgICBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1o6IDB4ODUxOSxcbiAgICBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1o6IDB4ODUxQSxcbiAgICBNQVhfQ1VCRV9NQVBfVEVYVFVSRV9TSVpFOiAweDg1MUMsXG4gICAgVEVYVFVSRTA6IDB4ODRDMCxcbiAgICBURVhUVVJFMTogMHg4NEMxLFxuICAgIFRFWFRVUkUyOiAweDg0QzIsXG4gICAgVEVYVFVSRTM6IDB4ODRDMyxcbiAgICBURVhUVVJFNDogMHg4NEM0LFxuICAgIFRFWFRVUkU1OiAweDg0QzUsXG4gICAgVEVYVFVSRTY6IDB4ODRDNixcbiAgICBURVhUVVJFNzogMHg4NEM3LFxuICAgIFRFWFRVUkU4OiAweDg0QzgsXG4gICAgVEVYVFVSRTk6IDB4ODRDOSxcbiAgICBURVhUVVJFMTA6IDB4ODRDQSxcbiAgICBURVhUVVJFMTE6IDB4ODRDQixcbiAgICBURVhUVVJFMTI6IDB4ODRDQyxcbiAgICBURVhUVVJFMTM6IDB4ODRDRCxcbiAgICBURVhUVVJFMTQ6IDB4ODRDRSxcbiAgICBURVhUVVJFMTU6IDB4ODRDRixcbiAgICBURVhUVVJFMTY6IDB4ODREMCxcbiAgICBURVhUVVJFMTc6IDB4ODREMSxcbiAgICBURVhUVVJFMTg6IDB4ODREMixcbiAgICBURVhUVVJFMTk6IDB4ODREMyxcbiAgICBURVhUVVJFMjA6IDB4ODRENCxcbiAgICBURVhUVVJFMjE6IDB4ODRENSxcbiAgICBURVhUVVJFMjI6IDB4ODRENixcbiAgICBURVhUVVJFMjM6IDB4ODRENyxcbiAgICBURVhUVVJFMjQ6IDB4ODREOCxcbiAgICBURVhUVVJFMjU6IDB4ODREOSxcbiAgICBURVhUVVJFMjY6IDB4ODREQSxcbiAgICBURVhUVVJFMjc6IDB4ODREQixcbiAgICBURVhUVVJFMjg6IDB4ODREQyxcbiAgICBURVhUVVJFMjk6IDB4ODRERCxcbiAgICBURVhUVVJFMzA6IDB4ODRERSxcbiAgICBURVhUVVJFMzE6IDB4ODRERixcbiAgICBBQ1RJVkVfVEVYVFVSRTogMHg4NEUwLFxuICAgIFJFUEVBVDogMHgyOTAxLFxuICAgIENMQU1QX1RPX0VER0U6IDB4ODEyRixcbiAgICBNSVJST1JFRF9SRVBFQVQ6IDB4ODM3MCxcbiAgICBGTE9BVF9WRUMyOiAweDhCNTAsXG4gICAgRkxPQVRfVkVDMzogMHg4QjUxLFxuICAgIEZMT0FUX1ZFQzQ6IDB4OEI1MixcbiAgICBJTlRfVkVDMjogMHg4QjUzLFxuICAgIElOVF9WRUMzOiAweDhCNTQsXG4gICAgSU5UX1ZFQzQ6IDB4OEI1NSxcbiAgICBCT09MOiAweDhCNTYsXG4gICAgQk9PTF9WRUMyOiAweDhCNTcsXG4gICAgQk9PTF9WRUMzOiAweDhCNTgsXG4gICAgQk9PTF9WRUM0OiAweDhCNTksXG4gICAgRkxPQVRfTUFUMjogMHg4QjVBLFxuICAgIEZMT0FUX01BVDM6IDB4OEI1QixcbiAgICBGTE9BVF9NQVQ0OiAweDhCNUMsXG4gICAgU0FNUExFUl8yRDogMHg4QjVFLFxuICAgIFNBTVBMRVJfQ1VCRTogMHg4QjYwLFxuICAgIFZFUlRFWF9BVFRSSUJfQVJSQVlfRU5BQkxFRDogMHg4NjIyLFxuICAgIFZFUlRFWF9BVFRSSUJfQVJSQVlfU0laRTogMHg4NjIzLFxuICAgIFZFUlRFWF9BVFRSSUJfQVJSQVlfU1RSSURFOiAweDg2MjQsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9UWVBFOiAweDg2MjUsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9OT1JNQUxJWkVEOiAweDg4NkEsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9QT0lOVEVSOiAweDg2NDUsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9CVUZGRVJfQklORElORzogMHg4ODlGLFxuICAgIElNUExFTUVOVEFUSU9OX0NPTE9SX1JFQURfVFlQRTogMHg4QjlBLFxuICAgIElNUExFTUVOVEFUSU9OX0NPTE9SX1JFQURfRk9STUFUOiAweDhCOUIsXG4gICAgQ09NUElMRV9TVEFUVVM6IDB4OEI4MSxcbiAgICBMT1dfRkxPQVQ6IDB4OERGMCxcbiAgICBNRURJVU1fRkxPQVQ6IDB4OERGMSxcbiAgICBISUdIX0ZMT0FUOiAweDhERjIsXG4gICAgTE9XX0lOVDogMHg4REYzLFxuICAgIE1FRElVTV9JTlQ6IDB4OERGNCxcbiAgICBISUdIX0lOVDogMHg4REY1LFxuICAgIEZSQU1FQlVGRkVSOiAweDhENDAsXG4gICAgUkVOREVSQlVGRkVSOiAweDhENDEsXG4gICAgUkdCQTQ6IDB4ODA1NixcbiAgICBSR0I1X0ExOiAweDgwNTcsXG4gICAgUkdCNTY1OiAweDhENjIsXG4gICAgREVQVEhfQ09NUE9ORU5UMTY6IDB4ODFBNSxcbiAgICBTVEVOQ0lMX0lOREVYOiAweDE5MDEsXG4gICAgU1RFTkNJTF9JTkRFWDg6IDB4OEQ0OCxcbiAgICBERVBUSF9TVEVOQ0lMOiAweDg0RjksXG4gICAgUkVOREVSQlVGRkVSX1dJRFRIOiAweDhENDIsXG4gICAgUkVOREVSQlVGRkVSX0hFSUdIVDogMHg4RDQzLFxuICAgIFJFTkRFUkJVRkZFUl9JTlRFUk5BTF9GT1JNQVQ6IDB4OEQ0NCxcbiAgICBSRU5ERVJCVUZGRVJfUkVEX1NJWkU6IDB4OEQ1MCxcbiAgICBSRU5ERVJCVUZGRVJfR1JFRU5fU0laRTogMHg4RDUxLFxuICAgIFJFTkRFUkJVRkZFUl9CTFVFX1NJWkU6IDB4OEQ1MixcbiAgICBSRU5ERVJCVUZGRVJfQUxQSEFfU0laRTogMHg4RDUzLFxuICAgIFJFTkRFUkJVRkZFUl9ERVBUSF9TSVpFOiAweDhENTQsXG4gICAgUkVOREVSQlVGRkVSX1NURU5DSUxfU0laRTogMHg4RDU1LFxuICAgIEZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfT0JKRUNUX1RZUEU6IDB4OENEMCxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX09CSkVDVF9OQU1FOiAweDhDRDEsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9URVhUVVJFX0xFVkVMOiAweDhDRDIsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9URVhUVVJFX0NVQkVfTUFQX0ZBQ0U6IDB4OENEMyxcbiAgICBDT0xPUl9BVFRBQ0hNRU5UMDogMHg4Q0UwLFxuICAgIERFUFRIX0FUVEFDSE1FTlQ6IDB4OEQwMCxcbiAgICBTVEVOQ0lMX0FUVEFDSE1FTlQ6IDB4OEQyMCxcbiAgICBERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQ6IDB4ODIxQSxcbiAgICBOT05FOiAwLFxuICAgIEZSQU1FQlVGRkVSX0NPTVBMRVRFOiAweDhDRDUsXG4gICAgRlJBTUVCVUZGRVJfSU5DT01QTEVURV9BVFRBQ0hNRU5UOiAweDhDRDYsXG4gICAgRlJBTUVCVUZGRVJfSU5DT01QTEVURV9NSVNTSU5HX0FUVEFDSE1FTlQ6IDB4OENENyxcbiAgICBGUkFNRUJVRkZFUl9JTkNPTVBMRVRFX0RJTUVOU0lPTlM6IDB4OENEOSxcbiAgICBGUkFNRUJVRkZFUl9VTlNVUFBPUlRFRDogMHg4Q0RELFxuICAgIEZSQU1FQlVGRkVSX0JJTkRJTkc6IDB4OENBNixcbiAgICBSRU5ERVJCVUZGRVJfQklORElORzogMHg4Q0E3LFxuICAgIE1BWF9SRU5ERVJCVUZGRVJfU0laRTogMHg4NEU4LFxuICAgIElOVkFMSURfRlJBTUVCVUZGRVJfT1BFUkFUSU9OOiAweDA1MDYsXG4gICAgVU5QQUNLX0ZMSVBfWV9XRUJHTDogMHg5MjQwLFxuICAgIFVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTDogMHg5MjQxLFxuICAgIENPTlRFWFRfTE9TVF9XRUJHTDogMHg5MjQyLFxuICAgIFVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0w6IDB4OTI0MyxcbiAgICBCUk9XU0VSX0RFRkFVTFRfV0VCR0w6IDB4OTI0NCxcbiAgICBSRUFEX0JVRkZFUjogMHgwQzAyLFxuICAgIFVOUEFDS19ST1dfTEVOR1RIOiAweDBDRjIsXG4gICAgVU5QQUNLX1NLSVBfUk9XUzogMHgwQ0YzLFxuICAgIFVOUEFDS19TS0lQX1BJWEVMUzogMHgwQ0Y0LFxuICAgIFBBQ0tfUk9XX0xFTkdUSDogMHgwRDAyLFxuICAgIFBBQ0tfU0tJUF9ST1dTOiAweDBEMDMsXG4gICAgUEFDS19TS0lQX1BJWEVMUzogMHgwRDA0LFxuICAgIENPTE9SOiAweDE4MDAsXG4gICAgREVQVEg6IDB4MTgwMSxcbiAgICBTVEVOQ0lMOiAweDE4MDIsXG4gICAgUkVEOiAweDE5MDMsXG4gICAgUkdCODogMHg4MDUxLFxuICAgIFJHQkE4OiAweDgwNTgsXG4gICAgUkdCMTBfQTI6IDB4ODA1OSxcbiAgICBURVhUVVJFX0JJTkRJTkdfM0Q6IDB4ODA2QSxcbiAgICBVTlBBQ0tfU0tJUF9JTUFHRVM6IDB4ODA2RCxcbiAgICBVTlBBQ0tfSU1BR0VfSEVJR0hUOiAweDgwNkUsXG4gICAgVEVYVFVSRV8zRDogMHg4MDZGLFxuICAgIFRFWFRVUkVfV1JBUF9SOiAweDgwNzIsXG4gICAgTUFYXzNEX1RFWFRVUkVfU0laRTogMHg4MDczLFxuICAgIFVOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFVjogMHg4MzY4LFxuICAgIE1BWF9FTEVNRU5UU19WRVJUSUNFUzogMHg4MEU4LFxuICAgIE1BWF9FTEVNRU5UU19JTkRJQ0VTOiAweDgwRTksXG4gICAgVEVYVFVSRV9NSU5fTE9EOiAweDgxM0EsXG4gICAgVEVYVFVSRV9NQVhfTE9EOiAweDgxM0IsXG4gICAgVEVYVFVSRV9CQVNFX0xFVkVMOiAweDgxM0MsXG4gICAgVEVYVFVSRV9NQVhfTEVWRUw6IDB4ODEzRCxcbiAgICBNSU46IDB4ODAwNyxcbiAgICBNQVg6IDB4ODAwOCxcbiAgICBERVBUSF9DT01QT05FTlQyNDogMHg4MUE2LFxuICAgIE1BWF9URVhUVVJFX0xPRF9CSUFTOiAweDg0RkQsXG4gICAgVEVYVFVSRV9DT01QQVJFX01PREU6IDB4ODg0QyxcbiAgICBURVhUVVJFX0NPTVBBUkVfRlVOQzogMHg4ODRELFxuICAgIENVUlJFTlRfUVVFUlk6IDB4ODg2NSxcbiAgICBRVUVSWV9SRVNVTFQ6IDB4ODg2NixcbiAgICBRVUVSWV9SRVNVTFRfQVZBSUxBQkxFOiAweDg4NjcsXG4gICAgU1RSRUFNX1JFQUQ6IDB4ODhFMSxcbiAgICBTVFJFQU1fQ09QWTogMHg4OEUyLFxuICAgIFNUQVRJQ19SRUFEOiAweDg4RTUsXG4gICAgU1RBVElDX0NPUFk6IDB4ODhFNixcbiAgICBEWU5BTUlDX1JFQUQ6IDB4ODhFOSxcbiAgICBEWU5BTUlDX0NPUFk6IDB4ODhFQSxcbiAgICBNQVhfRFJBV19CVUZGRVJTOiAweDg4MjQsXG4gICAgRFJBV19CVUZGRVIwOiAweDg4MjUsXG4gICAgRFJBV19CVUZGRVIxOiAweDg4MjYsXG4gICAgRFJBV19CVUZGRVIyOiAweDg4MjcsXG4gICAgRFJBV19CVUZGRVIzOiAweDg4MjgsXG4gICAgRFJBV19CVUZGRVI0OiAweDg4MjksXG4gICAgRFJBV19CVUZGRVI1OiAweDg4MkEsXG4gICAgRFJBV19CVUZGRVI2OiAweDg4MkIsXG4gICAgRFJBV19CVUZGRVI3OiAweDg4MkMsXG4gICAgRFJBV19CVUZGRVI4OiAweDg4MkQsXG4gICAgRFJBV19CVUZGRVI5OiAweDg4MkUsXG4gICAgRFJBV19CVUZGRVIxMDogMHg4ODJGLFxuICAgIERSQVdfQlVGRkVSMTE6IDB4ODgzMCxcbiAgICBEUkFXX0JVRkZFUjEyOiAweDg4MzEsXG4gICAgRFJBV19CVUZGRVIxMzogMHg4ODMyLFxuICAgIERSQVdfQlVGRkVSMTQ6IDB4ODgzMyxcbiAgICBEUkFXX0JVRkZFUjE1OiAweDg4MzQsXG4gICAgTUFYX0ZSQUdNRU5UX1VOSUZPUk1fQ09NUE9ORU5UUzogMHg4QjQ5LFxuICAgIE1BWF9WRVJURVhfVU5JRk9STV9DT01QT05FTlRTOiAweDhCNEEsXG4gICAgU0FNUExFUl8zRDogMHg4QjVGLFxuICAgIFNBTVBMRVJfMkRfU0hBRE9XOiAweDhCNjIsXG4gICAgRlJBR01FTlRfU0hBREVSX0RFUklWQVRJVkVfSElOVDogMHg4QjhCLFxuICAgIFBJWEVMX1BBQ0tfQlVGRkVSOiAweDg4RUIsXG4gICAgUElYRUxfVU5QQUNLX0JVRkZFUjogMHg4OEVDLFxuICAgIFBJWEVMX1BBQ0tfQlVGRkVSX0JJTkRJTkc6IDB4ODhFRCxcbiAgICBQSVhFTF9VTlBBQ0tfQlVGRkVSX0JJTkRJTkc6IDB4ODhFRixcbiAgICBGTE9BVF9NQVQyeDM6IDB4OEI2NSxcbiAgICBGTE9BVF9NQVQyeDQ6IDB4OEI2NixcbiAgICBGTE9BVF9NQVQzeDI6IDB4OEI2NyxcbiAgICBGTE9BVF9NQVQzeDQ6IDB4OEI2OCxcbiAgICBGTE9BVF9NQVQ0eDI6IDB4OEI2OSxcbiAgICBGTE9BVF9NQVQ0eDM6IDB4OEI2QSxcbiAgICBTUkdCOiAweDhDNDAsXG4gICAgU1JHQjg6IDB4OEM0MSxcbiAgICBTUkdCOF9BTFBIQTg6IDB4OEM0MyxcbiAgICBDT01QQVJFX1JFRl9UT19URVhUVVJFOiAweDg4NEUsXG4gICAgUkdCQTMyRjogMHg4ODE0LFxuICAgIFJHQjMyRjogMHg4ODE1LFxuICAgIFJHQkExNkY6IDB4ODgxQSxcbiAgICBSR0IxNkY6IDB4ODgxQixcbiAgICBWRVJURVhfQVRUUklCX0FSUkFZX0lOVEVHRVI6IDB4ODhGRCxcbiAgICBNQVhfQVJSQVlfVEVYVFVSRV9MQVlFUlM6IDB4ODhGRixcbiAgICBNSU5fUFJPR1JBTV9URVhFTF9PRkZTRVQ6IDB4ODkwNCxcbiAgICBNQVhfUFJPR1JBTV9URVhFTF9PRkZTRVQ6IDB4ODkwNSxcbiAgICBNQVhfVkFSWUlOR19DT01QT05FTlRTOiAweDhCNEIsXG4gICAgVEVYVFVSRV8yRF9BUlJBWTogMHg4QzFBLFxuICAgIFRFWFRVUkVfQklORElOR18yRF9BUlJBWTogMHg4QzFELFxuICAgIFIxMUZfRzExRl9CMTBGOiAweDhDM0EsXG4gICAgVU5TSUdORURfSU5UXzEwRl8xMUZfMTFGX1JFVjogMHg4QzNCLFxuICAgIFJHQjlfRTU6IDB4OEMzRCxcbiAgICBVTlNJR05FRF9JTlRfNV85XzlfOV9SRVY6IDB4OEMzRSxcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSX01PREU6IDB4OEM3RixcbiAgICBNQVhfVFJBTlNGT1JNX0ZFRURCQUNLX1NFUEFSQVRFX0NPTVBPTkVOVFM6IDB4OEM4MCxcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0tfVkFSWUlOR1M6IDB4OEM4MyxcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSX1NUQVJUOiAweDhDODQsXG4gICAgVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUl9TSVpFOiAweDhDODUsXG4gICAgVFJBTlNGT1JNX0ZFRURCQUNLX1BSSU1JVElWRVNfV1JJVFRFTjogMHg4Qzg4LFxuICAgIFJBU1RFUklaRVJfRElTQ0FSRDogMHg4Qzg5LFxuICAgIE1BWF9UUkFOU0ZPUk1fRkVFREJBQ0tfSU5URVJMRUFWRURfQ09NUE9ORU5UUzogMHg4QzhBLFxuICAgIE1BWF9UUkFOU0ZPUk1fRkVFREJBQ0tfU0VQQVJBVEVfQVRUUklCUzogMHg4QzhCLFxuICAgIElOVEVSTEVBVkVEX0FUVFJJQlM6IDB4OEM4QyxcbiAgICBTRVBBUkFURV9BVFRSSUJTOiAweDhDOEQsXG4gICAgVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUjogMHg4QzhFLFxuICAgIFRSQU5TRk9STV9GRUVEQkFDS19CVUZGRVJfQklORElORzogMHg4QzhGLFxuICAgIFJHQkEzMlVJOiAweDhENzAsXG4gICAgUkdCMzJVSTogMHg4RDcxLFxuICAgIFJHQkExNlVJOiAweDhENzYsXG4gICAgUkdCMTZVSTogMHg4RDc3LFxuICAgIFJHQkE4VUk6IDB4OEQ3QyxcbiAgICBSR0I4VUk6IDB4OEQ3RCxcbiAgICBSR0JBMzJJOiAweDhEODIsXG4gICAgUkdCMzJJOiAweDhEODMsXG4gICAgUkdCQTE2STogMHg4RDg4LFxuICAgIFJHQjE2STogMHg4RDg5LFxuICAgIFJHQkE4STogMHg4RDhFLFxuICAgIFJHQjhJOiAweDhEOEYsXG4gICAgUkVEX0lOVEVHRVI6IDB4OEQ5NCxcbiAgICBSR0JfSU5URUdFUjogMHg4RDk4LFxuICAgIFJHQkFfSU5URUdFUjogMHg4RDk5LFxuICAgIFNBTVBMRVJfMkRfQVJSQVk6IDB4OERDMSxcbiAgICBTQU1QTEVSXzJEX0FSUkFZX1NIQURPVzogMHg4REM0LFxuICAgIFNBTVBMRVJfQ1VCRV9TSEFET1c6IDB4OERDNSxcbiAgICBVTlNJR05FRF9JTlRfVkVDMjogMHg4REM2LFxuICAgIFVOU0lHTkVEX0lOVF9WRUMzOiAweDhEQzcsXG4gICAgVU5TSUdORURfSU5UX1ZFQzQ6IDB4OERDOCxcbiAgICBJTlRfU0FNUExFUl8yRDogMHg4RENBLFxuICAgIElOVF9TQU1QTEVSXzNEOiAweDhEQ0IsXG4gICAgSU5UX1NBTVBMRVJfQ1VCRTogMHg4RENDLFxuICAgIElOVF9TQU1QTEVSXzJEX0FSUkFZOiAweDhEQ0YsXG4gICAgVU5TSUdORURfSU5UX1NBTVBMRVJfMkQ6IDB4OEREMixcbiAgICBVTlNJR05FRF9JTlRfU0FNUExFUl8zRDogMHg4REQzLFxuICAgIFVOU0lHTkVEX0lOVF9TQU1QTEVSX0NVQkU6IDB4OERENCxcbiAgICBVTlNJR05FRF9JTlRfU0FNUExFUl8yRF9BUlJBWTogMHg4REQ3LFxuICAgIERFUFRIX0NPTVBPTkVOVDMyRjogMHg4Q0FDLFxuICAgIERFUFRIMzJGX1NURU5DSUw4OiAweDhDQUQsXG4gICAgRkxPQVRfMzJfVU5TSUdORURfSU5UXzI0XzhfUkVWOiAweDhEQUQsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9DT0xPUl9FTkNPRElORzogMHg4MjEwLFxuICAgIEZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfQ09NUE9ORU5UX1RZUEU6IDB4ODIxMSxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1JFRF9TSVpFOiAweDgyMTIsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9HUkVFTl9TSVpFOiAweDgyMTMsXG4gICAgRlJBTUVCVUZGRVJfQVRUQUNITUVOVF9CTFVFX1NJWkU6IDB4ODIxNCxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX0FMUEhBX1NJWkU6IDB4ODIxNSxcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX0RFUFRIX1NJWkU6IDB4ODIxNixcbiAgICBGUkFNRUJVRkZFUl9BVFRBQ0hNRU5UX1NURU5DSUxfU0laRTogMHg4MjE3LFxuICAgIEZSQU1FQlVGRkVSX0RFRkFVTFQ6IDB4ODIxOCxcbiAgICBVTlNJR05FRF9JTlRfMjRfODogMHg4NEZBLFxuICAgIERFUFRIMjRfU1RFTkNJTDg6IDB4ODhGMCxcbiAgICBVTlNJR05FRF9OT1JNQUxJWkVEOiAweDhDMTcsXG4gICAgRFJBV19GUkFNRUJVRkZFUl9CSU5ESU5HOiAweDhDQTYsXG4gICAgUkVBRF9GUkFNRUJVRkZFUjogMHg4Q0E4LFxuICAgIERSQVdfRlJBTUVCVUZGRVI6IDB4OENBOSxcbiAgICBSRUFEX0ZSQU1FQlVGRkVSX0JJTkRJTkc6IDB4OENBQSxcbiAgICBSRU5ERVJCVUZGRVJfU0FNUExFUzogMHg4Q0FCLFxuICAgIEZSQU1FQlVGRkVSX0FUVEFDSE1FTlRfVEVYVFVSRV9MQVlFUjogMHg4Q0Q0LFxuICAgIE1BWF9DT0xPUl9BVFRBQ0hNRU5UUzogMHg4Q0RGLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxOiAweDhDRTEsXG4gICAgQ09MT1JfQVRUQUNITUVOVDI6IDB4OENFMixcbiAgICBDT0xPUl9BVFRBQ0hNRU5UMzogMHg4Q0UzLFxuICAgIENPTE9SX0FUVEFDSE1FTlQ0OiAweDhDRTQsXG4gICAgQ09MT1JfQVRUQUNITUVOVDU6IDB4OENFNSxcbiAgICBDT0xPUl9BVFRBQ0hNRU5UNjogMHg4Q0U2LFxuICAgIENPTE9SX0FUVEFDSE1FTlQ3OiAweDhDRTcsXG4gICAgQ09MT1JfQVRUQUNITUVOVDg6IDB4OENFOCxcbiAgICBDT0xPUl9BVFRBQ0hNRU5UOTogMHg4Q0U5LFxuICAgIENPTE9SX0FUVEFDSE1FTlQxMDogMHg4Q0VBLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxMTogMHg4Q0VCLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxMjogMHg4Q0VDLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxMzogMHg4Q0VELFxuICAgIENPTE9SX0FUVEFDSE1FTlQxNDogMHg4Q0VFLFxuICAgIENPTE9SX0FUVEFDSE1FTlQxNTogMHg4Q0VGLFxuICAgIEZSQU1FQlVGRkVSX0lOQ09NUExFVEVfTVVMVElTQU1QTEU6IDB4OEQ1NixcbiAgICBNQVhfU0FNUExFUzogMHg4RDU3LFxuICAgIEhBTEZfRkxPQVQ6IDB4MTQwQixcbiAgICBSRzogMHg4MjI3LFxuICAgIFJHX0lOVEVHRVI6IDB4ODIyOCxcbiAgICBSODogMHg4MjI5LFxuICAgIFJHODogMHg4MjJCLFxuICAgIFIxNkY6IDB4ODIyRCxcbiAgICBSMzJGOiAweDgyMkUsXG4gICAgUkcxNkY6IDB4ODIyRixcbiAgICBSRzMyRjogMHg4MjMwLFxuICAgIFI4STogMHg4MjMxLFxuICAgIFI4VUk6IDB4ODIzMixcbiAgICBSMTZJOiAweDgyMzMsXG4gICAgUjE2VUk6IDB4ODIzNCxcbiAgICBSMzJJOiAweDgyMzUsXG4gICAgUjMyVUk6IDB4ODIzNixcbiAgICBSRzhJOiAweDgyMzcsXG4gICAgUkc4VUk6IDB4ODIzOCxcbiAgICBSRzE2STogMHg4MjM5LFxuICAgIFJHMTZVSTogMHg4MjNBLFxuICAgIFJHMzJJOiAweDgyM0IsXG4gICAgUkczMlVJOiAweDgyM0MsXG4gICAgVkVSVEVYX0FSUkFZX0JJTkRJTkc6IDB4ODVCNSxcbiAgICBSOF9TTk9STTogMHg4Rjk0LFxuICAgIFJHOF9TTk9STTogMHg4Rjk1LFxuICAgIFJHQjhfU05PUk06IDB4OEY5NixcbiAgICBSR0JBOF9TTk9STTogMHg4Rjk3LFxuICAgIFNJR05FRF9OT1JNQUxJWkVEOiAweDhGOUMsXG4gICAgQ09QWV9SRUFEX0JVRkZFUjogMHg4RjM2LFxuICAgIENPUFlfV1JJVEVfQlVGRkVSOiAweDhGMzcsXG4gICAgQ09QWV9SRUFEX0JVRkZFUl9CSU5ESU5HOiAweDhGMzYsXG4gICAgQ09QWV9XUklURV9CVUZGRVJfQklORElORzogMHg4RjM3LFxuICAgIFVOSUZPUk1fQlVGRkVSOiAweDhBMTEsXG4gICAgVU5JRk9STV9CVUZGRVJfQklORElORzogMHg4QTI4LFxuICAgIFVOSUZPUk1fQlVGRkVSX1NUQVJUOiAweDhBMjksXG4gICAgVU5JRk9STV9CVUZGRVJfU0laRTogMHg4QTJBLFxuICAgIE1BWF9WRVJURVhfVU5JRk9STV9CTE9DS1M6IDB4OEEyQixcbiAgICBNQVhfRlJBR01FTlRfVU5JRk9STV9CTE9DS1M6IDB4OEEyRCxcbiAgICBNQVhfQ09NQklORURfVU5JRk9STV9CTE9DS1M6IDB4OEEyRSxcbiAgICBNQVhfVU5JRk9STV9CVUZGRVJfQklORElOR1M6IDB4OEEyRixcbiAgICBNQVhfVU5JRk9STV9CTE9DS19TSVpFOiAweDhBMzAsXG4gICAgTUFYX0NPTUJJTkVEX1ZFUlRFWF9VTklGT1JNX0NPTVBPTkVOVFM6IDB4OEEzMSxcbiAgICBNQVhfQ09NQklORURfRlJBR01FTlRfVU5JRk9STV9DT01QT05FTlRTOiAweDhBMzMsXG4gICAgVU5JRk9STV9CVUZGRVJfT0ZGU0VUX0FMSUdOTUVOVDogMHg4QTM0LFxuICAgIEFDVElWRV9VTklGT1JNX0JMT0NLUzogMHg4QTM2LFxuICAgIFVOSUZPUk1fVFlQRTogMHg4QTM3LFxuICAgIFVOSUZPUk1fU0laRTogMHg4QTM4LFxuICAgIFVOSUZPUk1fQkxPQ0tfSU5ERVg6IDB4OEEzQSxcbiAgICBVTklGT1JNX09GRlNFVDogMHg4QTNCLFxuICAgIFVOSUZPUk1fQVJSQVlfU1RSSURFOiAweDhBM0MsXG4gICAgVU5JRk9STV9NQVRSSVhfU1RSSURFOiAweDhBM0QsXG4gICAgVU5JRk9STV9JU19ST1dfTUFKT1I6IDB4OEEzRSxcbiAgICBVTklGT1JNX0JMT0NLX0JJTkRJTkc6IDB4OEEzRixcbiAgICBVTklGT1JNX0JMT0NLX0RBVEFfU0laRTogMHg4QTQwLFxuICAgIFVOSUZPUk1fQkxPQ0tfQUNUSVZFX1VOSUZPUk1TOiAweDhBNDIsXG4gICAgVU5JRk9STV9CTE9DS19BQ1RJVkVfVU5JRk9STV9JTkRJQ0VTOiAweDhBNDMsXG4gICAgVU5JRk9STV9CTE9DS19SRUZFUkVOQ0VEX0JZX1ZFUlRFWF9TSEFERVI6IDB4OEE0NCxcbiAgICBVTklGT1JNX0JMT0NLX1JFRkVSRU5DRURfQllfRlJBR01FTlRfU0hBREVSOiAweDhBNDYsXG4gICAgSU5WQUxJRF9JTkRFWDogMHhGRkZGRkZGRixcbiAgICBNQVhfVkVSVEVYX09VVFBVVF9DT01QT05FTlRTOiAweDkxMjIsXG4gICAgTUFYX0ZSQUdNRU5UX0lOUFVUX0NPTVBPTkVOVFM6IDB4OTEyNSxcbiAgICBNQVhfU0VSVkVSX1dBSVRfVElNRU9VVDogMHg5MTExLFxuICAgIE9CSkVDVF9UWVBFOiAweDkxMTIsXG4gICAgU1lOQ19DT05ESVRJT046IDB4OTExMyxcbiAgICBTWU5DX1NUQVRVUzogMHg5MTE0LFxuICAgIFNZTkNfRkxBR1M6IDB4OTExNSxcbiAgICBTWU5DX0ZFTkNFOiAweDkxMTYsXG4gICAgU1lOQ19HUFVfQ09NTUFORFNfQ09NUExFVEU6IDB4OTExNyxcbiAgICBVTlNJR05BTEVEOiAweDkxMTgsXG4gICAgU0lHTkFMRUQ6IDB4OTExOSxcbiAgICBBTFJFQURZX1NJR05BTEVEOiAweDkxMUEsXG4gICAgVElNRU9VVF9FWFBJUkVEOiAweDkxMUIsXG4gICAgQ09ORElUSU9OX1NBVElTRklFRDogMHg5MTFDLFxuICAgIFdBSVRfRkFJTEVEOiAweDkxMUQsXG4gICAgU1lOQ19GTFVTSF9DT01NQU5EU19CSVQ6IDB4MDAwMDAwMDEsXG4gICAgVkVSVEVYX0FUVFJJQl9BUlJBWV9ESVZJU09SOiAweDg4RkUsXG4gICAgQU5ZX1NBTVBMRVNfUEFTU0VEOiAweDhDMkYsXG4gICAgQU5ZX1NBTVBMRVNfUEFTU0VEX0NPTlNFUlZBVElWRTogMHg4RDZBLFxuICAgIFNBTVBMRVJfQklORElORzogMHg4OTE5LFxuICAgIFJHQjEwX0EyVUk6IDB4OTA2RixcbiAgICBJTlRfMl8xMF8xMF8xMF9SRVY6IDB4OEQ5RixcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0s6IDB4OEUyMixcbiAgICBUUkFOU0ZPUk1fRkVFREJBQ0tfUEFVU0VEOiAweDhFMjMsXG4gICAgVFJBTlNGT1JNX0ZFRURCQUNLX0FDVElWRTogMHg4RTI0LFxuICAgIFRSQU5TRk9STV9GRUVEQkFDS19CSU5ESU5HOiAweDhFMjUsXG4gICAgVEVYVFVSRV9JTU1VVEFCTEVfRk9STUFUOiAweDkxMkYsXG4gICAgTUFYX0VMRU1FTlRfSU5ERVg6IDB4OEQ2QixcbiAgICBURVhUVVJFX0lNTVVUQUJMRV9MRVZFTFM6IDB4ODJERixcbiAgICBUSU1FT1VUX0lHTk9SRUQ6IC0xLFxuICAgIE1BWF9DTElFTlRfV0FJVF9USU1FT1VUX1dFQkdMOiAweDkyNDcsXG5cbiAgICAvLyBodHRwczovL3d3dy5raHJvbm9zLm9yZy9yZWdpc3RyeS93ZWJnbC9leHRlbnNpb25zL0VYVF9kaXNqb2ludF90aW1lcl9xdWVyeV93ZWJnbDIvXG4gICAgUVVFUllfQ09VTlRFUl9CSVRTX0VYVDogMHg4ODY0LFxuICAgIFRJTUVfRUxBUFNFRF9FWFQ6IDB4ODhCRixcbiAgICBUSU1FU1RBTVBfRVhUOiAweDhFMjgsXG4gICAgR1BVX0RJU0pPSU5UX0VYVDogMHg4RkJCLFxuXG4gICAgLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvZXh0ZW5zaW9ucy9XRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0Yy9cbiAgICBDT01QUkVTU0VEX1JHQl9TM1RDX0RYVDFfRVhUOiAweDgzRjAsXG4gICAgQ09NUFJFU1NFRF9SR0JBX1MzVENfRFhUMV9FWFQ6IDB4ODNGMSxcbiAgICBDT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQzX0VYVDogMHg4M0YyLFxuICAgIENPTVBSRVNTRURfUkdCQV9TM1RDX0RYVDVfRVhUOiAweDgzRjMsXG5cbiAgICAvLyBodHRwczovL3d3dy5raHJvbm9zLm9yZy9yZWdpc3RyeS93ZWJnbC9leHRlbnNpb25zL1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjX3NyZ2IvXG4gICAgQ09NUFJFU1NFRF9TUkdCX1MzVENfRFhUMV9FWFQ6IDB4OEM0QyxcbiAgICBDT01QUkVTU0VEX1NSR0JfQUxQSEFfUzNUQ19EWFQxX0VYVDogMHg4QzRELFxuICAgIENPTVBSRVNTRURfU1JHQl9BTFBIQV9TM1RDX0RYVDNfRVhUOiAweDhDNEUsXG4gICAgQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUNV9FWFQ6IDB4OEM0RixcblxuICAgIC8vIGh0dHBzOi8vd3d3Lmtocm9ub3Mub3JnL3JlZ2lzdHJ5L3dlYmdsL2V4dGVuc2lvbnMvV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0Yy9cbiAgICBDT01QUkVTU0VEX1IxMV9FQUM6IDB4OTI3MCxcbiAgICBDT01QUkVTU0VEX1NJR05FRF9SMTFfRUFDOiAweDkyNzEsXG4gICAgQ09NUFJFU1NFRF9SRzExX0VBQzogMHg5MjcyLFxuICAgIENPTVBSRVNTRURfU0lHTkVEX1JHMTFfRUFDOiAweDkyNzMsXG4gICAgQ09NUFJFU1NFRF9SR0I4X0VUQzI6IDB4OTI3NCxcbiAgICBDT01QUkVTU0VEX1NSR0I4X0VUQzI6IDB4OTI3NSxcbiAgICBDT01QUkVTU0VEX1JHQjhfUFVOQ0hUSFJPVUdIX0FMUEhBMV9FVEMyOiAweDkyNzYsXG4gICAgQ09NUFJFU1NFRF9TUkdCOF9QVU5DSFRIUk9VR0hfQUxQSEExX0VUQzI6IDB4OTI3NyxcbiAgICBDT01QUkVTU0VEX1JHQkE4X0VUQzJfRUFDOiAweDkyNzgsXG4gICAgQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfRVRDMl9FQUM6IDB4OTI3OSxcblxuICAgIC8vIGh0dHBzOi8vd3d3Lmtocm9ub3Mub3JnL3JlZ2lzdHJ5L3dlYmdsL2V4dGVuc2lvbnMvV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3B2cnRjL1xuICAgIENPTVBSRVNTRURfUkdCX1BWUlRDXzRCUFBWMV9JTUc6IDB4OEMwMCxcbiAgICBDT01QUkVTU0VEX1JHQl9QVlJUQ18yQlBQVjFfSU1HOiAweDhDMDEsXG4gICAgQ09NUFJFU1NFRF9SR0JBX1BWUlRDXzRCUFBWMV9JTUc6IDB4OEMwMixcbiAgICBDT01QUkVTU0VEX1JHQkFfUFZSVENfMkJQUFYxX0lNRzogMHg4QzAzLFxuXG4gICAgLy8gaHR0cHM6Ly93d3cua2hyb25vcy5vcmcvcmVnaXN0cnkvd2ViZ2wvZXh0ZW5zaW9ucy9XRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfYXN0Yy9cbiAgICBDT01QUkVTU0VEX1JHQkFfQVNUQ180eDRfS0hSOiAweDkzQjAsXG4gICAgQ09NUFJFU1NFRF9SR0JBX0FTVENfNXg0X0tIUjogMHg5M0IxLFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzV4NV9LSFI6IDB4OTNCMixcbiAgICBDT01QUkVTU0VEX1JHQkFfQVNUQ182eDVfS0hSOiAweDkzQjMsXG4gICAgQ09NUFJFU1NFRF9SR0JBX0FTVENfNng2X0tIUjogMHg5M0I0LFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzh4NV9LSFI6IDB4OTNCNSxcbiAgICBDT01QUkVTU0VEX1JHQkFfQVNUQ184eDZfS0hSOiAweDkzQjYsXG4gICAgQ09NUFJFU1NFRF9SR0JBX0FTVENfOHg4X0tIUjogMHg5M0I3LFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzEweDVfS0hSOiAweDkzQjgsXG4gICAgQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4Nl9LSFI6IDB4OTNCOSxcbiAgICBDT01QUkVTU0VEX1JHQkFfQVNUQ18xMHg4X0tIUjogMHg5M0JBLFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzEweDEwX0tIUjogMHg5M0JCLFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzEyeDEwX0tIUjogMHg5M0JDLFxuICAgIENPTVBSRVNTRURfUkdCQV9BU1RDXzEyeDEyX0tIUjogMHg5M0JELFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNHg0X0tIUjogMHg5M0QwLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNXg0X0tIUjogMHg5M0QxLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNXg1X0tIUjogMHg5M0QyLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNng1X0tIUjogMHg5M0QzLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNng2X0tIUjogMHg5M0Q0LFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg1X0tIUjogMHg5M0Q1LFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg2X0tIUjogMHg5M0Q2LFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg4X0tIUjogMHg5M0Q3LFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTB4NV9LSFI6IDB4OTNEOCxcbiAgICBDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEweDZfS0hSOiAweDkzRDksXG4gICAgQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg4X0tIUjogMHg5M0RBLFxuICAgIENPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTB4MTBfS0hSOiAweDkzREIsXG4gICAgQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMngxMF9LSFI6IDB4OTNEQyxcbiAgICBDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEyeDEyX0tIUjogMHg5M0RELFxuXG4gICAgVFlQRV9TSVpFOiB7XG4gICAgICAgIFtnbC5CWVRFXTogMSxcbiAgICAgICAgW2dsLlVOU0lHTkVEX0JZVEVdOiAxLFxuICAgICAgICBbZ2wuU0hPUlRdOiAyLFxuICAgICAgICBbZ2wuVU5TSUdORURfU0hPUlRdOiAyLFxuICAgICAgICBbZ2wuSU5UXTogNCxcbiAgICAgICAgW2dsLlVOU0lHTkVEX0lOVF06IDQsXG4gICAgICAgIFtnbC5GTE9BVF06IDRcbiAgICB9LFxuXG4gICAgV0VCR0xfSU5GTzoge1xuICAgICAgICBNQVhfVEVYVFVSRV9VTklUUzogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcbiAgICAgICAgTUFYX1VOSUZPUk1fQlVGRkVSUzogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9VTklGT1JNX0JVRkZFUl9CSU5ESU5HUylcbiAgICB9LFxuXG4gICAgRFVNTVlfT0JKRUNUOiB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDT05TVEFOVFM7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5jb25zdCBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUyA9IHtcbiAgICBbQ09OU1RBTlRTLlVOU0lHTkVEX0JZVEVdOiB7XG4gICAgICAgIFtDT05TVEFOVFMuUkVEXTogQ09OU1RBTlRTLlI4LFxuICAgICAgICBbQ09OU1RBTlRTLlJHXTogQ09OU1RBTlRTLlJHOCxcbiAgICAgICAgW0NPTlNUQU5UUy5SR0JdOiBDT05TVEFOVFMuUkdCOCxcbiAgICAgICAgW0NPTlNUQU5UUy5SR0JBXTogQ09OU1RBTlRTLlJHQkE4XG4gICAgfSxcblxuICAgIFtDT05TVEFOVFMuVU5TSUdORURfU0hPUlRdOiB7XG4gICAgICAgIFtDT05TVEFOVFMuREVQVEhfQ09NUE9ORU5UXTogQ09OU1RBTlRTLkRFUFRIX0NPTVBPTkVOVDE2XG4gICAgfSxcblxuICAgIFtDT05TVEFOVFMuRkxPQVRdOiB7XG4gICAgICAgIFtDT05TVEFOVFMuUkVEXTogQ09OU1RBTlRTLlIxNkYsXG4gICAgICAgIFtDT05TVEFOVFMuUkddOiBDT05TVEFOVFMuUkcxNkYsXG4gICAgICAgIFtDT05TVEFOVFMuUkdCXTogQ09OU1RBTlRTLlJHQjE2RixcbiAgICAgICAgW0NPTlNUQU5UUy5SR0JBXTogQ09OU1RBTlRTLlJHQkExNkYsXG4gICAgICAgIFtDT05TVEFOVFMuREVQVEhfQ09NUE9ORU5UXTogQ09OU1RBTlRTLkRFUFRIX0NPTVBPTkVOVDMyRlxuICAgIH0sXG5cbiAgICBDT01QUkVTU0VEX1RZUEVTOiB7fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUztcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG4vKipcbiAgICBXZWJHTCBzaGFkZXIuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7V2ViR0xTaGFkZXJ9IHNoYWRlciBUaGUgc2hhZGVyLlxuKi9cbmNsYXNzIFNoYWRlciB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZ2wsIHR5cGUsIHNvdXJjZSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgICAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy5zaGFkZXIsIHNvdXJjZSk7XG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIodGhpcy5zaGFkZXIpO1xuXG4gICAgICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHRoaXMuc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgICAgIGxldCBpLCBsaW5lcztcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHRoaXMuc2hhZGVyKSk7XG4gICAgICAgICAgICBsaW5lcyA9IHNvdXJjZS5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7aSArIDF9OiAke2xpbmVzW2ldfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERlbGV0ZSB0aGlzIHNoYWRlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1NoYWRlcn0gVGhlIFNoYWRlciBvYmplY3QuXG4gICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNoYWRlcikge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVTaGFkZXIodGhpcy5zaGFkZXIpO1xuICAgICAgICAgICAgdGhpcy5zaGFkZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhZGVyO1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGFyZWsgU2hlcmlmXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbi8qKlxuICAgIEdlbmVyaWMgcXVlcnkgb2JqZWN0LlxuXG4gICAgQGNsYXNzXG4gICAgQHByb3Age1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHQuXG4gICAgQHByb3Age1dlYkdMUXVlcnl9IHF1ZXJ5IFF1ZXJ5IG9iamVjdC5cbiAgICBAcHJvcCB7R0xFbnVtfSB0YXJnZXQgVGhlIHR5cGUgb2YgaW5mb3JtYXRpb24gYmVpbmcgcXVlcmllZC5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gYWN0aXZlIFdoZXRoZXIgb3Igbm90IGEgcXVlcnkgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgIEBwcm9wIHtBbnl9IHJlc3VsdCBUaGUgcmVzdWx0IG9mIHRoZSBxdWVyeSAob25seSBhdmFpbGFibGUgYWZ0ZXIgYSBjYWxsIHRvIHJlYWR5KCkgcmV0dXJucyB0cnVlKS4gXG4qL1xuY2xhc3MgUXVlcnkge1xuXG4gICAgY29uc3RydWN0b3IoZ2wsIHRhcmdldCkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMucXVlcnkgPSBnbC5jcmVhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCZWdpbiBhIHF1ZXJ5LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7UXVlcnl9IFRoZSBRdWVyeSBvYmplY3QuXG4gICAgKi9cbiAgICBiZWdpbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5nbC5iZWdpblF1ZXJ5KHRoaXMudGFyZ2V0LCB0aGlzLnF1ZXJ5KTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmQgYSBxdWVyeS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1F1ZXJ5fSBUaGUgUXVlcnkgb2JqZWN0LlxuICAgICovXG4gICAgZW5kKCkge1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmVuZFF1ZXJ5KHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDaGVjayBpZiBxdWVyeSByZXN1bHQgaXMgYXZhaWxhYmxlLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7Ym9vbGVhbn0gSWYgcmVzdWx0cyBhcmUgYXZhaWxhYmxlLlxuICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiB0aGlzLmdsLmdldFF1ZXJ5UGFyYW1ldGVyKHRoaXMucXVlcnksIHRoaXMuZ2wuUVVFUllfUkVTVUxUX0FWQUlMQUJMRSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBOb3RlKFRhcmVrKTogQ2FzdGluZyBiZWNhdXNlIEZGIGluY29ycmVjdGx5IHJldHVybnMgYm9vbGVhbnMuXG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDIyNzE0IFxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBOdW1iZXIodGhpcy5nbC5nZXRRdWVyeVBhcmFtZXRlcih0aGlzLnF1ZXJ5LCB0aGlzLmdsLlFVRVJZX1JFU1VMVCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERlbGV0ZSB0aGlzIHF1ZXJ5LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7UXVlcnl9IFRoZSBRdWVyeSBvYmplY3QuXG4gICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBBcHAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG4vKipcbiAgICBHbG9iYWwgUGljb0dMIG1vZHVsZS4gRm9yIGNvbnZlbmllbmNlLCBhbGwgV2ViR0wgZW51bXMgYXJlIHN0b3JlZFxuICAgIGFzIHByb3BlcnRpZXMgb2YgUGljb0dMIChlLmcuIFBpY29HTC5GTE9BVCwgUGljb0dMLk9ORV9NSU5VU19TUkNfQUxQSEEpLlxuXG4gICAgQG5hbWVzcGFjZSBQaWNvR0xcbiovXG5jb25zdCBQaWNvR0wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuUGljb0dMLnZlcnNpb24gPSBcIjAuOC44XCI7XG5cbi8qKlxuICAgIENyZWF0ZSBhIFBpY29HTCBhcHAuIFRoZSBhcHAgaXMgdGhlIHByaW1hcnkgZW50cnkgcG9pbnQgdG8gUGljb0dMLiBJdCBzdG9yZXNcbiAgICB0aGUgY2FudmFzLCB0aGUgV2ViR0wgY29udGV4dCBhbmQgYWxsIFdlYkdMIHN0YXRlLlxuXG4gICAgQGZ1bmN0aW9uIFBpY29HTC5jcmVhdGVBcHBcbiAgICBAcGFyYW0ge0RPTUVsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIG9uIHdoaWNoIHRvIGNyZWF0ZSB0aGUgV2ViR0wgY29udGV4dC5cbiAgICBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRBdHRyaWJ1dGVzXSBDb250ZXh0IGF0dHJpYnV0ZXMgdG8gcGFzcyB3aGVuIGNhbGxpbmcgZ2V0Q29udGV4dCgpLlxuICAgIEByZXR1cm4ge0FwcH0gTmV3IEFwcCBvYmplY3QuXG4qL1xuUGljb0dMLmNyZWF0ZUFwcCA9IGZ1bmN0aW9uKGNhbnZhcywgY29udGV4dEF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gbmV3IEFwcChjYW52YXMsIGNvbnRleHRBdHRyaWJ1dGVzKTtcbn07XG4gICAgXG5tb2R1bGUuZXhwb3J0cyA9IFBpY29HTDtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5jb25zdCBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5jb25zdCBDdWJlbWFwICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5jb25zdCBEcmF3Q2FsbCAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5jb25zdCBGcmFtZWJ1ZmZlciAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG5jb25zdCBQcm9ncmFtICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5jb25zdCBTaGFkZXIgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5jb25zdCBUZXh0dXJlICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuY29uc3QgVGltZXIgICAgICAgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbmNvbnN0IFRyYW5zZm9ybUZlZWRiYWNrICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5jb25zdCBVbmlmb3JtQnVmZmVyICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuY29uc3QgVmVydGV4QXJyYXkgICAgICAgICAgICAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbmNvbnN0IFZlcnRleEJ1ZmZlciAgICAgICAgICAgID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNik7XG5jb25zdCBRdWVyeSAgICAgICAgICAgICAgICAgICA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbi8qKlxuICAgIFByaW1hcnkgZW50cnkgcG9pbnQgdG8gUGljb0dMLiBBbiBhcHAgd2lsbCBzdG9yZSBhbGwgcGFydHMgb2YgdGhlIFdlYkdMXG4gICAgc3RhdGUuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7RE9NRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgb24gd2hpY2ggdGhpcyBhcHAgZHJhd2luZy5cbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIGRyYXdpbmcgc3VyZmFjZS5cbiAgICBAcHJvcCB7bnVtYmVyfSBoZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgZHJhd2luZyBzdXJmYWNlLlxuICAgIEBwcm9wIHtib29sZWFufSBmbG9hdFJlbmRlclRhcmdldHNFbmFibGVkIFdoZXRoZXIgdGhlIEVYVF9jb2xvcl9idWZmZXJfZmxvYXQgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXG4gICAgQHByb3Age2Jvb2xlYW59IGxpbmVhckZsb2F0VGV4dHVyZXNFbmFibGVkIFdoZXRoZXIgdGhlIE9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhciBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gczN0Y1RleHR1cmVzRW5hYmxlZCBXaGV0aGVyIHRoZSBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YyBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gczN0Y1NSR0JUZXh0dXJlc0VuYWJsZWQgV2hldGhlciB0aGUgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYiBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gZXRjVGV4dHVyZXNFbmFibGVkIFdoZXRoZXIgdGhlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9ldGMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXG4gICAgQHByb3Age2Jvb2xlYW59IGFzdGNUZXh0dXJlc0VuYWJsZWQgV2hldGhlciB0aGUgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2FzdGMgZXh0ZW5zaW9uIGlzIGVuYWJsZWQuXG4gICAgQHByb3Age2Jvb2xlYW59IHB2cnRjVGV4dHVyZXNFbmFibGVkIFdoZXRoZXIgdGhlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YyBleHRlbnNpb24gaXMgZW5hYmxlZC5cbiAgICBAcHJvcCB7T2JqZWN0fSBzdGF0ZSBUcmFja2VkIEdMIHN0YXRlLlxuICAgIEBwcm9wIHtHTEVudW19IGNsZWFyQml0cyBDdXJyZW50IGNsZWFyIG1hc2sgdG8gdXNlIHdpdGggY2xlYXIoKS4gICAgXG4qL1xuY2xhc3MgQXBwIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbnRleHRBdHRyaWJ1dGVzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbDJcIiwgY29udGV4dEF0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5nbC5kcmF3aW5nQnVmZmVyV2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5nbC5kcmF3aW5nQnVmZmVySGVpZ2h0O1xuICAgICAgICB0aGlzLnZpZXdwb3J0WCA9IDA7XG4gICAgICAgIHRoaXMudmlld3BvcnRZID0gMDtcbiAgICAgICAgdGhpcy52aWV3cG9ydFdpZHRoID0gMDtcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuY3VycmVudERyYXdDYWxscyA9IG51bGw7XG4gICAgICAgIHRoaXMuZW1wdHlGcmFnbWVudFNoYWRlciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHByb2dyYW06IG51bGwsXG4gICAgICAgICAgICB2ZXJ0ZXhBcnJheTogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zZm9ybUZlZWRiYWNrOiBudWxsLFxuICAgICAgICAgICAgYWN0aXZlVGV4dHVyZTogLTEsXG4gICAgICAgICAgICB0ZXh0dXJlczogbmV3IEFycmF5KENPTlNUQU5UUy5XRUJHTF9JTkZPLk1BWF9URVhUVVJFX1VOSVRTKSxcbiAgICAgICAgICAgIHVuaWZvcm1CdWZmZXJzOiBuZXcgQXJyYXkoQ09OU1RBTlRTLldFQkdMX0lORk8uTUFYX1VOSUZPUk1fQlVGRkVSUyksXG4gICAgICAgICAgICBmcmVlVW5pZm9ybUJ1ZmZlckJhc2VzOiBbXSxcbiAgICAgICAgICAgIGRyYXdGcmFtZWJ1ZmZlcjogbnVsbCxcbiAgICAgICAgICAgIHJlYWRGcmFtZWJ1ZmZlcjogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2xlYXJCaXRzID0gdGhpcy5nbC5DT0xPUl9CVUZGRVJfQklUIHwgdGhpcy5nbC5ERVBUSF9CVUZGRVJfQklUfCB0aGlzLmdsLlNURU5DSUxfQlVGRkVSX0JJVDtcblxuICAgICAgICB0aGlzLmNwdVRpbWUgPSAwO1xuICAgICAgICB0aGlzLmdwdVRpbWUgPSAwO1xuXG4gICAgICAgIC8vIEV4dGVuc2lvbnNcbiAgICAgICAgdGhpcy5mbG9hdFJlbmRlclRhcmdldHNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGluZWFyRmxvYXRUZXh0dXJlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zM3RjVGV4dHVyZXNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuczN0Y1NSR0JUZXh0dXJlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ldGNUZXh0dXJlc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hc3RjVGV4dHVyZXNFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHZydGNUZXh0dXJlc0VuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnZpZXdwb3J0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBjb2xvciBtYXNrIHRvIHNlbGVjdGl2ZWx5IGVuYWJsZSBvciBkaXNhYmxlIHBhcnRpY3VsYXJcbiAgICAgICAgY29sb3IgY2hhbm5lbHMgd2hpbGUgcmVuZGVyaW5nLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtib29sZWFufSByIFJlZCBjaGFubmVsLlxuICAgICAgICBAcGFyYW0ge2Jvb2xlYW59IGcgR3JlZW4gY2hhbm5lbC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBiIEJsdWUgY2hhbm5lbC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBhIEFscGhhIGNoYW5uZWwuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBjb2xvck1hc2sociwgZywgYiwgYSkge1xuICAgICAgICB0aGlzLmdsLmNvbG9yTWFzayhyLCBnLCBiLCBhKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBjbGVhciBjb2xvci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSByIFJlZCBjaGFubmVsLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gZyBHcmVlbiBjaGFubmVsLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gYiBCbHVlIGNoYW5uZWwuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBhIEFscGhhIGNoYW5uZWwuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBjbGVhckNvbG9yKHIsIGcsIGIsIGEpIHtcbiAgICAgICAgdGhpcy5nbC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIGNsZWFyIG1hc2sgYml0cyB0byB1c2Ugd2hlbiBjYWxsaW5nIGNsZWFyKCkuXG4gICAgICAgIEUuZy4gYXBwLmNsZWFyTWFzayhQaWNvR0wuQ09MT1JfQlVGRkVSX0JJVCkuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gbWFzayBCaXQgbWFzayBvZiBidWZmZXJzIHRvIGNsZWFyLlxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgY2xlYXJNYXNrKG1hc2spIHtcbiAgICAgICAgdGhpcy5jbGVhckJpdHMgPSBtYXNrO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDbGVhciB0aGUgY2FudmFzXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZ2wuY2xlYXIodGhpcy5jbGVhckJpdHMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGEgZHJhdyBmcmFtZWJ1ZmZlciB0byB0aGUgV2ViR0wgY29udGV4dC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7RnJhbWVidWZmZXJ9IGZyYW1lYnVmZmVyIFRoZSBGcmFtZWJ1ZmZlciBvYmplY3QgdG8gYmluZC5cbiAgICAgICAgQHNlZSBGcmFtZWJ1ZmZlclxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgZHJhd0ZyYW1lYnVmZmVyKGZyYW1lYnVmZmVyKSB7XG4gICAgICAgIGZyYW1lYnVmZmVyLmJpbmRGb3JEcmF3KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgYSByZWFkIGZyYW1lYnVmZmVyIHRvIHRoZSBXZWJHTCBjb250ZXh0LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtGcmFtZWJ1ZmZlcn0gZnJhbWVidWZmZXIgVGhlIEZyYW1lYnVmZmVyIG9iamVjdCB0byBiaW5kLlxuICAgICAgICBAc2VlIEZyYW1lYnVmZmVyXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICByZWFkRnJhbWVidWZmZXIoZnJhbWVidWZmZXIpIHtcbiAgICAgICAgZnJhbWVidWZmZXIuYmluZEZvclJlYWQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU3dpdGNoIGJhY2sgdG8gdGhlIGRlZmF1bHQgZnJhbWVidWZmZXIgZm9yIGRyYXdpbmcgKGkuZS4gZHJhdyB0byB0aGUgc2NyZWVuKS5cbiAgICAgICAgTm90ZSB0aGF0IHRoaXMgbWV0aG9kIHJlc2V0cyB0aGUgdmlld3BvcnQgdG8gbWF0Y2ggdGhlIGRlZmF1bHQgZnJhbWVidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgZGVmYXVsdERyYXdGcmFtZWJ1ZmZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZHJhd0ZyYW1lYnVmZmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkRSQVdfRlJBTUVCVUZGRVIsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kcmF3RnJhbWVidWZmZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFN3aXRjaCBiYWNrIHRvIHRoZSBkZWZhdWx0IGZyYW1lYnVmZmVyIGZvciByZWFkaW5nIChpLmUuIHJlYWQgZnJvbSB0aGUgc2NyZWVuKS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBkZWZhdWx0UmVhZEZyYW1lYnVmZmVyKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWFkRnJhbWVidWZmZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuUkVBRF9GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJlYWRGcmFtZWJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBkZXB0aCByYW5nZS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE1pbmltdW0gZGVwdGggdmFsdWUuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBmYXIgTWF4aW11bSBkZXB0aCB2YWx1ZS5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGRlcHRoUmFuZ2UobmVhciwgZmFyKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVwdGhSYW5nZShuZWFyLCBmYXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgZGVwdGggdGVzdGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBkZXB0aFRlc3QoKSB7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERpc2FibGUgZGVwdGggdGVzdGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBub0RlcHRoVGVzdCgpIHtcbiAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuREVQVEhfVEVTVCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEVuYWJsZSBvciBkaXNhYmxlIHdyaXRpbmcgdG8gdGhlIGRlcHRoIGJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7Qm9vbGVhbn0gbWFzayBUaGUgZGVwdGggbWFzay5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGRlcHRoTWFzayhtYXNrKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVwdGhNYXNrKG1hc2spO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIGRlcHRoIHRlc3QgZnVuY3Rpb24uIEUuZy4gYXBwLmRlcHRoRnVuYyhQaWNvR0wuTEVRVUFMKS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBmdW5jIFRoZSBkZXB0aCB0ZXN0aW5nIGZ1bmN0aW9uIHRvIHVzZS5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGRlcHRoRnVuYyhmdW5jKSB7XG4gICAgICAgIHRoaXMuZ2wuZGVwdGhGdW5jKGZ1bmMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgYmxlbmRpbmcuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgYmxlbmQoKSB7XG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlKHRoaXMuZ2wuQkxFTkQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEaXNhYmxlIGJsZW5kaW5nXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgbm9CbGVuZCgpIHtcbiAgICAgICAgdGhpcy5nbC5kaXNhYmxlKHRoaXMuZ2wuQkxFTkQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIGJsZW5kIGZ1bmN0aW9uLiBFLmcuIGFwcC5ibGVuZEZ1bmMoUGljb0dMLk9ORSwgUGljb0dMLk9ORV9NSU5VU19TUkNfQUxQSEEpLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IHNyYyBUaGUgc291cmNlIGJsZW5kaW5nIHdlaWdodC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IGRlc3QgVGhlIGRlc3RpbmF0aW9uIGJsZW5kaW5nIHdlaWdodC5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGJsZW5kRnVuYyhzcmMsIGRlc3QpIHtcbiAgICAgICAgdGhpcy5nbC5ibGVuZEZ1bmMoc3JjLCBkZXN0KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBibGVuZCBmdW5jdGlvbiwgd2l0aCBzZXBhcmF0ZSB3ZWlnaHRpbmcgZm9yIGNvbG9yIGFuZCBhbHBoYSBjaGFubmVscy5cbiAgICAgICAgRS5nLiBhcHAuYmxlbmRGdW5jU2VwYXJhdGUoUGljb0dMLk9ORSwgUGljb0dMLk9ORV9NSU5VU19TUkNfQUxQSEEsIFBpY29HTC5PTkUsIFBpY29HTC5PTkUpLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IGNzcmMgVGhlIHNvdXJjZSBibGVuZGluZyB3ZWlnaHQgZm9yIHRoZSBSR0IgY2hhbm5lbHMuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBjZGVzdCBUaGUgZGVzdGluYXRpb24gYmxlbmRpbmcgd2VpZ2h0IGZvciB0aGUgUkdCIGNoYW5uZWxzLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gYXNyYyBUaGUgc291cmNlIGJsZW5kaW5nIHdlaWdodCBmb3IgdGhlIGFscGhhIGNoYW5uZWwuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBhZGVzdCBUaGUgZGVzdGluYXRpb24gYmxlbmRpbmcgd2VpZ2h0IGZvciB0aGUgYWxwaGEgY2hhbm5lbC5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGJsZW5kRnVuY1NlcGFyYXRlKGNzcmMsIGNkZXN0LCBhc3JjLCBhZGVzdCkge1xuICAgICAgICB0aGlzLmdsLmJsZW5kRnVuY1NlcGFyYXRlKGNzcmMsIGNkZXN0LCBhc3JjLCBhZGVzdCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEVuYWJsZSBzdGVuY2lsIHRlc3RpbmcuXG4gICAgICAgIE5PVEU6IE9ubHkgd29ya3MgaWYgeyBzdGVuY2lsOiB0cnVlIH0gcGFzc2VkIGFzIGFcbiAgICAgICAgY29udGV4dCBhdHRyaWJ1dGUgd2hlbiBjcmVhdGluZyB0aGUgQXBwIVxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHN0ZW5jaWxUZXN0KCkge1xuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLlNURU5DSUxfVEVTVCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERpc2FibGUgc3RlbmNpbCB0ZXN0aW5nLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIG5vU3RlbmNpbFRlc3QoKSB7XG4gICAgICAgIHRoaXMuZ2wuZGlzYWJsZSh0aGlzLmdsLlNURU5DSUxfVEVTVCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgICAgRW5hYmxlIHNjaXNzb3IgdGVzdGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBzY2lzc29yVGVzdCgpIHtcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5TQ0lTU09SX1RFU1QpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEaXNhYmxlIHNjaXNzb3IgdGVzdGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBub1NjaXNzb3JUZXN0KCkge1xuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5TQ0lTU09SX1RFU1QpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEZWZpbmUgdGhlIHNjaXNzb3IgYm94LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHNjaXNzb3IoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmdsLnNjaXNzb3IoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCB0aGUgYml0bWFzayB0byB1c2UgZm9yIHRlc3RlZCBzdGVuY2lsIHZhbHVlcy5cbiAgICAgICAgRS5nLiBhcHAuc3RlbmNpbE1hc2soMHhGRikuXG4gICAgICAgIE5PVEU6IE9ubHkgd29ya3MgaWYgeyBzdGVuY2lsOiB0cnVlIH0gcGFzc2VkIGFzIGFcbiAgICAgICAgY29udGV4dCBhdHRyaWJ1dGUgd2hlbiBjcmVhdGluZyB0aGUgQXBwIVxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IG1hc2sgVGhlIG1hc2sgdmFsdWUuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG5cbiAgICAqL1xuICAgIHN0ZW5jaWxNYXNrKG1hc2spIHtcbiAgICAgICAgdGhpcy5nbC5zdGVuY2lsTWFzayhtYXNrKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBiaXRtYXNrIHRvIHVzZSBmb3IgdGVzdGVkIHN0ZW5jaWwgdmFsdWVzIGZvciBhIHBhcnRpY3VsYXIgZmFjZSBvcmllbnRhdGlvbi5cbiAgICAgICAgRS5nLiBhcHAuc3RlbmNpbE1hc2tTZXBhcmF0ZShQaWNvR0wuRlJPTlQsIDB4RkYpLlxuICAgICAgICBOT1RFOiBPbmx5IHdvcmtzIGlmIHsgc3RlbmNpbDogdHJ1ZSB9IHBhc3NlZCBhcyBhXG4gICAgICAgIGNvbnRleHQgYXR0cmlidXRlIHdoZW4gY3JlYXRpbmcgdGhlIEFwcCFcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBmYWNlIFRoZSBmYWNlIG9yaWVudGF0aW9uIHRvIGFwcGx5IHRoZSBtYXNrIHRvLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gbWFzayBUaGUgbWFzayB2YWx1ZS5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHN0ZW5jaWxNYXNrU2VwYXJhdGUoZmFjZSwgbWFzaykge1xuICAgICAgICB0aGlzLmdsLnN0ZW5jaWxNYXNrU2VwYXJhdGUoZmFjZSwgbWFzayk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCB0aGUgc3RlbmNpbCBmdW5jdGlvbiBhbmQgcmVmZXJlbmNlIHZhbHVlLlxuICAgICAgICBFLmcuIGFwcC5zdGVuY2lsRnVuYyhQaWNvR0wuRVFVQUwsIDEsIDB4RkYpLlxuICAgICAgICBOT1RFOiBPbmx5IHdvcmtzIGlmIHsgc3RlbmNpbDogdHJ1ZSB9IHBhc3NlZCBhcyBhXG4gICAgICAgIGNvbnRleHQgYXR0cmlidXRlIHdoZW4gY3JlYXRpbmcgdGhlIEFwcCFcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBmdW5jIFRoZSB0ZXN0aW5nIGZ1bmN0aW9uLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gcmVmIFRoZSByZWZlcmVuY2UgdmFsdWUuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBtYXNrIFRoZSBiaXRtYXNrIHRvIHVzZSBhZ2FpbnN0IHRlc3RlZCB2YWx1ZXMgYmVmb3JlIGFwcGx5aW5nXG4gICAgICAgICAgICB0aGUgc3RlbmNpbCBmdW5jdGlvbi5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHN0ZW5jaWxGdW5jKGZ1bmMsIHJlZiwgbWFzaykge1xuICAgICAgICB0aGlzLmdsLnN0ZW5jaWxGdW5jKGZ1bmMsIHJlZiwgbWFzayk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCB0aGUgc3RlbmNpbCBmdW5jdGlvbiBhbmQgcmVmZXJlbmNlIHZhbHVlIGZvciBhIHBhcnRpY3VsYXIgZmFjZSBvcmllbnRhdGlvbi5cbiAgICAgICAgRS5nLiBhcHAuc3RlbmNpbEZ1bmNTZXBhcmF0ZShQaWNvR0wuRlJPTlQsIFBpY29HTC5FUVVBTCwgMSwgMHhGRikuXG4gICAgICAgIE5PVEU6IE9ubHkgd29ya3MgaWYgeyBzdGVuY2lsOiB0cnVlIH0gcGFzc2VkIGFzIGFcbiAgICAgICAgY29udGV4dCBhdHRyaWJ1dGUgd2hlbiBjcmVhdGluZyB0aGUgQXBwIVxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IGZhY2UgVGhlIGZhY2Ugb3JpZW50YXRpb24gdG8gYXBwbHkgdGhlIGZ1bmN0aW9uIHRvLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gZnVuYyBUaGUgdGVzdGluZyBmdW5jdGlvbi5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHJlZiBUaGUgcmVmZXJlbmNlIHZhbHVlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gbWFzayBUaGUgYml0bWFzayB0byB1c2UgYWdhaW5zdCB0ZXN0ZWQgdmFsdWVzIGJlZm9yZSBhcHBseWluZ1xuICAgICAgICAgICAgdGhlIHN0ZW5jaWwgZnVuY3Rpb24uXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBzdGVuY2lsRnVuY1NlcGFyYXRlKGZhY2UsIGZ1bmMsIHJlZiwgbWFzaykge1xuICAgICAgICB0aGlzLmdsLnN0ZW5jaWxGdW5jU2VwYXJhdGUoZmFjZSwgZnVuYywgcmVmLCBtYXNrKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBvcGVyYXRpb25zIGZvciB1cGRhdGluZyBzdGVuY2lsIGJ1ZmZlciB2YWx1ZXMuXG4gICAgICAgIEUuZy4gYXBwLnN0ZW5jaWxPcChQaWNvR0wuS0VFUCwgUGljb0dMLktFRVAsIFBpY29HTC5SRVBMQUNFKS5cbiAgICAgICAgTk9URTogT25seSB3b3JrcyBpZiB7IHN0ZW5jaWw6IHRydWUgfSBwYXNzZWQgYXMgYVxuICAgICAgICBjb250ZXh0IGF0dHJpYnV0ZSB3aGVuIGNyZWF0aW5nIHRoZSBBcHAhXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gc3RlbmNpbEZhaWwgT3BlcmF0aW9uIHRvIGFwcGx5IGlmIHRoZSBzdGVuY2lsIHRlc3QgZmFpbHMuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBkZXB0aEZhaWwgT3BlcmF0aW9uIHRvIGFwcGx5IGlmIHRoZSBkZXB0aCB0ZXN0IGZhaWxzLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gcGFzcyBPcGVyYXRpb24gdG8gYXBwbHkgaWYgdGhlIGJvdGggdGhlIGRlcHRoIGFuZCBzdGVuY2lsIHRlc3RzIHBhc3MuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBzdGVuY2lsT3Aoc3RlbmNpbEZhaWwsIGRlcHRoRmFpbCwgcGFzcykge1xuICAgICAgICB0aGlzLmdsLnN0ZW5jaWxPcChzdGVuY2lsRmFpbCwgZGVwdGhGYWlsLCBwYXNzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBvcGVyYXRpb25zIGZvciB1cGRhdGluZyBzdGVuY2lsIGJ1ZmZlciB2YWx1ZXMgZm9yIGEgcGFydGljdWxhciBmYWNlIG9yaWVudGF0aW9uLlxuICAgICAgICBFLmcuIGFwcC5zdGVuY2lsT3BTZXBhcmF0ZShQaWNvR0wuRlJPTlQsIFBpY29HTC5LRUVQLCBQaWNvR0wuS0VFUCwgUGljb0dMLlJFUExBQ0UpLlxuICAgICAgICBOT1RFOiBPbmx5IHdvcmtzIGlmIHsgc3RlbmNpbDogdHJ1ZSB9IHBhc3NlZCBhcyBhXG4gICAgICAgIGNvbnRleHQgYXR0cmlidXRlIHdoZW4gY3JlYXRpbmcgdGhlIEFwcCFcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBmYWNlIFRoZSBmYWNlIG9yaWVudGF0aW9uIHRvIGFwcGx5IHRoZSBvcGVyYXRpb25zIHRvLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gc3RlbmNpbEZhaWwgT3BlcmF0aW9uIHRvIGFwcGx5IGlmIHRoZSBzdGVuY2lsIHRlc3QgZmFpbHMuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBkZXB0aEZhaWwgT3BlcmF0aW9uIHRvIGFwcGx5IGlmIHRoZSBkZXB0aCB0ZXN0IGZhaWxzLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gcGFzcyBPcGVyYXRpb24gdG8gYXBwbHkgaWYgdGhlIGJvdGggdGhlIGRlcHRoIGFuZCBzdGVuY2lsIHRlc3RzIHBhc3MuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBzdGVuY2lsT3BTZXBhcmF0ZShmYWNlLCBzdGVuY2lsRmFpbCwgZGVwdGhGYWlsLCBwYXNzKSB7XG4gICAgICAgIHRoaXMuZ2wuc3RlbmNpbE9wU2VwYXJhdGUoZmFjZSwgc3RlbmNpbEZhaWwsIGRlcHRoRmFpbCwgcGFzcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEVuYWJsZSByYXN0ZXJpemF0aW9uIHN0ZXAuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgcmFzdGVyaXplKCkge1xuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5SQVNURVJJWkVSX0RJU0NBUkQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBEaXNhYmxlIHJhc3Rlcml6YXRpb24gc3RlcC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBub1Jhc3Rlcml6ZSgpIHtcbiAgICAgICAgdGhpcy5nbC5lbmFibGUodGhpcy5nbC5SQVNURVJJWkVSX0RJU0NBUkQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgYmFja2ZhY2UgY3VsbGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBjdWxsQmFja2ZhY2VzKCkge1xuICAgICAgICB0aGlzLmdsLmVuYWJsZSh0aGlzLmdsLkNVTExfRkFDRSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERpc2FibGUgYmFja2ZhY2UgY3VsbGluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBkcmF3QmFja2ZhY2VzKCkge1xuICAgICAgICB0aGlzLmdsLmRpc2FibGUodGhpcy5nbC5DVUxMX0ZBQ0UpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgdGhlIEVYVF9jb2xvcl9idWZmZXJfZmxvYXQgZXh0ZW5zaW9uLiBBbGxvd3MgZm9yIGNyZWF0aW5nIGZsb2F0IHRleHR1cmVzIGFzXG4gICAgICAgIHJlbmRlciB0YXJnZXRzIG9uIEZyYW1lQnVmZmVyIG9iamVjdHMuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAc2VlIEZyYW1lYnVmZmVyXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBmbG9hdFJlbmRlclRhcmdldHMoKSB7XG4gICAgICAgIHRoaXMuZmxvYXRSZW5kZXJUYXJnZXRzRW5hYmxlZCA9ICEhdGhpcy5nbC5nZXRFeHRlbnNpb24oXCJFWFRfY29sb3JfYnVmZmVyX2Zsb2F0XCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgdGhlIE9FU190ZXh0dXJlX2Zsb2F0X2xpbmVhciBleHRlbnNpb24uIEFsbG93cyBmb3IgbGluZWFyIGJsZW5kaW5nIG9uIGZsb2F0IHRleHR1cmVzLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHNlZSBGcmFtZWJ1ZmZlclxuICAgICAgICBAcmV0dXJuIHtBcHB9IFRoZSBBcHAgb2JqZWN0LlxuICAgICovXG4gICAgbGluZWFyRmxvYXRUZXh0dXJlcygpIHtcbiAgICAgICAgdGhpcy5saW5lYXJGbG9hdFRleHR1cmVzRW5hYmxlZCA9ICEhdGhpcy5nbC5nZXRFeHRlbnNpb24oXCJPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXJcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgICAgRW5hYmxlIHRoZSBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YyBhbmQgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYiBleHRlbnNpb25zLCB3aGljaCBcbiAgICAgICAgYWxsb3cgdGhlIGZvbGxvd2luZyBlbnVtcyB0byBiZSB1c2VkIGFzIHRleHR1cmUgZm9ybWF0czpcblxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQl9TM1RDX0RYVDFfRVhUXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQxX0VYVFxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9SR0JBX1MzVENfRFhUM19FWFRcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCQV9TM1RDX0RYVDVfRVhUXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0JfUzNUQ19EWFQxX0VYVFxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUMV9FWFRcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQl9BTFBIQV9TM1RDX0RYVDNfRVhUXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0JfQUxQSEFfUzNUQ19EWFQ1X0VYVFxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHMzdGNUZXh0dXJlcygpIHtcbiAgICAgICAgbGV0IGV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNcIik7XG4gICAgICAgIHRoaXMuczN0Y1RleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuczN0Y1RleHR1cmVzRW5hYmxlZCkge1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JfUzNUQ19EWFQxX0VYVF0gID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9TM1RDX0RYVDFfRVhUXSA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQzX0VYVF0gPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX1MzVENfRFhUNV9FWFRdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYlwiKTtcbiAgICAgICAgdGhpcy5zM3RjU1JHQlRleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuczN0Y1NSR0JUZXh0dXJlc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQl9TM1RDX0RYVDFfRVhUXSAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0JfQUxQSEFfUzNUQ19EWFQxX0VYVF0gPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUM19FWFRdID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQl9BTFBIQV9TM1RDX0RYVDVfRVhUXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRW5hYmxlIHRoZSBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjIGV4dGVuc2lvbiwgd2hpY2ggYWxsb3dzIHRoZSBmb2xsb3dpbmcgZW51bXMgdG9cbiAgICAgICAgYmUgdXNlZCBhcyB0ZXh0dXJlIGZvcm1hdHM6XG4gICAgICAgIFxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1IxMV9FQUNcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU0lHTkVEX1IxMV9FQUNcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkcxMV9FQUNcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU0lHTkVEX1JHMTFfRUFDXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQjhfRVRDMlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9FVEMyXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQjhfUFVOQ0hUSFJPVUdIX0FMUEhBMV9FVEMyXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X1BVTkNIVEhST1VHSF9BTFBIQTFfRVRDMlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9SR0JBOF9FVEMyX0VBQ1xuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfRVRDMl9FQUNcbiAgICAgICAgPC91bD5cblxuICAgICAgICBOb3RlIHRoYXQgd2hpbGUgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0YzEgaXMgbm90IGVuYWJsZWQgYnkgdGhpcyBtZXRob2QsXG4gICAgICAgIEVUQzEgdGV4dHVyZXMgY2FuIGJlIGxvYWRlZCB1c2luZyBDT01QUkVTU0VEX1JHQjhfRVRDMiBhcyB0aGUgZm9ybWF0LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGV0Y1RleHR1cmVzKCkge1xuICAgICAgICBsZXQgZXh0ID0gdGhpcy5nbC5nZXRFeHRlbnNpb24oXCJXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjXCIpO1xuICAgICAgICB0aGlzLmV0Y1RleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuXG4gICAgICAgIGlmICh0aGlzLmV0Y1RleHR1cmVzRW5hYmxlZCkge1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SMTFfRUFDXSAgICAgICAgICAgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU0lHTkVEX1IxMV9FQUNdICAgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHMTFfRUFDXSAgICAgICAgICAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TSUdORURfUkcxMV9FQUNdICAgICAgICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCOF9FVEMyXSAgICAgICAgICAgICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0VUQzJdICAgICAgICAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0I4X1BVTkNIVEhST1VHSF9BTFBIQTFfRVRDMl0gID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfUFVOQ0hUSFJPVUdIX0FMUEhBMV9FVEMyXSA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkE4X0VUQzJfRUFDXSAgICAgICAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfRVRDMl9FQUNdICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgdGhlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9hc3RjIGV4dGVuc2lvbiwgd2hpY2ggYWxsb3dzIHRoZSBmb2xsb3dpbmcgZW51bXMgdG9cbiAgICAgICAgYmUgdXNlZCBhcyB0ZXh0dXJlIGZvcm1hdHM6XG4gICAgICAgIFxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ180eDRfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ181eDRfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ181eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ182eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ182eDZfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ184eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ184eDZfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ184eDhfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ18xMHg1X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4Nl9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCQV9BU1RDXzEweDhfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfQVNUQ18xMHgxMF9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCQV9BU1RDXzEyeDEwX0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9SR0JBX0FTVENfMTJ4MTJfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzR4NF9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNXg0X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ181eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzZ4NV9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNng2X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ184eDVfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzh4Nl9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg4X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg1X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg2X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg4X0tIUlxuICAgICAgICAgIDxsaT5QaWNvR0wuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHgxMF9LSFJcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTJ4MTBfS0hSXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEyeDEyX0tIUlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIGFzdGNUZXh0dXJlcygpIHtcbiAgICAgICAgbGV0IGV4dCA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2FzdGNcIik7XG4gICAgICAgIHRoaXMuYXN0Y1RleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuXG4gICAgICAgIGlmICh0aGlzLmFzdGNUZXh0dXJlc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzR4NF9LSFJdICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ181eDRfS0hSXSAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX0FTVENfNXg1X0tIUl0gICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzZ4NV9LSFJdICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ182eDZfS0hSXSAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX0FTVENfOHg1X0tIUl0gICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzh4Nl9LSFJdICAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ184eDhfS0hSXSAgICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4NV9LSFJdICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzEweDZfS0hSXSAgICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ18xMHg4X0tIUl0gICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4MTBfS0hSXSAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9BU1RDXzEyeDEwX0tIUl0gICAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfQVNUQ18xMngxMl9LSFJdICAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ180eDRfS0hSXSAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNXg0X0tIUl0gICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzV4NV9LSFJdICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ182eDVfS0hSXSAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfNng2X0tIUl0gICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzh4NV9LSFJdICAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ184eDZfS0hSXSAgID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfOHg4X0tIUl0gICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEweDVfS0hSXSAgPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg2X0tIUl0gID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTB4OF9LSFJdICA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEweDEwX0tIUl0gPSB0cnVlO1xuICAgICAgICAgICAgVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMuQ09NUFJFU1NFRF9UWVBFU1tDT05TVEFOVFMuQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMngxMF9LSFJdID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTJ4MTJfS0hSXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBFbmFibGUgdGhlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YyBleHRlbnNpb24sIHdoaWNoIGFsbG93cyB0aGUgZm9sbG93aW5nIGVudW1zIHRvXG4gICAgICAgIGJlIHVzZWQgYXMgdGV4dHVyZSBmb3JtYXRzOlxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCX1BWUlRDXzRCUFBWMV9JTUdcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCX1BWUlRDXzJCUFBWMV9JTUdcbiAgICAgICAgICA8bGk+UGljb0dMLkNPTVBSRVNTRURfUkdCQV9QVlJUQ180QlBQVjFfSU1HXG4gICAgICAgICAgPGxpPlBpY29HTC5DT01QUkVTU0VEX1JHQkFfUFZSVENfMkJQUFYxX0lNR1xuICAgICAgICA8L3VsPlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHB2cnRjVGV4dHVyZXMoKSB7XG4gICAgICAgIGxldCBleHQgPSB0aGlzLmdsLmdldEV4dGVuc2lvbihcIldFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0Y1wiKTtcbiAgICAgICAgdGhpcy5wdnJ0Y1RleHR1cmVzRW5hYmxlZCA9ICEhZXh0O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucHZydGNUZXh0dXJlc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCX1BWUlRDXzRCUFBWMV9JTUddID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCX1BWUlRDXzJCUFBWMV9JTUddID0gdHJ1ZTtcbiAgICAgICAgICAgIFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTLkNPTVBSRVNTRURfVFlQRVNbQ09OU1RBTlRTLkNPTVBSRVNTRURfUkdCQV9QVlJUQ180QlBQVjFfSU1HXSA9IHRydWU7XG4gICAgICAgICAgICBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW0NPTlNUQU5UUy5DT01QUkVTU0VEX1JHQkFfUFZSVENfMkJQUFYxX0lNR10gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFJlYWQgYSBwaXhlbCdzIGNvbG9yIHZhbHVlIGZyb20gdGhlIGN1cnJlbnRseS1ib3VuZCBmcmFtZWJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHBpeGVsLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0geSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBwaXhlbC5cbiAgICAgICAgQHBhcmFtIHtBcnJheUJ1ZmZlclZpZXd9IG91dENvbG9yIFR5cGVkIGFycmF5IHRvIHN0b3JlIHRoZSBwaXhlbCdzIGNvbG9yLlxuICAgICAgICBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIE9wdGlvbnMuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy50eXBlPVVOU0lHTkVEX0JZVEVdIFR5cGUgb2YgZGF0YSBzdG9yZWQgaW4gdGhlIHJlYWQgZnJhbWVidWZmZXIuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5mb3JtYXQ9UkdCQV0gUmVhZCBmcmFtZWJ1ZmZlciBkYXRhIGZvcm1hdC5cbiAgICAgICAgQHJldHVybiB7QXBwfSBUaGUgQXBwIG9iamVjdC5cbiAgICAqL1xuICAgIHJlYWRQaXhlbCh4LCB5LCBvdXRDb2xvciwgb3B0aW9ucyA9IENPTlNUQU5UUy5EVU1NWV9PQkpFQ1QpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGZvcm1hdCA9IENPTlNUQU5UUy5SR0JBLFxuICAgICAgICAgICAgdHlwZSA9IENPTlNUQU5UUy5VTlNJR05FRF9CWVRFICAgIFxuICAgICAgICB9ID0gb3B0aW9ucztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2wucmVhZFBpeGVscyh4LCB5LCAxLCAxLCBmb3JtYXQsIHR5cGUsIG91dENvbG9yKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSB2aWV3cG9ydC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSB4IExlZnQgYm91bmQgb2YgdGhlIHZpZXdwb3J0IHJlY3RhbmdsZS5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHkgTG93ZXIgYm91bmQgb2YgdGhlIHZpZXdwb3J0IHJlY3RhbmdsZS5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFdpZHRoIG9mIHRoZSB2aWV3cG9ydCByZWN0YW5nbGUuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCByZWN0YW5nbGUuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICB2aWV3cG9ydCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld3BvcnRXaWR0aCAhPT0gd2lkdGggfHwgdGhpcy52aWV3cG9ydEhlaWdodCAhPT0gaGVpZ2h0IHx8XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cG9ydFggIT09IHggfHwgdGhpcy52aWV3cG9ydFkgIT09IHkpIHtcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRYID0geDtcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRZID0geTtcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuZ2wudmlld3BvcnQoeCwgeSwgdGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLnZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIHZpZXdwb3J0IHRvIHRoZSBmdWxsIGNhbnZhcy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICBkZWZhdWx0Vmlld3BvcnQoKSB7XG4gICAgICAgIHRoaXMudmlld3BvcnQoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBSZXNpemUgdGhlIGRyYXdpbmcgc3VyZmFjZS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgbmV3IGNhbnZhcyB3aWR0aC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUaGUgbmV3IGNhbnZhcyBoZWlnaHQuXG4gICAgICAgIEByZXR1cm4ge0FwcH0gVGhlIEFwcCBvYmplY3QuXG4gICAgKi9cbiAgICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZ2wuZHJhd2luZ0J1ZmZlcldpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZ2wuZHJhd2luZ0J1ZmZlckhlaWdodDtcbiAgICAgICAgdGhpcy52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAgICBDcmVhdGUgYSBwcm9ncmFtLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtTaGFkZXJ8c3RyaW5nfSB2ZXJ0ZXhTaGFkZXIgVmVydGV4IHNoYWRlciBvYmplY3Qgb3Igc291cmNlIGNvZGUuXG4gICAgICAgIEBwYXJhbSB7U2hhZGVyfHN0cmluZ30gZnJhZ21lbnRTaGFkZXIgRnJhZ21lbnQgc2hhZGVyIG9iamVjdCBvciBzb3VyY2UgY29kZS5cbiAgICAgICAgQHBhcmFtIHtBcnJheX0gW3hmb3JtRmVlZGJhY2tWYXJzXSBUcmFuc2Zvcm0gZmVlZGJhY2sgdmFyeWluZ3MuXG4gICAgICAgIEByZXR1cm4ge1Byb2dyYW19IE5ldyBQcm9ncmFtIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVByb2dyYW0odnNTb3VyY2UsIGZzU291cmNlLCB4Zm9ybUZlZWRiYWNrVmFycykge1xuICAgICAgICByZXR1cm4gbmV3IFByb2dyYW0odGhpcy5nbCwgdGhpcy5zdGF0ZSwgdnNTb3VyY2UsIGZzU291cmNlLCB4Zm9ybUZlZWRiYWNrVmFycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIHNoYWRlci4gQ3JlYXRpbmcgYSBzaGFkZXIgc2VwYXJhdGVseSBmcm9tIGEgcHJvZ3JhbSBhbGxvd3MgZm9yXG4gICAgICAgIHNoYWRlciByZXVzZS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSB0eXBlIFNoYWRlciB0eXBlLlxuICAgICAgICBAcGFyYW0ge3N0cmluZ30gc291cmNlIFNoYWRlciBzb3VyY2UuXG4gICAgICAgIEByZXR1cm4ge1NoYWRlcn0gTmV3IFNoYWRlciBvYmplY3QuXG4gICAgKi9cbiAgICBjcmVhdGVTaGFkZXIodHlwZSwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2hhZGVyKHRoaXMuZ2wsIHR5cGUsIHNvdXJjZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIHZlcnRleCBhcnJheS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEFycmF5fSBOZXcgVmVydGV4QXJyYXkgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlVmVydGV4QXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVydGV4QXJyYXkodGhpcy5nbCwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIHRyYW5zZm9ybSBmZWVkYmFjayBvYmplY3QuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtUcmFuc2Zvcm1GZWVkYmFja30gTmV3IFRyYW5zZm9ybUZlZWRiYWNrIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRyYW5zZm9ybUZlZWRiYWNrKHRoaXMuZ2wsIHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDcmVhdGUgYSB2ZXJ0ZXggYnVmZmVyLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IHR5cGUgVGhlIGRhdGEgdHlwZSBzdG9yZWQgaW4gdGhlIHZlcnRleCBidWZmZXIuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBpdGVtU2l6ZSBOdW1iZXIgb2YgZWxlbWVudHMgcGVyIHZlcnRleC5cbiAgICAgICAgQHBhcmFtIHtBcnJheUJ1ZmZlclZpZXd9IGRhdGEgQnVmZmVyIGRhdGEuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbdXNhZ2U9U1RBVElDX0RSQVddIEJ1ZmZlciB1c2FnZS5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QnVmZmVyfSBOZXcgVmVydGV4QnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVZlcnRleEJ1ZmZlcih0eXBlLCBpdGVtU2l6ZSwgZGF0YSwgdXNhZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWZXJ0ZXhCdWZmZXIodGhpcy5nbCwgdGhpcy5zdGF0ZSwgdHlwZSwgaXRlbVNpemUsIGRhdGEsIHVzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgcGVyLXZlcnRleCBtYXRyaXggYnVmZmVyLiBNYXRyaXggYnVmZmVycyBlbnN1cmUgdGhhdCBjb2x1bW5zXG4gICAgICAgIGFyZSBjb3JyZWN0bHkgc3BsaXQgYWNyb3NzIGF0dHJpYnV0ZSBsb2NhdGlvbnMuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gdHlwZSBUaGUgZGF0YSB0eXBlIHN0b3JlZCBpbiB0aGUgbWF0cml4IGJ1ZmZlci4gVmFsaWQgdHlwZXNcbiAgICAgICAgYXJlIEZMT0FUX01BVDQsIEZMT0FUX01BVDR4MiwgRkxPQVRfTUFUNHgzLCBGTE9BVF9NQVQzLCBGTE9BVF9NQVQzeDIsXG4gICAgICAgIEZMT0FUX01BVDN4NCwgRkxPQVRfTUFUMiwgRkxPQVRfTUFUMngzLCBGTE9BVF9NQVQyeDQuXG4gICAgICAgIEBwYXJhbSB7QXJyYXlCdWZmZXJWaWV3fSBkYXRhIE1hdHJpeCBidWZmZXIgZGF0YS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFt1c2FnZT1TVEFUSUNfRFJBV10gQnVmZmVyIHVzYWdlLlxuICAgICAgICBAcmV0dXJuIHtWZXJ0ZXhCdWZmZXJ9IE5ldyBWZXJ0ZXhCdWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlTWF0cml4QnVmZmVyKHR5cGUsIGRhdGEsIHVzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVydGV4QnVmZmVyKHRoaXMuZ2wsIHRoaXMuc3RhdGUsIHR5cGUsIDAsIGRhdGEsIHVzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGFuIGluZGV4IGJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSB0eXBlIFRoZSBkYXRhIHR5cGUgc3RvcmVkIGluIHRoZSBpbmRleCBidWZmZXIuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBpdGVtU2l6ZSBOdW1iZXIgb2YgZWxlbWVudHMgcGVyIHByaW1pdGl2ZS5cbiAgICAgICAgQHBhcmFtIHtBcnJheUJ1ZmZlclZpZXd9IGRhdGEgSW5kZXggYnVmZmVyIGRhdGEuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbdXNhZ2U9U1RBVElDX0RSQVddIEJ1ZmZlciB1c2FnZS5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QnVmZmVyfSBOZXcgVmVydGV4QnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZUluZGV4QnVmZmVyKHR5cGUsIGl0ZW1TaXplLCBkYXRhLCB1c2FnZSkge1xuICAgICAgICByZXR1cm4gbmV3IFZlcnRleEJ1ZmZlcih0aGlzLmdsLCB0aGlzLnN0YXRlLCB0eXBlLCBpdGVtU2l6ZSwgZGF0YSwgdXNhZ2UsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDcmVhdGUgYSB1bmlmb3JtIGJ1ZmZlciBpbiBzdGQxNDAgbGF5b3V0LiBOT1RFOiBGTE9BVF9NQVQyLCBGTE9BVF9NQVQzeDIsIEZMT0FUX01BVDR4MixcbiAgICAgICAgRkxPQVRfTUFUMywgRkxPQVRfTUFUMngzLCBGTE9BVF9NQVQ0eDMgYXJlIHN1cHBvcnRlZCwgYnV0IG11c3QgYmUgbWFudWFsbHkgcGFkZGVkIHRvXG4gICAgICAgIDQtZmxvYXQgY29sdW1uIGFsaWdubWVudCBieSB0aGUgYXBwbGljYXRpb24hXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0FycmF5fSBsYXlvdXQgQXJyYXkgaW5kaWNhdGluZyB0aGUgb3JkZXIgYW5kIHR5cGVzIG9mIGl0ZW1zIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICBiZSBzdG9yZWQgaW4gdGhlIGJ1ZmZlci5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFt1c2FnZT1EWU5BTUlDX0RSQVddIEJ1ZmZlciB1c2FnZS5cbiAgICAgICAgQHJldHVybiB7VW5pZm9ybUJ1ZmZlcn0gTmV3IFVuaWZvcm1CdWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlVW5pZm9ybUJ1ZmZlcihsYXlvdXQsIHVzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgVW5pZm9ybUJ1ZmZlcih0aGlzLmdsLCB0aGlzLnN0YXRlLCBsYXlvdXQsIHVzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgMkQgdGV4dHVyZS4gQ2FuIGJlIHVzZWQgaW4gc2V2ZXJhbCB3YXlzIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB0ZXh0dXJlIGRhdGE6XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48Yj5hcHAuY3JlYXRlVGV4dHVyZTJEKEltYWdlRWxlbWVudCwgb3B0aW9ucyk8L2I+OiBDcmVhdGUgdGV4dHVyZSBmcm9tIGEgRE9NIGltYWdlIGVsZW1lbnQuXG4gICAgICAgICAgICA8bGk+PGI+YXBwLmNyZWF0ZVRleHR1cmUyRChUeXBlZEFycmF5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKTwvYj46IENyZWF0ZSB0ZXh0dXJlIGZyb20gYSB0eXBlZCBhcnJheS5cbiAgICAgICAgICAgIDxsaT48Yj5hcHAuY3JlYXRlVGV4dHVyZTJEKHdpZHRoLCBoZWlnaHQsIG9wdGlvbnMpPC9iPjogQ3JlYXRlIGVtcHR5IHRleHR1cmUuXG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0RPTUVsZW1lbnR8QXJyYXlCdWZmZXJWaWV3fEFycmF5fSBbaW1hZ2VdIEltYWdlIGRhdGEuIEFuIGFycmF5IGNhbiBiZSBwYXNzZWQgdG8gbWFudWFsbHkgc2V0IGFsbCBsZXZlbHMgXG4gICAgICAgICAgICBvZiB0aGUgbWlwbWFwIGNoYWluLiBJZiBhIHNpbmdsZSBsZXZlbCBpcyBwYXNzZWQgYW5kIG1pcG1hcCBmaWx0ZXJpbmcgaXMgYmVpbmcgdXNlZCxcbiAgICAgICAgICAgIGdlbmVyYXRlTWlwbWFwKCkgd2lsbCBiZSBjYWxsZWQgdG8gcHJvZHVjZSB0aGUgcmVtYWluaW5nIGxldmVscy5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gVGV4dHVyZSB3aWR0aC4gUmVxdWlyZWQgZm9yIGFycmF5IG9yIGVtcHR5IGRhdGEuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0XSBUZXh0dXJlIGhlaWdodC4gUmVxdWlyZWQgZm9yIGFycmF5IG9yIGVtcHR5IGRhdGEuXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGV4dHVyZSBvcHRpb25zLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMudHlwZV0gVHlwZSBvZiBkYXRhIHN0b3JlZCBpbiB0aGUgdGV4dHVyZS4gRGVmYXVsdHMgdG8gVU5TSUdORURfU0hPUlQgXG4gICAgICAgICAgICBpZiBmb3JtYXQgaXMgREVQVEhfQ09NUE9ORU5ULCBVTlNJR05FRF9CWVRFIG90aGVyd2lzZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmZvcm1hdD1SR0JBXSBUZXh0dXJlIGRhdGEgZm9ybWF0LlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuaW50ZXJuYWxGb3JtYXQ9UkdCQV0gVGV4dHVyZSBkYXRhIGludGVybmFsIGZvcm1hdC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mbGlwWT1mYWxzZV0gV2hldGhlciB0aGUgeS1heGlzIHNob3VsZCBiZSBmbGlwcGVkIHdoZW4gdW5wYWNraW5nIHRoZSB0ZXh0dXJlLiBcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkZpbHRlcl0gTWluaWZpY2F0aW9uIGZpbHRlci4gRGVmYXVsdHMgdG8gXG4gICAgICAgICAgICBMSU5FQVJfTUlQTUFQX05FQVJFU1QgaWYgaW1hZ2UgZGF0YSBpcyBwcm92aWRlZCwgTkVBUkVTVCBvdGhlcndpc2UuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYWdGaWx0ZXJdIE1hZ25pZmljYXRpb24gZmlsdGVyLiBEZWZhdWx0cyB0byBMSU5FQVJcbiAgICAgICAgICAgIGlmIGltYWdlIGRhdGEgaXMgcHJvdmlkZWQsIE5FQVJFU1Qgb3RoZXJ3aXNlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMud3JhcFM9UkVQRUFUXSBIb3Jpem9udGFsIHdyYXAgbW9kZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBUPVJFUEVBVF0gVmVydGljYWwgd3JhcCBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZU1vZGU9Tk9ORV0gQ29tcGFyaXNvbiBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZUZ1bmM9TEVRVUFMXSBDb21wYXJpc29uIGZ1bmN0aW9uLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuYmFzZUxldmVsXSBCYXNlIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1heExldmVsXSBNYXhpbXVtIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkxPRF0gTWltaW11bSBsZXZlbCBvZiBkZXRhaWwuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYXhMT0RdIE1heGltdW0gbGV2ZWwgb2YgZGV0YWlsLlxuICAgICAgICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmdlbmVyYXRlTWlwbWFwc10gU2hvdWxkIG1pcG1hcHMgYmUgZ2VuZXJhdGVkLiBEZWZhdWx0cyB0byBnZW5lcmF0aW5nIG1pcG1hcHMgaWZcbiAgICAgICAgICAgIGEgbWlwbWFwIHNhbXBsaW5nIGZpbHRlciBpcyB1c2VkIGFuZCB0aGUgbWlwbWFwIGxldmVscyBhcmVuJ3QgcHJvdmlkZWQgZGlyZWN0bHkuXG4gICAgICAgIEByZXR1cm4ge1RleHR1cmV9IE5ldyBUZXh0dXJlIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVRleHR1cmUyRChpbWFnZSwgd2lkdGgsIGhlaWdodCwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGltYWdlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgZW1wdHkgdGV4dHVyZSBqdXN0IGdpdmUgd2lkdGgvaGVpZ2h0LlxuICAgICAgICAgICAgb3B0aW9ucyA9IGhlaWdodDtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoO1xuICAgICAgICAgICAgd2lkdGggPSBpbWFnZTtcbiAgICAgICAgICAgIGltYWdlID0gbnVsbDsgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFBhc3NpbmcgaW4gYSBET00gZWxlbWVudC4gSGVpZ2h0L3dpZHRoIG5vdCByZXF1aXJlZC5cbiAgICAgICAgICAgIG9wdGlvbnMgPSB3aWR0aDtcbiAgICAgICAgICAgIHdpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFRleHR1cmUodGhpcy5nbCwgdGhpcy5zdGF0ZSwgdGhpcy5nbC5URVhUVVJFXzJELCBpbWFnZSwgd2lkdGgsIGhlaWdodCwgdW5kZWZpbmVkLCBmYWxzZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIDJEIHRleHR1cmUgYXJyYXkuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0FycmF5QnVmZmVyVmlld3xBcnJheX0gaW1hZ2UgUGl4ZWwgZGF0YS4gQW4gYXJyYXkgY2FuIGJlIHBhc3NlZCB0byBtYW51YWxseSBzZXQgYWxsIGxldmVscyBcbiAgICAgICAgICAgIG9mIHRoZSBtaXBtYXAgY2hhaW4uIElmIGEgc2luZ2xlIGxldmVsIGlzIHBhc3NlZCBhbmQgbWlwbWFwIGZpbHRlcmluZyBpcyBiZWluZyB1c2VkLFxuICAgICAgICAgICAgZ2VuZXJhdGVNaXBtYXAoKSB3aWxsIGJlIGNhbGxlZCB0byBwcm9kdWNlIHRoZSByZW1haW5pbmcgbGV2ZWxzLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gd2lkdGggVGV4dHVyZSB3aWR0aC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUZXh0dXJlIGhlaWdodC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IHNpemUgTnVtYmVyIG9mIGltYWdlcyBpbiB0aGUgYXJyYXkuXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGV4dHVyZSBvcHRpb25zLlxuICAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLnR5cGVdIFR5cGUgb2YgZGF0YSBzdG9yZWQgaW4gdGhlIHRleHR1cmUuIERlZmF1bHRzIHRvIFVOU0lHTkVEX1NIT1JUIFxuICAgICAgICAgICAgaWYgZm9ybWF0IGlzIERFUFRIX0NPTVBPTkVOVCwgVU5TSUdORURfQllURSBvdGhlcndpc2UuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5mb3JtYXQ9UkdCQV0gVGV4dHVyZSBkYXRhIGZvcm1hdC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmludGVybmFsRm9ybWF0PVJHQkFdIFRleHR1cmUgZGF0YSBpbnRlcm5hbCBmb3JtYXQuXG4gICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZmxpcFk9ZmFsc2VdIFdoZXRoZXIgdGhlIHktYXhpcyBzaG91bGQgYmUgZmxpcHBlZCB3aGVuIHVucGFja2luZyB0aGUgdGV4dHVyZS4gXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5taW5GaWx0ZXJdIE1pbmlmaWNhdGlvbiBmaWx0ZXIuIERlZmF1bHRzIHRvIFxuICAgICAgICAgICAgTElORUFSX01JUE1BUF9ORUFSRVNUIGlmIGltYWdlIGRhdGEgaXMgcHJvdmlkZWQsIE5FQVJFU1Qgb3RoZXJ3aXNlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMubWFnRmlsdGVyXSBNYWduaWZpY2F0aW9uIGZpbHRlci4gRGVmYXVsdHMgdG8gTElORUFSXG4gICAgICAgICAgICBpZiBpbWFnZSBkYXRhIGlzIHByb3ZpZGVkLCBORUFSRVNUIG90aGVyd2lzZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBTPVJFUEVBVF0gSG9yaXpvbnRhbCB3cmFwIG1vZGUuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy53cmFwVD1SRVBFQVRdIFZlcnRpY2FsIHdyYXAgbW9kZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBSPVJFUEVBVF0gRGVwdGggd3JhcCBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZU1vZGU9Tk9ORV0gQ29tcGFyaXNvbiBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuY29tcGFyZUZ1bmM9TEVRVUFMXSBDb21wYXJpc29uIGZ1bmN0aW9uLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuYmFzZUxldmVsXSBCYXNlIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1heExldmVsXSBNYXhpbXVtIG1pcG1hcCBsZXZlbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkxPRF0gTWltaW11bSBsZXZlbCBvZiBkZXRhaWwuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYXhMT0RdIE1heGltdW0gbGV2ZWwgb2YgZGV0YWlsLlxuICAgICAgICBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmdlbmVyYXRlTWlwbWFwc10gU2hvdWxkIG1pcG1hcHMgYmUgZ2VuZXJhdGVkLiBEZWZhdWx0cyB0byBnZW5lcmF0aW5nIG1pcG1hcHMgaWZcbiAgICAgICAgICAgIGEgbWlwbWFwIHNhbXBsaW5nIGZpbHRlciBpcyB1c2UgYW5kIHRoZSBtaXBtYXAgbGV2ZWxzIGFyZW4ndCBwcm92aWRlZCBkaXJlY3RseS5cbiAgICAgICAgQHJldHVybiB7VGV4dHVyZX0gTmV3IFRleHR1cmUgb2JqZWN0LlxuICAgICovXG4gICAgY3JlYXRlVGV4dHVyZUFycmF5KGltYWdlLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGltYWdlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgZW1wdHkgdGV4dHVyZSBqdXN0IGdpdmUgd2lkdGgvaGVpZ2h0L2RlcHRoLlxuICAgICAgICAgICAgb3B0aW9ucyA9IGRlcHRoO1xuICAgICAgICAgICAgZGVwdGggPSBoZWlnaHQ7XG4gICAgICAgICAgICBoZWlnaHQgPSB3aWR0aDtcbiAgICAgICAgICAgIHdpZHRoID0gaW1hZ2U7XG4gICAgICAgICAgICBpbWFnZSA9IG51bGw7ICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVGV4dHVyZSh0aGlzLmdsLCB0aGlzLnN0YXRlLCB0aGlzLmdsLlRFWFRVUkVfMkRfQVJSQVksIGltYWdlLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgdHJ1ZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIDNEIHRleHR1cmUuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0FycmF5QnVmZmVyVmlld3xBcnJheX0gaW1hZ2UgUGl4ZWwgZGF0YS4gQW4gYXJyYXkgY2FuIGJlIHBhc3NlZCB0byBtYW51YWxseSBzZXQgYWxsIGxldmVscyBcbiAgICAgICAgICAgIG9mIHRoZSBtaXBtYXAgY2hhaW4uIElmIGEgc2luZ2xlIGxldmVsIGlzIHBhc3NlZCBhbmQgbWlwbWFwIGZpbHRlcmluZyBpcyBiZWluZyB1c2VkLFxuICAgICAgICAgICAgZ2VuZXJhdGVNaXBtYXAoKSB3aWxsIGJlIGNhbGxlZCB0byBwcm9kdWNlIHRoZSByZW1haW5pbmcgbGV2ZWxzLlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gd2lkdGggVGV4dHVyZSB3aWR0aC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUZXh0dXJlIGhlaWdodC5cbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRleHR1cmUgZGVwdGguXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGV4dHVyZSBvcHRpb25zLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMudHlwZV0gVHlwZSBvZiBkYXRhIHN0b3JlZCBpbiB0aGUgdGV4dHVyZS4gRGVmYXVsdHMgdG8gVU5TSUdORURfU0hPUlQgXG4gICAgICAgICAgICBpZiBmb3JtYXQgaXMgREVQVEhfQ09NUE9ORU5ULCBVTlNJR05FRF9CWVRFIG90aGVyd2lzZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmZvcm1hdD1SR0JBXSBUZXh0dXJlIGRhdGEgZm9ybWF0LlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMuaW50ZXJuYWxGb3JtYXQ9UkdCQV0gVGV4dHVyZSBkYXRhIGludGVybmFsIGZvcm1hdC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5mbGlwWT1mYWxzZV0gV2hldGhlciB0aGUgeS1heGlzIHNob3VsZCBiZSBmbGlwcGVkIHdoZW4gdW5wYWNraW5nIHRoZSB0ZXh0dXJlLiBcbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1pbkZpbHRlcl0gTWluaWZpY2F0aW9uIGZpbHRlci4gRGVmYXVsdHMgdG8gXG4gICAgICAgICAgICBMSU5FQVJfTUlQTUFQX05FQVJFU1QgaWYgaW1hZ2UgZGF0YSBpcyBwcm92aWRlZCwgTkVBUkVTVCBvdGhlcndpc2UuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYWdGaWx0ZXJdIE1hZ25pZmljYXRpb24gZmlsdGVyLiBEZWZhdWx0cyB0byBMSU5FQVJcbiAgICAgICAgICAgIGlmIGltYWdlIGRhdGEgaXMgcHJvdmlkZWQsIE5FQVJFU1Qgb3RoZXJ3aXNlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMud3JhcFM9UkVQRUFUXSBIb3Jpem9udGFsIHdyYXAgbW9kZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBUPVJFUEVBVF0gVmVydGljYWwgd3JhcCBtb2RlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMud3JhcFI9UkVQRUFUXSBEZXB0aCB3cmFwIG1vZGUuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5jb21wYXJlTW9kZT1OT05FXSBDb21wYXJpc29uIG1vZGUuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5jb21wYXJlRnVuYz1MRVFVQUxdIENvbXBhcmlzb24gZnVuY3Rpb24uXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5iYXNlTGV2ZWxdIEJhc2UgbWlwbWFwIGxldmVsLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMubWF4TGV2ZWxdIE1heGltdW0gbWlwbWFwIGxldmVsLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMubWluTE9EXSBNaW1pbXVtIGxldmVsIG9mIGRldGFpbC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLm1heExPRF0gTWF4aW11bSBsZXZlbCBvZiBkZXRhaWwuXG4gICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZ2VuZXJhdGVNaXBtYXBzXSBTaG91bGQgbWlwbWFwcyBiZSBnZW5lcmF0ZWQuIERlZmF1bHRzIHRvIGdlbmVyYXRpbmcgbWlwbWFwcyBpZlxuICAgICAgICAgICAgYSBtaXBtYXAgc2FtcGxpbmcgZmlsdGVyIGlzIHVzZSBhbmQgdGhlIG1pcG1hcCBsZXZlbHMgYXJlbid0IHByb3ZpZGVkIGRpcmVjdGx5LlxuICAgICAgICBAcmV0dXJuIHtUZXh0dXJlfSBOZXcgVGV4dHVyZSBvYmplY3QuXG4gICAgKi9cbiAgICBjcmVhdGVUZXh0dXJlM0QoaW1hZ2UsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBlbXB0eSB0ZXh0dXJlIGp1c3QgZ2l2ZSB3aWR0aC9oZWlnaHQvZGVwdGguXG4gICAgICAgICAgICBvcHRpb25zID0gZGVwdGg7XG4gICAgICAgICAgICBkZXB0aCA9IGhlaWdodDtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpZHRoO1xuICAgICAgICAgICAgd2lkdGggPSBpbWFnZTtcbiAgICAgICAgICAgIGltYWdlID0gbnVsbDsgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0dXJlKHRoaXMuZ2wsIHRoaXMuc3RhdGUsIHRoaXMuZ2wuVEVYVFVSRV8zRCwgaW1hZ2UsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCB0cnVlLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgY3ViZW1hcC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRleHR1cmUgb3B0aW9ucy5cbiAgICAgICAgQHBhcmFtIHtET01FbGVtZW50fEFycmF5QnVmZmVyVmlld30gW29wdGlvbnMubmVnWF0gVGhlIGltYWdlIGRhdGEgZm9yIHRoZSBuZWdhdGl2ZSBYIGRpcmVjdGlvbi5cbiAgICAgICAgICAgICAgICBDYW4gYmUgYW55IGZvcm1hdCB0aGF0IHdvdWxkIGJlIGFjY2VwdGVkIGJ5IHRleEltYWdlMkQuXG4gICAgICAgIEBwYXJhbSB7RE9NRWxlbWVudHxBcnJheUJ1ZmZlclZpZXd9IFtvcHRpb25zLnBvc1hdIFRoZSBpbWFnZSBkYXRhIGZvciB0aGUgcG9zaXRpdmUgWCBkaXJlY3Rpb24uXG4gICAgICAgICAgICAgICAgQ2FuIGJlIGFueSBmb3JtYXQgdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0ZXhJbWFnZTJELlxuICAgICAgICBAcGFyYW0ge0RPTUVsZW1lbnR8QXJyYXlCdWZmZXJWaWV3fSBbb3B0aW9ucy5uZWdZXSBUaGUgaW1hZ2UgZGF0YSBmb3IgdGhlIG5lZ2F0aXZlIFkgZGlyZWN0aW9uLlxuICAgICAgICAgICAgICAgIENhbiBiZSBhbnkgZm9ybWF0IHRoYXQgd291bGQgYmUgYWNjZXB0ZWQgYnkgdGV4SW1hZ2UyRC5cbiAgICAgICAgQHBhcmFtIHtET01FbGVtZW50fEFycmF5QnVmZmVyVmlld30gW29wdGlvbnMucG9zWV0gVGhlIGltYWdlIGRhdGEgZm9yIHRoZSBwb3NpdGl2ZSBZIGRpcmVjdGlvbi5cbiAgICAgICAgICAgICAgICBDYW4gYmUgYW55IGZvcm1hdCB0aGF0IHdvdWxkIGJlIGFjY2VwdGVkIGJ5IHRleEltYWdlMkQuXG4gICAgICAgIEBwYXJhbSB7RE9NRWxlbWVudHxBcnJheUJ1ZmZlclZpZXd9IFtvcHRpb25zLm5lZ1pdIFRoZSBpbWFnZSBkYXRhIGZvciB0aGUgbmVnYXRpdmUgWiBkaXJlY3Rpb24uXG4gICAgICAgICAgICAgICAgQ2FuIGJlIGFueSBmb3JtYXQgdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0ZXhJbWFnZTJELlxuICAgICAgICBAcGFyYW0ge0RPTUVsZW1lbnR8QXJyYXlCdWZmZXJWaWV3fSBbb3B0aW9ucy5wb3NaXSBUaGUgaW1hZ2UgZGF0YSBmb3IgdGhlIHBvc2l0aXZlIFogZGlyZWN0aW9uLlxuICAgICAgICAgICAgICAgIENhbiBiZSBhbnkgZm9ybWF0IHRoYXQgd291bGQgYmUgYWNjZXB0ZWQgYnkgdGV4SW1hZ2UyRC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLnR5cGVdIFR5cGUgb2YgZGF0YSBzdG9yZWQgaW4gdGhlIHRleHR1cmUuIERlZmF1bHRzIHRvIFVOU0lHTkVEX1NIT1JUIFxuICAgICAgICAgICAgaWYgZm9ybWF0IGlzIERFUFRIX0NPTVBPTkVOVCwgVU5TSUdORURfQllURSBvdGhlcndpc2UuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5mb3JtYXQ9UkdCQV0gVGV4dHVyZSBkYXRhIGZvcm1hdC5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmludGVybmFsRm9ybWF0PVJHQkFdIFRleHR1cmUgZGF0YSBpbnRlcm5hbCBmb3JtYXQuXG4gICAgICAgIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZmxpcFk9ZmFsc2VdIFdoZXRoZXIgdGhlIHktYXhpcyBzaG91bGQgYmUgZmxpcHBlZCB3aGVuIHVucGFja2luZyB0aGUgdGV4dHVyZS4gXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5taW5GaWx0ZXJdIE1pbmlmaWNhdGlvbiBmaWx0ZXIuIERlZmF1bHRzIHRvIFxuICAgICAgICAgICAgTElORUFSX01JUE1BUF9ORUFSRVNUIGlmIGltYWdlIGRhdGEgaXMgcHJvdmlkZWQsIE5FQVJFU1Qgb3RoZXJ3aXNlLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMubWFnRmlsdGVyXSBNYWduaWZpY2F0aW9uIGZpbHRlci4gRGVmYXVsdHMgdG8gTElORUFSXG4gICAgICAgICAgICBpZiBpbWFnZSBkYXRhIGlzIHByb3ZpZGVkLCBORUFSRVNUIG90aGVyd2lzZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLndyYXBTPVJFUEVBVF0gSG9yaXpvbnRhbCB3cmFwIG1vZGUuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy53cmFwVD1SRVBFQVRdIFZlcnRpY2FsIHdyYXAgbW9kZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmNvbXBhcmVNb2RlPU5PTkVdIENvbXBhcmlzb24gbW9kZS5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmNvbXBhcmVGdW5jPUxFUVVBTF0gQ29tcGFyaXNvbiBmdW5jdGlvbi5cbiAgICAgICAgQHBhcmFtIHtHTEVudW19IFtvcHRpb25zLmJhc2VMZXZlbF0gQmFzZSBtaXBtYXAgbGV2ZWwuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5tYXhMZXZlbF0gTWF4aW11bSBtaXBtYXAgbGV2ZWwuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbb3B0aW9ucy5taW5MT0RdIE1pbWltdW0gbGV2ZWwgb2YgZGV0YWlsLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW29wdGlvbnMubWF4TE9EXSBNYXhpbXVtIGxldmVsIG9mIGRldGFpbC5cbiAgICAgICAgQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5nZW5lcmF0ZU1pcG1hcHNdIFNob3VsZCBtaXBtYXBzIGJlIGdlbmVyYXRlZC4gRGVmYXVsdHMgdG8gZ2VuZXJhdGluZyBtaXBtYXBzIGlmXG4gICAgICAgICAgICBhIG1pcG1hcCBzYW1wbGluZyBmaWx0ZXIgaXMgdXNlZGQuXG4gICAgICAgIEByZXR1cm4ge0N1YmVtYXB9IE5ldyBDdWJlbWFwIG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZUN1YmVtYXAob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IEN1YmVtYXAodGhpcy5nbCwgdGhpcy5zdGF0ZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIGZyYW1lYnVmZmVyLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7RnJhbWVidWZmZXJ9IE5ldyBGcmFtZWJ1ZmZlciBvYmplY3QuXG4gICAgKi9cbiAgICBjcmVhdGVGcmFtZWJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGcmFtZWJ1ZmZlcih0aGlzLmdsLCB0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgcXVlcnkuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gdGFyZ2V0IEluZm9ybWF0aW9uIHRvIHF1ZXJ5LlxuICAgICAgICBAcmV0dXJuIHtRdWVyeX0gTmV3IFF1ZXJ5IG9iamVjdC5cbiAgICAqL1xuICAgIGNyZWF0ZVF1ZXJ5KHRhcmdldCkge1xuICAgICAgICByZXR1cm4gbmV3IFF1ZXJ5KHRoaXMuZ2wsIHRhcmdldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIENyZWF0ZSBhIHRpbWVyLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7VGltZXJ9IE5ldyBUaW1lciBvYmplY3QuXG4gICAgKi9cbiAgICBjcmVhdGVUaW1lcigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lcih0aGlzLmdsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQ3JlYXRlIGEgRHJhd0NhbGwuIEEgRHJhd0NhbGwgbWFuYWdlcyB0aGUgc3RhdGUgYXNzb2NpYXRlZCB3aXRoXG4gICAgICAgIGEgV2ViR0wgZHJhdyBjYWxsIGluY2x1ZGluZyBhIHByb2dyYW0gYW5kIGFzc29jaWF0ZWQgdmVydGV4IGRhdGEsIHRleHR1cmVzLFxuICAgICAgICB1bmlmb3JtcyBhbmQgdW5pZm9ybSBibG9ja3MuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge1Byb2dyYW19IHByb2dyYW0gVGhlIHByb2dyYW0gdG8gdXNlIGZvciB0aGlzIERyYXdDYWxsLlxuICAgICAgICBAcGFyYW0ge1ZlcnRleEFycmF5fSB2ZXJ0ZXhBcnJheSBWZXJ0ZXggZGF0YSB0byB1c2UgZm9yIGRyYXdpbmcuXG4gICAgICAgIEBwYXJhbSB7R0xFbnVtfSBbcHJpbWl0aXZlPVRSSUFOR0xFU10gVHlwZSBvZiBwcmltaXRpdmUgdG8gZHJhdy5cbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IE5ldyBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICBjcmVhdGVEcmF3Q2FsbChwcm9ncmFtLCB2ZXJ0ZXhBcnJheSwgcHJpbWl0aXZlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRHJhd0NhbGwodGhpcy5nbCwgdGhpcy5zdGF0ZSwgcHJvZ3JhbSwgdmVydGV4QXJyYXksIHByaW1pdGl2ZSk7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGFyZWsgU2hlcmlmXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbmNvbnN0IENPTlNUQU5UUyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5jb25zdCBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbi8qKlxuICAgIEN1YmVtYXAgZm9yIGVudmlyb25tZW50IG1hcHBpbmcuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7V2ViR0xUZXh0dXJlfSB0ZXh0dXJlIEhhbmRsZSB0byB0aGUgdGV4dHVyZS5cbiAgICBAcHJvcCB7R0xFbnVtfSB0eXBlIFR5cGUgb2YgZGF0YSBzdG9yZWQgaW4gdGhlIHRleHR1cmUuXG4gICAgQHByb3Age0dMRW51bX0gZm9ybWF0IExheW91dCBvZiB0ZXh0dXJlIGRhdGEuXG4gICAgQHByb3Age0dMRW51bX0gaW50ZXJuYWxGb3JtYXQgSW50ZXJuYWwgYXJyYW5nZW1lbnQgb2YgdGhlIHRleHR1cmUgZGF0YS5cbiAgICBAcHJvcCB7TnVtYmVyfSBjdXJyZW50VW5pdCBUaGUgY3VycmVudCB0ZXh0dXJlIHVuaXQgdGhpcyBjdWJlbWFwIGlzIGJvdW5kIHRvLlxuICAgIEBwcm9wIHtPYmplY3R9IGFwcFN0YXRlIFRyYWNrZWQgR0wgc3RhdGUuXG4qL1xuY2xhc3MgQ3ViZW1hcCB7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCwgYXBwU3RhdGUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHsgbmVnWCwgcG9zWCwgbmVnWSwgcG9zWSwgbmVnWiwgcG9zWiB9ID0gb3B0aW9ucztcblxuICAgICAgICBsZXQgZGVmYXVsdFR5cGUgPSBvcHRpb25zLmZvcm1hdCA9PT0gQ09OU1RBTlRTLkRFUFRIX0NPTVBPTkVOVCA/IENPTlNUQU5UUy5VTlNJR05FRF9TSE9SVCA6IENPTlNUQU5UUy5VTlNJR05FRF9CWVRFO1xuXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICB0aGlzLmZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmZvcm1hdCA6IGdsLlJHQkE7XG4gICAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy50eXBlIDogZGVmYXVsdFR5cGU7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmludGVybmFsRm9ybWF0IDogVEVYVFVSRV9GT1JNQVRfREVGQVVMVFNbdGhpcy50eXBlXVt0aGlzLmZvcm1hdF07XG4gICAgICAgIHRoaXMuYXBwU3RhdGUgPSBhcHBTdGF0ZTtcbiAgICAgICAgXG4gICAgICAgIC8vIC0xIGluZGljYXRlcyB1bmJvdW5kXG4gICAgICAgIHRoaXMuY3VycmVudFVuaXQgPSAtMTtcblxuICAgICAgICBsZXQge1xuICAgICAgICAgICAgd2lkdGggPSBuZWdYLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gbmVnWC5oZWlnaHQsXG4gICAgICAgICAgICBmbGlwWSA9IGZhbHNlLFxuICAgICAgICAgICAgbWluRmlsdGVyID0gbmVnWCA/IGdsLkxJTkVBUl9NSVBNQVBfTkVBUkVTVCA6IGdsLk5FQVJFU1QsXG4gICAgICAgICAgICBtYWdGaWx0ZXIgPSBuZWdYID8gZ2wuTElORUFSIDogZ2wuTkVBUkVTVCxcbiAgICAgICAgICAgIHdyYXBTID0gZ2wuUkVQRUFULFxuICAgICAgICAgICAgd3JhcFQgPSBnbC5SRVBFQVQsXG4gICAgICAgICAgICBjb21wYXJlTW9kZSA9IGdsLk5PTkUsXG4gICAgICAgICAgICBjb21wYXJlRnVuYyA9IGdsLkxFUVVBTCxcbiAgICAgICAgICAgIGdlbmVyYXRlTWlwbWFwcyA9IG1pbkZpbHRlciA9PT0gZ2wuTElORUFSX01JUE1BUF9ORUFSRVNUIHx8IG1pbkZpbHRlciA9PT0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJpbmQoMCk7XG4gICAgICAgIGdsLnBpeGVsU3RvcmVpKGdsLlVOUEFDS19GTElQX1lfV0VCR0wsIGZsaXBZKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFX0NVQkVfTUFQLCBnbC5URVhUVVJFX01BR19GSUxURVIsIG1hZ0ZpbHRlcik7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBtaW5GaWx0ZXIpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfV1JBUF9TLCB3cmFwUyk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9XUkFQX1QsIHdyYXBUKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFX0NVQkVfTUFQLCBnbC5URVhUVVJFX0NPTVBBUkVfRlVOQywgY29tcGFyZUZ1bmMpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfQ09NUEFSRV9NT0RFLCBjb21wYXJlTW9kZSk7XG4gICAgICAgIGlmIChvcHRpb25zLmJhc2VMZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfQkFTRV9MRVZFTCwgb3B0aW9ucy5iYXNlTGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm1heExldmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV9DVUJFX01BUCwgZ2wuVEVYVFVSRV9NQVhfTEVWRUwsIG9wdGlvbnMubWF4TGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm1pbkxPRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfTUlOX0xPRCwgb3B0aW9ucy5taW5MT0QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLm1heExPRCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGdsLlRFWFRVUkVfTUFYX0xPRCwgb3B0aW9ucy5tYXhMT0QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxldmVscyA9IGdlbmVyYXRlTWlwbWFwcyA/IE1hdGguZmxvb3IoTWF0aC5sb2cyKE1hdGgubWluKHdpZHRoLCBoZWlnaHQpKSkgKyAxIDogMTtcbiAgICAgICAgZ2wudGV4U3RvcmFnZTJEKGdsLlRFWFRVUkVfQ1VCRV9NQVAsIGxldmVscywgdGhpcy5pbnRlcm5hbEZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgaWYgKG5lZ1gpIHtcbiAgICAgICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YLCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBuZWdYKTtcbiAgICAgICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YLCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBwb3NYKTtcbiAgICAgICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9ZLCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBuZWdZKTtcbiAgICAgICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBwb3NZKTtcbiAgICAgICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aLCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBuZWdaKTtcbiAgICAgICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9aLCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBwb3NaKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnZW5lcmF0ZU1pcG1hcHMpIHtcbiAgICAgICAgICAgIGdsLmdlbmVyYXRlTWlwbWFwKGdsLlRFWFRVUkVfQ1VCRV9NQVApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRGVsZXRlIHRoaXMgY3ViZW1hcC5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge0N1YmVtYXB9IFRoZSBDdWJlbWFwIG9iamVjdC5cbiAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZSkge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVUZXh0dXJlKHRoaXMudGV4dHVyZSk7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS50ZXh0dXJlc1t0aGlzLmN1cnJlbnRVbml0XSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVbml0ID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCB0aGlzIGN1YmVtYXAgdG8gYSB0ZXh0dXJlIHVuaXQuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAaWdub3JlXG4gICAgICAgIEByZXR1cm4ge0N1YmVtYXB9IFRoZSBDdWJlbWFwIG9iamVjdC5cbiAgICAqL1xuICAgIGJpbmQodW5pdCkge1xuICAgICAgICBsZXQgY3VycmVudFRleHR1cmUgPSB0aGlzLmFwcFN0YXRlLnRleHR1cmVzW3VuaXRdO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRUZXh0dXJlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGV4dHVyZS5jdXJyZW50VW5pdCA9IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VW5pdCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnRleHR1cmVzW3RoaXMuY3VycmVudFVuaXRdID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFX0NVQkVfTUFQLCB0aGlzLnRleHR1cmUpO1xuXG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnRleHR1cmVzW3VuaXRdID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVuaXQgPSB1bml0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZW1hcDtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4vKipcbiAgICBBIERyYXdDYWxsIHJlcHJlc2VudHMgdGhlIHByb2dyYW0gYW5kIHZhbHVlcyBvZiBhc3NvY2lhdGVkXG4gICAgYXR0cmlidXRlcywgdW5pZm9ybXMgYW5kIHRleHR1cmVzIGZvciBhIHNpbmdsZSBkcmF3IGNhbGwuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7UHJvZ3JhbX0gY3VycmVudFByb2dyYW0gVGhlIHByb2dyYW0gdG8gdXNlIGZvciB0aGlzIGRyYXcgY2FsbC5cbiAgICBAcHJvcCB7VmVydGV4QXJyYXl9IGN1cnJlbnRWZXJ0ZXhBcnJheSBWZXJ0ZXggYXJyYXkgdG8gdXNlIGZvciB0aGlzIGRyYXcgY2FsbC5cbiAgICBAcHJvcCB7VHJhbnNmb3JtRmVlZGJhY2t9IGN1cnJlbnRUcmFuc2Zvcm1GZWVkYmFjayBUcmFuc2Zvcm0gZmVlZGJhY2sgdG8gdXNlIGZvciB0aGlzIGRyYXcgY2FsbC5cbiAgICBAcHJvcCB7QXJyYXl9IHVuaWZvcm1CdWZmZXJzIE9yZGVyZWQgbGlzdCBvZiBhY3RpdmUgdW5pZm9ybSBidWZmZXJzLlxuICAgIEBwcm9wIHtBcnJheX0gdW5pZm9ybUJsb2NrTmFtZXMgT3JkZXJlZCBsaXN0IG9mIHVuaWZvcm0gYmxvY2sgbmFtZXMuXG4gICAgQHByb3Age09iamVjdH0gdW5pZm9ybUJsb2NrQmFzZXMgTWFwIG9mIHVuaWZvcm0gYmxvY2tzIHRvIHVuaWZvcm0gYnVmZmVyIGJhc2VzLlxuICAgIEBwcm9wIHtOdW1iZXJ9IHVuaWZvcm1CbG9ja0NvdW50IE51bWJlciBvZiBhY3RpdmUgdW5pZm9ybSBibG9ja3MgZm9yIHRoaXMgZHJhdyBjYWxsLlxuICAgIEBwcm9wIHtPYmplY3R9IHVuaWZvcm1JbmRpY2VzIE1hcCBvZiB1bmlmb3JtIG5hbWVzIHRvIGluZGljZXMgaW4gdGhlIHVuaWZvcm0gYXJyYXlzLlxuICAgIEBwcm9wIHtBcnJheX0gdW5pZm9ybU5hbWVzIE9yZGVyZWQgbGlzdCBvZiB1bmlmb3JtIG5hbWVzLlxuICAgIEBwcm9wIHtBcnJheX0gdW5pZm9ybVZhbHVlIE9yZGVyZWQgbGlzdCBvZiB1bmlmb3JtIHZhbHVlcy5cbiAgICBAcHJvcCB7bnVtYmVyfSB1bmlmb3JtQ291bnQgVGhlIG51bWJlciBvZiBhY3RpdmUgdW5pZm9ybXMgZm9yIHRoaXMgZHJhdyBjYWxsLlxuICAgIEBwcm9wIHtBcnJheX0gdGV4dHVyZXMgQXJyYXkgb2YgYWN0aXZlIHRleHR1cmVzLlxuICAgIEBwcm9wIHtudW1iZXJ9IHRleHR1cmVDb3VudCBUaGUgbnVtYmVyIG9mIGFjdGl2ZSB0ZXh0dXJlcyBmb3IgdGhpcyBkcmF3IGNhbGwuXG4gICAgQHByb3Age0dMRW51bX0gcHJpbWl0aXZlIFRoZSBwcmltaXRpdmUgdHlwZSBiZWluZyBkcmF3bi5cbiAgICBAcHJvcCB7T2JqZWN0fSBhcHBTdGF0ZSBUcmFja2VkIEdMIHN0YXRlLlxuICAgIEBwcm9wIHtHTHNpemVpfSBudW1FbGVtZW50cyBUaGUgbnVtYmVyIG9mIGVsZW1lbnQgdG8gZHJhdy5cbiAgICBAcHJvcCB7R0xzaXplaX0gbnVtSW5zdGFuY2VzIFRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIHRvIGRyYXcuXG4qL1xuY2xhc3MgRHJhd0NhbGwge1xuXG4gICAgY29uc3RydWN0b3IoZ2wsIGFwcFN0YXRlLCBwcm9ncmFtLCB2ZXJ0ZXhBcnJheSwgcHJpbWl0aXZlID0gQ09OU1RBTlRTLlRSSUFOR0xFUykge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuY3VycmVudFByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB0aGlzLmN1cnJlbnRWZXJ0ZXhBcnJheSA9IHZlcnRleEFycmF5O1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2Zvcm1GZWVkYmFjayA9IG51bGw7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUgPSBhcHBTdGF0ZTtcblxuICAgICAgICB0aGlzLnVuaWZvcm1JbmRpY2VzID0ge307XG4gICAgICAgIHRoaXMudW5pZm9ybU5hbWVzID0gbmV3IEFycmF5KENPTlNUQU5UUy5XRUJHTF9JTkZPLk1BWF9VTklGT1JNUyk7XG4gICAgICAgIHRoaXMudW5pZm9ybVZhbHVlcyA9IG5ldyBBcnJheShDT05TVEFOVFMuV0VCR0xfSU5GTy5NQVhfVU5JRk9STVMpO1xuICAgICAgICB0aGlzLnVuaWZvcm1Db3VudCA9IDA7XG4gICAgICAgIHRoaXMudW5pZm9ybUJ1ZmZlcnMgPSBuZXcgQXJyYXkoQ09OU1RBTlRTLldFQkdMX0lORk8uTUFYX1VOSUZPUk1fQlVGRkVSUyk7XG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrTmFtZXMgPSBuZXcgQXJyYXkoQ09OU1RBTlRTLldFQkdMX0lORk8uTUFYX1VOSUZPUk1fQlVGRkVSUyk7XG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrQmFzZXMgPSB7fTtcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuc2FtcGxlckluZGljZXMgPSB7fTtcbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IG5ldyBBcnJheShDT05TVEFOVFMuV0VCR0xfSU5GTy5NQVhfVEVYVFVSRV9VTklUUyk7XG4gICAgICAgIHRoaXMudGV4dHVyZUNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5wcmltaXRpdmUgPSBwcmltaXRpdmU7XG5cbiAgICAgICAgdGhpcy5udW1FbGVtZW50cyA9IHRoaXMuY3VycmVudFZlcnRleEFycmF5Lm51bUVsZW1lbnRzO1xuICAgICAgICB0aGlzLm51bUluc3RhbmNlcyA9IHRoaXMuY3VycmVudFZlcnRleEFycmF5Lm51bUluc3RhbmNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHRoZSBjdXJyZW50IFRyYW5zZm9ybUZlZWRiYWNrIG9iamVjdCBmb3IgZHJhd1xuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtUcmFuc2Zvcm1GZWVkYmFja30gdHJhbnNmb3JtRmVlZGJhY2sgVHJhbnNmb3JtIEZlZWRiYWNrIHRvIHNldC5cbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICB0cmFuc2Zvcm1GZWVkYmFjayh0cmFuc2Zvcm1GZWVkYmFjaykge1xuICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2Zvcm1GZWVkYmFjayA9IHRyYW5zZm9ybUZlZWRiYWNrO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIHZhbHVlIGZvciBhIHVuaWZvcm0uIEFycmF5IHVuaWZvcm1zIGFyZSBzdXBwb3J0ZWQgYnlcbiAgICAgICAgdXNpbmcgYXBwZW5kaW5nIFwiWzBdXCIgdG8gdGhlIGFycmF5IG5hbWUgYW5kIHBhc3NpbmcgYSBmbGF0IGFycmF5XG4gICAgICAgIHdpdGggYWxsIHJlcXVpcmVkIHZhbHVlcy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFVuaWZvcm0gbmFtZS5cbiAgICAgICAgQHBhcmFtIHthbnl9IHZhbHVlIFVuaWZvcm0gdmFsdWUuXG4gICAgICAgIEByZXR1cm4ge0RyYXdDYWxsfSBUaGUgRHJhd0NhbGwgb2JqZWN0LlxuICAgICovXG4gICAgdW5pZm9ybShuYW1lLCB2YWx1ZSkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnVuaWZvcm1JbmRpY2VzW25hbWVdO1xuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLnVuaWZvcm1Db3VudCsrO1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtSW5kaWNlc1tuYW1lXSA9IGluZGV4O1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtTmFtZXNbaW5kZXhdID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuaWZvcm1WYWx1ZXNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCB0ZXh0dXJlIHRvIGJpbmQgdG8gYSBzYW1wbGVyIHVuaWZvcm0uXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge3N0cmluZ30gbmFtZSBTYW1wbGVyIHVuaWZvcm0gbmFtZS5cbiAgICAgICAgQHBhcmFtIHtUZXh0dXJlfSB0ZXh0dXJlIFRleHR1cmUgdG8gYmluZC5cbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICB0ZXh0dXJlKG5hbWUsIHRleHR1cmUpIHtcbiAgICAgICAgbGV0IHVuaXQgPSB0aGlzLmN1cnJlbnRQcm9ncmFtLnNhbXBsZXJzW25hbWVdO1xuICAgICAgICB0aGlzLnRleHR1cmVzW3VuaXRdID0gdGV4dHVyZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2V0IHVuaWZvcm0gYnVmZmVyIHRvIGJpbmQgdG8gYSB1bmlmb3JtIGJsb2NrLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgVW5pZm9ybSBibG9jayBuYW1lLlxuICAgICAgICBAcGFyYW0ge1VuaWZvcm1CdWZmZXJ9IGJ1ZmZlciBVbmlmb3JtIGJ1ZmZlciB0byBiaW5kLlxuICAgICAgICBAcmV0dXJuIHtEcmF3Q2FsbH0gVGhlIERyYXdDYWxsIG9iamVjdC5cbiAgICAqL1xuICAgIHVuaWZvcm1CbG9jayhuYW1lLCBidWZmZXIpIHtcbiAgICAgICAgbGV0IGJhc2UgPSB0aGlzLmN1cnJlbnRQcm9ncmFtLnVuaWZvcm1CbG9ja3NbbmFtZV07XG4gICAgICAgIHRoaXMudW5pZm9ybUJ1ZmZlcnNbYmFzZV0gPSBidWZmZXI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCBudW1FbGVtZW50cyBwcm9wZXJ0eSB0byBhbGxvdyBudW1iZXIgb2YgZWxlbWVudHMgdG8gYmUgZHJhd25cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7R0xzaXplaX0gW2NvdW50PTBdIE51bWJlciBvZiBlbGVtZW50IHRvIGRyYXcsIDAgc2V0IHRvIGFsbC5cbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICBlbGVtZW50Q291bnQoY291bnQgPSAwKSB7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubnVtRWxlbWVudHMgPSBNYXRoLm1pbihjb3VudCwgdGhpcy5jdXJyZW50VmVydGV4QXJyYXkubnVtRWxlbWVudHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW1FbGVtZW50cyA9IHRoaXMuY3VycmVudFZlcnRleEFycmF5Lm51bUVsZW1lbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFNldCBudW1JbnN0YW5jZXMgcHJvcGVydHkgdG8gYWxsb3cgbnVtYmVyIG9mIGluc3RhbmNlcyBiZSBkcmF3blxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtHTHNpemVpfSBbY291bnQ9MF0gTnVtYmVyIG9mIGluc3RhbmNlIHRvIGRyYXcsIDAgc2V0IHRvIGFsbC5cbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICBpbnN0YW5jZUNvdW50KGNvdW50ID0gMCkge1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm51bUluc3RhbmNlcyA9IE1hdGgubWluKGNvdW50LCB0aGlzLmN1cnJlbnRWZXJ0ZXhBcnJheS5udW1JbnN0YW5jZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW1JbnN0YW5jZXMgPSB0aGlzLmN1cnJlbnRWZXJ0ZXhBcnJheS5udW1JbnN0YW5jZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRHJhdyBiYXNlZCBvbiBjdXJyZW50IHN0YXRlLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7RHJhd0NhbGx9IFRoZSBEcmF3Q2FsbCBvYmplY3QuXG4gICAgKi9cbiAgICBkcmF3KCkge1xuICAgICAgICBsZXQgdW5pZm9ybU5hbWVzID0gdGhpcy51bmlmb3JtTmFtZXM7XG4gICAgICAgIGxldCB1bmlmb3JtVmFsdWVzID0gdGhpcy51bmlmb3JtVmFsdWVzO1xuICAgICAgICBsZXQgdW5pZm9ybUJ1ZmZlcnMgPSB0aGlzLnVuaWZvcm1CdWZmZXJzO1xuICAgICAgICBsZXQgdW5pZm9ybUJsb2NrQ291bnQgPSB0aGlzLmN1cnJlbnRQcm9ncmFtLnVuaWZvcm1CbG9ja0NvdW50O1xuICAgICAgICBsZXQgdGV4dHVyZXMgPSB0aGlzLnRleHR1cmVzO1xuICAgICAgICBsZXQgdGV4dHVyZUNvdW50ID0gdGhpcy5jdXJyZW50UHJvZ3JhbS5zYW1wbGVyQ291bnQ7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UHJvZ3JhbS5iaW5kKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFZlcnRleEFycmF5LmJpbmQoKTtcblxuICAgICAgICBmb3IgKGxldCB1SW5kZXggPSAwOyB1SW5kZXggPCB0aGlzLnVuaWZvcm1Db3VudDsgKyt1SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2dyYW0udW5pZm9ybSh1bmlmb3JtTmFtZXNbdUluZGV4XSwgdW5pZm9ybVZhbHVlc1t1SW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGJhc2UgPSAwOyBiYXNlIDwgdW5pZm9ybUJsb2NrQ291bnQ7ICsrYmFzZSkge1xuICAgICAgICAgICAgdW5pZm9ybUJ1ZmZlcnNbYmFzZV0uYmluZChiYXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHRJbmRleCA9IDA7IHRJbmRleCA8IHRleHR1cmVDb3VudDsgKyt0SW5kZXgpIHtcbiAgICAgICAgICAgIHRleHR1cmVzW3RJbmRleF0uYmluZCh0SW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyYW5zZm9ybUZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUcmFuc2Zvcm1GZWVkYmFjay5iaW5kKCk7XG4gICAgICAgICAgICB0aGlzLmdsLmJlZ2luVHJhbnNmb3JtRmVlZGJhY2sodGhpcy5wcmltaXRpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZlcnRleEFycmF5Lmluc3RhbmNlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFZlcnRleEFycmF5LmluZGV4ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmRyYXdFbGVtZW50c0luc3RhbmNlZCh0aGlzLnByaW1pdGl2ZSwgdGhpcy5udW1FbGVtZW50cywgdGhpcy5jdXJyZW50VmVydGV4QXJyYXkuaW5kZXhUeXBlLCAwLCB0aGlzLm51bUluc3RhbmNlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0aGlzLnByaW1pdGl2ZSwgMCwgdGhpcy5udW1FbGVtZW50cywgdGhpcy5udW1JbnN0YW5jZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFZlcnRleEFycmF5LmluZGV4ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKHRoaXMucHJpbWl0aXZlLCB0aGlzLm51bUVsZW1lbnRzLCB0aGlzLmN1cnJlbnRWZXJ0ZXhBcnJheS5pbmRleFR5cGUsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKHRoaXMucHJpbWl0aXZlLCAwLCB0aGlzLm51bUVsZW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFuc2Zvcm1GZWVkYmFjaykge1xuICAgICAgICAgICAgdGhpcy5nbC5lbmRUcmFuc2Zvcm1GZWVkYmFjaygpO1xuICAgICAgICAgICAgLy8gVE9ETyhUYXJlayk6IE5lZWQgdG8gcmViaW5kIGJ1ZmZlcnMgZHVlIHRvIGJ1ZyBpbiBBTkdMRS5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGlzIHdoZW4gdGhhdCdzIGZpeGVkLlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuY3VycmVudFRyYW5zZm9ybUZlZWRiYWNrLmFuZ2xlQnVnQnVmZmVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlckJhc2UodGhpcy5nbC5UUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSLCBpLCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERyYXdDYWxsO1xuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4vKipcbiAgICBTdG9yYWdlIGZvciB2ZXJ0ZXggZGF0YS5cblxuICAgIEBjbGFzc1xuICAgIEBwcm9wIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTCBjb250ZXh0LlxuICAgIEBwcm9wIHtXZWJHTEZyYW1lYnVmZmVyfSBmcmFtZWJ1ZmZlciBIYW5kbGUgdG8gdGhlIGZyYW1lYnVmZmVyLlxuICAgIEBwcm9wIHtBcnJheX0gY29sb3JUZXh0dXJlcyBBcnJheSBvZiBjb2xvciB0ZXh0dXJlIHRhcmdldHMuXG4gICAgQHByb3Age251bWJlcn0gbnVtQ29sb3JUYXJnZXRzIE51bWJlciBvZiBjb2xvciB0ZXh0dXJlIHRhcmdldHMuXG4gICAgQHByb3Age1RleHR1cmV9IGRlcHRoVGV4dHVyZSBEZXB0aCB0ZXh0dXJlIHRhcmdldC5cbiAgICBAcHJvcCB7QXJyYXl9IGNvbG9yQXR0YWNobWVudHMgQXJyYXkgb2YgY29sb3IgYXR0YWNobWVudCBlbnVtcy5cbiAgICBAcHJvcCB7T2JqZWN0fSBhcHBTdGF0ZSBUcmFja2VkIEdMIHN0YXRlLlxuKi9cbmNsYXNzIEZyYW1lYnVmZmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsLCBhcHBTdGF0ZSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuZnJhbWVidWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgICAgICB0aGlzLmFwcFN0YXRlID0gYXBwU3RhdGU7XG5cbiAgICAgICAgdGhpcy5udW1Db2xvclRhcmdldHMgPSAwO1xuXG4gICAgICAgIHRoaXMuY29sb3JUZXh0dXJlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbG9yQXR0YWNobWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xvclRleHR1cmVUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMuZGVwdGhUZXh0dXJlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZXB0aFRleHR1cmVUYXJnZXQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBBdHRhY2ggYSBjb2xvciB0YXJnZXQgdG8gdGhpcyBmcmFtZWJ1ZmZlci5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBDb2xvciBhdHRhY2htZW50IGluZGV4LlxuICAgICAgICBAcGFyYW0ge1RleHR1cmV9IHRleHR1cmUgVGhlIHRleHR1cmUgdG8gYXR0YWNoLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW3RhcmdldF0gVGhlIHRleHR1cmUgdGFyZ2V0IG9yIGxheWVyIHRvIGF0dGFjaC4gSWYgdGhlIHRleHR1cmUgaXMgM0Qgb3IgYSB0ZXh0dXJlIGFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdHMgdG8gMCwgb3RoZXJ3aXNlIHRvIFRFWFRVUkVfMkQuXG4gICAgICAgIEByZXR1cm4ge0ZyYW1lYnVmZmVyfSBUaGUgRnJhbWVidWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgY29sb3JUYXJnZXQoaW5kZXgsIHRleHR1cmUsIHRhcmdldCA9IHRleHR1cmUuaXMzRCA/IDAgOiBDT05TVEFOVFMuVEVYVFVSRV8yRCkge1xuXG4gICAgICAgIHRoaXMuY29sb3JBdHRhY2htZW50c1tpbmRleF0gPSBDT05TVEFOVFMuQ09MT1JfQVRUQUNITUVOVDAgKyBpbmRleDtcblxuICAgICAgICBsZXQgY3VycmVudEZyYW1lYnVmZmVyID0gdGhpcy5iaW5kQW5kQ2FwdHVyZVN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5jb2xvclRleHR1cmVzW2luZGV4XSA9IHRleHR1cmU7XG4gICAgICAgIHRoaXMuY29sb3JUZXh0dXJlVGFyZ2V0c1tpbmRleF0gPSB0YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRleHR1cmUuaXMzRCkge1xuICAgICAgICAgICAgdGhpcy5nbC5mcmFtZWJ1ZmZlclRleHR1cmVMYXllcih0aGlzLmdsLkRSQVdfRlJBTUVCVUZGRVIsIHRoaXMuY29sb3JBdHRhY2htZW50c1tpbmRleF0sIHRleHR1cmUudGV4dHVyZSwgMCwgdGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkQodGhpcy5nbC5EUkFXX0ZSQU1FQlVGRkVSLCB0aGlzLmNvbG9yQXR0YWNobWVudHNbaW5kZXhdLCB0YXJnZXQsIHRleHR1cmUudGV4dHVyZSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsLmRyYXdCdWZmZXJzKHRoaXMuY29sb3JBdHRhY2htZW50cyk7XG4gICAgICAgIHRoaXMubnVtQ29sb3JUYXJnZXRzKys7XG5cbiAgICAgICAgdGhpcy5yZXN0b3JlU3RhdGUoY3VycmVudEZyYW1lYnVmZmVyKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQXR0YWNoIGEgZGVwdGggdGFyZ2V0IHRvIHRoaXMgZnJhbWVidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge1RleHR1cmV9IHRleHR1cmUgVGhlIHRleHR1cmUgdG8gYXR0YWNoLlxuICAgICAgICBAcGFyYW0ge0dMRW51bX0gW3RhcmdldF0gVGhlIHRleHR1cmUgdGFyZ2V0IG9yIGxheWVyIHRvIGF0dGFjaC4gSWYgdGhlIHRleHR1cmUgaXMgM0Qgb3IgYSB0ZXh0dXJlIGFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdHMgdG8gMCwgb3RoZXJ3aXNlIHRvIFRFWFRVUkVfMkQuXG4gICAgICAgIEByZXR1cm4ge0ZyYW1lYnVmZmVyfSBUaGUgRnJhbWVidWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgZGVwdGhUYXJnZXQodGV4dHVyZSwgdGFyZ2V0ID0gdGV4dHVyZS5pczNEID8gMCA6IENPTlNUQU5UUy5URVhUVVJFXzJEKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRGcmFtZWJ1ZmZlciA9IHRoaXMuYmluZEFuZENhcHR1cmVTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMuZGVwdGhUZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgICAgdGhpcy5kZXB0aFRleHR1cmVUYXJnZXQgPSB0YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRleHR1cmUuaXMzRCkge1xuICAgICAgICAgICAgdGhpcy5nbC5mcmFtZWJ1ZmZlclRleHR1cmVMYXllcih0aGlzLmdsLkRSQVdfRlJBTUVCVUZGRVIsIENPTlNUQU5UUy5ERVBUSF9BVFRBQ0hNRU5ULCB0ZXh0dXJlLnRleHR1cmUsIDAsIHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRoaXMuZ2wuRFJBV19GUkFNRUJVRkZFUiwgQ09OU1RBTlRTLkRFUFRIX0FUVEFDSE1FTlQsIHRhcmdldCwgdGV4dHVyZS50ZXh0dXJlLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzdG9yZVN0YXRlKGN1cnJlbnRGcmFtZWJ1ZmZlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFJlc2l6ZSBhbGwgY3VycmVudGx5IGF0dGFjaGVkIHRleHR1cmVzLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IFt3aWR0aD1hcHAud2lkdGhdIE5ldyB3aWR0aCBvZiB0aGUgZnJhbWVidWZmZXIuXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0PWFwcC5oZWlnaHRdIE5ldyBoZWlnaHQgb2YgdGhlIGZyYW1lYnVmZmVyLlxuICAgICAgICBAcmV0dXJuIHtGcmFtZWJ1ZmZlcn0gVGhlIEZyYW1lYnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIHJlc2l6ZSh3aWR0aCA9IHRoaXMuZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCBoZWlnaHQgPSB0aGlzLmdsLmRyYXdpbmdCdWZmZXJIZWlnaHQsIGRlcHRoKSB7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRGcmFtZWJ1ZmZlciA9IHRoaXMuYmluZEFuZENhcHR1cmVTdGF0ZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Db2xvclRhcmdldHM7ICsraSkge1xuICAgICAgICAgICAgdmFyIHRleHR1cmUgPSB0aGlzLmNvbG9yVGV4dHVyZXNbaV07XG4gICAgICAgICAgICB0ZXh0dXJlLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCk7XG4gICAgICAgICAgICBpZiAodGV4dHVyZS5pczNEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC5mcmFtZWJ1ZmZlclRleHR1cmVMYXllcih0aGlzLmdsLkRSQVdfRlJBTUVCVUZGRVIsIHRoaXMuY29sb3JBdHRhY2htZW50c1tpXSwgdGV4dHVyZS50ZXh0dXJlLCAwLCB0aGlzLmNvbG9yVGV4dHVyZVRhcmdldHNbaV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRoaXMuZ2wuRFJBV19GUkFNRUJVRkZFUiwgdGhpcy5jb2xvckF0dGFjaG1lbnRzW2ldLCB0aGlzLmNvbG9yVGV4dHVyZVRhcmdldHNbaV0sIHRleHR1cmUudGV4dHVyZSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZXB0aFRleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVwdGhUZXh0dXJlLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCk7XG4gICAgICAgICAgICBpZiAodGhpcy5kZXB0aFRleHR1cmUuaXMzRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wuZnJhbWVidWZmZXJUZXh0dXJlTGF5ZXIodGhpcy5nbC5EUkFXX0ZSQU1FQlVGRkVSLCBDT05TVEFOVFMuREVQVEhfQVRUQUNITUVOVCwgdGhpcy5kZXB0aFRleHR1cmUudGV4dHVyZSwgMCwgdGhpcy5kZXB0aFRleHR1cmVUYXJnZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRoaXMuZ2wuRFJBV19GUkFNRUJVRkZFUiwgQ09OU1RBTlRTLkRFUFRIX0FUVEFDSE1FTlQsIHRoaXMuZGVwdGhUZXh0dXJlVGFyZ2V0LCB0aGlzLmRlcHRoVGV4dHVyZS50ZXh0dXJlLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzdG9yZVN0YXRlKGN1cnJlbnRGcmFtZWJ1ZmZlcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERlbGV0ZSB0aGlzIGZyYW1lYnVmZmVyLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7RnJhbWVidWZmZXJ9IFRoZSBGcmFtZWJ1ZmZlciBvYmplY3QuXG4gICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lYnVmZmVyKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZUZyYW1lYnVmZmVyKHRoaXMuZnJhbWVidWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZWJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCBhcyB0aGUgZHJhdyBmcmFtZWJ1ZmZlclxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQGlnbm9yZVxuICAgICAgICBAcmV0dXJuIHtGcmFtZWJ1ZmZlcn0gVGhlIEZyYW1lYnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGJpbmRGb3JEcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5hcHBTdGF0ZS5kcmF3RnJhbWVidWZmZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRFJBV19GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZWJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLmRyYXdGcmFtZWJ1ZmZlciA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCBhcyB0aGUgcmVhZCBmcmFtZWJ1ZmZlclxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQGlnbm9yZVxuICAgICAgICBAcmV0dXJuIHtGcmFtZWJ1ZmZlcn0gVGhlIEZyYW1lYnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGJpbmRGb3JSZWFkKCkge1xuICAgICAgICBpZiAodGhpcy5hcHBTdGF0ZS5yZWFkRnJhbWVidWZmZXIgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuUkVBRF9GUkFNRUJVRkZFUiwgdGhpcy5mcmFtZWJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnJlYWRGcmFtZWJ1ZmZlciA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCBmb3IgYSBmcmFtZWJ1ZmZlciBzdGF0ZSB1cGRhdGUuXG4gICAgICAgIENhcHR1cmUgY3VycmVudCBiaW5kaW5nIHNvIHdlIGNhbiByZXN0b3JlIGl0IGxhdGVyLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQGlnbm9yZVxuICAgICAgICBAcmV0dXJuIHtGcmFtZWJ1ZmZlcn0gVGhlIEZyYW1lYnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGJpbmRBbmRDYXB0dXJlU3RhdGUoKSB7XG4gICAgICAgIGxldCBjdXJyZW50RnJhbWVidWZmZXIgPSB0aGlzLmFwcFN0YXRlLmRyYXdGcmFtZWJ1ZmZlcjtcblxuICAgICAgICBpZiAoY3VycmVudEZyYW1lYnVmZmVyICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkRSQVdfRlJBTUVCVUZGRVIsIHRoaXMuZnJhbWVidWZmZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRGcmFtZWJ1ZmZlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCByZXN0b3JlIHByZXZpb3VzIGJpbmRpbmcgYWZ0ZXIgc3RhdGUgdXBkYXRlXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAaWdub3JlXG4gICAgICAgIEByZXR1cm4ge0ZyYW1lYnVmZmVyfSBUaGUgRnJhbWVidWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgcmVzdG9yZVN0YXRlKGZyYW1lYnVmZmVyKSB7XG4gICAgICAgIGlmIChmcmFtZWJ1ZmZlciAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5EUkFXX0ZSQU1FQlVGRkVSLCBmcmFtZWJ1ZmZlciA/IGZyYW1lYnVmZmVyLmZyYW1lYnVmZmVyIDogbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGcmFtZWJ1ZmZlcjtcblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuY29uc3QgU2hhZGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbmNvbnN0IFVuaWZvcm1zID0gIF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXG5jb25zdCBTaW5nbGVDb21wb25lbnRVbmlmb3JtID0gVW5pZm9ybXMuU2luZ2xlQ29tcG9uZW50VW5pZm9ybTtcbmNvbnN0IE11bHRpTnVtZXJpY1VuaWZvcm0gPSBVbmlmb3Jtcy5NdWx0aU51bWVyaWNVbmlmb3JtO1xuY29uc3QgTXVsdGlCb29sVW5pZm9ybSA9IFVuaWZvcm1zLk11bHRpQm9vbFVuaWZvcm07XG5jb25zdCBNYXRyaXhVbmlmb3JtID0gVW5pZm9ybXMuTWF0cml4VW5pZm9ybTtcblxuLyoqXG4gICAgV2ViR0wgcHJvZ3JhbSBjb25zaXN0aW5nIG9mIGNvbXBpbGVkIGFuZCBsaW5rZWQgdmVydGV4IGFuZCBmcmFnbWVudFxuICAgIHNoYWRlcnMuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtIFRoZSBXZWJHTCBwcm9ncmFtLlxuICAgIEBwcm9wIHtib29sZWFufSB0cmFuc2Zvcm1GZWVkYmFjayBXaGV0aGVyIHRoaXMgcHJvZ3JhbSBpcyBzZXQgdXAgZm9yIHRyYW5zZm9ybSBmZWVkYmFjay5cbiAgICBAcHJvcCB7T2JqZWN0fSB1bmlmb3JtcyBNYXAgb2YgdW5pZm9ybSBuYW1lcyB0byBoYW5kbGVzLlxuICAgIEBwcm9wIHtPYmplY3R9IGFwcFN0YXRlIFRyYWNrZWQgR0wgc3RhdGUuXG4qL1xuY2xhc3MgUHJvZ3JhbSB7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCwgYXBwU3RhdGUsIHZzU291cmNlLCBmc1NvdXJjZSwgeGZvcm1GZWViYWNrVmFycykge1xuICAgICAgICBsZXQgaTtcblxuICAgICAgICBsZXQgdlNoYWRlciwgZlNoYWRlcjtcblxuICAgICAgICBsZXQgb3duVmVydGV4U2hhZGVyID0gZmFsc2U7XG4gICAgICAgIGxldCBvd25GcmFnbWVudFNoYWRlciA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIHZzU291cmNlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB2U2hhZGVyID0gbmV3IFNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnNTb3VyY2UpO1xuICAgICAgICAgICAgb3duVmVydGV4U2hhZGVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZTaGFkZXIgPSB2c1NvdXJjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZnNTb3VyY2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGZTaGFkZXIgPSBuZXcgU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZzU291cmNlKTtcbiAgICAgICAgICAgIG93bkZyYWdtZW50U2hhZGVyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZTaGFkZXIgPSBmc1NvdXJjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdlNoYWRlci5zaGFkZXIpO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZlNoYWRlci5zaGFkZXIpO1xuICAgICAgICBpZiAoeGZvcm1GZWViYWNrVmFycykge1xuICAgICAgICAgICAgZ2wudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncyhwcm9ncmFtLCB4Zm9ybUZlZWJhY2tWYXJzLCBnbC5TRVBBUkFURV9BVFRSSUJTKTtcbiAgICAgICAgfVxuICAgICAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgICAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvd25WZXJ0ZXhTaGFkZXIpIHtcbiAgICAgICAgICAgIHZTaGFkZXIuZGVsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3duRnJhZ21lbnRTaGFkZXIpIHtcbiAgICAgICAgICAgIGZTaGFkZXIuZGVsZXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMuYXBwU3RhdGUgPSBhcHBTdGF0ZTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1GZWVkYmFjayA9ICEheGZvcm1GZWViYWNrVmFycztcbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHt9O1xuICAgICAgICB0aGlzLnVuaWZvcm1CbG9ja3MgPSB7fTtcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2tDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuc2FtcGxlcnMgPSB7fTtcbiAgICAgICAgdGhpcy5zYW1wbGVyQ291bnQgPSAwO1xuXG4gICAgICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAgICAgbGV0IG51bVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpO1xuICAgICAgICBsZXQgdGV4dHVyZVVuaXQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVVuaWZvcm1zOyArK2kpIHtcbiAgICAgICAgICAgIGxldCB1bmlmb3JtSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaSk7XG4gICAgICAgICAgICBsZXQgdW5pZm9ybUhhbmRsZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLnByb2dyYW0sIHVuaWZvcm1JbmZvLm5hbWUpO1xuICAgICAgICAgICAgbGV0IFVuaWZvcm1DbGFzcyA9IG51bGw7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IHVuaWZvcm1JbmZvLnR5cGU7XG4gICAgICAgICAgICBsZXQgbnVtRWxlbWVudHMgPSB1bmlmb3JtSW5mby5zaXplO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5TQU1QTEVSXzJEOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLklOVF9TQU1QTEVSXzJEOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9TQU1QTEVSXzJEOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLlNBTVBMRVJfMkRfU0hBRE9XOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLlNBTVBMRVJfMkRfQVJSQVk6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UX1NBTVBMRVJfMkRfQVJSQVk6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfMkRfQVJSQVk6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuU0FNUExFUl8yRF9BUlJBWV9TSEFET1c6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuU0FNUExFUl9DVUJFOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLklOVF9TQU1QTEVSX0NVQkU6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfQ1VCRTpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5TQU1QTEVSX0NVQkVfU0hBRE9XOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLlNBTVBMRVJfM0Q6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UX1NBTVBMRVJfM0Q6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfM0Q6XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVVbml0ID0gdGhpcy5zYW1wbGVyQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVyc1t1bmlmb3JtSW5mby5uYW1lXSA9IHRleHR1cmVVbml0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaSh1bmlmb3JtSGFuZGxlLCB0ZXh0dXJlVW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLklOVDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVQ6XG4gICAgICAgICAgICAgICAgICAgIFVuaWZvcm1DbGFzcyA9IG51bUVsZW1lbnRzID4gMSA/IE11bHRpTnVtZXJpY1VuaWZvcm0gOiBTaW5nbGVDb21wb25lbnRVbmlmb3JtO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5CT09MOlxuICAgICAgICAgICAgICAgICAgICBVbmlmb3JtQ2xhc3MgPSBudW1FbGVtZW50cyA+IDEgPyBNdWx0aUJvb2xVbmlmb3JtIDogU2luZ2xlQ29tcG9uZW50VW5pZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfVkVDMjpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5JTlRfVkVDMjpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDMjpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9WRUMzOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLklOVF9WRUMzOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUMzOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX1ZFQzQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UX1ZFQzQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzQ6XG4gICAgICAgICAgICAgICAgICAgIFVuaWZvcm1DbGFzcyA9IE11bHRpTnVtZXJpY1VuaWZvcm07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkJPT0xfVkVDMjpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5CT09MX1ZFQzM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuQk9PTF9WRUM0OlxuICAgICAgICAgICAgICAgICAgICBVbmlmb3JtQ2xhc3MgPSBNdWx0aUJvb2xVbmlmb3JtO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyeDM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUMng0OlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDN4MjpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQzeDQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNHgyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDR4MzpcbiAgICAgICAgICAgICAgICAgICAgVW5pZm9ybUNsYXNzID0gTWF0cml4VW5pZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVucmVjb2duaXplZCB0eXBlIGZvciB1bmlmb3JtIFwiLCB1bmlmb3JtSW5mby5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVbmlmb3JtQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuaWZvcm1zW3VuaWZvcm1JbmZvLm5hbWVdID0gbmV3IFVuaWZvcm1DbGFzcyhnbCwgdW5pZm9ybUhhbmRsZSwgdHlwZSwgbnVtRWxlbWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG51bVVuaWZvcm1CbG9ja3MgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNX0JMT0NLUyk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVVuaWZvcm1CbG9ja3M7ICsraSkge1xuICAgICAgICAgICAgbGV0IGJsb2NrTmFtZSA9IGdsLmdldEFjdGl2ZVVuaWZvcm1CbG9ja05hbWUodGhpcy5wcm9ncmFtLCBpKTtcbiAgICAgICAgICAgIGxldCBibG9ja0luZGV4ID0gZ2wuZ2V0VW5pZm9ybUJsb2NrSW5kZXgodGhpcy5wcm9ncmFtLCBibG9ja05hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdW5pZm9ybUJsb2NrQmFzZSA9IHRoaXMudW5pZm9ybUJsb2NrQ291bnQrKztcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybUJsb2NrQmluZGluZyh0aGlzLnByb2dyYW0sIGJsb2NrSW5kZXgsIHVuaWZvcm1CbG9ja0Jhc2UpO1xuICAgICAgICAgICAgdGhpcy51bmlmb3JtQmxvY2tzW2Jsb2NrTmFtZV0gPSB1bmlmb3JtQmxvY2tCYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2wudXNlUHJvZ3JhbShudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRGVsZXRlIHRoaXMgcHJvZ3JhbS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1Byb2dyYW19IFRoZSBQcm9ncmFtIG9iamVjdC5cbiAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbSkge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIHZhbHVlIG9mIGEgdW5pZm9ybS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBpZ25vcmVcbiAgICAgICAgQHJldHVybiB7UHJvZ3JhbX0gVGhlIFByb2dyYW0gb2JqZWN0LlxuICAgICovXG4gICAgdW5pZm9ybShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnVuaWZvcm1zW25hbWVdLnNldCh2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gXG4gICAgLyoqXG4gICAgICAgIFVzZSB0aGlzIHByb2dyYW0uXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAaWdub3JlXG4gICAgICAgIEByZXR1cm4ge1Byb2dyYW19IFRoZSBQcm9ncmFtIG9iamVjdC5cbiAgICAqL1xuICAgIGJpbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcFN0YXRlLnByb2dyYW0gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS5wcm9ncmFtID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9ncmFtO1xuXG5cbi8qKiovIH0pLFxuLyogMTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4vLyBDbGFzc2VzIHRvIG1hbmFnZSB1bmlmb3JtIHZhbHVlIHVwZGF0ZXMsIGluY2x1ZGluZ1xuLy8gY2FjaGluZyBjdXJyZW50IHZhbHVlcy5cblxuY29uc3QgVU5JRk9STV9GVU5DX05BTUUgPSB7fTtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5CT09MXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuSU5UXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuU0FNUExFUl8yRF0gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLklOVF9TQU1QTEVSXzJEXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfMkRdID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5TQU1QTEVSXzJEX1NIQURPV10gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlNBTVBMRVJfMkRfQVJSQVldID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5JTlRfU0FNUExFUl8yRF9BUlJBWV0gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9TQU1QTEVSXzJEX0FSUkFZXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuU0FNUExFUl8yRF9BUlJBWV9TSEFET1ddID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5TQU1QTEVSX0NVQkVdID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5JTlRfU0FNUExFUl9DVUJFXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfQ1VCRV0gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlNBTVBMRVJfQ1VCRV9TSEFET1ddID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5TQU1QTEVSXzNEXSA9IFwidW5pZm9ybTFpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuSU5UX1NBTVBMRVJfM0RdID0gXCJ1bmlmb3JtMWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl8zRF0gPSBcInVuaWZvcm0xaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF0gPSBcInVuaWZvcm0xdWlcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5GTE9BVF0gPSBcInVuaWZvcm0xZlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX1ZFQzJdID0gXCJ1bmlmb3JtMmZcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5GTE9BVF9WRUMzXSA9IFwidW5pZm9ybTNmXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfVkVDNF0gPSBcInVuaWZvcm00ZlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLklOVF9WRUMyXSA9IFwidW5pZm9ybTJpXCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuSU5UX1ZFQzNdID0gXCJ1bmlmb3JtM2lcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5JTlRfVkVDNF0gPSBcInVuaWZvcm00aVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUMyXSA9IFwidW5pZm9ybTJ1aVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUMzXSA9IFwidW5pZm9ybTN1aVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUM0XSA9IFwidW5pZm9ybTR1aVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkJPT0xfVkVDMl0gPSBcInVuaWZvcm0yaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkJPT0xfVkVDM10gPSBcInVuaWZvcm0zaVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkJPT0xfVkVDNF0gPSBcInVuaWZvcm00aVwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX01BVDJdID0gXCJ1bmlmb3JtTWF0cml4MmZ2XCI7XG5VTklGT1JNX0ZVTkNfTkFNRVtDT05TVEFOVFMuRkxPQVRfTUFUM10gPSBcInVuaWZvcm1NYXRyaXgzZnZcIjtcblVOSUZPUk1fRlVOQ19OQU1FW0NPTlNUQU5UUy5GTE9BVF9NQVQ0XSA9IFwidW5pZm9ybU1hdHJpeDRmdlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX01BVDJ4M10gPSBcInVuaWZvcm1NYXRyaXgyeDNmdlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX01BVDJ4NF0gPSBcInVuaWZvcm1NYXRyaXgyeDRmdlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX01BVDN4Ml0gPSBcInVuaWZvcm1NYXRyaXgzeDJmdlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX01BVDN4NF0gPSBcInVuaWZvcm1NYXRyaXgzeDRmdlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX01BVDR4Ml0gPSBcInVuaWZvcm1NYXRyaXg0eDJmdlwiO1xuVU5JRk9STV9GVU5DX05BTUVbQ09OU1RBTlRTLkZMT0FUX01BVDR4M10gPSBcInVuaWZvcm1NYXRyaXg0eDNmdlwiO1xuXG5jb25zdCBVTklGT1JNX0NPTVBPTkVOVF9DT1VOVCA9IHt9O1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkJPT0xdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5JTlRdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5TQU1QTEVSXzJEXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuSU5UX1NBTVBMRVJfMkRdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl8yRF0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlNBTVBMRVJfMkRfU0hBRE9XXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuU0FNUExFUl8yRF9BUlJBWV0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLklOVF9TQU1QTEVSXzJEX0FSUkFZXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfMkRfQVJSQVldID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5TQU1QTEVSXzJEX0FSUkFZX1NIQURPV10gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlNBTVBMRVJfQ1VCRV0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLklOVF9TQU1QTEVSX0NVQkVdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl9DVUJFXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuU0FNUExFUl9DVUJFX1NIQURPV10gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlNBTVBMRVJfM0RdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5JTlRfU0FNUExFUl8zRF0gPSAxO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9TQU1QTEVSXzNEXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuVU5TSUdORURfSU5UXSA9IDE7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRdID0gMTtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5GTE9BVF9WRUMyXSA9IDI7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfVkVDM10gPSAzO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkZMT0FUX1ZFQzRdID0gNDtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5JTlRfVkVDMl0gPSAyO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLklOVF9WRUMzXSA9IDM7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuSU5UX1ZFQzRdID0gNDtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDMl0gPSAyO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUMzXSA9IDM7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzRdID0gNDtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5CT09MX1ZFQzJdID0gMjtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5CT09MX1ZFQzNdID0gMztcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5CT09MX1ZFQzRdID0gNDtcblVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW0NPTlNUQU5UUy5GTE9BVF9NQVQyXSA9IDQ7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfTUFUM10gPSA5O1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkZMT0FUX01BVDRdID0gMTY7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfTUFUMngzXSA9IDY7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfTUFUMng0XSA9IDg7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfTUFUM3gyXSA9IDY7XG5VTklGT1JNX0NPTVBPTkVOVF9DT1VOVFtDT05TVEFOVFMuRkxPQVRfTUFUM3g0XSA9IDEyO1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkZMT0FUX01BVDR4Ml0gPSA4O1xuVU5JRk9STV9DT01QT05FTlRfQ09VTlRbQ09OU1RBTlRTLkZMT0FUX01BVDR4M10gPSAxMjtcblxuY29uc3QgVU5JRk9STV9DQUNIRV9DTEFTUyA9IHt9O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuSU5UXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5TQU1QTEVSXzJEXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5JTlRfU0FNUExFUl8yRF0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfMkRdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlNBTVBMRVJfMkRfU0hBRE9XXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5TQU1QTEVSXzJEX0FSUkFZXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5JTlRfU0FNUExFUl8yRF9BUlJBWV0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuVU5TSUdORURfSU5UX1NBTVBMRVJfMkRfQVJSQVldID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlNBTVBMRVJfMkRfQVJSQVlfU0hBRE9XXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5TQU1QTEVSX0NVQkVdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLklOVF9TQU1QTEVSX0NVQkVdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9TQU1QTEVSX0NVQkVdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlNBTVBMRVJfQ1VCRV9TSEFET1ddID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlNBTVBMRVJfM0RdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLklOVF9TQU1QTEVSXzNEXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfU0FNUExFUl8zRF0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuVU5TSUdORURfSU5UXSA9IFVpbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuRkxPQVRdID0gRmxvYXQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuRkxPQVRfVkVDMl0gPSBGbG9hdDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5GTE9BVF9WRUMzXSA9IEZsb2F0MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLkZMT0FUX1ZFQzRdID0gRmxvYXQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuSU5UX1ZFQzJdID0gSW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLklOVF9WRUMzXSA9IEludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5JTlRfVkVDNF0gPSBJbnQzMkFycmF5O1xuVU5JRk9STV9DQUNIRV9DTEFTU1tDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzJdID0gVWludDMyQXJyYXk7XG5VTklGT1JNX0NBQ0hFX0NMQVNTW0NPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDM10gPSBVaW50MzJBcnJheTtcblVOSUZPUk1fQ0FDSEVfQ0xBU1NbQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUM0XSA9IFVpbnQzMkFycmF5O1xuXG5jbGFzcyBTaW5nbGVDb21wb25lbnRVbmlmb3JtIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihnbCwgaGFuZGxlLCB0eXBlKSB7XG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5oYW5kbGUgPSBoYW5kbGU7XG4gICAgICAgIHRoaXMuZ2xGdW5jTmFtZSA9IFVOSUZPUk1fRlVOQ19OQU1FW3R5cGVdO1xuICAgICAgICB0aGlzLmNhY2hlID0gdHlwZSA9PT0gQ09OU1RBTlRTLkJPT0wgPyBmYWxzZSA6IDA7XG4gICAgfVxuXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5nbFt0aGlzLmdsRnVuY05hbWVdKHRoaXMuaGFuZGxlLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmNhY2hlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgTXVsdGlOdW1lcmljVW5pZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCwgaGFuZGxlLCB0eXBlLCBjb3VudCkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuaGFuZGxlID0gaGFuZGxlO1xuICAgICAgICB0aGlzLmdsRnVuY05hbWUgPSBVTklGT1JNX0ZVTkNfTkFNRVt0eXBlXSArIFwidlwiO1xuICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgVU5JRk9STV9DQUNIRV9DTEFTU1t0eXBlXShVTklGT1JNX0NPTVBPTkVOVF9DT1VOVFt0eXBlXSAqIGNvdW50KTtcbiAgICB9XG5cbiAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtpXSAhPT0gdmFsdWVbaV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsW3RoaXMuZ2xGdW5jTmFtZV0odGhpcy5oYW5kbGUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlLnNldCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNsYXNzIE11bHRpQm9vbFVuaWZvcm0ge1xuXG4gICAgY29uc3RydWN0b3IoZ2wsIGhhbmRsZSwgdHlwZSwgY291bnQpIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLmhhbmRsZSA9IGhhbmRsZTtcbiAgICAgICAgdGhpcy5nbEZ1bmNOYW1lID0gVU5JRk9STV9GVU5DX05BTUVbdHlwZV0gKyBcInZcIjtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IEFycmF5KFVOSUZPUk1fQ09NUE9ORU5UX0NPVU5UW3R5cGVdICogY291bnQpLmZpbGwoZmFsc2UpO1xuICAgIH1cblxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhY2hlW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xbdGhpcy5nbEZ1bmNOYW1lXSh0aGlzLmhhbmRsZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtqXSA9IHZhbHVlW2pdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY2xhc3MgTWF0cml4VW5pZm9ybSB7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCwgaGFuZGxlLCB0eXBlLCBjb3VudCkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuaGFuZGxlID0gaGFuZGxlO1xuICAgICAgICB0aGlzLmdsRnVuY05hbWUgPSBVTklGT1JNX0ZVTkNfTkFNRVt0eXBlXTtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IEZsb2F0MzJBcnJheShVTklGT1JNX0NPTVBPTkVOVF9DT1VOVFt0eXBlXSAqIGNvdW50KTtcbiAgICB9XG5cbiAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtpXSAhPT0gdmFsdWVbaV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsW3RoaXMuZ2xGdW5jTmFtZV0odGhpcy5oYW5kbGUsIGZhbHNlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZS5zZXQodmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cy5TaW5nbGVDb21wb25lbnRVbmlmb3JtID0gU2luZ2xlQ29tcG9uZW50VW5pZm9ybTtcbm1vZHVsZS5leHBvcnRzLk11bHRpTnVtZXJpY1VuaWZvcm0gPSBNdWx0aU51bWVyaWNVbmlmb3JtO1xubW9kdWxlLmV4cG9ydHMuTXVsdGlCb29sVW5pZm9ybSA9IE11bHRpQm9vbFVuaWZvcm07XG5tb2R1bGUuZXhwb3J0cy5NYXRyaXhVbmlmb3JtID0gTWF0cml4VW5pZm9ybTtcblxuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUYXJlayBTaGVyaWZcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuY29uc3QgQ09OU1RBTlRTID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbmNvbnN0IFRFWFRVUkVfRk9STUFUX0RFRkFVTFRTID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuY29uc3QgRFVNTVlfQVJSQVkgPSBuZXcgQXJyYXkoMSk7XG5cbi8qKlxuICAgIEdlbmVyYWwtcHVycG9zZSB0ZXh0dXJlLlxuXG4gICAgQGNsYXNzXG4gICAgQHByb3Age1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHQuXG4gICAgQHByb3Age1dlYkdMVGV4dHVyZX0gdGV4dHVyZSBIYW5kbGUgdG8gdGhlIHRleHR1cmUuXG4gICAgQHByb3Age1dlYkdMU2FtbGVyfSBzYW1wbGVyIFNhbXBsZXIgb2JqZWN0LlxuICAgIEBwcm9wIHtHTEVudW19IGJpbmRpbmcgQmluZGluZyBwb2ludCBmb3IgdGhlIHRleHR1cmUuXG4gICAgQHByb3Age0dMRW51bX0gdHlwZSBUeXBlIG9mIGRhdGEgc3RvcmVkIGluIHRoZSB0ZXh0dXJlLlxuICAgIEBwcm9wIHtHTEVudW19IGZvcm1hdCBMYXlvdXQgb2YgdGV4dHVyZSBkYXRhLlxuICAgIEBwcm9wIHtHTEVudW19IGludGVybmFsRm9ybWF0IEludGVybmFsIGFycmFuZ2VtZW50IG9mIHRoZSB0ZXh0dXJlIGRhdGEuXG4gICAgQHByb3Age251bWJlcn0gY3VycmVudFVuaXQgVGhlIGN1cnJlbnQgdGV4dHVyZSB1bml0IHRoaXMgdGV4dHVyZSBpcyBib3VuZCB0by5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gaXMzRCBXaGV0aGVyIHRoaXMgdGV4dHVyZSBjb250YWlucyAzRCBkYXRhLlxuICAgIEBwcm9wIHtib29sZWFufSBmbGlwWSBXaGV0aGVyIHRoZSB5LWF4aXMgaXMgYmVpbmcgZmxpcHBlZCBmb3IgdGhpcyB0ZXh0dXJlLlxuICAgIEBwcm9wIHtib29sZWFufSBtaXBtYXBzIFdoZXRoZXIgdGhpcyB0ZXh0dXJlIGlzIHVzaW5nIG1pcG1hcCBmaWx0ZXJpbmcgXG4gICAgICAgIChhbmQgdGh1cyBzaG91bGQgaGF2ZSBhIGNvbXBsZXRlIG1pcG1hcCBjaGFpbikuXG4gICAgQHByb3Age09iamVjdH0gYXBwU3RhdGUgVHJhY2tlZCBHTCBzdGF0ZS5cbiovXG5jbGFzcyBUZXh0dXJlIHtcbiAgICBjb25zdHJ1Y3RvcihnbCwgYXBwU3RhdGUsIGJpbmRpbmcsIGltYWdlLCB3aWR0aCA9IGltYWdlLndpZHRoLCBoZWlnaHQgPSBpbWFnZS5oZWlnaHQsIGRlcHRoLCBpczNELCBvcHRpb25zID0gQ09OU1RBTlRTLkRVTU1ZX09CSkVDVCkge1xuICAgICAgICBsZXQgZGVmYXVsdFR5cGUgPSBvcHRpb25zLmZvcm1hdCA9PT0gQ09OU1RBTlRTLkRFUFRIX0NPTVBPTkVOVCA/IENPTlNUQU5UUy5VTlNJR05FRF9TSE9SVCA6IENPTlNUQU5UUy5VTlNJR05FRF9CWVRFO1xuXG4gICAgICAgIHRoaXMuZ2wgPSBnbDtcbiAgICAgICAgdGhpcy5iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbnVsbDtcbiAgICAgICAgdGhpcy53aWR0aCA9IC0xO1xuICAgICAgICB0aGlzLmhlaWdodCA9IC0xO1xuICAgICAgICB0aGlzLmRlcHRoID0gLTE7XG4gICAgICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy50eXBlIDogZGVmYXVsdFR5cGU7XG4gICAgICAgIHRoaXMuaXMzRCA9IGlzM0Q7XG4gICAgICAgIHRoaXMuYXBwU3RhdGUgPSBhcHBTdGF0ZTtcblxuICAgICAgICB0aGlzLmZvcm1hdCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxGb3JtYXQgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXByZXNzZWQgPSAhIShURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW29wdGlvbnMuZm9ybWF0XSB8fCBURVhUVVJFX0ZPUk1BVF9ERUZBVUxUUy5DT01QUkVTU0VEX1RZUEVTW29wdGlvbnMuaW50ZXJuYWxGb3JtYXRdKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmNvbXByZXNzZWQpIHtcbiAgICAgICAgICAgIC8vIEZvciBjb21wcmVzc2VkIHRleHR1cmVzLCBqdXN0IG5lZWQgdG8gcHJvdmlkZSBvbmUgb2YgZm9ybWF0LCBpbnRlcm5hbEZvcm1hdC5cbiAgICAgICAgICAgIC8vIFRoZSBvdGhlciB3aWxsIGJlIHRoZSBzYW1lLlxuICAgICAgICAgICAgdGhpcy5mb3JtYXQgPSBvcHRpb25zLmZvcm1hdCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5mb3JtYXQgOiBvcHRpb25zLmludGVybmFsRm9ybWF0O1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgOiBvcHRpb25zLmZvcm1hdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZm9ybWF0IDogZ2wuUkdCQTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0ICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmludGVybmFsRm9ybWF0IDogVEVYVFVSRV9GT1JNQVRfREVGQVVMVFNbdGhpcy50eXBlXVt0aGlzLmZvcm1hdF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtMSBpbmRpY2F0ZXMgdW5ib3VuZFxuICAgICAgICB0aGlzLmN1cnJlbnRVbml0ID0gLTE7XG5cbiAgICAgICAgLy8gU2FtcGxpbmcgcGFyYW1ldGVyc1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgbWluRmlsdGVyID0gaW1hZ2UgPyBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1QgOiBnbC5ORUFSRVNULFxuICAgICAgICAgICAgbWFnRmlsdGVyID0gaW1hZ2UgPyBnbC5MSU5FQVIgOiBnbC5ORUFSRVNULFxuICAgICAgICAgICAgd3JhcFMgPSBnbC5SRVBFQVQsXG4gICAgICAgICAgICB3cmFwVCA9IGdsLlJFUEVBVCxcbiAgICAgICAgICAgIHdyYXBSID0gZ2wuUkVQRUFULFxuICAgICAgICAgICAgY29tcGFyZU1vZGUgPSBnbC5OT05FLFxuICAgICAgICAgICAgY29tcGFyZUZ1bmMgPSBnbC5MRVFVQUwsXG4gICAgICAgICAgICBtaW5MT0QgPSBudWxsLFxuICAgICAgICAgICAgbWF4TE9EID0gbnVsbCxcbiAgICAgICAgICAgIGJhc2VMZXZlbCA9IG51bGwsXG4gICAgICAgICAgICBtYXhMZXZlbCA9IG51bGwsXG4gICAgICAgICAgICBmbGlwWSA9IGZhbHNlXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIHRoaXMubWluRmlsdGVyID0gbWluRmlsdGVyO1xuICAgICAgICB0aGlzLm1hZ0ZpbHRlciA9IG1hZ0ZpbHRlcjtcbiAgICAgICAgdGhpcy53cmFwUyA9IHdyYXBTO1xuICAgICAgICB0aGlzLndyYXBUID0gd3JhcFQ7XG4gICAgICAgIHRoaXMud3JhcFIgPSB3cmFwUjtcbiAgICAgICAgdGhpcy5jb21wYXJlTW9kZSA9IGNvbXBhcmVNb2RlO1xuICAgICAgICB0aGlzLmNvbXBhcmVGdW5jID0gY29tcGFyZUZ1bmM7XG4gICAgICAgIHRoaXMubWluTE9EID0gbWluTE9EO1xuICAgICAgICB0aGlzLm1heExPRCA9IG1heExPRDtcbiAgICAgICAgdGhpcy5iYXNlTGV2ZWwgPSBiYXNlTGV2ZWw7XG4gICAgICAgIHRoaXMubWF4TGV2ZWwgPSBtYXhMZXZlbDtcbiAgICAgICAgdGhpcy5mbGlwWSA9IGZsaXBZO1xuICAgICAgICB0aGlzLm1pcG1hcHMgPSAobWluRmlsdGVyID09PSBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1QgfHwgbWluRmlsdGVyID09PSBnbC5MSU5FQVJfTUlQTUFQX0xJTkVBUik7XG5cbiAgICAgICAgdGhpcy5yZXNpemUod2lkdGgsIGhlaWdodCwgZGVwdGgpO1xuXG4gICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhKGltYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBSZS1hbGxvY2F0ZSB0ZXh0dXJlIHN0b3JhZ2UuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge251bWJlcn0gd2lkdGggSW1hZ2Ugd2lkdGguXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSW1hZ2UgaGVpZ2h0LlxuICAgICAgICBAcGFyYW0ge251bWJlcn0gW2RlcHRoXSBJbWFnZSBkZXB0aCBvciBudW1iZXIgb2YgaW1hZ2VzLiBSZXF1aXJlZCB3aGVuIHBhc3NpbmcgM0Qgb3IgdGV4dHVyZSBhcnJheSBkYXRhLlxuICAgICAgICBAcmV0dXJuIHtUZXh0dXJlfSBUaGUgVGV4dHVyZSBvYmplY3QuXG4gICAgKi9cbiAgICByZXNpemUod2lkdGgsIGhlaWdodCwgZGVwdGgpIHtcbiAgICAgICAgZGVwdGggPSBkZXB0aCB8fCAwO1xuXG4gICAgICAgIGlmICh3aWR0aCA9PT0gdGhpcy53aWR0aCAmJiBoZWlnaHQgPT09IHRoaXMuaGVpZ2h0ICYmIGRlcHRoID09PSB0aGlzLmRlcHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpczsgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy50ZXh0dXJlKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFVuaXQgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnRleHR1cmVzW3RoaXMuY3VycmVudFVuaXRdID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgICAgICB0aGlzLmJpbmQoTWF0aC5tYXgodGhpcy5jdXJyZW50VW5pdCwgMCkpO1xuXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcblxuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5iaW5kaW5nLCB0aGlzLmdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgdGhpcy5taW5GaWx0ZXIpO1xuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5iaW5kaW5nLCB0aGlzLmdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgdGhpcy5tYWdGaWx0ZXIpO1xuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5iaW5kaW5nLCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9TLCB0aGlzLndyYXBTKTtcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuYmluZGluZywgdGhpcy5nbC5URVhUVVJFX1dSQVBfVCwgdGhpcy53cmFwVCk7XG4gICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmJpbmRpbmcsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1IsIHRoaXMud3JhcFIpO1xuICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5iaW5kaW5nLCB0aGlzLmdsLlRFWFRVUkVfQ09NUEFSRV9GVU5DLCB0aGlzLmNvbXBhcmVGdW5jKTtcbiAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuYmluZGluZywgdGhpcy5nbC5URVhUVVJFX0NPTVBBUkVfTU9ERSwgdGhpcy5jb21wYXJlTW9kZSk7XG4gICAgICAgIHRoaXMuZ2wucGl4ZWxTdG9yZWkodGhpcy5nbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0aGlzLmZsaXBZKTtcbiAgICAgICAgaWYgKHRoaXMubWluTE9EICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmYodGhpcy5iaW5kaW5nLCB0aGlzLmdsLlRFWFRVUkVfTUlOX0xPRCwgdGhpcy5taW5MT0QpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heExPRCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJmKHRoaXMuYmluZGluZywgdGhpcy5nbC5URVhUVVJFX01BWF9MT0QsIHRoaXMubWF4TE9EKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iYXNlTGV2ZWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmJpbmRpbmcsIHRoaXMuZ2wuVEVYVFVSRV9CQVNFX0xFVkVMLCB0aGlzLmJhc2VMZXZlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYXhMZXZlbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuYmluZGluZywgdGhpcy5nbC5URVhUVVJFX01BWF9MRVZFTCwgdGhpcy5tYXhMZXZlbCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGV2ZWxzO1xuICAgICAgICBpZiAodGhpcy5pczNEKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5taXBtYXBzKSB7XG4gICAgICAgICAgICAgICAgbGV2ZWxzID0gTWF0aC5mbG9vcihNYXRoLmxvZzIoTWF0aC5tYXgoTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpLCB0aGlzLmRlcHRoKSkpICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV2ZWxzID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2wudGV4U3RvcmFnZTNEKHRoaXMuYmluZGluZywgbGV2ZWxzLCB0aGlzLmludGVybmFsRm9ybWF0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgdGhpcy5kZXB0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5taXBtYXBzKSB7XG4gICAgICAgICAgICAgICAgbGV2ZWxzID0gTWF0aC5mbG9vcihNYXRoLmxvZzIoTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKSkgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXZlbHMgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nbC50ZXhTdG9yYWdlMkQodGhpcy5iaW5kaW5nLCBsZXZlbHMsIHRoaXMuaW50ZXJuYWxGb3JtYXQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBTZXQgdGhlIGltYWdlIGRhdGEgZm9yIHRoZSB0ZXh0dXJlLiBBbiBhcnJheSBjYW4gYmUgcGFzc2VkIHRvIG1hbnVhbGx5IHNldCBhbGwgbGV2ZWxzIFxuICAgICAgICBvZiB0aGUgbWlwbWFwIGNoYWluLiBJZiBhIHNpbmdsZSBsZXZlbCBpcyBwYXNzZWQgYW5kIG1pcG1hcCBmaWx0ZXJpbmcgaXMgYmVpbmcgdXNlZCxcbiAgICAgICAgZ2VuZXJhdGVNaXBtYXAoKSB3aWxsIGJlIGNhbGxlZCB0byBwcm9kdWNlIHRoZSByZW1haW5pbmcgbGV2ZWxzLlxuICAgICAgICBOT1RFOiB0aGUgZGF0YSBtdXN0IGZpdCB0aGUgY3VycmVudGx5LWFsbG9jYXRlZCBzdG9yYWdlIVxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtJbWFnZUVsZW1lbnR8QXJyYXlCdWZmZXJWaWV3fEFycmF5fSBkYXRhIEltYWdlIGRhdGEuIElmIGFuIGFycmF5IGlzIHBhc3NlZCwgaXQgd2lsbCBiZSBcbiAgICAgICAgICAgIHVzZWQgdG8gc2V0IG1pcCBtYXAgbGV2ZWxzLlxuICAgICAgICBAcmV0dXJuIHtUZXh0dXJlfSBUaGUgVGV4dHVyZSBvYmplY3QuXG4gICAgKi9cbiAgICBkYXRhKGRhdGEpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBEVU1NWV9BUlJBWVswXSA9IGRhdGE7XG4gICAgICAgICAgICBkYXRhID0gRFVNTVlfQVJSQVk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbnVtTGV2ZWxzID0gdGhpcy5taXBtYXBzID8gZGF0YS5sZW5ndGggOiAxO1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgIGxldCBkZXB0aCA9IHRoaXMuZGVwdGg7XG4gICAgICAgIGxldCBnZW5lcmF0ZU1pcG1hcHMgPSB0aGlzLm1pcG1hcHMgJiYgZGF0YS5sZW5ndGggPT09IDE7XG4gICAgICAgIGxldCBpO1xuXG4gICAgICAgIHRoaXMuYmluZChNYXRoLm1heCh0aGlzLmN1cnJlbnRVbml0LCAwKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcHJlc3NlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXMzRCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1MZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsLmNvbXByZXNzZWRUZXhTdWJJbWFnZTNEKHRoaXMuYmluZGluZywgaSwgMCwgMCwgMCwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHRoaXMuZm9ybWF0LCBkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCA+PiAxLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0ID4+IDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICBkZXB0aCA9IE1hdGgubWF4KGRlcHRoID4+IDEsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bUxldmVsczsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2wuY29tcHJlc3NlZFRleFN1YkltYWdlMkQodGhpcy5iaW5kaW5nLCBpLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCB0aGlzLmZvcm1hdCwgZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGggPj4gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCA+PiAxLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pczNEKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtTGV2ZWxzOyArK2kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnRleFN1YkltYWdlM0QodGhpcy5iaW5kaW5nLCBpLCAwLCAwLCAwLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCA+PiAxLCAxKTtcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQgPj4gMSwgMSk7XG4gICAgICAgICAgICAgICAgZGVwdGggPSBNYXRoLm1heChkZXB0aCA+PiAxLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1MZXZlbHM7ICsraSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudGV4U3ViSW1hZ2UyRCh0aGlzLmJpbmRpbmcsIGksIDAsIDAsIHdpZHRoLCBoZWlnaHQsIHRoaXMuZm9ybWF0LCB0aGlzLnR5cGUsIGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGggPj4gMSwgMSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0ID4+IDEsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdlbmVyYXRlTWlwbWFwcykge1xuICAgICAgICAgICAgdGhpcy5nbC5nZW5lcmF0ZU1pcG1hcCh0aGlzLmJpbmRpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERlbGV0ZSB0aGlzIHRleHR1cmUuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtUZXh0dXJlfSBUaGUgVGV4dHVyZSBvYmplY3QuXG4gICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnRleHR1cmUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLnRleHR1cmUpO1xuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFVuaXQgIT09IC0xICYmIHRoaXMuYXBwU3RhdGUudGV4dHVyZXNbdGhpcy5jdXJyZW50VW5pdF0gPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnRleHR1cmVzW3RoaXMuY3VycmVudFVuaXRdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVbml0ID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCB0aGlzIHRleHR1cmUgdG8gYSB0ZXh0dXJlIHVuaXQuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAaWdub3JlXG4gICAgICAgIEByZXR1cm4ge1RleHR1cmV9IFRoZSBUZXh0dXJlIG9iamVjdC5cbiAgICAqL1xuICAgIGJpbmQodW5pdCkge1xuICAgICAgICBsZXQgY3VycmVudFRleHR1cmUgPSB0aGlzLmFwcFN0YXRlLnRleHR1cmVzW3VuaXRdO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRUZXh0dXJlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGV4dHVyZS5jdXJyZW50VW5pdCA9IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VW5pdCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnRleHR1cmVzW3RoaXMuY3VycmVudFVuaXRdID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTAgKyB1bml0KTtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5iaW5kaW5nLCB0aGlzLnRleHR1cmUpO1xuXG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnRleHR1cmVzW3VuaXRdID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVuaXQgPSB1bml0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZTtcblxuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUYXJlayBTaGVyaWZcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuY29uc3QgQ09OU1RBTlRTID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbmNvbnN0IFF1ZXJ5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxuLyoqXG4gICAgUmVuZGVyaW5nIHRpbWVyLlxuXG4gICAgQGNsYXNzXG4gICAgQHByb3Age1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHQuXG4gICAgQHByb3Age09iamVjdH0gY3B1VGltZXIgVGltZXIgZm9yIENQVS4gV2lsbCBiZSB3aW5kb3cucGVyZm9ybWFuY2UsIGlmIGF2YWlsYWJsZSwgb3Igd2luZG93LkRhdGUuXG4gICAgQHByb3Age2Jvb2xlYW59IGdwdVRpbWVyIFdoZXRoZXIgdGhlIGdwdSB0aW1pbmcgaXMgYXZhaWxhYmxlIChFWFRfZGlzam9pbnRfdGltZXJfcXVlcnlfd2ViZ2wyIG9yXG4gICAgICAgICAgICBFWFRfZGlzam9pbnRfdGltZXJfcXVlcnkgYXJlIHN1cHBvcnRlZCkuXG4gICAgQHByb3Age1dlYkdMUXVlcnl9IGdwdVRpbWVyUXVlcnkgVGltZXIgcXVlcnkgb2JqZWN0IGZvciBHUFUgKGlmIGdwdSB0aW1pbmcgaXMgc3VwcG9ydGVkKS5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gZ3B1VGltZXJRdWVyeUluUHJvZ3Jlc3MgV2hldGhlciBhIGdwdSB0aW1lciBxdWVyeSBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAgQHByb3Age251bWJlcn0gY3B1U3RhcnRUaW1lIFdoZW4gdGhlIGxhc3QgQ1BVIHRpbWluZyBzdGFydGVkLlxuICAgIEBwcm9wIHtudW1iZXJ9IGNwdVRpbWUgVGltZSBzcGVudCBvbiBDUFUgZHVyaW5nIGxhc3QgdGltaW5nLiBPbmx5IHZhbGlkIGlmIHJlYWR5KCkgcmV0dXJucyB0cnVlLlxuICAgIEBwcm9wIHtudW1iZXJ9IGdwdVRpbWUgVGltZSBzcGVudCBvbiBHUFUgZHVyaW5nIGxhc3QgdGltaW5nLiBPbmx5IHZhbGlkIGlmIHJlYWR5KCkgcmV0dXJucyB0cnVlLlxuICAgICAgICAgICAgV2lsbCByZW1haW4gMCBpZiBleHRlbnNpb24gRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5X3dlYmdsMiBpcyB1bmF2YWlsYWJsZS5cbiovXG5jbGFzcyBUaW1lciB7XG5cbiAgICBjb25zdHJ1Y3RvcihnbCkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuY3B1VGltZXIgPSB3aW5kb3cucGVyZm9ybWFuY2UgfHwgd2luZG93LkRhdGU7XG5cbiAgICAgICAgLy8gTm90ZShUYXJlayk6IEZpcmVmb3ggZm9yIHNvbWUgcmVhc29uIG9ubHkgc3VwcG9ydHMgRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5LCBzbyBoYXZlIHRvIHRyeSBib3RoXG4gICAgICAgIHZhciBncHVUaW1lckV4dGVuc2lvbiA9IHRoaXMuZ2wuZ2V0RXh0ZW5zaW9uKFwiRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5X3dlYmdsMlwiKSB8fCB0aGlzLmdsLmdldEV4dGVuc2lvbihcIkVYVF9kaXNqb2ludF90aW1lcl9xdWVyeVwiKTtcbiAgICAgICAgaWYgKGdwdVRpbWVyRXh0ZW5zaW9uKSB7XG4gICAgICAgICAgICB0aGlzLmdwdVRpbWVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ3B1VGltZXJRdWVyeSA9IG5ldyBRdWVyeSh0aGlzLmdsLCBDT05TVEFOVFMuVElNRV9FTEFQU0VEX0VYVCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdwdVRpbWVyID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdwdVRpbWVyUXVlcnkgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jcHVTdGFydFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmNwdVRpbWUgPSAwO1xuICAgICAgICB0aGlzLmdwdVRpbWUgPSAwO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICAgIFN0YXJ0IHRpbWluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1RpbWVyfSBUaGUgVGltZXIgb2JqZWN0LlxuICAgICovXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdwdVRpbWVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3B1VGltZXJRdWVyeS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdwdVRpbWVyUXVlcnkuYmVnaW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNwdVN0YXJ0VGltZSA9IHRoaXMuY3B1VGltZXIubm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNwdVN0YXJ0VGltZSA9IHRoaXMuY3B1VGltZXIubm93KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAgICBTdG9wIHRpbWluZy5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1RpbWVyfSBUaGUgVGltZXIgb2JqZWN0LlxuICAgICovXG4gICAgZW5kKCkge1xuICAgICAgICBpZiAodGhpcy5ncHVUaW1lcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdwdVRpbWVyUXVlcnkuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncHVUaW1lclF1ZXJ5LmVuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3B1VGltZSA9IHRoaXMuY3B1VGltZXIubm93KCkgLSB0aGlzLmNwdVN0YXJ0VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3B1VGltZSA9IHRoaXMuY3B1VGltZXIubm93KCkgLSB0aGlzLmNwdVN0YXJ0VGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBDaGVjayBpZiB0aW1pbmcgcmVzdWx0cyBhcmUgYXZhaWxhYmxlLiBJZlxuICAgICAgICB0aGlzIG1ldGhvZCByZXR1cm5zIHRydWUsIHRoZSBjcHVUaW1lIGFuZFxuICAgICAgICBncHVUaW1lIHByb3BlcnRpZXMgd2lsbCBiZSBzZXQgdG8gdmFsaWRcbiAgICAgICAgdmFsdWVzLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7Ym9vbGVhbn0gSWYgcmVzdWx0cyBhcmUgYXZhaWxhYmxlLlxuICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmdwdVRpbWVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ3B1VGltZXJRdWVyeS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBncHVUaW1lckF2YWlsYWJsZSA9IHRoaXMuZ3B1VGltZXJRdWVyeS5yZWFkeSgpO1xuICAgICAgICAgICAgdmFyIGdwdVRpbWVyRGlzam9pbnQgPSB0aGlzLmdsLmdldFBhcmFtZXRlcihDT05TVEFOVFMuR1BVX0RJU0pPSU5UX0VYVCk7XG5cbiAgICAgICAgICAgIGlmIChncHVUaW1lckF2YWlsYWJsZSAmJiAhZ3B1VGltZXJEaXNqb2ludCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3B1VGltZSA9IHRoaXMuZ3B1VGltZXJRdWVyeS5yZXN1bHQgIC8gMTAwMDAwMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5jcHVTdGFydFRpbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRGVsZXRlIHRoaXMgdGltZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtUaW1lcn0gVGhlIFRpbWVyIG9iamVjdC5cbiAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3B1VGltZXJRdWVyeSkge1xuICAgICAgICAgICAgdGhpcy5ncHVUaW1lclF1ZXJ5LmRlbGV0ZSgpO1xuICAgICAgICAgICAgdGhpcy5ncHVUaW1lclF1ZXJ5ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ3B1VGltZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVyO1xuXG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG4vKipcbiAgICBUcmFuZm9ybSBmZWVkYmFjayBvYmplY3QuXG5cbiAgICBAY2xhc3NcbiAgICBAcHJvcCB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0wgY29udGV4dC5cbiAgICBAcHJvcCB7V2ViR0xUcmFuc2Zvcm1GZWVkYmFja30gdHJhbnNmb3JtRmVlZGJhY2sgVHJhbnNmb3JtIGZlZWRiYWNrIG9iamVjdC5cbiAgICBAcHJvcCB7T2JqZWN0fSBhcHBTdGF0ZSBUcmFja2VkIEdMIHN0YXRlLlxuKi9cbmNsYXNzIFRyYW5zZm9ybUZlZWRiYWNrIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsLCBhcHBTdGF0ZSkge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRmVlZGJhY2sgPSBnbC5jcmVhdGVUcmFuc2Zvcm1GZWVkYmFjaygpO1xuICAgICAgICB0aGlzLmFwcFN0YXRlID0gYXBwU3RhdGU7XG5cbiAgICAgICAgLy8gVE9ETyhUYXJlayk6IE5lZWQgdG8gcmViaW5kIGJ1ZmZlcnMgZHVlIHRvIGJ1ZyBpbiBBTkdMRS5cbiAgICAgICAgLy8gUmVtb3ZlIHRoaXMgd2hlbiB0aGF0J3MgZml4ZWQuXG4gICAgICAgIHRoaXMuYW5nbGVCdWdCdWZmZXJzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgYSBmZWVkYmFjayBidWZmZXIgdG8gY2FwdHVyZSB0cmFuc2Zvcm0gb3V0cHV0LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IG9mIHRyYW5zZm9ybSBmZWVkYmFjayB2YXJ5aW5nIHRvIGNhcHR1cmUuXG4gICAgICAgIEBwYXJhbSB7VmVydGV4QnVmZmVyfSBidWZmZXIgQnVmZmVyIHRvIHJlY29yZCBvdXRwdXQgaW50by5cbiAgICAgICAgQHJldHVybiB7VHJhbnNmb3JtRmVlZGJhY2t9IFRoZSBUcmFuc2Zvcm1GZWVkYmFjayBvYmplY3QuXG4gICAgKi9cbiAgICBmZWVkYmFja0J1ZmZlcihpbmRleCwgYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRyYW5zZm9ybUZlZWRiYWNrKHRoaXMuZ2wuVFJBTlNGT1JNX0ZFRURCQUNLLCB0aGlzLnRyYW5zZm9ybUZlZWRiYWNrKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyQmFzZSh0aGlzLmdsLlRSQU5TRk9STV9GRUVEQkFDS19CVUZGRVIsIGluZGV4LCBidWZmZXIuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kVHJhbnNmb3JtRmVlZGJhY2sodGhpcy5nbC5UUkFOU0ZPUk1fRkVFREJBQ0ssIG51bGwpO1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXJCYXNlKHRoaXMuZ2wuVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUiwgaW5kZXgsIG51bGwpO1xuXG4gICAgICAgIHRoaXMuYW5nbGVCdWdCdWZmZXJzW2luZGV4XSA9IGJ1ZmZlcjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRGVsZXRlIHRoaXMgdHJhbnNmb3JtIGZlZWRiYWNrLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7VHJhbnNmb3JtRmVlZGJhY2t9IFRoZSBUcmFuc2Zvcm1GZWVkYmFjayBvYmplY3QuXG4gICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zZm9ybUZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRyYW5zZm9ybUZlZWRiYWNrKHRoaXMudHJhbnNmb3JtRmVlZGJhY2spO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1GZWVkYmFjayA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCB0aGlzIHRyYW5zZm9ybSBmZWVkYmFjay5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBpZ25vcmVcbiAgICAgICAgQHJldHVybiB7VHJhbnNmb3JtRmVlZGJhY2t9IFRoZSBUcmFuc2Zvcm1GZWVkYmFjayBvYmplY3QuXG4gICAgKi9cbiAgICBiaW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hcHBTdGF0ZS50cmFuc2Zvcm1GZWVkYmFjayAhPT0gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVHJhbnNmb3JtRmVlZGJhY2sodGhpcy5nbC5UUkFOU0ZPUk1fRkVFREJBQ0ssIHRoaXMudHJhbnNmb3JtRmVlZGJhY2spO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5hbmdsZUJ1Z0J1ZmZlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXJCYXNlKHRoaXMuZ2wuVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUiwgaSwgdGhpcy5hbmdsZUJ1Z0J1ZmZlcnNbaV0uYnVmZmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS50cmFuc2Zvcm1GZWVkYmFjayA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc2Zvcm1GZWVkYmFjaztcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUYXJlayBTaGVyaWZcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mXG4vLyB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluXG4vLyB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvXG4vLyB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZlxuLy8gdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLFxuLy8gc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTXG4vLyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1Jcbi8vIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUlxuLy8gSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU5cbi8vIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuY29uc3QgQ09OU1RBTlRTID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuLyoqXG4gICAgU3RvcmFnZSBmb3IgdW5pZm9ybSBkYXRhLiBEYXRhIGlzIHN0b3JlZCBpbiBzdGQxNDAgbGF5b3V0LlxuXG4gICAgQGNsYXNzXG4gICAgQHByb3Age1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHQuXG4gICAgQHByb3Age1dlYkdMQnVmZmVyfSBidWZmZXIgQWxsb2NhdGVkIGJ1ZmZlciBzdG9yYWdlLlxuICAgIEBwcm9wIHtGbG9hdDMyQXJyYXl9IGRhdGEgQnVmZmVyIGRhdGEuXG4gICAgQHByb3Age09iamVjdH0gZGF0YVZpZXdzIE1hcCBvZiBiYXNlIGRhdGEgdHlwZXMgdG8gbWF0Y2hpbmcgQXJyYXlCdWZmZXJWaWV3cyBvZiB0aGUgYnVmZmVyIGRhdGEuXG4gICAgQHByb3Age0FycmF5fSBvZmZzZXRzIE9mZnNldHMgaW50byB0aGUgYXJyYXkgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYnVmZmVyLlxuICAgIEBwcm9wIHtBcnJheX0gc2l6ZXMgU2l6ZSBvZiB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gb2Zmc2V0LlxuICAgIEBwcm9wIHtBcnJheX0gdHlwZXMgVGhlIGJhc2UgdHlwZSBvZiB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gb2Zmc2V0IChGTE9BVCwgSU5UIG9yIFVOU0lHTkVEX0lOVCkuXG4gICAgQHByb3Age251bWJlcn0gc2l6ZSBUaGUgc2l6ZSBvZiB0aGUgYnVmZmVyIChpbiA0LWJ5dGUgaXRlbXMpLlxuICAgIEBwcm9wIHtHTEVudW19IHVzYWdlIFVzYWdlIHBhdHRlcm4gb2YgdGhlIGJ1ZmZlci5cbiovXG5jbGFzcyBVbmlmb3JtQnVmZmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsLCBhcHBTdGF0ZSwgbGF5b3V0LCB1c2FnZSA9IGdsLkRZTkFNSUNfRFJBVykge1xuICAgICAgICB0aGlzLmdsID0gZ2w7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgIHRoaXMuZGF0YVZpZXdzID0ge307XG4gICAgICAgIHRoaXMub2Zmc2V0cyA9IG5ldyBBcnJheShsYXlvdXQubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5zaXplcyA9IG5ldyBBcnJheShsYXlvdXQubGVuZ3RoKTtcbiAgICAgICAgdGhpcy50eXBlcyA9IG5ldyBBcnJheShsYXlvdXQubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5zaXplID0gMDtcbiAgICAgICAgdGhpcy51c2FnZSA9IHVzYWdlO1xuICAgICAgICB0aGlzLmFwcFN0YXRlID0gYXBwU3RhdGU7XG5cbiAgICAgICAgLy8gLTEgaW5kaWNhdGVzIHVuYm91bmRcbiAgICAgICAgdGhpcy5jdXJyZW50QmFzZSA9IC0xO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBsYXlvdXQubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGxldCB0eXBlID0gbGF5b3V0W2ldO1xuICAgICAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVDpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5JTlQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkJPT0w6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0c1tpXSA9IHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IENPTlNUQU5UUy5JTlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXNbaV0gPSBDT05TVEFOVFMuSU5UO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQ09OU1RBTlRTLlVOU0lHTkVEX0lOVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlc1tpXSA9IENPTlNUQU5UUy5VTlNJR05FRF9JTlQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzW2ldID0gQ09OU1RBTlRTLkZMT0FUO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplKys7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX1ZFQzI6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UX1ZFQzI6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzI6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuQk9PTF9WRUMyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gdGhpcy5zaXplICUgMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRzW2ldID0gdGhpcy5zaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldID0gMjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gQ09OU1RBTlRTLklOVF9WRUMyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzW2ldID0gQ09OU1RBTlRTLklOVDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IENPTlNUQU5UUy5VTlNJR05FRF9JTlRfVkVDMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlc1tpXSA9IENPTlNUQU5UUy5VTlNJR05FRF9JTlQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzW2ldID0gQ09OU1RBTlRTLkZMT0FUO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX1ZFQzM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UX1ZFQzM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuQk9PTF9WRUMzOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX1ZFQzQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuSU5UX1ZFQzQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuVU5TSUdORURfSU5UX1ZFQzQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuQk9PTF9WRUM0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gKDQgLSB0aGlzLnNpemUgJSA0KSAlIDQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0c1tpXSA9IHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IDQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IENPTlNUQU5UUy5JTlRfVkVDNCB8fCB0eXBlID09PSBDT05TVEFOVFMuSU5UX1ZFQzMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXNbaV0gPSBDT05TVEFOVFMuSU5UO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUM0IHx8IHRoaXMudHlwZSA9PT0gQ09OU1RBTlRTLlVOU0lHTkVEX0lOVF9WRUMzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzW2ldID0gQ09OU1RBTlRTLlVOU0lHTkVEX0lOVDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXNbaV0gPSBDT05TVEFOVFMuRkxPQVQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUMjpcbiAgICAgICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyeDM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUMng0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gKDQgLSB0aGlzLnNpemUgJSA0KSAlIDQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0c1tpXSA9IHRoaXMuc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IDg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXNbaV0gPSBDT05TVEFOVFMuRkxPQVQ7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplICs9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDM6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUM3gyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDN4NDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplICs9ICg0IC0gdGhpcy5zaXplICUgNCkgJSA0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldHNbaV0gPSB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNbaV0gPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlc1tpXSA9IENPTlNUQU5UUy5GTE9BVDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDQ6XG4gICAgICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNHgyOlxuICAgICAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDR4MzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplICs9ICg0IC0gdGhpcy5zaXplICUgNCkgJSA0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZnNldHNbaV0gPSB0aGlzLnNpemU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNbaV0gPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlc1tpXSA9IENPTlNUQU5UUy5GTE9BVDtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemUgKz0gMTY7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbnN1cHBvcnRlZCB0eXBlIGZvciB1bmlmb3JtIGJ1ZmZlci5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNpemUgKz0gKDQgLSB0aGlzLnNpemUgJSA0KSAlIDQ7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnNpemUpO1xuICAgICAgICB0aGlzLmRhdGFWaWV3c1tDT05TVEFOVFMuRkxPQVRdID0gdGhpcy5kYXRhO1xuICAgICAgICB0aGlzLmRhdGFWaWV3c1tDT05TVEFOVFMuSU5UXSA9IG5ldyBJbnQzMkFycmF5KHRoaXMuZGF0YS5idWZmZXIpO1xuICAgICAgICB0aGlzLmRhdGFWaWV3c1tDT05TVEFOVFMuVU5TSUdORURfSU5UXSA9IG5ldyBVaW50MzJBcnJheSh0aGlzLmRhdGEuYnVmZmVyKTtcblxuICAgICAgICBcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuVU5JRk9STV9CVUZGRVIsIHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuVU5JRk9STV9CVUZGRVIsIHRoaXMuc2l6ZSAqIDQsIHRoaXMudXNhZ2UpO1xuICAgICAgICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy5nbC5VTklGT1JNX0JVRkZFUiwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIFVwZGF0ZSBkYXRhIGZvciBhIGdpdmVuIGl0ZW0gaW4gdGhlIGJ1ZmZlci4gTk9URTogRGF0YSBpcyBub3RcbiAgICAgICAgc2VudCB0aGUgdGhlIEdQVSB1bnRpbCB0aGUgdXBkYXRlKCkgbWV0aG9kIGlzIGNhbGxlZCFcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCBpbiB0aGUgbGF5b3V0IG9mIGl0ZW0gdG8gc2V0LlxuICAgICAgICBAcGFyYW0ge0FycmF5QnVmZmVyVmlld30gdmFsdWUgVmFsdWUgdG8gc3RvcmUgYXQgdGhlIGxheW91dCBsb2NhdGlvbi5cbiAgICAgICAgQHJldHVybiB7VW5pZm9ybUJ1ZmZlcn0gVGhlIFVuaWZvcm1CdWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgc2V0KGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMuZGF0YVZpZXdzW3RoaXMudHlwZXNbaW5kZXhdXTtcblxuICAgICAgICBpZiAodGhpcy5zaXplc1tpbmRleF0gPT09IDEpICB7XG4gICAgICAgICAgICB2aWV3W3RoaXMub2Zmc2V0c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3LnNldCh2YWx1ZSwgdGhpcy5vZmZzZXRzW2luZGV4XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgU2VuZCBzdG9yZWQgYnVmZmVyIGRhdGEgdG8gdGhlIEdQVS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXhdIEluZGV4IGluIHRoZSBsYXlvdXQgb2YgaXRlbSB0byBzZW5kIHRvIHRoZSBHUFUuIElmIG9tbWl0ZWQsIGVudGlyZSBidWZmZXIgaXMgc2VudC5cbiAgICAgICAgQHJldHVybiB7VW5pZm9ybUJ1ZmZlcn0gVGhlIFVuaWZvcm1CdWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgdXBkYXRlKGluZGV4KSB7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBsZXQgb2Zmc2V0O1xuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgYmVnaW4gPSB0aGlzLm9mZnNldHNbaW5kZXhdO1xuICAgICAgICAgICAgbGV0IGVuZCA9IGJlZ2luICsgdGhpcy5zaXplc1tpbmRleF07XG4gICAgICAgICAgICBkYXRhID0gdGhpcy5kYXRhLnN1YmFycmF5KGJlZ2luLCBlbmQpO1xuICAgICAgICAgICAgb2Zmc2V0ID0gYmVnaW4gKiA0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMuZ2wuVU5JRk9STV9CVUZGRVIsIHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKHRoaXMuZ2wuVU5JRk9STV9CVUZGRVIsIG9mZnNldCwgZGF0YSk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLlVOSUZPUk1fQlVGRkVSLCBudWxsKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRGVsZXRlIHRoaXMgdW5pZm9ybSBidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcmV0dXJuIHtVbmlmb3JtQnVmZmVyfSBUaGUgVW5pZm9ybUJ1ZmZlciBvYmplY3QuXG4gICAgKi9cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5idWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QmFzZSAhPT0gLTEgJiYgdGhpcy5hcHBTdGF0ZS51bmlmb3JtQnVmZmVyc1t0aGlzLmN1cnJlbnRCYXNlXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudW5pZm9ybUJ1ZmZlcnNbdGhpcy5jdXJyZW50QmFzZV0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgdGhpcyB1bmlmb3JtIGJ1ZmZlciB0byB0aGUgZ2l2ZW4gYmFzZS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBpZ25vcmVcbiAgICAgICAgQHJldHVybiB7VW5pZm9ybUJ1ZmZlcn0gVGhlIFVuaWZvcm1CdWZmZXIgb2JqZWN0LlxuICAgICovXG4gICAgYmluZChiYXNlKSB7XG4gICAgICAgIGxldCBjdXJyZW50QnVmZmVyID0gdGhpcy5hcHBTdGF0ZS51bmlmb3JtQnVmZmVyc1tiYXNlXTtcblxuICAgICAgICBpZiAoY3VycmVudEJ1ZmZlciAhPT0gdGhpcykge1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudEJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCdWZmZXIuY3VycmVudEJhc2UgPSAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEJhc2UgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBTdGF0ZS51bmlmb3JtQnVmZmVyc1t0aGlzLmN1cnJlbnRCYXNlXSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlckJhc2UodGhpcy5nbC5VTklGT1JNX0JVRkZFUiwgYmFzZSwgdGhpcy5idWZmZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmFwcFN0YXRlLnVuaWZvcm1CdWZmZXJzW2Jhc2VdID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJhc2UgPSBiYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pZm9ybUJ1ZmZlcjtcblxuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRhcmVrIFNoZXJpZlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2Zcbi8vIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbi8vIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbi8vIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mXG4vLyB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sXG4vLyBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbi8vIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1Ncbi8vIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUlxuLy8gQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSXG4vLyBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTlxuLy8gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5jb25zdCBDT05TVEFOVFMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4vKipcbiAgICBPcmdhbml6ZXMgdmVydGV4IGJ1ZmZlciBhbmQgYXR0cmlidXRlIHN0YXRlLlxuXG4gICAgQGNsYXNzXG4gICAgQHByb3Age1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHQuXG4gICAgQHByb3Age1dlYkdMVmVydGV4QXJyYXlPYmplY3R9IHZlcnRleEFycmF5IFZlcnRleCBhcnJheSBvYmplY3QuXG4gICAgQHByb3Age251bWJlcn0gbnVtRWxlbWVudHMgTnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB2ZXJ0ZXggYXJyYXkuXG4gICAgQHByb3Age2Jvb2xlYW59IGluZGV4ZWQgV2hldGhlciB0aGlzIHZlcnRleCBhcnJheSBpcyBzZXQgdXAgZm9yIGluZGV4ZWQgZHJhd2luZy5cbiAgICBAcHJvcCB7R0xlbnVtfSBpbmRleFR5cGUgRGF0YSB0eXBlIG9mIHRoZSBpbmRpY2VzLlxuICAgIEBwcm9wIHtib29sZWFufSBpbnN0YW5jZWQgV2hldGhlciB0aGlzIHZlcnRleCBhcnJheSBpcyBzZXQgdXAgZm9yIGluc3RhbmNlZCBkcmF3aW5nLlxuICAgIEBwcm9wIHtudW1iZXJ9IG51bUluc3RhbmNlcyBOdW1iZXIgb2YgaW5zdGFuY2VzIHRvIGRyYXcgd2l0aCB0aGlzIHZlcnRleCBhcnJheS5cbiAgICBAcHJvcCB7T2JqZWN0fSBhcHBTdGF0ZSBUcmFja2VkIEdMIHN0YXRlLlxuKi9cbmNsYXNzIFZlcnRleEFycmF5IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihnbCwgYXBwU3RhdGUpIHtcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLnZlcnRleEFycmF5ID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKTtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZSA9IGFwcFN0YXRlO1xuICAgICAgICB0aGlzLm51bUVsZW1lbnRzID0gMDtcbiAgICAgICAgdGhpcy5pbmRleFR5cGUgPSBudWxsO1xuICAgICAgICB0aGlzLmluc3RhbmNlZEJ1ZmZlcnMgPSAwO1xuICAgICAgICB0aGlzLmluZGV4ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5udW1JbnN0YW5jZXMgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGFuIHBlci12ZXJ0ZXggYXR0cmlidXRlIGJ1ZmZlciB0byB0aGlzIHZlcnRleCBhcnJheS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBhdHRyaWJ1dGVJbmRleCBUaGUgYXR0cmlidXRlIGxvY2F0aW9uIHRvIGJpbmQgdG8uXG4gICAgICAgIEBwYXJhbSB7VmVydGV4QnVmZmVyfSB2ZXJ0ZXhCdWZmZXIgVGhlIFZlcnRleEJ1ZmZlciB0byBiaW5kLlxuICAgICAgICBAcmV0dXJuIHtWZXJ0ZXhBcnJheX0gVGhlIFZlcnRleEFycmF5IG9iamVjdC5cbiAgICAqL1xuICAgIHZlcnRleEF0dHJpYnV0ZUJ1ZmZlcihhdHRyaWJ1dGVJbmRleCwgdmVydGV4QnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGFuIHBlci1pbnN0YW5jZSBhdHRyaWJ1dGUgYnVmZmVyIHRvIHRoaXMgdmVydGV4IGFycmF5LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGF0dHJpYnV0ZUluZGV4IFRoZSBhdHRyaWJ1dGUgbG9jYXRpb24gdG8gYmluZCB0by5cbiAgICAgICAgQHBhcmFtIHtWZXJ0ZXhCdWZmZXJ9IHZlcnRleEJ1ZmZlciBUaGUgVmVydGV4QnVmZmVyIHRvIGJpbmQuXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEFycmF5fSBUaGUgVmVydGV4QXJyYXkgb2JqZWN0LlxuICAgICovXG4gICAgaW5zdGFuY2VBdHRyaWJ1dGVCdWZmZXIoYXR0cmlidXRlSW5kZXgsIHZlcnRleEJ1ZmZlcikge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUJ1ZmZlcihhdHRyaWJ1dGVJbmRleCwgdmVydGV4QnVmZmVyLCB0cnVlLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIGFuIHBlci12ZXJ0ZXggaW50ZWdlciBhdHRyaWJ1dGUgYnVmZmVyIHRvIHRoaXMgdmVydGV4IGFycmF5LlxuICAgICAgICBOb3RlIHRoYXQgdGhpcyByZWZlcnMgdG8gdGhlIGF0dHJpYnV0ZSBpbiB0aGUgc2hhZGVyIGJlaW5nIGFuIGludGVnZXIsXG4gICAgICAgIG5vdCB0aGUgZGF0YSBzdG9yZWQgaW4gdGhlIHZlcnRleCBidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge251bWJlcn0gYXR0cmlidXRlSW5kZXggVGhlIGF0dHJpYnV0ZSBsb2NhdGlvbiB0byBiaW5kIHRvLlxuICAgICAgICBAcGFyYW0ge1ZlcnRleEJ1ZmZlcn0gdmVydGV4QnVmZmVyIFRoZSBWZXJ0ZXhCdWZmZXIgdG8gYmluZC5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QXJyYXl9IFRoZSBWZXJ0ZXhBcnJheSBvYmplY3QuXG4gICAgKi9cbiAgICB2ZXJ0ZXhJbnRlZ2VyQXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVCdWZmZXIoYXR0cmlidXRlSW5kZXgsIHZlcnRleEJ1ZmZlciwgZmFsc2UsIHRydWUsIGZhbHNlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCBhbiBwZXItaW5zdGFuY2UgaW50ZWdlciBhdHRyaWJ1dGUgYnVmZmVyIHRvIHRoaXMgdmVydGV4IGFycmF5LlxuICAgICAgICBOb3RlIHRoYXQgdGhpcyByZWZlcnMgdG8gdGhlIGF0dHJpYnV0ZSBpbiB0aGUgc2hhZGVyIGJlaW5nIGFuIGludGVnZXIsXG4gICAgICAgIG5vdCB0aGUgZGF0YSBzdG9yZWQgaW4gdGhlIHZlcnRleCBidWZmZXIuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge251bWJlcn0gYXR0cmlidXRlSW5kZXggVGhlIGF0dHJpYnV0ZSBsb2NhdGlvbiB0byBiaW5kIHRvLlxuICAgICAgICBAcGFyYW0ge1ZlcnRleEJ1ZmZlcn0gdmVydGV4QnVmZmVyIFRoZSBWZXJ0ZXhCdWZmZXIgdG8gYmluZC5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QXJyYXl9IFRoZSBWZXJ0ZXhBcnJheSBvYmplY3QuXG4gICAgKi9cbiAgICBpbnN0YW5jZUludGVnZXJBdHRyaWJ1dGVCdWZmZXIoYXR0cmlidXRlSW5kZXgsIHZlcnRleEJ1ZmZlcikge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUJ1ZmZlcihhdHRyaWJ1dGVJbmRleCwgdmVydGV4QnVmZmVyLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgYW4gcGVyLXZlcnRleCBub3JtYWxpemVkIGF0dHJpYnV0ZSBidWZmZXIgdG8gdGhpcyB2ZXJ0ZXggYXJyYXkuXG4gICAgICAgIEludGVnZXIgZGF0YSBpbiB0aGUgdmVydGV4IGJ1ZmZlciB3aWxsIGJlIG5vcm1hbGl6ZWQgdG8gWy0xLjAsIDEuMF0gaWZcbiAgICAgICAgc2lnbmVkLCBbMC4wLCAxLjBdIGlmIHVuc2lnbmVkLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHBhcmFtIHtudW1iZXJ9IGF0dHJpYnV0ZUluZGV4IFRoZSBhdHRyaWJ1dGUgbG9jYXRpb24gdG8gYmluZCB0by5cbiAgICAgICAgQHBhcmFtIHtWZXJ0ZXhCdWZmZXJ9IHZlcnRleEJ1ZmZlciBUaGUgVmVydGV4QnVmZmVyIHRvIGJpbmQuXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEFycmF5fSBUaGUgVmVydGV4QXJyYXkgb2JqZWN0LlxuICAgICovXG4gICAgdmVydGV4Tm9ybWFsaXplZEF0dHJpYnV0ZUJ1ZmZlcihhdHRyaWJ1dGVJbmRleCwgdmVydGV4QnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEJpbmQgYW4gcGVyLWluc3RhbmNlIG5vcm1hbGl6ZWQgYXR0cmlidXRlIGJ1ZmZlciB0byB0aGlzIHZlcnRleCBhcnJheS5cbiAgICAgICAgSW50ZWdlciBkYXRhIGluIHRoZSB2ZXJ0ZXggYnVmZmVyIHdpbGwgYmUgbm9ybWFsaXplZCB0byBbLTEuMCwgMS4wXSBpZlxuICAgICAgICBzaWduZWQsIFswLjAsIDEuMF0gaWYgdW5zaWduZWQuXG4gICAgICAgIFxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7bnVtYmVyfSBhdHRyaWJ1dGVJbmRleCBUaGUgYXR0cmlidXRlIGxvY2F0aW9uIHRvIGJpbmQgdG8uXG4gICAgICAgIEBwYXJhbSB7VmVydGV4QnVmZmVyfSB2ZXJ0ZXhCdWZmZXIgVGhlIFZlcnRleEJ1ZmZlciB0byBiaW5kLlxuICAgICAgICBAcmV0dXJuIHtWZXJ0ZXhBcnJheX0gVGhlIFZlcnRleEFycmF5IG9iamVjdC5cbiAgICAqL1xuICAgIGluc3RhbmNlTm9ybWFsaXplZEF0dHJpYnV0ZUJ1ZmZlcihhdHRyaWJ1dGVJbmRleCwgdmVydGV4QnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIsIHRydWUsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgQmluZCBhbiBpbmRleCBidWZmZXIgdG8gdGhpcyB2ZXJ0ZXggYXJyYXkuXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAcGFyYW0ge1ZlcnRleEJ1ZmZlcn0gdmVydGV4QnVmZmVyIFRoZSBWZXJ0ZXhCdWZmZXIgdG8gYmluZC5cbiAgICAgICAgQHJldHVybiB7VmVydGV4QXJyYXl9IFRoZSBWZXJ0ZXhBcnJheSBvYmplY3QuXG4gICAgKi9cbiAgICBpbmRleEJ1ZmZlcih2ZXJ0ZXhCdWZmZXIpIHtcbiAgICAgICAgdGhpcy5nbC5iaW5kVmVydGV4QXJyYXkodGhpcy52ZXJ0ZXhBcnJheSk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih2ZXJ0ZXhCdWZmZXIuYmluZGluZywgdmVydGV4QnVmZmVyLmJ1ZmZlcik7XG5cbiAgICAgICAgdGhpcy5udW1FbGVtZW50cyA9IHZlcnRleEJ1ZmZlci5udW1JdGVtcyAqIDM7XG4gICAgICAgIHRoaXMuaW5kZXhUeXBlID0gdmVydGV4QnVmZmVyLnR5cGU7XG4gICAgICAgIHRoaXMuaW5kZXhlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5nbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih2ZXJ0ZXhCdWZmZXIuYmluZGluZywgbnVsbCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIERlbGV0ZSB0aGlzIHZlcnRleCBhcnJheS5cblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEFycmF5fSBUaGUgVmVydGV4QXJyYXkgb2JqZWN0LlxuICAgICovXG4gICAgZGVsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy52ZXJ0ZXhBcnJheSkge1xuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVWZXJ0ZXhBcnJheSh0aGlzLnZlcnRleEFycmF5KTtcbiAgICAgICAgICAgIHRoaXMudmVydGV4QXJyYXkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBCaW5kIHRoaXMgdmVydGV4IGFycmF5LlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQGlnbm9yZVxuICAgICAgICBAcmV0dXJuIHtWZXJ0ZXhBcnJheX0gVGhlIFZlcnRleEFycmF5IG9iamVjdC5cbiAgICAqL1xuICAgIGJpbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFwcFN0YXRlLnZlcnRleEFycmF5ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZlcnRleEFycmF5KTtcbiAgICAgICAgICAgIHRoaXMuYXBwU3RhdGUudmVydGV4QXJyYXkgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICAgIEF0dGFjaCBhbiBhdHRyaWJ1dGUgYnVmZmVyXG5cbiAgICAgICAgQG1ldGhvZFxuICAgICAgICBAaWdub3JlXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEFycmF5fSBUaGUgVmVydGV4QXJyYXkgb2JqZWN0LlxuICAgICovXG4gICAgYXR0cmlidXRlQnVmZmVyKGF0dHJpYnV0ZUluZGV4LCB2ZXJ0ZXhCdWZmZXIsIGluc3RhbmNlZCwgaW50ZWdlciwgbm9ybWFsaXplZCkge1xuICAgICAgICB0aGlzLmdsLmJpbmRWZXJ0ZXhBcnJheSh0aGlzLnZlcnRleEFycmF5KTtcbiAgICAgICAgdGhpcy5nbC5iaW5kQnVmZmVyKHZlcnRleEJ1ZmZlci5iaW5kaW5nLCB2ZXJ0ZXhCdWZmZXIuYnVmZmVyKTtcblxuICAgICAgICBsZXQgbnVtQ29sdW1ucyA9IHZlcnRleEJ1ZmZlci5udW1Db2x1bW5zO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sdW1uczsgKytpKSB7XG4gICAgICAgICAgICBpZiAoaW50ZWdlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2wudmVydGV4QXR0cmliSVBvaW50ZXIoXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUluZGV4ICsgaSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyLml0ZW1TaXplLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhCdWZmZXIudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbnVtQ29sdW1ucyAqIHZlcnRleEJ1ZmZlci5pdGVtU2l6ZSAqIENPTlNUQU5UUy5UWVBFX1NJWkVbdmVydGV4QnVmZmVyLnR5cGVdLFxuICAgICAgICAgICAgICAgICAgICBpICogdmVydGV4QnVmZmVyLml0ZW1TaXplICogQ09OU1RBTlRTLlRZUEVfU0laRVt2ZXJ0ZXhCdWZmZXIudHlwZV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUluZGV4ICsgaSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGV4QnVmZmVyLml0ZW1TaXplLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXhCdWZmZXIudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZCxcbiAgICAgICAgICAgICAgICAgICAgbnVtQ29sdW1ucyAqIHZlcnRleEJ1ZmZlci5pdGVtU2l6ZSAqIENPTlNUQU5UUy5UWVBFX1NJWkVbdmVydGV4QnVmZmVyLnR5cGVdLFxuICAgICAgICAgICAgICAgICAgICBpICogdmVydGV4QnVmZmVyLml0ZW1TaXplICogQ09OU1RBTlRTLlRZUEVfU0laRVt2ZXJ0ZXhCdWZmZXIudHlwZV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGF0dHJpYnV0ZUluZGV4ICsgaSwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0cmlidXRlSW5kZXggKyBpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2VkID0gdGhpcy5pbnN0YW5jZWQgfHwgaW5zdGFuY2VkO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZWQpIHtcbiAgICAgICAgICAgIHRoaXMubnVtSW5zdGFuY2VzID0gdmVydGV4QnVmZmVyLm51bUl0ZW1zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5udW1FbGVtZW50cyA9IHRoaXMubnVtRWxlbWVudHMgfHwgdmVydGV4QnVmZmVyLm51bUl0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih2ZXJ0ZXhCdWZmZXIuYmluZGluZywgbnVsbCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGV4QXJyYXk7XG5cblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGFyZWsgU2hlcmlmXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZlxuLy8gdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpblxuLy8gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0b1xuLy8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2Zcbi8vIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbyxcbi8vIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuLy8gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTU1xuLy8gRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SXG4vLyBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVJcbi8vIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOXG4vLyBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbmNvbnN0IENPTlNUQU5UUyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbi8qKlxuICAgIFN0b3JhZ2UgZm9yIHZlcnRleCBkYXRhLlxuXG4gICAgQGNsYXNzXG4gICAgQHByb3Age1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMIGNvbnRleHQuXG4gICAgQHByb3Age1dlYkdMQnVmZmVyfSBidWZmZXIgQWxsb2NhdGVkIGJ1ZmZlciBzdG9yYWdlLlxuICAgIEBwcm9wIHtHTEVudW19IHR5cGUgVGhlIHR5cGUgb2YgZGF0YSBzdG9yZWQgaW4gdGhlIGJ1ZmZlci5cbiAgICBAcHJvcCB7bnVtYmVyfSBpdGVtU2l6ZSBOdW1iZXIgb2YgYXJyYXkgZWxlbWVudHMgcGVyIHZlcnRleC5cbiAgICBAcHJvcCB7bnVtYmVyfSBudW1JdGVtcyBOdW1iZXIgb2YgdmVydGljZXMgcmVwcmVzZW50ZWQuXG4gICAgQHByb3Age0dMRW51bX0gdXNhZ2UgVGhlIHVzYWdlIHBhdHRlcm4gb2YgdGhlIGJ1ZmZlci5cbiAgICBAcHJvcCB7Ym9vbGVhbn0gaW5kZXhBcnJheSBXaGV0aGVyIHRoaXMgaXMgYW4gaW5kZXggYXJyYXkuXG4gICAgQHByb3Age0dMRW51bX0gYmluZGluZyBHTCBiaW5kaW5nIHBvaW50IChBUlJBWV9CVUZGRVIgb3IgRUxFTUVOVF9BUlJBWV9CVUZGRVIpLlxuICAgIEBwcm9wIHtPYmplY3R9IGFwcFN0YXRlIFRyYWNrZWQgR0wgc3RhdGUuXG4qL1xuY2xhc3MgVmVydGV4QnVmZmVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGdsLCBhcHBTdGF0ZSwgdHlwZSwgaXRlbVNpemUsIGRhdGEsIHVzYWdlID0gZ2wuU1RBVElDX0RSQVcsIGluZGV4QXJyYXkpIHtcbiAgICAgICAgbGV0IG51bUNvbHVtbnM7XG4gICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQ0OlxuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNHgyOlxuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNHgzOlxuICAgICAgICAgICAgICAgIG51bUNvbHVtbnMgPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUMzpcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDN4MjpcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDN4NDpcbiAgICAgICAgICAgICAgICBudW1Db2x1bW5zID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDI6XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyeDM6XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyeDQ6XG4gICAgICAgICAgICAgICAgbnVtQ29sdW1ucyA9IDI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG51bUNvbHVtbnMgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDQ6XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQzeDQ6XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQyeDQ6XG4gICAgICAgICAgICAgICAgaXRlbVNpemUgPSA0O1xuICAgICAgICAgICAgICAgIHR5cGUgPSBDT05TVEFOVFMuRkxPQVQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENPTlNUQU5UUy5GTE9BVF9NQVQzOlxuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUNHgzOlxuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUMngzOlxuICAgICAgICAgICAgICAgIGl0ZW1TaXplID0gMztcbiAgICAgICAgICAgICAgICB0eXBlID0gQ09OU1RBTlRTLkZMT0FUO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDT05TVEFOVFMuRkxPQVRfTUFUMjpcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDN4MjpcbiAgICAgICAgICAgIGNhc2UgQ09OU1RBTlRTLkZMT0FUX01BVDR4MjpcbiAgICAgICAgICAgICAgICBpdGVtU2l6ZSA9IDI7XG4gICAgICAgICAgICAgICAgdHlwZSA9IENPTlNUQU5UUy5GTE9BVDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhTGVuZ3RoO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGRhdGFMZW5ndGggPSBkYXRhO1xuICAgICAgICAgICAgZGF0YSAqPSBDT05TVEFOVFMuVFlQRV9TSVpFW3R5cGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nbCA9IGdsO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICB0aGlzLmFwcFN0YXRlID0gYXBwU3RhdGU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuaXRlbVNpemUgPSBpdGVtU2l6ZTtcbiAgICAgICAgdGhpcy5udW1JdGVtcyA9IGRhdGFMZW5ndGggLyAoaXRlbVNpemUgKiBudW1Db2x1bW5zKTtcbiAgICAgICAgdGhpcy5udW1Db2x1bW5zID0gbnVtQ29sdW1ucztcbiAgICAgICAgdGhpcy51c2FnZSA9IHVzYWdlO1xuICAgICAgICB0aGlzLmluZGV4QXJyYXkgPSAhIWluZGV4QXJyYXk7XG4gICAgICAgIHRoaXMuYmluZGluZyA9IHRoaXMuaW5kZXhBcnJheSA/IGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSIDogZ2wuQVJSQVlfQlVGRkVSO1xuXG4gICAgICAgIGdsLmJpbmRCdWZmZXIodGhpcy5iaW5kaW5nLCB0aGlzLmJ1ZmZlcik7XG4gICAgICAgIGdsLmJ1ZmZlckRhdGEodGhpcy5iaW5kaW5nLCBkYXRhLCB0aGlzLnVzYWdlKTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcih0aGlzLmJpbmRpbmcsIG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgICBVcGRhdGUgZGF0YSBpbiB0aGlzIGJ1ZmZlci4gTk9URTogdGhlIGRhdGEgbXVzdCBmaXRcbiAgICAgICAgdGhlIG9yaWdpbmFsbHktYWxsb2NhdGVkIGJ1ZmZlciFcblxuICAgICAgICBAbWV0aG9kXG4gICAgICAgIEBwYXJhbSB7VmVydGV4QnVmZmVyVmlld30gZGF0YSBEYXRhIHRvIHN0b3JlIGluIHRoZSBidWZmZXIuXG4gICAgICAgIEByZXR1cm4ge1ZlcnRleEJ1ZmZlcn0gVGhlIFZlcnRleEJ1ZmZlciBvYmplY3QuXG4gICAgKi9cbiAgICBkYXRhKGRhdGEpIHtcbiAgICAgICAgLy8gRG9uJ3Qgd2FudCB0byB1cGRhdGUgdmVydGV4IGFycmF5IGJpbmRpbmdzXG4gICAgICAgIGxldCBjdXJyZW50VmVydGV4QXJyYXkgPSB0aGlzLmFwcFN0YXRlLnZlcnRleEFycmF5O1xuICAgICAgICBpZiAoY3VycmVudFZlcnRleEFycmF5KSB7XG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmJpbmRpbmcsIHRoaXMuYnVmZmVyKTtcbiAgICAgICAgdGhpcy5nbC5idWZmZXJTdWJEYXRhKHRoaXMuYmluZGluZywgMCwgZGF0YSk7XG4gICAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmJpbmRpbmcsIG51bGwpO1xuXG4gICAgICAgIGlmIChjdXJyZW50VmVydGV4QXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2wuYmluZFZlcnRleEFycmF5KGN1cnJlbnRWZXJ0ZXhBcnJheS52ZXJ0ZXhBcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICAgRGVsZXRlIHRoaXMgYXJyYXkgYnVmZmVyLlxuXG4gICAgICAgIEBtZXRob2RcbiAgICAgICAgQHJldHVybiB7VmVydGV4QnVmZmVyfSBUaGUgVmVydGV4QnVmZmVyIG9iamVjdC5cbiAgICAqL1xuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyKSB7XG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmJ1ZmZlcik7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0ZXhCdWZmZXI7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7IiwiaW1wb3J0ICogYXMgUGljb0dMIGZyb20gJ3BpY29nbCc7XG5cbmV4cG9ydCBjb25zdCBub29wRnJhZyA9ICcjdmVyc2lvbiAzMDAgZXNcXG52b2lkIG1haW4oKSB7fSc7XG5cbmV4cG9ydCBjb25zdCBsb2c0ID0geCA9PiAuNSAqIE1hdGgubG9nMih4KTtcblxuZXhwb3J0IGNvbnN0IGlzUG93ZXJPZjIgPSB4ID0+ICh4ICYgKHggLSAxKSkgPT09IDA7XG5cbmNvbnN0IEZMT0FUX0ZPUk1BVFNfQllfSVRFTV9TSVpFID0ge1xuICAgIDI6IFtQaWNvR0wuUkcsICAgUGljb0dMLlJHMzJGXSxcbiAgICAzOiBbUGljb0dMLlJHQiwgIFBpY29HTC5SR0IzMkZdLFxuICAgIDQ6IFtQaWNvR0wuUkdCQSwgUGljb0dMLlJHQkEzMkZdLFxufTtcblxuZXhwb3J0IGNvbnN0IGlzRmxvYXRUZXh0dXJlID0gKHRleCwgaXRlbVNpemUpID0+IChcbiAgICB0ZXgudHlwZSA9PT0gUGljb0dMLkZMT0FUICYmXG4gICAgdGV4LmZvcm1hdCA9PT0gRkxPQVRfRk9STUFUU19CWV9JVEVNX1NJWkVbaXRlbVNpemVdWzBdICYmXG4gICAgdGV4LmludGVybmFsRm9ybWF0ID09PSBGTE9BVF9GT1JNQVRTX0JZX0lURU1fU0laRVtpdGVtU2l6ZV1bMV1cbik7XG5cbmV4cG9ydCBjb25zdCBpc0Zsb2F0QnVmZmVyID0gKGJ1ZiwgaXRlbVNpemUpID0+IChcbiAgICBidWYudHlwZSA9PT0gUGljb0dMLkZMT0FUICYmXG4gICAgYnVmLml0ZW1TaXplID09IGl0ZW1TaXplXG4pO1xuXG5leHBvcnQgY29uc3QgaXNVbnNpZ25lZEJ1ZmZlciA9IChidWYsIGl0ZW1TaXplKSA9PiAoXG4gICAgYnVmLnR5cGUgPT09IFBpY29HTC5VTlNJR05FRCAmJlxuICAgIGJ1Zi5pdGVtU2l6ZSA9PSBpdGVtU2l6ZVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZsb2F0VGV4dHVyZShhcHAsIHdpZHRoLCBoZWlnaHQsIGl0ZW1TaXplKSB7XG4gICAgY29uc3QgW2Zvcm1hdCwgaW50ZXJuYWxGb3JtYXRdID0gRkxPQVRfRk9STUFUU19CWV9JVEVNX1NJWkVbaXRlbVNpemVdO1xuXG4gICAgcmV0dXJuIGFwcC5jcmVhdGVUZXh0dXJlMkQod2lkdGgsIGhlaWdodCwge1xuICAgICAgICB0eXBlOiBQaWNvR0wuRkxPQVQsXG4gICAgICAgIGZvcm1hdCxcbiAgICAgICAgaW50ZXJuYWxGb3JtYXQsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhcmlhbnQoZXhwcikge1xuICAgIGlmICghZXhwcikge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcjtcbiAgICAgICAgZXJyb3IubmFtZSA9ICdBc3NlcnRpb25FcnJvcic7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFBpY29HTCBmcm9tICdwaWNvZ2wnO1xuXG5pbXBvcnQge2ludmFyaWFudCwgbG9nNCwgaXNGbG9hdFRleHR1cmUsIGlzRmxvYXRCdWZmZXJ9IGZyb20gJy4uL3V0aWxzJztcblxuaW1wb3J0IGludHJvVmVydCBmcm9tICcuL2ludHJvLnZlcnQnO1xuaW1wb3J0IHJlZHVjZVZlcnQgZnJvbSAnLi9yZWR1Y2UudmVydCc7XG5pbXBvcnQgc3RvcmVGcmFnIGZyb20gJy4vc3RvcmUuZnJhZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhbyhhcHAsIGRhdGEsIHBhdHRlcm4gPSBkYXRhLml0ZW1TaXplKSB7XG4gICAgaW52YXJpYW50KGlzRmxvYXRCdWZmZXIoZGF0YSwgMikgfHwgaXNGbG9hdEJ1ZmZlcihkYXRhLCAzKSB8fCBpc0Zsb2F0QnVmZmVyKGRhdGEsIDQpKTtcblxuICAgIGNvbnN0IHtnbH0gPSBhcHA7XG5cbiAgICBjb25zdCB2YW8gPSBhcHAuY3JlYXRlVmVydGV4QXJyYXkoKTtcblxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8udmVydGV4QXJyYXkpO1xuICAgIGdsLmJpbmRCdWZmZXIoZGF0YS5iaW5kaW5nLCBkYXRhLmJ1ZmZlcik7XG5cbiAgICBjb25zdCBzdGVwU2l6ZSA9IGRhdGEuaXRlbVNpemUgKiBQaWNvR0wuVFlQRV9TSVpFW1BpY29HTC5GTE9BVF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgICBQaWNvR0wuRkxPQVQsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIDQgKiBzdGVwU2l6ZSxcbiAgICAgICAgICAgIGkgKiBzdGVwU2l6ZVxuICAgICAgICApO1xuXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpO1xuICAgIH1cblxuICAgIHZhby5pbnN0YW5jZWQgPSBmYWxzZTtcblxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICBnbC5iaW5kQnVmZmVyKGRhdGEuYmluZGluZywgbnVsbCk7XG5cbiAgICByZXR1cm4gdmFvO1xufVxuXG5jbGFzcyBLaXQge1xuICAgIHN0YXRpYyByZWFkYWJsZShhcHAsIHByb2dyYW0sIGJ1ZmZlciwgcGF0dGVybikge1xuICAgICAgICBjb25zdCB2YW8gPSBjcmVhdGVWYW8oYXBwLCBidWZmZXIsIHBhdHRlcm4pO1xuICAgICAgICBjb25zdCBjYWxsID0gYXBwLmNyZWF0ZURyYXdDYWxsKHByb2dyYW0sIHZhbywgUGljb0dMLlBPSU5UUyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBLaXQoYnVmZmVyLCB2YW8sIGNhbGwsIG51bGwpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkdXBsZXgoYXBwLCBwcm9ncmFtLCBzaXplLCBwYXR0ZXJuKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGFwcC5jcmVhdGVWZXJ0ZXhCdWZmZXIoUGljb0dMLkZMT0FULCA0LCA0ICogTWF0aC5tYXgoc2l6ZSwgMSkpO1xuICAgICAgICBjb25zdCB2YW8gPSBjcmVhdGVWYW8oYXBwLCBidWYsIHBhdHRlcm4pO1xuICAgICAgICBjb25zdCBjYWxsID0gYXBwLmNyZWF0ZURyYXdDYWxsKHByb2dyYW0sIHZhbywgUGljb0dMLlBPSU5UUyk7XG4gICAgICAgIGNvbnN0IHRmID0gYXBwLmNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrKCkuZmVlZGJhY2tCdWZmZXIoMCwgYnVmKTtcblxuICAgICAgICByZXR1cm4gbmV3IEtpdChidWYsIHZhbywgY2FsbCwgdGYpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGJ1ZiwgdmFvLCBjYWxsLCB0Zikge1xuICAgICAgICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgICAgICAgdGhpcy52YW8gPSB2YW87XG4gICAgICAgIHRoaXMuY2FsbCA9IGNhbGw7XG4gICAgICAgIHRoaXMudGYgPSB0ZjtcbiAgICB9XG5cbiAgICByZXNpemUoc2l6ZSkge1xuICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnQgcmVzaXppbmcuXG4gICAgfVxuXG4gICAgZHJhdyhzaXplLCB0Zikge1xuICAgICAgICB0aGlzLmNhbGwubnVtRWxlbWVudHMgPSBzaXplO1xuXG4gICAgICAgIGlmICh0Zikge1xuICAgICAgICAgICAgdGhpcy5jYWxsLnRyYW5zZm9ybUZlZWRiYWNrKHRmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsbC5kcmF3KCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgaW52YXJpYW50KGFwcC5mbG9hdFJlbmRlclRhcmdldHNFbmFibGVkKTtcblxuICAgIGNvbnN0IG1hcmsgPSBTeW1ib2woKTtcblxuICAgIGNvbnN0IGludHJvUHJvZyA9IGFwcC5jcmVhdGVQcm9ncmFtKGludHJvVmVydCwgc3RvcmVGcmFnLCBbJ3Jlc3VsdCddKTtcbiAgICBjb25zdCByZWR1Y2VQcm9nID0gYXBwLmNyZWF0ZVByb2dyYW0ocmVkdWNlVmVydCwgc3RvcmVGcmFnLCBbJ3Jlc3VsdCddKTtcblxuICAgIGxldCBOID0gLTE7XG4gICAgbGV0IHRlbXBBID0gbnVsbDtcbiAgICBsZXQgdGVtcEIgPSBudWxsO1xuXG4gICAgLy8gMS00OiBkYXRhIC0tKGludHJvKS0+IHJlc3VsdFxuICAgIC8vIDUtMTY6IGRhdGEgLS0oaW50cm8pLT4gdGVtcEEgLS0ocmVkdWNlKS0+IHJlc3VsdFxuICAgIC8vIDE3LTY0OiBkYXRhIC0tKGludHJvKS0+IHRlbXBBIC0tKHJlZHVjZSktPiB0ZW1wQiAtLShyZWR1Y2UpLT4gcmVzdWx0XG4gICAgLy8gLi4uOiBkYXRhIC0tKGludHJvKS0+IHRlbXBBIC0tKHJlZHVjZSktPiB0ZW1wQiAtLShyZWR1Y2UpLT4gdGVtcEEgLi4uXG5cbiAgICByZXR1cm4gKGRhdGEsIHJlc3VsdCkgPT4ge1xuICAgICAgICBsZXQgYWN0aXZlS2l0ID0gZGF0YVttYXJrXTtcblxuICAgICAgICBpZiAoIWFjdGl2ZUtpdCkge1xuICAgICAgICAgICAgYWN0aXZlS2l0ID0gZGF0YVttYXJrXSA9IEtpdC5yZWFkYWJsZShhcHAsIGludHJvUHJvZywgZGF0YSwgMik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0RmIgPSByZXN1bHRbbWFya107XG5cbiAgICAgICAgaWYgKCFyZXN1bHRGYikge1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKHJlc3VsdCwgNCkpO1xuXG4gICAgICAgICAgICByZXN1bHRGYiA9IHJlc3VsdFttYXJrXSA9IGFwcC5jcmVhdGVGcmFtZWJ1ZmZlcigpLmNvbG9yVGFyZ2V0KDAsIHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGVwQ291bnQgPSBNYXRoLm1heChNYXRoLmNlaWwobG9nNChkYXRhLm51bUl0ZW1zKSksIDEpO1xuXG4gICAgICAgIGlmIChkYXRhLm51bUl0ZW1zICE9PSBOKSB7XG4gICAgICAgICAgICBOID0gZGF0YS5udW1JdGVtcztcblxuICAgICAgICAgICAgdGVtcEEgPSB0ZW1wQSA/IHRlbXBBLnJlc2l6ZShOKSA6IEtpdC5kdXBsZXgoYXBwLCByZWR1Y2VQcm9nLCA0ICoqIChzdGVwQ291bnQgLSAxKSk7XG4gICAgICAgICAgICB0ZW1wQiA9IHRlbXBCID8gdGVtcEIucmVzaXplKE4pIDogS2l0LmR1cGxleChhcHAsIHJlZHVjZVByb2csIDQgKiogKHN0ZXBDb3VudCAtIDIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2ZUtpdC5jYWxsLnVuaWZvcm0oJ04nLCBOKTtcblxuICAgICAgICBhcHAubm9SYXN0ZXJpemUoKTtcblxuICAgICAgICBmb3IgKGxldCBzaXplID0gNCAqKiAoc3RlcENvdW50IC0gMSk7IHNpemUgPiAxOyBzaXplIC89IDQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5leHRLaXQgPSBhY3RpdmVLaXQgPT09IHRlbXBBID8gdGVtcEIgOiB0ZW1wQTtcblxuICAgICAgICAgICAgYWN0aXZlS2l0LmRyYXcoc2l6ZSwgbmV4dEtpdC50Zik7XG5cbiAgICAgICAgICAgIGFjdGl2ZUtpdCA9IG5leHRLaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBhcHBcbiAgICAgICAgICAgIC5yYXN0ZXJpemUoKVxuICAgICAgICAgICAgLmRyYXdGcmFtZWJ1ZmZlcihyZXN1bHRGYilcbiAgICAgICAgICAgIC52aWV3cG9ydCgwLCAwLCAxLCAxKTtcblxuICAgICAgICBhY3RpdmVLaXQuZHJhdygxKTtcblxuICAgICAgICByZXR1cm4gc3RlcENvdW50O1xuICAgIH07XG59XG4iLCJpbXBvcnQgKiBhcyBQaWNvR0wgZnJvbSAncGljb2dsJztcblxuaW1wb3J0IHtpbnZhcmlhbnQsIGlzRmxvYXRUZXh0dXJlLCBpc0Zsb2F0QnVmZmVyfSBmcm9tICcuLi91dGlscyc7XG5cbmltcG9ydCBhc3NlbWJsZVZlcnQgZnJvbSAnLi9hc3NlbWJsZS52ZXJ0JztcbmltcG9ydCBzdG9yZUZyYWcgZnJvbSAnLi9zdG9yZS5mcmFnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICAgIGludmFyaWFudChhcHAuZmxvYXRSZW5kZXJUYXJnZXRzRW5hYmxlZCk7XG5cbiAgICBjb25zdCBtYXJrID0gU3ltYm9sKCk7XG5cbiAgICBjb25zdCBwcm9nID0gYXBwLmNyZWF0ZVByb2dyYW0oYXNzZW1ibGVWZXJ0LCBzdG9yZUZyYWcpO1xuXG4gICAgcmV0dXJuIChwb3NpdGlvbnMsIG1hc3NlcywgYm91bmRzLCByZXN1bHQpID0+IHtcbiAgICAgICAgbGV0IGNhbGwgPSBwb3NpdGlvbnNbbWFya107XG5cbiAgICAgICAgaWYgKCFjYWxsKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdEJ1ZmZlcihwb3NpdGlvbnMsIDIpKTtcbiAgICAgICAgICAgIGludmFyaWFudChpc0Zsb2F0QnVmZmVyKG1hc3NlcywgMSkpO1xuICAgICAgICAgICAgaW52YXJpYW50KHBvc2l0aW9ucy5udW1JdGVtcyA9PT0gbWFzc2VzLm51bUl0ZW1zKTtcbiAgICAgICAgICAgIGludmFyaWFudChwb3NpdGlvbnNbbWFya10gPT09IG1hc3Nlc1ttYXJrXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbyA9IGFwcC5jcmVhdGVWZXJ0ZXhBcnJheSgpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigwLCBwb3NpdGlvbnMpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigxLCBtYXNzZXMpO1xuXG4gICAgICAgICAgICBjYWxsID0gcG9zaXRpb25zW21hcmtdID0gbWFzc2VzW21hcmtdID0gYXBwLmNyZWF0ZURyYXdDYWxsKHByb2csIHZhbywgUGljb0dMLlBPSU5UUyk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnZhcmlhbnQocG9zaXRpb25zW21hcmtdID09PSBtYXNzZXNbbWFya10pO1xuXG4gICAgICAgIGxldCBmYiA9IHJlc3VsdFttYXJrXTtcblxuICAgICAgICBpZiAoIWZiKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdFRleHR1cmUocmVzdWx0LCA0KSk7XG5cbiAgICAgICAgICAgIGZiID0gcmVzdWx0W21hcmtdID0gYXBwLmNyZWF0ZUZyYW1lYnVmZmVyKCkuY29sb3JUYXJnZXQoMCwgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShib3VuZHMsIDQpKTtcbiAgICAgICAgaW52YXJpYW50KGJvdW5kcy53aWR0aCA9PT0gMSAmJiBib3VuZHMuaGVpZ2h0ID09PSAxKTtcblxuICAgICAgICAvLyBUT0RPOiB1c2UgYW4gdW5pZm9ybSBidWZmZXIuXG4gICAgICAgIGNhbGxcbiAgICAgICAgICAgIC51bmlmb3JtKCdpbnZTaGFwZScsIFsxL3Jlc3VsdC53aWR0aCwgMS9yZXN1bHQuaGVpZ2h0XSlcbiAgICAgICAgICAgIC8vIFRPRE86IGNhbiB3ZSBhdm9pZCBib3JkZXJzP1xuICAgICAgICAgICAgLnVuaWZvcm0oJ2JvcmRlcicsIFsxIC0gMS9yZXN1bHQud2lkdGgsIDEgLSAxL3Jlc3VsdC5oZWlnaHRdKVxuICAgICAgICAgICAgLnRleHR1cmUoJ2JvdW5kcycsIGJvdW5kcyk7XG5cbiAgICAgICAgYXBwXG4gICAgICAgICAgICAuZHJhd0ZyYW1lYnVmZmVyKGZiKVxuICAgICAgICAgICAgLnZpZXdwb3J0KDAsIDAsIHJlc3VsdC53aWR0aCwgcmVzdWx0LmhlaWdodClcbiAgICAgICAgICAgIC5jbGVhck1hc2soUGljb0dMLkNPTE9SX0JVRkZFUl9CSVQpXG4gICAgICAgICAgICAuY2xlYXJDb2xvcigwLCAwLCAwLCAwKVxuICAgICAgICAgICAgLmNsZWFyKClcbiAgICAgICAgICAgIC5ibGVuZEZ1bmNTZXBhcmF0ZShQaWNvR0wuT05FLCBQaWNvR0wuT05FLCBQaWNvR0wuT05FLCBQaWNvR0wuWkVSTylcbiAgICAgICAgICAgIC5ibGVuZCgpO1xuXG4gICAgICAgIGNhbGwuZHJhdygpO1xuXG4gICAgICAgIGFwcC5ub0JsZW5kKCk7XG4gICAgfTtcbn1cbiIsImltcG9ydCAqIGFzIFBpY29HTCBmcm9tICdwaWNvZ2wnO1xuXG5pbXBvcnQge2ludmFyaWFudCwgaXNQb3dlck9mMiwgaXNGbG9hdFRleHR1cmUsIGNyZWF0ZUZsb2F0VGV4dHVyZX0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgcXVhZFZlcnQgZnJvbSAnLi9xdWFkLnZlcnQnO1xuaW1wb3J0IHJlZHVjZUZyYWcgZnJvbSAnLi9yZWR1Y2UuZnJhZyc7XG5cbmNvbnN0IFFVQUQgPSBuZXcgRmxvYXQzMkFycmF5KFstMSwgMSwgLTEsIC0xLCAxLCAxLCAxLCAtMV0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gICAgaW52YXJpYW50KGFwcC5mbG9hdFJlbmRlclRhcmdldHNFbmFibGVkKTtcblxuICAgIGNvbnN0IHtnbH0gPSBhcHA7XG5cbiAgICBjb25zdCBtYXJrID0gU3ltYm9sKCk7XG5cbiAgICBjb25zdCBwcm9nID0gYXBwLmNyZWF0ZVByb2dyYW0ocXVhZFZlcnQsIHJlZHVjZUZyYWcpO1xuXG4gICAgY29uc3QgYnVmID0gYXBwLmNyZWF0ZVZlcnRleEJ1ZmZlcihQaWNvR0wuRkxPQVQsIDIsIFFVQUQpO1xuICAgIGNvbnN0IHZhbyA9IGFwcC5jcmVhdGVWZXJ0ZXhBcnJheSgpLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigwLCBidWYpO1xuICAgIGNvbnN0IGNhbGwgPSBhcHAuY3JlYXRlRHJhd0NhbGwocHJvZywgdmFvLCBQaWNvR0wuVFJJQU5HTEVfU1RSSVApO1xuXG4gICAgcmV0dXJuIChncmlkLCByZXN1bHQpID0+IHtcbiAgICAgICAgaW52YXJpYW50KGdyaWQud2lkdGggPT09IGdyaWQuaGVpZ2h0KTtcbiAgICAgICAgaW52YXJpYW50KGdyaWQud2lkdGggPj0gOCk7XG4gICAgICAgIGludmFyaWFudChpc1Bvd2VyT2YyKGdyaWQud2lkdGgpKTtcbiAgICAgICAgaW52YXJpYW50KGdyaWQud2lkdGggPT09IHJlc3VsdC53aWR0aCArIDIpO1xuICAgICAgICBpbnZhcmlhbnQoZ3JpZC5oZWlnaHQgPT09IDIgKiByZXN1bHQuaGVpZ2h0KTtcbiAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKGdyaWQsIDQpKTtcbiAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKHJlc3VsdCwgNCkpO1xuXG4gICAgICAgIGxldCBpbnRlcmltID0gZ3JpZFttYXJrXTtcblxuICAgICAgICBpZiAoIWludGVyaW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHRleEEgPSBjcmVhdGVGbG9hdFRleHR1cmUoYXBwLCBncmlkLndpZHRoIC8gMiwgZ3JpZC5oZWlnaHQgLyAyLCA0KTtcbiAgICAgICAgICAgIGNvbnN0IHRleEIgPSBjcmVhdGVGbG9hdFRleHR1cmUoYXBwLCBncmlkLndpZHRoIC8gNCwgZ3JpZC5oZWlnaHQgLyA0LCA0KTtcblxuICAgICAgICAgICAgY29uc3QgZmJBID0gYXBwLmNyZWF0ZUZyYW1lYnVmZmVyKCkuY29sb3JUYXJnZXQoMCwgdGV4QSk7XG4gICAgICAgICAgICBjb25zdCBmYkIgPSBhcHAuY3JlYXRlRnJhbWVidWZmZXIoKS5jb2xvclRhcmdldCgwLCB0ZXhCKTtcblxuICAgICAgICAgICAgaW50ZXJpbSA9IGdyaWRbbWFya10gPSB7dGV4QSwgdGV4QiwgZmJBLCBmYkJ9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3RleEEsIHRleEIsIGZiQSwgZmJCfSA9IGludGVyaW07XG5cbiAgICAgICAgLy8gZ3JpZCAtLT4gdGV4QSAtLT4gdGV4QiAtLT4gdGV4QSAtLT4gLi5cbiAgICAgICAgbGV0IGFjdGl2ZUZiID0gZmJBO1xuICAgICAgICBsZXQgYWN0aXZlVGV4ID0gZ3JpZDtcblxuICAgICAgICBmb3IgKGxldCBzaXplID0gZ3JpZC53aWR0aCAvIDIsIG9mZnNldCA9IDA7IHNpemUgPiAxOyBvZmZzZXQgKz0gc2l6ZSwgc2l6ZSAvPSAyKSB7XG4gICAgICAgICAgICBhcHBcbiAgICAgICAgICAgICAgICAucmVhZEZyYW1lYnVmZmVyKGFjdGl2ZUZiKVxuICAgICAgICAgICAgICAgIC5kcmF3RnJhbWVidWZmZXIoYWN0aXZlRmIpXG4gICAgICAgICAgICAgICAgLnZpZXdwb3J0KDAsIDAsIHNpemUsIHNpemUpO1xuXG4gICAgICAgICAgICBjYWxsXG4gICAgICAgICAgICAgICAgLnRleHR1cmUoJ2xldmVsJywgYWN0aXZlVGV4KVxuICAgICAgICAgICAgICAgIC5kcmF3KCk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGhvdyBtdWNoIGRvZXMgY29weWluZyBjb3N0P1xuICAgICAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgcmVzdWx0LnRleHR1cmUpO1xuICAgICAgICAgICAgZ2wuY29weVRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgb2Zmc2V0LCAwLCAwLCAwLCBzaXplLCBzaXplKTtcblxuICAgICAgICAgICAgYWN0aXZlRmIgPSBhY3RpdmVGYiA9PT0gZmJBID8gZmJCIDogZmJBO1xuICAgICAgICAgICAgYWN0aXZlVGV4ID0gYWN0aXZlVGV4ID09PSB0ZXhBID8gdGV4QiA6IHRleEE7XG4gICAgICAgIH1cbiAgICB9O1xufVxuIiwiaW1wb3J0ICogYXMgUGljb0dMIGZyb20gJ3BpY29nbCc7XG5cbmltcG9ydCB7aW52YXJpYW50LCBpc0Zsb2F0VGV4dHVyZSwgaXNGbG9hdEJ1ZmZlcn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbXBvcnQgc2ltdWxhdGVWZXJ0IGZyb20gJy4vc2ltdWxhdGUudmVydCc7XG5pbXBvcnQgc3RvcmVGcmFnIGZyb20gJy4vc3RvcmUuZnJhZyc7XG5cbmNvbnN0IHtGTE9BVH0gPSBQaWNvR0w7XG5jb25zdCBDT05TVEFOVFNfTEFZT1VUID0gW0ZMT0FULCBGTE9BVCwgRkxPQVQsIEZMT0FULCBGTE9BVCwgRkxPQVQsIEZMT0FULCBGTE9BVF07XG5cbmZ1bmN0aW9uIHNhdmVDb25zdGFudHMoY29uc3RzLCB1Yikge1xuICAgIHViLnNldCgwLCBjb25zdHMubm9kZUNvdW50KTtcbiAgICB1Yi5zZXQoMSwgY29uc3RzLmRlbHRhVCk7XG4gICAgdWIuc2V0KDIsIGNvbnN0cy5zcHJpbmdDb2VmKTtcbiAgICB1Yi5zZXQoMywgY29uc3RzLnNwcmluZ0xlbmd0aCk7XG4gICAgdWIuc2V0KDQsIGNvbnN0cy5yZXB1bHNlQ29lZik7XG4gICAgdWIuc2V0KDUsIGNvbnN0cy50aGV0YSAqIGNvbnN0cy50aGV0YSk7XG4gICAgdWIuc2V0KDYsIGNvbnN0cy5kcmFnQ29lZik7XG4gICAgdWIuc2V0KDcsIGNvbnN0cy5ncmF2aXR5Q29lZik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICBpbnZhcmlhbnQoYXBwLmZsb2F0UmVuZGVyVGFyZ2V0c0VuYWJsZWQpO1xuXG4gICAgY29uc3QgbWFyayA9IFN5bWJvbCgpO1xuXG4gICAgY29uc3QgY29uc3RhbnRzVUIgPSBhcHAuY3JlYXRlVW5pZm9ybUJ1ZmZlcihDT05TVEFOVFNfTEFZT1VUKTtcblxuICAgIGNvbnN0IHByb2cgPSBhcHAuY3JlYXRlUHJvZ3JhbShzaW11bGF0ZVZlcnQsIHN0b3JlRnJhZywgWydyZXN1bHRQb3NpdGlvbicsICdyZXN1bHRWZWxvY2l0eSddKTtcblxuICAgIGxldCBwcmV2Q29uc3RhbnRzID0gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIHBvc2l0aW9ucywgdmVsb2NpdGllcywgbWFzc2VzLCBlZGdlc0xvY3MsXG4gICAgICAgIHB5cmFtaWQsIGdyaWQsIGFsbFBvc2l0aW9ucywgZWRnZXMsXG4gICAgICAgIGNvbnN0YW50cyxcbiAgICAgICAgcmVzdWx0UG9zaXRpb25zLCByZXN1bHRWZWxvY2l0aWVzLFxuICAgICAgICByZXN1bHRBbGxQb3NpdGlvbnMsXG4gICAgKSA9PiB7XG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShweXJhbWlkLCA0KSk7XG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShncmlkLCA0KSk7XG4gICAgICAgIGludmFyaWFudChpc0Zsb2F0VGV4dHVyZShhbGxQb3NpdGlvbnMsIDIpKTtcbiAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKGVkZ2VzLCAzKSk7XG4gICAgICAgIGludmFyaWFudChhbGxQb3NpdGlvbnMud2lkdGggPT09IHJlc3VsdEFsbFBvc2l0aW9ucy53aWR0aCk7XG5cbiAgICAgICAgaWYgKGNvbnN0YW50cyAhPT0gcHJldkNvbnN0YW50cykge1xuICAgICAgICAgICAgc2F2ZUNvbnN0YW50cyhjb25zdGFudHMsIGNvbnN0YW50c1VCKTtcblxuICAgICAgICAgICAgcHJldkNvbnN0YW50cyA9IGNvbnN0YW50cztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYWxsID0gcG9zaXRpb25zW21hcmtdO1xuXG4gICAgICAgIGlmICghY2FsbCkge1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRCdWZmZXIocG9zaXRpb25zLCAyKSk7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdEJ1ZmZlcih2ZWxvY2l0aWVzLCAyKSk7XG4gICAgICAgICAgICBpbnZhcmlhbnQoaXNGbG9hdEJ1ZmZlcihyZXN1bHRQb3NpdGlvbnMsIDIpKTtcbiAgICAgICAgICAgIGludmFyaWFudChpc0Zsb2F0QnVmZmVyKHJlc3VsdFZlbG9jaXRpZXMsIDIpKTtcbiAgICAgICAgICAgIGludmFyaWFudChpc0Zsb2F0QnVmZmVyKG1hc3NlcywgMSkpO1xuICAgICAgICAgICAgaW52YXJpYW50KGlzVW5zaWduZWRCdWZmZXIoZWRnZXNMb2NzLCAyKSk7XG4gICAgICAgICAgICBpbnZhcmlhbnQocG9zaXRpb25zLm51bUl0ZW1zID09PSB2ZWxvY2l0aWVzLm51bUl0ZW1zKTtcbiAgICAgICAgICAgIGludmFyaWFudChwb3NpdGlvbnMubnVtSXRlbXMgPT09IHJlc3VsdFBvc2l0aW9ucy5udW1JdGVtcyk7XG4gICAgICAgICAgICBpbnZhcmlhbnQocG9zaXRpb25zLm51bUl0ZW1zID09PSByZXN1bHRWZWxvY2l0aWVzLm51bUl0ZW1zKTtcblxuICAgICAgICAgICAgY29uc3QgdmFvID0gYXBwLmNyZWF0ZVZlcnRleEFycmF5KClcbiAgICAgICAgICAgICAgICAudmVydGV4QXR0cmlidXRlQnVmZmVyKDAsIHBvc2l0aW9ucylcbiAgICAgICAgICAgICAgICAudmVydGV4QXR0cmlidXRlQnVmZmVyKDEsIHZlbG9jaXRpZXMpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigyLCBtYXNzZXMpXG4gICAgICAgICAgICAgICAgLnZlcnRleEF0dHJpYnV0ZUJ1ZmZlcigzLCBlZGdlc0xvY3MpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZiA9IGFwcC5jcmVhdGVUcmFuc2Zvcm1GZWVkYmFjaygpXG4gICAgICAgICAgICAgICAgLmZlZWRiYWNrQnVmZmVyKDAsIHJlc3VsdFBvc2l0aW9ucylcbiAgICAgICAgICAgICAgICAuZmVlZGJhY2tCdWZmZXIoMSwgcmVzdWx0VmVsb2NpdGllcyk7XG5cbiAgICAgICAgICAgIGNhbGwgPSBhcHAuY3JlYXRlRHJhd0NhbGwocHJvZywgdmFvLCBQaWNvR0wuUE9JTlRTKVxuICAgICAgICAgICAgICAgIC50cmFuc2Zvcm1GZWVkYmFjayh0Zik7XG5cbiAgICAgICAgICAgIHBvc2l0aW9uc1ttYXJrXSA9IHZlbG9jaXRpZXNbbWFya10gPSBtYXNzZXNbbWFya10gPSBlZGdlc0xvY3NbbWFya10gPSBjYWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgICAgcG9zaXRpb25zW21hcmtdID09PSB2ZWxvY2l0aWVzW21hcmtdICYmXG4gICAgICAgICAgICBwb3NpdGlvbnNbbWFya10gPT09IG1hc3Nlc1ttYXJrXSAmJlxuICAgICAgICAgICAgcG9zaXRpb25zW21hcmtdID09PSBlZGdlc0xvY3NbbWFya11cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgZmIgPSByZXN1bHRBbGxQb3NpdGlvbnNbbWFya107XG5cbiAgICAgICAgaWYgKCFmYikge1xuICAgICAgICAgICAgaW52YXJpYW50KGlzRmxvYXRUZXh0dXJlKHJlc3VsdEFsbFBvc2l0aW9ucywgMikpO1xuXG4gICAgICAgICAgICBmYiA9IHJlc3VsdEFsbFBvc2l0aW9uc1ttYXJrXSA9IGFwcC5jcmVhdGVGcmFtZWJ1ZmZlcigpLmNvbG9yVGFyZ2V0KDAsIHJlc3VsdEFsbFBvc2l0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBhcHBcbiAgICAgICAgICAgIC5kcmF3RnJhbWVidWZmZXIoZmIpXG4gICAgICAgICAgICAudmlld3BvcnQoMCwgMCwgcmVzdWx0QWxsUG9zaXRpb25zLndpZHRoLCByZXN1bHRBbGxQb3NpdGlvbnMuaGVpZ2h0KTtcblxuICAgICAgICBjYWxsXG4gICAgICAgICAgICAudW5pZm9ybUJsb2NrKCdDb25zdGFudHMnLCBjb25zdGFudHNVQilcbiAgICAgICAgICAgIC50ZXh0dXJlKCdweXJhbWlkJywgcHlyYW1pZClcbiAgICAgICAgICAgIC50ZXh0dXJlKCdncmlkJywgZ3JpZClcbiAgICAgICAgICAgIC50ZXh0dXJlKCdwb3NpdGlvbnMnLCBhbGxQb3NpdGlvbnMpXG4gICAgICAgICAgICAudGV4dHVyZSgnZWRnZXMnLCBlZGdlcylcbiAgICAgICAgICAgIC5kcmF3KCk7XG4gICAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuXG4gICAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHApIHtcbiAgICByZXR1cm4gKGVkZ2VzLCBwb3NpdGlvbnMpID0+IHtcbiAgICB9O1xufVxuIiwiaW1wb3J0ICogYXMgUGljb0dMIGZyb20gJ3BpY29nbCc7XG5cbmltcG9ydCBmaW5kQm91bmRzIGZyb20gJy4vZmluZEJvdW5kcyc7XG5pbXBvcnQgYnVpbGRHcmlkIGZyb20gJy4vYnVpbGRHcmlkJztcbmltcG9ydCBidWlsZFB5cmFtaWQgZnJvbSAnLi9idWlsZFB5cmFtaWQnO1xuaW1wb3J0IHNpbXVsYXRlIGZyb20gJy4vc2ltdWxhdGUnO1xuaW1wb3J0IGRyYXdOb2RlcyBmcm9tICcuL2RyYXdOb2Rlcyc7XG5pbXBvcnQgZHJhd0VkZ2VzIGZyb20gJy4vZHJhd0VkZ2VzJztcblxuaW1wb3J0IHtjcmVhdGVGbG9hdFRleHR1cmV9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBHUklEX1NJWkUgPSA1MTI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgY29uc3QgYXBwID0gdGhpcy5fYXBwID0gUGljb0dMLmNyZWF0ZUFwcChjYW52YXMpO1xuXG4gICAgICAgIGFwcC5mbG9hdFJlbmRlclRhcmdldHMoKTtcblxuICAgICAgICB0aGlzLl9jb25zdGFudHMgPSB7XG4gICAgICAgICAgICBub2RlQ291bnQ6IDAsXG4gICAgICAgICAgICBkZWx0YVQ6IDAuMDIsXG4gICAgICAgICAgICBzcHJpbmdDb2VmOiAwLjAwMDIsXG4gICAgICAgICAgICBzcHJpbmdMZW5ndGg6IDMwLFxuICAgICAgICAgICAgcmVwdWxzZUNvZWY6IDEuMixcbiAgICAgICAgICAgIHRoZXRhOiAwLjgsXG4gICAgICAgICAgICBkcmFnQ29lZjogMC4wMixcbiAgICAgICAgICAgIGdyYXZpdHlDb2VmOiAxLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX25vZGVzID0gW107XG4gICAgICAgIHRoaXMuX2VkZ2VDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX25vZGVOYW1lVG9JZCA9IG5ldyBNYXA7XG5cbiAgICAgICAgdGhpcy5fcnVubmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zaG91bGRVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9zdGVwcyA9IHtcbiAgICAgICAgICAgIGZpbmRCb3VuZHM6IGZpbmRCb3VuZHMoYXBwKSxcbiAgICAgICAgICAgIGJ1aWxkR3JpZDogYnVpbGRHcmlkKGFwcCksXG4gICAgICAgICAgICBidWlsZFB5cmFtaWQ6IGJ1aWxkUHlyYW1pZChhcHApLFxuICAgICAgICAgICAgc2ltdWxhdGU6IHNpbXVsYXRlKGFwcCksXG4gICAgICAgICAgICBkcmF3Tm9kZXM6IGRyYXdOb2RlcyhhcHApLFxuICAgICAgICAgICAgZHJhd0VkZ2VzOiBkcmF3RWRnZXMoYXBwKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9idWZmZXJzID0ge1xuICAgICAgICAgICAgcG9zaXRpb25zQTogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uc0I6IG51bGwsXG4gICAgICAgICAgICB2ZWxvY2l0aWVzQTogbnVsbCxcbiAgICAgICAgICAgIHZlbG9jaXRpZXNCOiBudWxsLFxuICAgICAgICAgICAgbWFzc2VzOiBudWxsLFxuICAgICAgICAgICAgZWRnZXNMb2NzOiBudWxsLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3RleHR1cmVzID0ge1xuICAgICAgICAgICAgYm91bmRzOiBudWxsLFxuICAgICAgICAgICAgZ3JpZDogbnVsbCxcbiAgICAgICAgICAgIHB5cmFtaWQ6IG51bGwsXG4gICAgICAgICAgICBhbGxQb3NpdGlvbnNBOiBudWxsLFxuICAgICAgICAgICAgYWxsUG9zaXRpb25zQjogbnVsbCxcbiAgICAgICAgICAgIGVkZ2VzOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbmZpZ3VyZShjb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uc3RhbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uc3RhbnRzLCBjb25maWcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZE5vZGVzKG5vZGVzKSB7XG4gICAgICAgIGxldCBuZXh0SWQgPSB0aGlzLl9ub2Rlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChjb25zdCB7bmFtZSwgcG9zaXRpb24sIHdlaWdodH0gb2Ygbm9kZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX25vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgIT0gbnVsbCA/IG5hbWUgOiBudWxsLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbiB8fCBbMCwgMF0sXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiB3ZWlnaHQgIT0gbnVsbCA/IHdlaWdodCA6IDEsXG4gICAgICAgICAgICAgICAgZWRnZXM6IFtdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2RlTmFtZVRvSWQuc2V0KG5hbWUsIG5leHRJZCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3J1bigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFkZEVkZ2VzKGVkZ2VzKSB7XG4gICAgICAgIGZvciAoY29uc3Qge3NvdXJjZSwgdGFyZ2V0LCB3ZWlnaHR9IG9mIGVkZ2VzKSB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2VJZCA9IHR5cGVvZiBzb3VyY2UgPT09ICdudW1iZXInID8gc291cmNlIDogdGhpcy5fbm9kZU5hbWVUb0lkLmdldChzb3VyY2UpO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJyA/IHRhcmdldCA6IHRoaXMuX25vZGVOYW1lVG9JZC5nZXQodGFyZ2V0KTtcblxuICAgICAgICAgICAgdGhpcy5fbm9kZXNbc291cmNlSWRdLmVkZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0SWQsXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiB3ZWlnaHQgIT0gbnVsbCA/IHdlaWdodCA6IDEsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgKyt0aGlzLl9lZGdlQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ydW4oKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfcnVuKCkge1xuICAgICAgICB0aGlzLl9zaG91bGRVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIGlmICghdGhpcy5fcnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIHRoaXMuX3J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3Byb2dyZXNzKCkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl90dXJuKCk7XG4gICAgICAgICAgICB0aGlzLl9wcm9ncmVzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBhcHAgPSB0aGlzLl9hcHA7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuX2J1ZmZlcnM7XG4gICAgICAgIGNvbnN0IHRleCA9IHRoaXMuX3RleHR1cmVzO1xuXG4gICAgICAgIGNvbnN0IG5vZGVDb3VudCA9IHRoaXMuX25vZGVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZWRnZUNvdW50ID0gdGhpcy5fZWRnZUNvdW50O1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoMiAqIG5vZGVDb3VudCk7XG4gICAgICAgIGNvbnN0IG1hc3NlcyA9IG5ldyBGbG9hdDMyQXJyYXkobm9kZUNvdW50KTtcbiAgICAgICAgY29uc3QgZWRnZXNMb2NzID0gbmV3IFVpbnQzMkFycmF5KDIgKiBub2RlQ291bnQpO1xuICAgICAgICBjb25zdCBlZGdlcyA9IG5ldyBGbG9hdDMyQXJyYXkoMyAqIGVkZ2VDb3VudCk7XG5cbiAgICAgICAgY29uc3QgbCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX25vZGVzW2ldO1xuXG4gICAgICAgICAgICBwb3NpdGlvbnNbMippXSA9IG5vZGUucG9zaXRpb25zWzBdO1xuICAgICAgICAgICAgcG9zaXRpb25zWzIqaSsxXSA9IG5vZGUucG9zaXRpb25zWzFdO1xuICAgICAgICAgICAgbWFzc2VzW2ldID0gbm9kZS53ZWlnaHQ7XG4gICAgICAgICAgICBlZGdlc0xvY3NbMippXSA9IGw7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBub2RlLmVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgZWRnZXNbbCsrXSA9IGk7XG4gICAgICAgICAgICAgICAgZWRnZXNbbCsrXSA9IGVkZ2UudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGVkZ2VzW2wrK10gPSBlZGdlLndlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWRnZXNMb2NzWzIqaSsxXSA9IGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIGNvbnN0YW50cy5cblxuICAgICAgICB0aGlzLl9jb25zdGFudHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25zdGFudHMsIHtub2RlQ291bnR9KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJ1ZmZlcnMuXG5cbiAgICAgICAgYnVmLnBvc2l0aW9uc0EgPSBhcHAuY3JlYXRlVmVydGV4QnVmZmVyKFBpY29HTC5GTE9BVCwgMiwgcG9zaXRpb25zKTtcbiAgICAgICAgYnVmLnBvc2l0aW9uc0IgPSBhcHAuY3JlYXRlVmVydGV4QnVmZmVyKFBpY29HTC5GTE9BVCwgMiwgcG9zaXRpb25zLmxlbmd0aCk7XG4gICAgICAgIGJ1Zi52ZWxvY2l0aWVzQSA9IGFwcC5jcmVhdGVWZXJ0ZXhCdWZmZXIoUGljb0dMLkZMT0FULCAyLCBwb3NpdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgYnVmLnZlbG9jaXRpZXNCID0gYXBwLmNyZWF0ZVZlcnRleEJ1ZmZlcihQaWNvR0wuRkxPQVQsIDIsIHBvc2l0aW9ucy5sZW5ndGgpO1xuICAgICAgICBidWYubWFzc2VzID0gYXBwLmNyZWF0ZVZlcnRleEJ1ZmZlcihQaWNvR0wuRkxPQVQsIDEsIG1hc3Nlcyk7XG4gICAgICAgIGJ1Zi5lZGdlc0xvY3MgPSBhcHAuY3JlYXRlVmVydGV4QnVmZmVyKFBpY29HTC5VTlNJR05FRCwgMiwgZWRnZXNMb2NzKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHRleHR1cmVzLlxuXG4gICAgICAgIHRleC5ib3VuZHMgPSBjcmVhdGVGbG9hdFRleHR1cmUoYXBwLCAxLCAxLCA0KTtcbiAgICAgICAgdGV4LmdyaWQgPSBjcmVhdGVGbG9hdFRleHR1cmUoYXBwLCBHUklEX1NJWkUsIEdSSURfU0laRSwgNCk7XG4gICAgICAgIHRleC5weXJhbWlkID0gY3JlYXRlRmxvYXRUZXh0dXJlKGFwcCwgR1JJRF9TSVpFIC0gMiwgR1JJRF9TSVpFIC8gMiwgNCk7XG5cbiAgICAgICAgY29uc3QgcG9zVGV4U2l6ZSA9IE1hdGguY2VpbChNYXRoLnNxcnQobm9kZUNvdW50KSk7XG4gICAgICAgIHRleC5hbGxQb3NpdGlvbnNBID0gY3JlYXRlRmxvYXRUZXh0dXJlKGFwcCwgcG9zVGV4U2l6ZSwgcG9zVGV4U2l6ZSwgMik7XG4gICAgICAgIHRleC5hbGxQb3NpdGlvbnNCID0gY3JlYXRlRmxvYXRUZXh0dXJlKGFwcCwgcG9zVGV4U2l6ZSwgcG9zVGV4U2l6ZSwgMik7XG5cbiAgICAgICAgY29uc3QgZWRnVGV4U2l6ZSA9IE1hdGguY2VpbChNYXRoLnNxcnQoZWRnZUNvdW50KSk7XG4gICAgICAgIHRleC5lZGdlcyA9IGNyZWF0ZUZsb2F0VGV4dHVyZShhcHAsIGVkZ1RleFNpemUsIGVkZ1RleFNpemUsIDIpO1xuICAgIH1cblxuICAgIF90dXJuKCkge1xuICAgICAgICBjb25zdCBidWYgPSB0aGlzLl9idWZmZXJzO1xuICAgICAgICBjb25zdCB0ZXggPSB0aGlzLl90ZXh0dXJlcztcbiAgICAgICAgY29uc3Qgc3RlcHMgPSB0aGlzLl9zdGVwcztcblxuICAgICAgICBzdGVwcy5kcmF3RWRnZXModGV4LmVkZ2VzLCB0ZXguYWxsUG9zaXRpb25zQSk7XG5cbiAgICAgICAgLypcbiAgICAgICAgc3RlcHMuZmluZEJvdW5kcyhidWYucG9zaXRpb25zQSwgdGV4LmJvdW5kcyk7XG5cbiAgICAgICAgc3RlcHMuYnVpbGRHcmlkKGJ1Zi5wb3NpdGlvbnNBLCBidWYubWFzc2VzLCB0ZXguYm91bmRzLCB0ZXguZ3JpZCk7XG5cbiAgICAgICAgc3RlcHMuYnVpbGRQeXJhbWlkKHRleC5ncmlkLCB0ZXgucHlyYW1pZCk7XG5cbiAgICAgICAgc3RlcHMuc2ltdWxhdGUoXG4gICAgICAgICAgICBidWYucG9zaXRpb25zQSwgYnVmLnZlbG9jaXRpZXNBLCBidWYubWFzc2VzLCBidWYuZWRnZXNMb2NzLFxuICAgICAgICAgICAgdGV4LnB5cmFtaWQsIHRleC5ncmlkLCB0ZXguYWxsUG9zaXRpb25zQSwgdGV4LmVkZ2VzLFxuICAgICAgICAgICAgdGhpcy5fY29uc3RhbnRzLFxuICAgICAgICAgICAgYnVmLnBvc2l0aW9uc0IsIGJ1Zi52ZWxvY2l0aWVzQixcbiAgICAgICAgICAgIHRleC5hbGxQb3NpdGlvbnNCLFxuICAgICAgICApO1xuXG4gICAgICAgIHN0ZXBzLmRyYXdFZGdlcyh0ZXguZWRnZXMsIHRleC5hbGxQb3NpdGlvbnNCKTtcblxuICAgICAgICBzdGVwcy5kcmF3Tm9kZXModGV4LmFsbFBvc2l0aW9uc0IpO1xuXG4gICAgICAgIFtidWYucG9zaXRpb25zQSwgYnVmLnBvc2l0aW9uc0JdID0gW2J1Zi5wb3NpdGlvbnNCLCBidWYucG9zaXRpb25zQV07XG4gICAgICAgIFtidWYudmVsb2NpdGllc0EsIGJ1Zi52ZWxvY2l0aWVzQl0gPSBbYnVmLnZlbG9jaXRpZXNCLCBidWYudmVsb2NpdGllc0FdO1xuICAgICAgICBbdGV4LmFsbFBvc2l0aW9uc0EsIHRleC5hbGxQb3NpdGlvbnNCXSA9IFt0ZXguYWxsUG9zaXRpb25zQiwgdGV4LmFsbFBvc2l0aW9uc0FdO1xuICAgICAgICAqL1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJ3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsInRoaXMiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhbGwiLCJsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsIm4iLCJfX2VzTW9kdWxlIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJnbCIsImdldENvbnRleHQiLCJDT05TVEFOVFMiLCJCWVRFIiwiVU5TSUdORURfQllURSIsIlNIT1JUIiwiVU5TSUdORURfU0hPUlQiLCJJTlQiLCJVTlNJR05FRF9JTlQiLCJGTE9BVCIsImdldFBhcmFtZXRlciIsIk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTIiwiTUFYX1VOSUZPUk1fQlVGRkVSX0JJTkRJTkdTIiwiVEVYVFVSRV9GT1JNQVRfREVGQVVMVFMiLCJSRUQiLCJSOCIsIlJHIiwiUkc4IiwiUkdCIiwiUkdCOCIsIlJHQkEiLCJSR0JBOCIsIkRFUFRIX0NPTVBPTkVOVCIsIkRFUFRIX0NPTVBPTkVOVDE2IiwiUjE2RiIsIlJHMTZGIiwiUkdCMTZGIiwiUkdCQTE2RiIsIkRFUFRIX0NPTVBPTkVOVDMyRiIsIkNPTVBSRVNTRURfVFlQRVMiLCJTaGFkZXIiLCJ0eXBlIiwic291cmNlIiwic2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwic2hhZGVyU291cmNlIiwiY29tcGlsZVNoYWRlciIsImdldFNoYWRlclBhcmFtZXRlciIsIkNPTVBJTEVfU1RBVFVTIiwiaSIsImxpbmVzIiwiZXJyb3IiLCJnZXRTaGFkZXJJbmZvTG9nIiwic3BsaXQiLCJsZW5ndGgiLCJkZWxldGUiLCJkZWxldGVTaGFkZXIiLCJRdWVyeSIsInRhcmdldCIsInF1ZXJ5IiwiY3JlYXRlUXVlcnkiLCJhY3RpdmUiLCJyZXN1bHQiLCJiZWdpbiIsImJlZ2luUXVlcnkiLCJlbmQiLCJlbmRRdWVyeSIsInJlYWR5IiwiZ2V0UXVlcnlQYXJhbWV0ZXIiLCJRVUVSWV9SRVNVTFRfQVZBSUxBQkxFIiwiTnVtYmVyIiwiUVVFUllfUkVTVUxUIiwiZGVsZXRlUXVlcnkiLCJBcHAiLCJQaWNvR0wiLCJ2ZXJzaW9uIiwiY3JlYXRlQXBwIiwiY29udGV4dEF0dHJpYnV0ZXMiLCJDdWJlbWFwIiwiRHJhd0NhbGwiLCJGcmFtZWJ1ZmZlciIsIlByb2dyYW0iLCJUZXh0dXJlIiwiVGltZXIiLCJUcmFuc2Zvcm1GZWVkYmFjayIsIlVuaWZvcm1CdWZmZXIiLCJWZXJ0ZXhBcnJheSIsIlZlcnRleEJ1ZmZlciIsIndpZHRoIiwiZHJhd2luZ0J1ZmZlcldpZHRoIiwiaGVpZ2h0IiwiZHJhd2luZ0J1ZmZlckhlaWdodCIsInZpZXdwb3J0WCIsInZpZXdwb3J0WSIsInZpZXdwb3J0V2lkdGgiLCJ2aWV3cG9ydEhlaWdodCIsImN1cnJlbnREcmF3Q2FsbHMiLCJlbXB0eUZyYWdtZW50U2hhZGVyIiwic3RhdGUiLCJBcnJheSIsIldFQkdMX0lORk8iLCJNQVhfVEVYVFVSRV9VTklUUyIsIk1BWF9VTklGT1JNX0JVRkZFUlMiLCJjbGVhckJpdHMiLCJDT0xPUl9CVUZGRVJfQklUIiwiREVQVEhfQlVGRkVSX0JJVCIsIlNURU5DSUxfQlVGRkVSX0JJVCIsImNwdVRpbWUiLCJncHVUaW1lIiwiZmxvYXRSZW5kZXJUYXJnZXRzRW5hYmxlZCIsImxpbmVhckZsb2F0VGV4dHVyZXNFbmFibGVkIiwiczN0Y1RleHR1cmVzRW5hYmxlZCIsInMzdGNTUkdCVGV4dHVyZXNFbmFibGVkIiwiZXRjVGV4dHVyZXNFbmFibGVkIiwiYXN0Y1RleHR1cmVzRW5hYmxlZCIsInB2cnRjVGV4dHVyZXNFbmFibGVkIiwidmlld3BvcnQiLCJjb2xvck1hc2siLCJyIiwiZyIsImIiLCJhIiwiY2xlYXJDb2xvciIsImNsZWFyTWFzayIsIm1hc2siLCJjbGVhciIsImRyYXdGcmFtZWJ1ZmZlciIsImZyYW1lYnVmZmVyIiwiYmluZEZvckRyYXciLCJyZWFkRnJhbWVidWZmZXIiLCJiaW5kRm9yUmVhZCIsImRlZmF1bHREcmF3RnJhbWVidWZmZXIiLCJiaW5kRnJhbWVidWZmZXIiLCJEUkFXX0ZSQU1FQlVGRkVSIiwiZGVmYXVsdFJlYWRGcmFtZWJ1ZmZlciIsIlJFQURfRlJBTUVCVUZGRVIiLCJkZXB0aFJhbmdlIiwibmVhciIsImZhciIsImRlcHRoVGVzdCIsImVuYWJsZSIsIkRFUFRIX1RFU1QiLCJub0RlcHRoVGVzdCIsImRpc2FibGUiLCJkZXB0aE1hc2siLCJkZXB0aEZ1bmMiLCJmdW5jIiwiYmxlbmQiLCJCTEVORCIsIm5vQmxlbmQiLCJibGVuZEZ1bmMiLCJzcmMiLCJkZXN0IiwiYmxlbmRGdW5jU2VwYXJhdGUiLCJjc3JjIiwiY2Rlc3QiLCJhc3JjIiwiYWRlc3QiLCJzdGVuY2lsVGVzdCIsIlNURU5DSUxfVEVTVCIsIm5vU3RlbmNpbFRlc3QiLCJzY2lzc29yVGVzdCIsIlNDSVNTT1JfVEVTVCIsIm5vU2Npc3NvclRlc3QiLCJzY2lzc29yIiwieCIsInkiLCJzdGVuY2lsTWFzayIsInN0ZW5jaWxNYXNrU2VwYXJhdGUiLCJmYWNlIiwic3RlbmNpbEZ1bmMiLCJyZWYiLCJzdGVuY2lsRnVuY1NlcGFyYXRlIiwic3RlbmNpbE9wIiwic3RlbmNpbEZhaWwiLCJkZXB0aEZhaWwiLCJwYXNzIiwic3RlbmNpbE9wU2VwYXJhdGUiLCJyYXN0ZXJpemUiLCJSQVNURVJJWkVSX0RJU0NBUkQiLCJub1Jhc3Rlcml6ZSIsImN1bGxCYWNrZmFjZXMiLCJDVUxMX0ZBQ0UiLCJkcmF3QmFja2ZhY2VzIiwiZmxvYXRSZW5kZXJUYXJnZXRzIiwiZ2V0RXh0ZW5zaW9uIiwibGluZWFyRmxvYXRUZXh0dXJlcyIsInMzdGNUZXh0dXJlcyIsImV4dCIsIkNPTVBSRVNTRURfUkdCX1MzVENfRFhUMV9FWFQiLCJDT01QUkVTU0VEX1JHQkFfUzNUQ19EWFQxX0VYVCIsIkNPTVBSRVNTRURfUkdCQV9TM1RDX0RYVDNfRVhUIiwiQ09NUFJFU1NFRF9SR0JBX1MzVENfRFhUNV9FWFQiLCJDT01QUkVTU0VEX1NSR0JfUzNUQ19EWFQxX0VYVCIsIkNPTVBSRVNTRURfU1JHQl9BTFBIQV9TM1RDX0RYVDFfRVhUIiwiQ09NUFJFU1NFRF9TUkdCX0FMUEhBX1MzVENfRFhUM19FWFQiLCJDT01QUkVTU0VEX1NSR0JfQUxQSEFfUzNUQ19EWFQ1X0VYVCIsImV0Y1RleHR1cmVzIiwiQ09NUFJFU1NFRF9SMTFfRUFDIiwiQ09NUFJFU1NFRF9TSUdORURfUjExX0VBQyIsIkNPTVBSRVNTRURfUkcxMV9FQUMiLCJDT01QUkVTU0VEX1NJR05FRF9SRzExX0VBQyIsIkNPTVBSRVNTRURfUkdCOF9FVEMyIiwiQ09NUFJFU1NFRF9TUkdCOF9FVEMyIiwiQ09NUFJFU1NFRF9SR0I4X1BVTkNIVEhST1VHSF9BTFBIQTFfRVRDMiIsIkNPTVBSRVNTRURfU1JHQjhfUFVOQ0hUSFJPVUdIX0FMUEhBMV9FVEMyIiwiQ09NUFJFU1NFRF9SR0JBOF9FVEMyX0VBQyIsIkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0VUQzJfRUFDIiwiYXN0Y1RleHR1cmVzIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfNHg0X0tIUiIsIkNPTVBSRVNTRURfUkdCQV9BU1RDXzV4NF9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ181eDVfS0hSIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfNng1X0tIUiIsIkNPTVBSRVNTRURfUkdCQV9BU1RDXzZ4Nl9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ184eDVfS0hSIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfOHg2X0tIUiIsIkNPTVBSRVNTRURfUkdCQV9BU1RDXzh4OF9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ18xMHg1X0tIUiIsIkNPTVBSRVNTRURfUkdCQV9BU1RDXzEweDZfS0hSIiwiQ09NUFJFU1NFRF9SR0JBX0FTVENfMTB4OF9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ18xMHgxMF9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ18xMngxMF9LSFIiLCJDT01QUkVTU0VEX1JHQkFfQVNUQ18xMngxMl9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzR4NF9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzV4NF9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzV4NV9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzZ4NV9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzZ4Nl9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzh4NV9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzh4Nl9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzh4OF9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEweDVfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMHg2X0tIUiIsIkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTB4OF9LSFIiLCJDT01QUkVTU0VEX1NSR0I4X0FMUEhBOF9BU1RDXzEweDEwX0tIUiIsIkNPTVBSRVNTRURfU1JHQjhfQUxQSEE4X0FTVENfMTJ4MTBfS0hSIiwiQ09NUFJFU1NFRF9TUkdCOF9BTFBIQThfQVNUQ18xMngxMl9LSFIiLCJwdnJ0Y1RleHR1cmVzIiwiQ09NUFJFU1NFRF9SR0JfUFZSVENfNEJQUFYxX0lNRyIsIkNPTVBSRVNTRURfUkdCX1BWUlRDXzJCUFBWMV9JTUciLCJDT01QUkVTU0VEX1JHQkFfUFZSVENfNEJQUFYxX0lNRyIsIkNPTVBSRVNTRURfUkdCQV9QVlJUQ18yQlBQVjFfSU1HIiwicmVhZFBpeGVsIiwib3V0Q29sb3IiLCJvcHRpb25zIiwiRFVNTVlfT0JKRUNUIiwiZm9ybWF0IiwicmVhZFBpeGVscyIsImRlZmF1bHRWaWV3cG9ydCIsInJlc2l6ZSIsImNyZWF0ZVByb2dyYW0iLCJ2c1NvdXJjZSIsImZzU291cmNlIiwieGZvcm1GZWVkYmFja1ZhcnMiLCJjcmVhdGVWZXJ0ZXhBcnJheSIsImNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrIiwiY3JlYXRlVmVydGV4QnVmZmVyIiwiaXRlbVNpemUiLCJkYXRhIiwidXNhZ2UiLCJjcmVhdGVNYXRyaXhCdWZmZXIiLCJjcmVhdGVJbmRleEJ1ZmZlciIsImNyZWF0ZVVuaWZvcm1CdWZmZXIiLCJsYXlvdXQiLCJjcmVhdGVUZXh0dXJlMkQiLCJpbWFnZSIsInVuZGVmaW5lZCIsIlRFWFRVUkVfMkQiLCJjcmVhdGVUZXh0dXJlQXJyYXkiLCJkZXB0aCIsIlRFWFRVUkVfMkRfQVJSQVkiLCJjcmVhdGVUZXh0dXJlM0QiLCJURVhUVVJFXzNEIiwiY3JlYXRlQ3ViZW1hcCIsImNyZWF0ZUZyYW1lYnVmZmVyIiwiY3JlYXRlVGltZXIiLCJjcmVhdGVEcmF3Q2FsbCIsInByb2dyYW0iLCJ2ZXJ0ZXhBcnJheSIsInByaW1pdGl2ZSIsImFwcFN0YXRlIiwibmVnWCIsInBvc1giLCJuZWdZIiwicG9zWSIsIm5lZ1oiLCJwb3NaIiwiZGVmYXVsdFR5cGUiLCJ0ZXh0dXJlIiwiY3JlYXRlVGV4dHVyZSIsImludGVybmFsRm9ybWF0IiwiY3VycmVudFVuaXQiLCJmbGlwWSIsIm1pbkZpbHRlciIsIkxJTkVBUl9NSVBNQVBfTkVBUkVTVCIsIk5FQVJFU1QiLCJtYWdGaWx0ZXIiLCJMSU5FQVIiLCJ3cmFwUyIsIlJFUEVBVCIsIndyYXBUIiwiY29tcGFyZU1vZGUiLCJOT05FIiwiY29tcGFyZUZ1bmMiLCJMRVFVQUwiLCJnZW5lcmF0ZU1pcG1hcHMiLCJMSU5FQVJfTUlQTUFQX0xJTkVBUiIsImJpbmQiLCJwaXhlbFN0b3JlaSIsIlVOUEFDS19GTElQX1lfV0VCR0wiLCJ0ZXhQYXJhbWV0ZXJpIiwiVEVYVFVSRV9DVUJFX01BUCIsIlRFWFRVUkVfTUFHX0ZJTFRFUiIsIlRFWFRVUkVfTUlOX0ZJTFRFUiIsIlRFWFRVUkVfV1JBUF9TIiwiVEVYVFVSRV9XUkFQX1QiLCJURVhUVVJFX0NPTVBBUkVfRlVOQyIsIlRFWFRVUkVfQ09NUEFSRV9NT0RFIiwiYmFzZUxldmVsIiwiVEVYVFVSRV9CQVNFX0xFVkVMIiwibWF4TGV2ZWwiLCJURVhUVVJFX01BWF9MRVZFTCIsIm1pbkxPRCIsIlRFWFRVUkVfTUlOX0xPRCIsIm1heExPRCIsIlRFWFRVUkVfTUFYX0xPRCIsImxldmVscyIsIk1hdGgiLCJmbG9vciIsImxvZzIiLCJtaW4iLCJ0ZXhTdG9yYWdlMkQiLCJ0ZXhTdWJJbWFnZTJEIiwiVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YIiwiVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YIiwiVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9ZIiwiVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZIiwiVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aIiwiVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9aIiwiZ2VuZXJhdGVNaXBtYXAiLCJkZWxldGVUZXh0dXJlIiwidGV4dHVyZXMiLCJ1bml0IiwiY3VycmVudFRleHR1cmUiLCJhY3RpdmVUZXh0dXJlIiwiVEVYVFVSRTAiLCJiaW5kVGV4dHVyZSIsIlRSSUFOR0xFUyIsImN1cnJlbnRQcm9ncmFtIiwiY3VycmVudFZlcnRleEFycmF5IiwiY3VycmVudFRyYW5zZm9ybUZlZWRiYWNrIiwidW5pZm9ybUluZGljZXMiLCJ1bmlmb3JtTmFtZXMiLCJNQVhfVU5JRk9STVMiLCJ1bmlmb3JtVmFsdWVzIiwidW5pZm9ybUNvdW50IiwidW5pZm9ybUJ1ZmZlcnMiLCJ1bmlmb3JtQmxvY2tOYW1lcyIsInVuaWZvcm1CbG9ja0Jhc2VzIiwidW5pZm9ybUJsb2NrQ291bnQiLCJzYW1wbGVySW5kaWNlcyIsInRleHR1cmVDb3VudCIsIm51bUVsZW1lbnRzIiwibnVtSW5zdGFuY2VzIiwidHJhbnNmb3JtRmVlZGJhY2siLCJ1bmlmb3JtIiwidmFsdWUiLCJpbmRleCIsInNhbXBsZXJzIiwidW5pZm9ybUJsb2NrIiwiYnVmZmVyIiwiYmFzZSIsInVuaWZvcm1CbG9ja3MiLCJlbGVtZW50Q291bnQiLCJjb3VudCIsImluc3RhbmNlQ291bnQiLCJkcmF3Iiwic2FtcGxlckNvdW50IiwidUluZGV4IiwidEluZGV4IiwiYmVnaW5UcmFuc2Zvcm1GZWVkYmFjayIsImluc3RhbmNlZCIsImluZGV4ZWQiLCJkcmF3RWxlbWVudHNJbnN0YW5jZWQiLCJpbmRleFR5cGUiLCJkcmF3QXJyYXlzSW5zdGFuY2VkIiwiZHJhd0VsZW1lbnRzIiwiZHJhd0FycmF5cyIsImVuZFRyYW5zZm9ybUZlZWRiYWNrIiwibGVuIiwiYW5nbGVCdWdCdWZmZXJzIiwiYmluZEJ1ZmZlckJhc2UiLCJUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSIiwibnVtQ29sb3JUYXJnZXRzIiwiY29sb3JUZXh0dXJlcyIsImNvbG9yQXR0YWNobWVudHMiLCJjb2xvclRleHR1cmVUYXJnZXRzIiwiZGVwdGhUZXh0dXJlIiwiZGVwdGhUZXh0dXJlVGFyZ2V0IiwiY29sb3JUYXJnZXQiLCJpczNEIiwiQ09MT1JfQVRUQUNITUVOVDAiLCJjdXJyZW50RnJhbWVidWZmZXIiLCJiaW5kQW5kQ2FwdHVyZVN0YXRlIiwiZnJhbWVidWZmZXJUZXh0dXJlTGF5ZXIiLCJmcmFtZWJ1ZmZlclRleHR1cmUyRCIsImRyYXdCdWZmZXJzIiwicmVzdG9yZVN0YXRlIiwiZGVwdGhUYXJnZXQiLCJERVBUSF9BVFRBQ0hNRU5UIiwiZGVsZXRlRnJhbWVidWZmZXIiLCJVbmlmb3JtcyIsIlNpbmdsZUNvbXBvbmVudFVuaWZvcm0iLCJNdWx0aU51bWVyaWNVbmlmb3JtIiwiTXVsdGlCb29sVW5pZm9ybSIsIk1hdHJpeFVuaWZvcm0iLCJ4Zm9ybUZlZWJhY2tWYXJzIiwidlNoYWRlciIsImZTaGFkZXIiLCJvd25WZXJ0ZXhTaGFkZXIiLCJvd25GcmFnbWVudFNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJGUkFHTUVOVF9TSEFERVIiLCJhdHRhY2hTaGFkZXIiLCJ0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzIiwiU0VQQVJBVEVfQVRUUklCUyIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJ1bmlmb3JtcyIsInVzZVByb2dyYW0iLCJudW1Vbmlmb3JtcyIsIkFDVElWRV9VTklGT1JNUyIsInRleHR1cmVVbml0IiwidW5pZm9ybUluZm8iLCJnZXRBY3RpdmVVbmlmb3JtIiwidW5pZm9ybUhhbmRsZSIsImdldFVuaWZvcm1Mb2NhdGlvbiIsIlVuaWZvcm1DbGFzcyIsInNpemUiLCJTQU1QTEVSXzJEIiwiSU5UX1NBTVBMRVJfMkQiLCJVTlNJR05FRF9JTlRfU0FNUExFUl8yRCIsIlNBTVBMRVJfMkRfU0hBRE9XIiwiU0FNUExFUl8yRF9BUlJBWSIsIklOVF9TQU1QTEVSXzJEX0FSUkFZIiwiVU5TSUdORURfSU5UX1NBTVBMRVJfMkRfQVJSQVkiLCJTQU1QTEVSXzJEX0FSUkFZX1NIQURPVyIsIlNBTVBMRVJfQ1VCRSIsIklOVF9TQU1QTEVSX0NVQkUiLCJVTlNJR05FRF9JTlRfU0FNUExFUl9DVUJFIiwiU0FNUExFUl9DVUJFX1NIQURPVyIsIlNBTVBMRVJfM0QiLCJJTlRfU0FNUExFUl8zRCIsIlVOU0lHTkVEX0lOVF9TQU1QTEVSXzNEIiwidW5pZm9ybTFpIiwiQk9PTCIsIkZMT0FUX1ZFQzIiLCJJTlRfVkVDMiIsIlVOU0lHTkVEX0lOVF9WRUMyIiwiRkxPQVRfVkVDMyIsIklOVF9WRUMzIiwiVU5TSUdORURfSU5UX1ZFQzMiLCJGTE9BVF9WRUM0IiwiSU5UX1ZFQzQiLCJVTlNJR05FRF9JTlRfVkVDNCIsIkJPT0xfVkVDMiIsIkJPT0xfVkVDMyIsIkJPT0xfVkVDNCIsIkZMT0FUX01BVDIiLCJGTE9BVF9NQVQzIiwiRkxPQVRfTUFUNCIsIkZMT0FUX01BVDJ4MyIsIkZMT0FUX01BVDJ4NCIsIkZMT0FUX01BVDN4MiIsIkZMT0FUX01BVDN4NCIsIkZMT0FUX01BVDR4MiIsIkZMT0FUX01BVDR4MyIsIm51bVVuaWZvcm1CbG9ja3MiLCJBQ1RJVkVfVU5JRk9STV9CTE9DS1MiLCJibG9ja05hbWUiLCJnZXRBY3RpdmVVbmlmb3JtQmxvY2tOYW1lIiwiYmxvY2tJbmRleCIsImdldFVuaWZvcm1CbG9ja0luZGV4IiwidW5pZm9ybUJsb2NrQmFzZSIsInVuaWZvcm1CbG9ja0JpbmRpbmciLCJkZWxldGVQcm9ncmFtIiwic2V0IiwiVU5JRk9STV9GVU5DX05BTUUiLCJVTklGT1JNX0NPTVBPTkVOVF9DT1VOVCIsIlVOSUZPUk1fQ0FDSEVfQ0xBU1MiLCJJbnQzMkFycmF5IiwiVWludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJoYW5kbGUiLCJnbEZ1bmNOYW1lIiwiY2FjaGUiLCJmaWxsIiwiaiIsIkRVTU1ZX0FSUkFZIiwiYmluZGluZyIsImNvbXByZXNzZWQiLCJ3cmFwUiIsIm1pcG1hcHMiLCJtYXgiLCJURVhUVVJFX1dSQVBfUiIsInRleFBhcmFtZXRlcmYiLCJ0ZXhTdG9yYWdlM0QiLCJpc0FycmF5IiwibnVtTGV2ZWxzIiwiY29tcHJlc3NlZFRleFN1YkltYWdlM0QiLCJjb21wcmVzc2VkVGV4U3ViSW1hZ2UyRCIsInRleFN1YkltYWdlM0QiLCJjcHVUaW1lciIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwiRGF0ZSIsImdwdVRpbWVyRXh0ZW5zaW9uIiwiZ3B1VGltZXIiLCJncHVUaW1lclF1ZXJ5IiwiVElNRV9FTEFQU0VEX0VYVCIsImNwdVN0YXJ0VGltZSIsInN0YXJ0Iiwibm93IiwiZ3B1VGltZXJBdmFpbGFibGUiLCJncHVUaW1lckRpc2pvaW50IiwiR1BVX0RJU0pPSU5UX0VYVCIsImZlZWRiYWNrQnVmZmVyIiwiYmluZFRyYW5zZm9ybUZlZWRiYWNrIiwiVFJBTlNGT1JNX0ZFRURCQUNLIiwiZGVsZXRlVHJhbnNmb3JtRmVlZGJhY2siLCJEWU5BTUlDX0RSQVciLCJjcmVhdGVCdWZmZXIiLCJkYXRhVmlld3MiLCJvZmZzZXRzIiwic2l6ZXMiLCJ0eXBlcyIsImN1cnJlbnRCYXNlIiwiYmluZEJ1ZmZlciIsIlVOSUZPUk1fQlVGRkVSIiwiYnVmZmVyRGF0YSIsInZpZXciLCJ1cGRhdGUiLCJvZmZzZXQiLCJzdWJhcnJheSIsImJ1ZmZlclN1YkRhdGEiLCJkZWxldGVCdWZmZXIiLCJjdXJyZW50QnVmZmVyIiwiaW5zdGFuY2VkQnVmZmVycyIsInZlcnRleEF0dHJpYnV0ZUJ1ZmZlciIsImF0dHJpYnV0ZUluZGV4IiwidmVydGV4QnVmZmVyIiwiYXR0cmlidXRlQnVmZmVyIiwiaW5zdGFuY2VBdHRyaWJ1dGVCdWZmZXIiLCJ2ZXJ0ZXhJbnRlZ2VyQXR0cmlidXRlQnVmZmVyIiwiaW5zdGFuY2VJbnRlZ2VyQXR0cmlidXRlQnVmZmVyIiwidmVydGV4Tm9ybWFsaXplZEF0dHJpYnV0ZUJ1ZmZlciIsImluc3RhbmNlTm9ybWFsaXplZEF0dHJpYnV0ZUJ1ZmZlciIsImluZGV4QnVmZmVyIiwiYmluZFZlcnRleEFycmF5IiwibnVtSXRlbXMiLCJkZWxldGVWZXJ0ZXhBcnJheSIsImludGVnZXIiLCJub3JtYWxpemVkIiwibnVtQ29sdW1ucyIsInZlcnRleEF0dHJpYklQb2ludGVyIiwiVFlQRV9TSVpFIiwidmVydGV4QXR0cmliUG9pbnRlciIsInZlcnRleEF0dHJpYkRpdmlzb3IiLCJlbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSIsImluZGV4QXJyYXkiLCJTVEFUSUNfRFJBVyIsImRhdGFMZW5ndGgiLCJFTEVNRU5UX0FSUkFZX0JVRkZFUiIsIkFSUkFZX0JVRkZFUiIsImxvZzQiLCJpc1Bvd2VyT2YyIiwiRkxPQVRfRk9STUFUU19CWV9JVEVNX1NJWkUiLCJpc0Zsb2F0VGV4dHVyZSIsInRleCIsImlzRmxvYXRCdWZmZXIiLCJidWYiLCJjcmVhdGVGbG9hdFRleHR1cmUiLCJhcHAiLCJpbnZhcmlhbnQiLCJleHByIiwiRXJyb3IiLCJjcmVhdGVWYW8iLCJwYXR0ZXJuIiwidmFvIiwic3RlcFNpemUiLCJLaXQiLCJyZWFkYWJsZSIsImR1cGxleCIsInRmIiwibWFyayIsIlN5bWJvbCIsImludHJvUHJvZyIsImludHJvVmVydCIsInN0b3JlRnJhZyIsInJlZHVjZVByb2ciLCJyZWR1Y2VWZXJ0IiwiTiIsInRlbXBBIiwidGVtcEIiLCJhY3RpdmVLaXQiLCJyZXN1bHRGYiIsInN0ZXBDb3VudCIsImNlaWwiLCJuZXh0S2l0IiwicHJvZyIsImFzc2VtYmxlVmVydCIsInBvc2l0aW9ucyIsIm1hc3NlcyIsImJvdW5kcyIsImZiIiwiUVVBRCIsInF1YWRWZXJ0IiwicmVkdWNlRnJhZyIsImdyaWQiLCJpbnRlcmltIiwidGV4QSIsInRleEIiLCJmYkEiLCJmYkIiLCJhY3RpdmVGYiIsImFjdGl2ZVRleCIsImNvcHlUZXhTdWJJbWFnZTJEIiwiQ09OU1RBTlRTX0xBWU9VVCIsInNhdmVDb25zdGFudHMiLCJjb25zdHMiLCJ1YiIsIm5vZGVDb3VudCIsImRlbHRhVCIsInNwcmluZ0NvZWYiLCJzcHJpbmdMZW5ndGgiLCJyZXB1bHNlQ29lZiIsInRoZXRhIiwiZHJhZ0NvZWYiLCJncmF2aXR5Q29lZiIsImNvbnN0YW50c1VCIiwic2ltdWxhdGVWZXJ0IiwicHJldkNvbnN0YW50cyIsInZlbG9jaXRpZXMiLCJlZGdlc0xvY3MiLCJweXJhbWlkIiwiYWxsUG9zaXRpb25zIiwiZWRnZXMiLCJjb25zdGFudHMiLCJyZXN1bHRQb3NpdGlvbnMiLCJyZXN1bHRWZWxvY2l0aWVzIiwicmVzdWx0QWxsUG9zaXRpb25zIiwiaXNVbnNpZ25lZEJ1ZmZlciIsIkdSSURfU0laRSIsIkdyYXBoIiwiX2FwcCIsIl9jb25zdGFudHMiLCJfbm9kZXMiLCJfZWRnZUNvdW50IiwiX25vZGVOYW1lVG9JZCIsIk1hcCIsIl9ydW5uaW5nIiwiX3Nob3VsZFVwZGF0ZSIsIl9zdGVwcyIsImZpbmRCb3VuZHMiLCJidWlsZEdyaWQiLCJidWlsZFB5cmFtaWQiLCJzaW11bGF0ZSIsImRyYXdOb2RlcyIsImRyYXdFZGdlcyIsIl9idWZmZXJzIiwiX3RleHR1cmVzIiwiY29uZmlndXJlIiwiY29uZmlnIiwiYXNzaWduIiwiYWRkTm9kZXMiLCJub2RlcyIsIm5leHRJZCIsInBvc2l0aW9uIiwid2VpZ2h0IiwicHVzaCIsIl9ydW4iLCJhZGRFZGdlcyIsInNvdXJjZUlkIiwiZ2V0IiwidGFyZ2V0SWQiLCJfcHJvZ3Jlc3MiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdXBkYXRlIiwiX3R1cm4iLCJlZGdlQ291bnQiLCJub2RlIiwiZWRnZSIsInBvc2l0aW9uc0EiLCJwb3NpdGlvbnNCIiwidmVsb2NpdGllc0EiLCJ2ZWxvY2l0aWVzQiIsInBvc1RleFNpemUiLCJzcXJ0IiwiYWxsUG9zaXRpb25zQSIsImFsbFBvc2l0aW9uc0IiLCJlZGdUZXhTaXplIiwic3RlcHMiXSwibWFwcGluZ3MiOiJBQXdsQkEsU0FBUyxjQUFjLENBQUMsSUFBSSxFQUFFO0VBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO0NBQ2xEOztBQzFsQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxDQUFDLFNBQVNBLGdDQUFULENBQTBDQyxJQUExQyxFQUFnREMsT0FBaEQsRUFBeUQ7TUFDdEQsT0FBT0MsT0FBUCxLQUFtQixRQUFuQixJQUErQixPQUFPQyxNQUFQLEtBQWtCLFFBQXBELEVBQ0NBLE9BQU9ELE9BQVAsR0FBaUJELFNBQWpCLENBREQsS0FFSyxJQUFHLE9BQU9HLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE9BQU9DLEdBQTFDLEVBQ0pELE9BQU8sRUFBUCxFQUFXSCxPQUFYLEVBREksS0FFQSxJQUFHLE9BQU9DLE9BQVAsS0FBbUIsUUFBdEIsRUFDSkEsUUFBUSxRQUFSLElBQW9CRCxTQUFwQixDQURJLEtBR0pE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
