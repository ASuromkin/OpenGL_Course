#version 330 core
out vec4 FragColor;

in vec2 TexCoords;

uniform sampler2D texture1;

float zNear = 0.1;
float zFar  = 100.0;

float LinearizeDepth(float depth)
{
    // преобразуем обратно в NDC
    float z = depth * 2.0 - 1.0;
    return (2.0 * zNear * zFar) / (zFar + zNear - z * (zFar - zNear));
}


void main()
{
    float depth = LinearizeDepth(gl_FragCoord.z) / zFar;
    FragColor = vec4(vec3(depth),1.0) + texture(texture1, TexCoords);
}
