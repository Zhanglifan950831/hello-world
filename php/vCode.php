<?php
	header("Content-type:image/png");
	class Code{
		private $width;
		private $height;
		function __construct($width,$height){
			$this->width=$width;
			$this->height=$height;
		}
		function CreateCodeArr(){
			for($i=0,$arrCode=[];$i<10;$i++)
			{
				array_push($arrCode, $i);
			}
			for ($i=65;$i<=90;$i++) 
			{ 
				array_push($arrCode, chr($i));
			}
			for($i=97;$i<=122;$i++)
			{
				array_push($arrCode, chr($i));
			}
			return $arrCode;
		}
		function createImage(){
			$arrCode=$this->CreateCodeArr();
			for($i=0,$str='';$i<4;$i++)
			{
				$rand=rand(0,count($arrCode)-1);
				$str.=$arrCode[$rand];
			}
			session_start();
			$_SESSION['code']=$str;
			// imagettftext(image, size, angle, x, y, color, fontfile, text)
			/*创建图片*/
			$img=imagecreate($this->width, $this->height);
			/*设置背景色*/
			$back=imagecolorallocate($img, 255, 255, 255);
			//模糊点颜色 
			$pix=imagecolorallocate($img,0,0,0); 
			//字体色 
			$font=imagecolorallocate($img,255,0,0);
			/*设置模糊点位置*/
			for($i=0;$i<100;$i++)
			{
				imagesetpixel($img, rand(0,$this->width), rand(0,$this->height), $pix);
			}
			imagestring($img, 30, 20, 10, $str, $font);
			imagepng($img);
			imagedestroy($img);
		}
	}
	$code=new Code(80,40);
	$code->createImage();
?>