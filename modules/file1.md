1. Node.js is a runtime environment for javascript.
2. Is Asyncronous
3. Is non-blocking


It is not a web-server.


# Why and where Node is Useful
1. Heavy I/O
2. Small code footprint

# Running js file in Node

-> Open Terminal and type 'node filename'

* In node every file is identified as a module. If we have to use that file we need to export it

## Use of modules

**This code is for lib.js**

```
exports.sum = (a,b) => {
    return a+b
}
```


__This code is for app.js__

``` 
const lib = require('./lib.js')
console.log(lib)

console.log(lib.sum(3,5)) 
```

# The FS Module

```
const fs = require('fs')

const txt = fs.readFileSync('demo.txt')
console.log(txt)

```

**Output**

```
    <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... 30700 more bytes>

```


```  
    // Mention Encoding

    const txt2 = fs.readFileSync('demo.txt','utf-8')
    console.log(txt2)

```

__Output__

```
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus diam arcu, vitae tempor mi fermentum et. Nulla imperdiet felis nec urna pulvinar elementum. Nullam rutrum vitae est non semper. Proin sit amet neque urna. Aenean vitae posuere ex, sit amet hendrerit quam. Ut aliquet est id ex elementum, non accumsan libero rhoncus. Pellentesque dui lorem, blandit venenatis venenatis et, lacinia ac purus. Sed vel velit sodales, maximus est a, dignissim arcu. Duis non condimentum diam, eu tincidunt enim. Aenean tincidunt convallis fermentum. Proin ut justo quis urna commodo ultrices ut eget lorem. Cras finibus enim eget ultricies euismod. Pellentesque nec arcu vehicula massa euismod pretium. Sed ac tortor urna. Integer sit amet enim ut nibh congue efficitur. Morbi bibendum tortor in risus placerat suscipit.

Integer dignissim luctus nulla et iaculis. Vivamus rhoncus aliquam fringilla. Pellentesque eget nisl sem. Morbi lorem orci, euismod ac ex at, tempus lobortis nibh. Etiam lobortis tortor augue, vitae laoreet tellus sollicitudin eget. Aliquam egestas ultricies mauris, auctor dignissim ligula consectetur quis. Nunc non lacus vitae justo tempus imperdiet non nec odio. Morbi tempor quam ut ipsum hendrerit, nec pretium diam bibendum. Phasellus nec faucibus quam. Donec auctor risus venenatis, sollicitudin ipsum id, posuere tortor. Donec commodo egestas massa vitae tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nam dapibus, turpis vitae placerat tempor, magna dui ultricies ante, a feugiat enim tortor ut leo. Mauris sed nunc pretium, aliquam ante id, efficitur turpis. Sed commodo pulvinar fermentum. Nam egestas magna venenatis mollis interdum. Vivamus aliquam risus accumsan, elementum nunc in, tempus nisl. Maecenas lacinia, sapien et sagittis mattis, magna purus fringilla urna, vitae volutpat felis lacus et lectus. Mauris interdum velit ut lacus efficitur, sit amet finibus velit eleifend. Donec lacinia ut metus quis sagittis. Duis maximus sodales justo pretium malesuada. Vivamus lacinia, justo non sodales lobortis, ex odio egestas lectus, lobortis iaculis lectus nunc tristique lacus.

Aenean nec sodales magna, sit amet ornare lorem. Cras semper posuere augue, nec malesuada ex ultrices in. Mauris cursus nisl id risus blandit, eu sodales quam vestibulum. Integer elementum libero in est faucibus, interdum egestas urna dictum. Vestibulum eget justo at neque fringilla elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas tincidunt molestie quam, nec consectetur justo fringilla eu. Maecenas non velit metus. Vestibulum consequat interdum porta. Aenean fringilla erat a sodales tempus. Curabitur in dictum lacus. Curabitur malesuada est nibh, a placerat urna tincidunt et. Praesent tincidunt nunc eu efficitur dictum.

Vivamus interdum tempor nunc facilisis blandit. Vestibulum ultrices tempus rutrum. Integer euismod nunc est, quis consequat justo pretium nec. Pellentesque dapibus dui et est luctus fermentum. Nunc ultricies tortor nec tortor blandit hendrerit. Aenean vitae dapibus dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tellus nisi, suscipit eu luctus a, volutpat quis velit. Nullam elementum feugiat enim, nec eleifend dui ultricies non. Fusce eu elit tincidunt, luctus nulla sed, aliquam ipsum. Maecenas non imperdiet urna. Praesent mollis magna arcu. Nullam sagittis mattis pharetra.

Ut vel auctor lacus, ultricies ullamcorper sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean eleifend ex erat, vel mollis odio laoreet sed. Fusce vitae enim aliquam, ullamcorper quam at, vehicula dui. In in vehicula nibh. Quisque ac neque lacus. In sagittis vel orci et auctor. Nam ultricies ornare rutrum.

Quisque ante velit, tempor et ullamcorper in, porttitor vel mi. Suspendisse ultricies neque neque, sed pharetra nibh dignissim a. Donec non felis id massa posuere congue. Donec aliquam convallis ullamcorper. Nunc dignissim purus sit amet gravida commodo. Praesent posuere, justo at tempus egestas, orci orci sagittis massa, a accumsan magna felis ac sem. Quisque sed vehicula metus. Sed pulvinar, erat sit amet consequat tincidunt, nibh metus viverra enim, sit amet pharetra mauris lectus quis diam. Donec gravida a dui nec vulputate. Nulla iaculis vel lorem non facilisis. Aliquam ut gravida elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam fermentum, nunc id placerat vulputate, sem velit elementum risus, non lacinia elit eros auctor orci. Morbi pulvinar sodales accumsan. Morbi odio ipsum, mattis eget lectus sit amet, sodales condimentum sapien.

Maecenas orci massa, luctus in massa ac, consequat ultrices eros. Cras dui massa, congue non metus sit amet, vulputate dictum erat. Aenean maximus, ex non pulvinar ultrices, purus tellus varius nisi, ac faucibus metus est vel ipsum. Curabitur odio magna, rhoncus sed lorem quis, ornare aliquet ligula. Sed tempor, nulla vel facilisis efficitur, risus lectus viverra lorem, porttitor mollis nulla arcu nec libero. Nam in diam pharetra, viverra tellus ut, posuere eros. Fusce mattis tellus vitae molestie accumsan. Proin porttitor nunc mattis, vehicula justo facilisis, laoreet turpis. Aliquam sollicitudin, lacus in posuere convallis, justo magna viverra mauris, sed congue dolor erat finibus ante. Vestibulum dictum sollicitudin leo, quis mattis nunc tristique eget.

Nullam in sagittis ipsum, et blandit felis. Vivamus molestie quis lorem quis dictum. Etiam augue enim, vulputate at volutpat et, gravida vitae tortor. Duis sodales nisi a ex auctor, vel sodales ex porta. Quisque eros ipsum, maximus nec tortor et, congue commodo mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tempus dignissim pretium. Aliquam nec ligula et eros scelerisque imperdiet. Cras ac rutrum eros.

Mauris lacinia, sapien sit amet condimentum consectetur, augue ipsum commodo nunc, eget maximus arcu dolor eu nulla. Curabitur ut lacus id purus ornare volutpat sed eu magna. Aenean interdum dignissim ante bibendum fringilla. Aenean ut elementum augue, ut accumsan tortor. Phasellus in libero eu ante consequat tempus vitae a sapien. Maecenas sollicitudin nibh urna, non sollicitudin justo aliquet sed. Integer rhoncus rutrum orci id feugiat. Pellentesque quis purus elit. Nulla varius, dui et tempus ullamcorper, tortor sapien tristique nunc, ac iaculis ligula nisi at enim. Etiam a cursus quam. Nam laoreet augue ut nunc porta, ut accumsan magna finibus. Pellentesque quis nisi id mauris blandit convallis. Quisque in varius eros. Nullam libero turpis, sagittis et est vitae, facilisis ornare elit. Phasellus laoreet commodo nisi, in suscipit dui lacinia in. Mauris eget eleifend ante, in tristique felis.

Integer mauris orci, egestas non convallis et, cursus nec nibh. Proin massa libero, aliquet nec nibh finibus, fringilla pulvinar arcu. Nam placerat est elementum sodales faucibus. In hac habitasse platea dictumst. In viverra a tellus eu pretium. Phasellus egestas lacus sed dui dictum pulvinar. Phasellus eget ipsum tellus. Proin suscipit scelerisque nulla, quis ornare velit consequat quis. Sed placerat et nulla vitae efficitur. Aliquam et blandit nibh. Proin efficitur, augue non tempus egestas, dui est tristique felis, vel facilisis ex metus ac elit. Cras convallis feugiat arcu ac faucibus. Donec dictum augue quis aliquet eleifend. Proin viverra imperdiet mi. Maecenas vitae mauris arcu. Sed semper felis eget faucibus finibus.

Nunc leo arcu, pellentesque at massa id, fringilla egestas ligula. Ut ut leo eu lacus vehicula eleifend. Maecenas rhoncus tempor elementum. Donec vehicula metus placerat auctor hendrerit. Aliquam condimentum est a leo laoreet, vitae blandit magna dictum. Mauris feugiat elit at interdum ullamcorper. Donec tempor at sapien nec consectetur. Integer commodo laoreet aliquam. Donec nec ex orci. Pellentesque vestibulum facilisis eros, vitae maximus lectus interdum nec. Aenean congue nibh ac diam dictum, eget posuere lacus scelerisque. Fusce id luctus nibh. Vestibulum eu lacus nec nisi feugiat tincidunt non in augue. Integer sodales finibus ex, id ultricies odio mollis nec. Duis et nisi eros.

Phasellus eget ligula libero. Aenean eget enim ultricies, consequat augue vel, placerat diam. Vivamus eget metus ut ante efficitur dignissim. Donec tincidunt nec nulla sit amet eleifend. Nulla fermentum magna viverra, interdum odio et, maximus arcu. Donec euismod rutrum enim, in aliquam metus suscipit eu. In dapibus fringilla tellus, in elementum sem pharetra ullamcorper. Cras nec odio et nulla euismod blandit id id urna. Ut scelerisque euismod metus, vel elementum ligula facilisis pharetra. Proin a sapien non nisl euismod varius.

Proin tempor dapibus nunc, at imperdiet magna venenatis ut. Ut sodales venenatis enim blandit venenatis. Mauris justo leo, placerat quis nisi vel, efficitur consequat urna. Vivamus eget neque maximus, varius libero ut, consectetur felis. Aliquam commodo diam ultricies magna cursus ultrices. Suspendisse at consectetur tortor. Donec elementum maximus massa, sit amet vestibulum urna sodales ac. Nunc libero elit, consequat sed tempor in, sollicitudin et tortor. Phasellus ultricies risus nisi, eget lacinia nibh congue quis.

```